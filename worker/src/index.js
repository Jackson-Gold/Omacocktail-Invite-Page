const jsonHeaders = (origin = "*") => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json; charset=utf-8"
});

const json = (payload, status = 200, origin = "*") =>
  new Response(JSON.stringify(payload), {
    status,
    headers: jsonHeaders(origin)
  });

const clean = (value, maxLength = 120) =>
  (typeof value === "string" ? value.trim().slice(0, maxLength) : "");

const encodeBase64 = (text) => {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
};

const encodePath = (path) =>
  path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

const normalizeOrigin = (value) => {
  const cleaned = typeof value === "string" ? value.trim() : "";
  if (!cleaned || cleaned === "*") {
    return cleaned;
  }

  try {
    return new URL(cleaned).origin;
  } catch {
    return cleaned.replace(/\/+$/, "");
  }
};

const allowOrigin = (requestOrigin, env) => {
  const allowedOrigin = normalizeOrigin(env.ALLOWED_ORIGIN);
  if (!allowedOrigin || allowedOrigin === "*") {
    return "*";
  }

  return requestOrigin === allowedOrigin ? requestOrigin : "";
};

export default {
  async fetch(request, env) {
    const requestOrigin = request.headers.get("Origin") || "";
    const origin = allowOrigin(requestOrigin, env);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: jsonHeaders(origin || "*")
      });
    }

    const url = new URL(request.url);
    if (request.method !== "POST" || url.pathname !== "/submit") {
      return json({ error: "Not found" }, 404, origin || "*");
    }

    if (env.ALLOWED_ORIGIN && env.ALLOWED_ORIGIN !== "*" && !origin) {
      return json({ error: "Origin not allowed" }, 403, requestOrigin || "*");
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: "Invalid JSON body" }, 400, origin || "*");
    }

    const name = clean(payload.name, 80);
    const alias = clean(payload.alias, 80);
    const avatarKey = clean(payload.avatarKey, 40);
    const attending = clean(payload.attending, 24);

    if (!name || !alias || !avatarKey || !["attending", "not-attending"].includes(attending)) {
      return json({ error: "Missing or invalid RSVP fields" }, 400, origin || "*");
    }

    const submittedAt = new Date().toISOString();
    const fileName = `entry-${Date.now()}-${crypto.randomUUID().slice(0, 8)}.json`;
    const filePath = `${env.RSVP_PATH_PREFIX || ".github/rsvps/submissions"}/${fileName}`;
    const content = JSON.stringify(
      {
        name,
        alias,
        avatarKey,
        attending,
        submittedAt
      },
      null,
      2
    ) + "\n";

    const githubUrl = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${encodePath(filePath)}`;
    const response = await fetch(githubUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": "forbidden-orchard-rsvp-worker",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      body: JSON.stringify({
        message: `Add RSVP for ${name}`,
        content: encodeBase64(content),
        branch: env.GITHUB_BRANCH || "main"
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return json(
        {
          error: "GitHub write failed",
          details: errorText
        },
        502,
        origin || "*"
      );
    }

    return json(
      {
        ok: true,
        path: filePath,
        submittedAt
      },
      200,
      origin || "*"
    );
  }
};

import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const submissionsDir = path.join(root, ".github", "rsvps", "submissions");
const publicAttendeesPath = path.join(root, "data", "public-attendees.json");
const guestLogPath = path.join(root, ".github", "rsvps", "guest-log.json");

const readSubmissionFiles = async () => {
  try {
    const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
      .map((entry) => path.join(submissionsDir, entry.name));
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
};

const cleanString = (value) => (typeof value === "string" ? value.trim() : "");

const normalizeSubmittedAt = (value, fallback) => {
  const cleaned = cleanString(value);

  if (!cleaned) {
    return fallback;
  }

  if (/^\d+$/.test(cleaned)) {
    return new Date(Number(cleaned) * 1000).toISOString();
  }

  const parsed = new Date(cleaned);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString();
  }

  return fallback;
};

const parseSubmission = async (filePath) => {
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);
  const source = parsed.fields && typeof parsed.fields === "object" ? parsed.fields : parsed;
  const stats = await fs.stat(filePath);

  const name = cleanString(source.name);
  const alias = cleanString(source.alias);
  const avatarKey = cleanString(source.avatarKey);
  const attending = cleanString(source.attending);
  const submittedAt = normalizeSubmittedAt(
    cleanString(source.submittedAt) || cleanString(parsed.submittedAt),
    stats.mtime.toISOString()
  );

  if (!name || !alias || !avatarKey || !attending) {
    return null;
  }

  return {
    name,
    alias,
    avatarKey,
    attending,
    submittedAt,
    file: path.relative(root, filePath)
  };
};

const writeJson = async (targetPath, payload) => {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, JSON.stringify(payload, null, 2) + "\n", "utf8");
};

const main = async () => {
  const files = await readSubmissionFiles();
  const parsed = await Promise.all(files.map(parseSubmission));
  const allGuests = parsed
    .filter(Boolean)
    .sort((left, right) => new Date(right.submittedAt).getTime() - new Date(left.submittedAt).getTime());

  const latestByName = new Map();
  allGuests.forEach((guest) => {
    const key = guest.name.toLowerCase();
    if (!latestByName.has(key)) {
      latestByName.set(key, guest);
    }
  });

  const latestGuests = Array.from(latestByName.values()).sort(
    (left, right) => new Date(right.submittedAt).getTime() - new Date(left.submittedAt).getTime()
  );

  const confirmedGuests = latestGuests.filter((guest) => guest.attending === "attending");

  const publicAttendees = {
    updatedAt: new Date().toISOString(),
    count: confirmedGuests.length,
    attendees: confirmedGuests.map(({ alias, avatarKey, attending, submittedAt }) => ({
      alias,
      avatarKey,
      attending,
      submittedAt
    }))
  };

  const guestLog = {
    updatedAt: new Date().toISOString(),
    count: latestGuests.length,
    guests: latestGuests
  };

  await Promise.all([writeJson(publicAttendeesPath, publicAttendees), writeJson(guestLogPath, guestLog)]);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

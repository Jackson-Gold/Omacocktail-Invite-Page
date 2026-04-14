# Forbidden Orchard RSVP Notes

This site stays on GitHub Pages. Live RSVPs are written into repository files through a small Cloudflare Worker.

## What Gets Written Where

- Raw RSVP submissions land in `.github/rsvps/submissions/`.
- The host-facing guest log with real names is refreshed into `.github/rsvps/guest-log.json`.

## Current Frontend Behavior

- The page no longer depends on any public attendee list or live attendee count.
- Guests enter their real name, choose an attendance status, generate a fruit alias, and submit.
- The submit button stays disabled until `site-config.js` points to a real Worker URL.

## Minimum Setup To Make Live RSVPs Work

1. Push this project to GitHub on the `main` branch.
2. In GitHub Pages settings, set the publishing source to `GitHub Actions`.
3. Deploy the Worker in `worker/` to Cloudflare Workers.
4. Set the Worker URL in `site-config.js` `rsvp.backend.entryUrl`.
5. Let the included GitHub Actions do two jobs:
   - `Deploy Site` publishes the static invite.
   - `Sync RSVP Data` rebuilds the host log after each new submission file lands in the repo.

## Important Privacy Note

Real guest names are intentionally saved into repo files because that is what this RSVP flow is designed to do. If the repository is public, those names are not private on GitHub.

# Forbidden Orchard RSVP Notes

This site is still GitHub Pages-friendly, but live RSVP storage now assumes a minimal Staticman setup so guest submissions can become files in the repository.

## What Gets Written Where

- Public attendee wall data is generated into `data/public-attendees.json`.
- The host-facing guest log with real names is generated into `.github/rsvps/guest-log.json`.
- Raw submissions land in `.github/rsvps/submissions/`.

## Minimum Setup To Make Live RSVPs Work

1. Push this project to GitHub on the `main` branch.
2. In GitHub Pages settings, set the publishing source to `GitHub Actions`.
3. Run a Staticman instance and point `site-config.js` `rsvp.backend.entryUrl` at its entry endpoint.
4. Keep `staticman.yml` in the repo root so Staticman knows which fields to accept and where to write submission files.
5. Let the included GitHub Actions do two jobs:
   - `Deploy Site` publishes the static invite.
   - `Sync RSVP Data` rebuilds the public attendee wall and guest log after each new submission, then redeploys the site.

## Important Privacy Note

Real guest names are intentionally saved into repo files because that is what this RSVP flow is designed to do. If the repository is public, those names are not private on GitHub.

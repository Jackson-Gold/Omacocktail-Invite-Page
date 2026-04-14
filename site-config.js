const siteConfig = {
  page: {
    title: "The Orchard Opens | OMA Invite",
    description: "A velvet-dark cocktail invitation dressed in fig skin, pomegranate glow, and midnight candlelight.",
    socialTitle: "The Orchard Opens | OMA Invite",
    socialDescription: "Slip past the leaves and into a forbidden orchard of fruit, smoke, and candlelight.",
    socialImage: "assets/forbidden-orchard-preview.svg",
    socialImageAlt: "A dark invite card glowing with fig and pomegranate tones.",
    siteName: "OMA Invite"
  },
  hero: {
    eyebrow: "A Midnight Summons",
    title: "The Orchard",
    subtitle: "Opens After Dark",
    lead: "Slip past the leaves. Follow the bruised glow of fig skin and split pomegranate. A table is waiting.",
    hostLine: "Hosted by OMA",
    primaryCta: "Reveal the night",
    primaryHref: "#details",
    secondaryCta: "RSVP now",
    secondaryHref: "#rsvp"
  },
  reveal: {
    kicker: "Unseal The Clues",
    heading: "Three hints before the gate swings wide.",
    intro: "Three clues. No explanations.",
    lines: [
      "When the moon turns plum above the city, the first glass will be poured.",
      "Look for candlelight, lacquered fruit, and a room perfumed with fig leaf and smoke.",
      "Come dressed for a beautiful secret and stay until the last seed gleams."
    ]
  },
  details: {
    kicker: "The Coordinates",
    heading: "The essentials, once the mist clears.",
    intro: "Swap these placeholders for the real date, time, and location when you're ready.",
    facts: [
      {
        label: "Occasion",
        value: "Forbidden Fruit Omacocktail Evening",
        note: "An intimate invite-only gathering."
      },
      {
        label: "Date",
        value: "Tuesday, April 14",
        note: "Placeholder date for the first draft."
      },
      {
        label: "Time",
        value: "7:00 PM until 9:00 PM",
        note: "Golden hour fades, then the candles take over."
      },
      {
        label: "Location",
        value: "239 South 41st",
        note: "Your orchard oasis"
      }
    ],
    note: "Arrive on time. The door may not wait."
  },
  rsvp: {
    kicker: "Whisper Your Name",
    heading: "Choose a fruit shadow and answer the orchard.",
    body: "Give your true name. Choose the fruit shadow that feels like yours.",
    nameLabel: "Your real name",
    namePlaceholder: "Enter your name",
    attendingLegend: "Will you enter the orchard?",
    aliasHeading: "Choose a fruit pseudonym",
    aliasIntro: "Three names appear at once. Choose one and let the rest vanish.",
    regenerateLabel: "New names",
    helper: "Your name and chosen alias are stored in the repo RSVP log for the host.",
    submitLabel: "Send RSVP",
    deadline: "RSVP before the candles are lit.",
    backendNote: "Once live, each RSVP is written into the repo as its own JSON file, and the host log is refreshed automatically.",
    backendMissingMessage: "Live saving is not enabled yet. Add your Cloudflare Worker URL in site-config.js to make this form write RSVP files into the repo.",
    validationMessage: "Add your name, choose your attendance, and select a fruit alias first.",
    submittingMessage: "Sending your RSVP into the orchard...",
    successMessage: "Your RSVP was saved. The host log file in the repo will update after the sync workflow runs.",
    errorMessage: "The orchard could not write your RSVP. Check the Worker URL and repo setup, then try again.",
    defaultAttending: "attending",
    attendingOptions: [
      {
        value: "attending",
        label: "Yes, I will be there",
        description: "Count me beneath the candlelight."
      },
      {
        value: "not-attending",
        label: "I cannot make it",
        description: "Not this harvest."
      }
    ],
    backend: {
      entryUrl: "https://omacocktail.workers.dev/submit",
      adminLogPath: ".github/rsvps/guest-log.json"
    }
  },
  aliasGenerator: {
    adjectives: [
      "Velvet",
      "Midnight",
      "Gilded",
      "Shadow",
      "Cinder",
      "Lunar",
      "Blackglass",
      "Thorned",
      "Silken",
      "Ember",
      "Bruised",
      "Secret"
    ],
    fruits: [
      { key: "fig", label: "Fig" },
      { key: "pomegranate", label: "Pomegranate" },
      { key: "plum", label: "Plum" },
      { key: "blackberry", label: "Blackberry" },
      { key: "blood-orange", label: "Blood Orange" },
      { key: "cherry", label: "Cherry" },
      { key: "mulberry", label: "Mulberry" },
      { key: "quince", label: "Quince" }
    ]
  },
  footer: {
    note: "Built for GitHub Pages. Live RSVPs are written into repo files through a small Worker once the endpoint is configured."
  }
};

window.siteConfig = siteConfig;

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
    guide: [
      "Read the invitation",
      "Choose a fruit alias",
      "Confirm your attendance"
    ],
    primaryCta: "How this works",
    primaryHref: "#how-it-works",
    secondaryCta: "RSVP now",
    secondaryHref: "#rsvp"
  },
  journey: {
    kicker: "How To Enter",
    heading: "A clear path through the orchard.",
    intro: "This invite has a mood, but it should still be easy to use.",
    steps: [
      {
        title: "Read",
        body: "Start with the clues and event details so you know what kind of night you are stepping into."
      },
      {
        title: "Name",
        body: "Enter your real name once so the host can identify you in the repo-side RSVP log."
      },
      {
        title: "Alias",
        body: "Generate a fruit pseudonym and choose the one you want other guests to see on the attendee wall."
      },
      {
        title: "Confirm",
        body: "Choose yes, maybe, or no. Only confirmed guests are shown publicly on the site."
      }
    ]
  },
  reveal: {
    kicker: "Unseal The Clues",
    heading: "Three hints before the gate swings wide.",
    intro: "Each touch draws the night a little closer.",
    buttonLabels: ["Unseal the first clue", "Draw out the second clue", "Reveal the final clue"],
    completedLabel: "The invitation is open",
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
        value: "Forbidden Orchard Cocktail Night",
        note: "An intimate invite-only gathering."
      },
      {
        label: "Date",
        value: "Saturday, September 26",
        note: "Placeholder date for the first draft."
      },
      {
        label: "Time",
        value: "8:30 PM until late",
        note: "Golden hour fades, then the candles take over."
      },
      {
        label: "Location",
        value: "A hidden room in Brooklyn",
        note: "Replace with the venue name and address."
      }
    ],
    note: "Want the location to stay elusive? Keep the venue poetic here and send the exact address later to confirmed guests."
  },
  rsvp: {
    kicker: "Whisper Your Name",
    heading: "Choose a fruit shadow and answer the orchard.",
    body: "Offer your real name to the keeper, then step into the guest list under a fruit pseudonym.",
    nameLabel: "Your real name",
    namePlaceholder: "Enter your name",
    attendingLegend: "Will the orchard see you there?",
    aliasHeading: "Choose a fruit pseudonym",
    aliasIntro: "We generate three names at a time. Only your chosen alias appears publicly on the site.",
    regenerateLabel: "Summon fresh aliases",
    helper: "Your real name is stored in the repo-side RSVP log for the host. Only confirmed aliases appear publicly on the page.",
    submitLabel: "Send RSVP into the orchard",
    deadline: "Placeholder RSVP deadline: September 18",
    backendNote: "Once live, the guest wall refreshes after the RSVP file lands in the repo and GitHub Pages redeploys.",
    attendeeKicker: "Seen In The Orchard",
    attendeeHeading: "Fruit names already whispering back.",
    attendeeBody: "This wall only shows confirmed fruit pseudonyms who said yes to the invitation.",
    attendeeEmpty: "No confirmed aliases have bloomed yet. Yours could be the first.",
    loadingMessage: "Listening for the orchard roll call...",
    backendMissingMessage: "Live saving is not enabled yet. Add your Staticman entry URL in site-config.js to make this form write RSVP files into the repo.",
    validationMessage: "Add your name, choose your attendance, and select a fruit alias first.",
    submittingMessage: "Sending your RSVP into the orchard...",
    successMessage: "Your RSVP was sent. The public alias wall updates after the repo sync finishes.",
    errorMessage: "The orchard could not write your RSVP. Check the Staticman URL and repo setup, then try again.",
    defaultAttending: "attending",
    attendingOptions: [
      {
        value: "attending",
        label: "Yes, I will be there",
        description: "Count me beneath the candlelight.",
        publicLabel: "Confirmed"
      },
      {
        value: "maybe",
        label: "Maybe",
        description: "The orchard may yet tempt me.",
        publicLabel: "Maybe"
      },
      {
        value: "not-attending",
        label: "I cannot make it",
        description: "Not this harvest.",
        publicLabel: "Unable"
      }
    ],
    backend: {
      entryUrl: "https://YOUR-STATICMAN-INSTANCE/v3/entry/github/YOUR-OWNER/YOUR-REPO/main/rsvps",
      publicAttendeesPath: "data/public-attendees.json",
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
    note: "Built for GitHub Pages. Live RSVPs are written into repo files via Staticman once the endpoint is configured."
  }
};

window.siteConfig = siteConfig;

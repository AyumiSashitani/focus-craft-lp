import type { Dict } from "../types";

const en: Dict = {
  meta: {
    title: "Focus Craft — Focus that adds up.",
    description:
      "A calm Pomodoro timer that never rushes you. The more you focus, the more your companion and your workspace grow.",
    ogLocale: "en_US",
    twDescription:
      "A cozy Pomodoro timer you grow together with your companion.",
  },
  hero: {
    title: [{ honey: "Focus" }, " that adds up."],
    subtitle: [
      "A calm Pomodoro rhythm that never rushes you. ",
      { br: "desktop" },
      "The more you focus, the more your companion and workspace grow.",
    ],
    timerAlt:
      "Focus Craft timer screen — a nighttime workroom with your companion and a 25-minute timer",
  },
  showcaseSection: {
    eyebrow: "Inside the app",
    title: ["The more you do, ", { honey: "the more it grows." }],
    items: [
      {
        alt: "The grow screen — level, companion, and daily quests",
        kicker: "Your companion & workshop grow",
        title: [
          "The more you focus, ",
          "the more your companion and workshop grow.",
        ],
        body: "Every session you finish turns into XP and coins, and your companion and workspace slowly flourish. Your reward isn't a cold number.",
        points: [
          "Your companion grows through 5 stages, your room through 8",
          "It starts as a “mysterious being” — meet it in the app",
          "Daily quests gently nudge today's first step",
        ],
      },
      {
        alt: "Stats screen — calendar, heatmap, and streaks",
        kicker: "Your effort stays",
        title: ["The days you kept going ", { honey: "truly stay." }],
        body: "Calendar, heatmap, and streaks let your focus take on color over time. Not to push you, but to look back on yourself kindly.",
        points: [
          "See each day's focus at a glance on the heatmap",
          "Streaks keep the “tomorrow too” going",
          "Total sessions and hours are all recorded",
        ],
      },
    ],
  },
  env: {
    eyebrow: "A change of scene",
    title: ["Change your world ", { honey: "to match the day." }],
    desc: [
      "The “outside world” of your focus room is yours — sunsets, the sea, auroras, starfields, and more. ",
      "Weather (clear, rain, snow) and wall colors grow little by little as you focus, too.",
    ],
    labels: [
      "Sunset",
      "Forest noon",
      "Deep sea",
      "Aurora",
      "Starry sky",
      "Neon",
      "Warmth",
    ],
    altTemplate: "A focus room set against a {label} view",
  },
  perks: {
    eyebrow: "Four things we care about",
    title: ["Make your focus time ", { honey: "a little warmer." }],
    desc: [
      "More than a pile of features, ",
      "what matters is whether it feels good to open every day. ",
      "That's our only measure.",
    ],
    items: [
      {
        title: "Time-based, never drifts",
        body: "Send it to the background and it's exact the moment you return. Built to not fight the OS.",
      },
      {
        title: "Deep focus with ambient sound",
        body: "Rain, café, campfire, Lo-Fi. Slip into focus with the sound you love.",
      },
      {
        title: "Notifications that stay gentle",
        body: "A greeting for the hour, a welcome back. Never rushing, never blaming.",
      },
      {
        title: "Your reward is a cozy room",
        body: "Not a cold number, but your very own workspace that grows bit by bit.",
      },
    ],
  },
  steps: {
    eyebrow: "Getting started",
    title: ["It's ", { honey: "simple to use." }],
    items: [
      {
        title: "Pick a length",
        body: "Just choose one of the 15 / 25 / 45 / 90-minute presets.",
      },
      {
        title: "Focus",
        body: "Play an ambient sound and gently start the timer.",
      },
      {
        title: "Grow",
        body: "Every time you finish, a record remains and your companion and room grow.",
      },
    ],
  },
  cta: {
    title: ["Now on ", { honey: "the App Store." }],
    body: [
      "Download it today and start focusing with your companion. ",
      { br: "desktop" },
      "The Google Play version is on its way, too.",
    ],
  },
  footer: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
  },
  iconAlt: "Focus Craft",
};

export default en;

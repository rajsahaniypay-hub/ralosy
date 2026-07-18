export type Product = {
  id: string;
  title: string;
  subtitle?: string;
  tagline: string;
  href: string;
  domain: string;
  accent: "cyan" | "emerald" | "violet" | "amber";
  size: "lg" | "md";
  mission: string;
  points: string[];
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  upcoming?: boolean;
  showSuggestion?: boolean;
  flowSteps?: string[];
  meta?: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "satark",
    title: "Satark",
    subtitle: "Operated by Satark India Private Limited",
    tagline: "Free, no-login scam-message checker for Indian citizens.",
    href: "https://satark.ralosy.com",
    domain: "satark.ralosy.com",
    accent: "cyan",
    size: "lg",
    mission:
      "Prevent financial loss from digital-arrest scams, fake KYC calls, task/job frauds, and phishing with a 5-second plain-language answer.",
    points: [
      "Paste SMS, WhatsApp texts, emails, or phone numbers",
      "Client-side heuristic engine vs 45+ Indian scam patterns",
      "Verdicts: Safe / Suspicious / Scam",
      "No accounts — phone numbers use encrypted hashes",
      "Routes to cybercrime.gov.in, 1930, and Sanchar Saathi",
      "Community feed of verified scams",
    ],
  },
  {
    id: "kaksha",
    title: "Kaksha",
    tagline: "All-in-one educational management for India.",
    href: "https://kaksha.ralosy.com",
    domain: "kaksha.ralosy.com",
    accent: "emerald",
    size: "lg",
    mission:
      "Streamline daily ops for tuition centers, coaching institutes, and schools — attendance, fees, exams, and timetables.",
    points: [
      "Built for India with robust data isolation",
      "Direct Razorpay — 100% fees to the center, 0% commission",
      "Secure student portal for marks, attendance, homework",
      "No forced app download",
      "Public directory for verified centers",
    ],
  },
  {
    id: "link",
    title: "Ralosy Link",
    subtitle: "Alexa automation bridge · help@ralosy.com",
    tagline:
      "A bridge between your Echo / Alexa account and the rest of your world: webhooks, Home Assistant, IFTTT, APIs, schedules, and scripts.",
    href: "https://link.ralosy.com",
    domain: "link.ralosy.com",
    accent: "violet",
    size: "lg",
    ctaLabel: "Open Link",
    secondaryHref: "https://link.ralosy.com/console",
    secondaryLabel: "Open Console",
    mission:
      "Trigger Alexa routines, virtual doorbells, contact sensors, and announcements from anywhere — one GET/POST is enough. Sign in with Amazon; Ralosy Link never stores your password.",
    points: [
      "Virtual Alexa devices: doorbell, contact sensor, speaker / TTS",
      "Trigger from HTTP URLs, webhooks, Home Assistant, IFTTT, curl",
      "Announcements via /announce — Echo speaks through Routines",
      "Flows, cron schedules, variables, media & API playground",
      "Devices appear in the Alexa app after skill linking",
      "Secure, revocable API tokens with activity logging",
    ],
    flowSteps: [
      "App / Home Assistant / webhook",
      "link.ralosy.com",
      "AWS Lambda → Alexa skill",
      "Your Echo / Alexa app",
    ],
    meta: [
      { label: "Login", value: "Sign in with Amazon" },
      { label: "Console", value: "link.ralosy.com/console" },
      { label: "Support", value: "help@ralosy.com" },
    ],
  },
  {
    id: "indianow",
    title: "IndiaNow",
    tagline: "Civic empowerment platform — coming soon.",
    href: "https://indianow.ralosy.com",
    domain: "indianow.ralosy.com / improveindia.ralosy.com",
    accent: "amber",
    size: "md",
    upcoming: true,
    showSuggestion: true,
    mission:
      "Upload images of government and civic flaws — police without helmets, potholes, broken roads — by selecting clear categories.",
    points: [
      "Category-based civic reporting",
      "Public accountability through visibility",
      "Help shape the final domain and features",
    ],
  },
];

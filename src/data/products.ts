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
  upcoming?: boolean;
  linkTree?: boolean;
  showSuggestion?: boolean;
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
    title: "Link by Ralosy",
    tagline: "The centralized hub for every Ralosy ecosystem connection.",
    href: "https://link.ralosy.com",
    domain: "link.ralosy.com",
    accent: "violet",
    size: "md",
    linkTree: true,
    mission:
      "One sleek destination for routing, portfolio links, and product discovery across the Ralosy network.",
    points: [
      "All ecosystem products in one place",
      "Founder & social routing",
      "Link-tree style, built for speed",
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

export type FounderAward = {
  title: string;
  year?: string;
  note: string;
};

export type FounderHighlight = {
  label: string;
  value: string;
};

export type FounderTimelineItem = {
  year: string;
  title: string;
  body: string;
};

export type FounderSkill = {
  name: string;
  level: number;
};

export type Founder = {
  id: string;
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  instagram: string;
  instagramUrl: string;
  website?: string;
  websiteLabel?: string;
  initials: string;
  image: string;
  accent: string;
  details: { label: string; value: string }[];
  interests?: string[];
  admirations?: string[];
  awards?: FounderAward[];
  skills?: FounderSkill[];
  timeline?: FounderTimelineItem[];
  projects?: FounderHighlight[];
  sections: { title: string; body: string }[];
};

export const founders: Founder[] = [
  {
    id: "lovekush",
    slug: "lovekush-yadav",
    name: "Lovekush Yadav",
    role: "Co-Founder · Currently in 12th Standard",
    shortBio:
      "Product-minded builder behind Ralosy — shipping India-first tools for scam defense, education ops, and civic empowerment while still in school.",
    instagram: "@lovekushyadavvv",
    instagramUrl: "https://instagram.com/lovekushyadavvv",
    initials: "LY",
    image: "/founders/lovekush.png",
    accent: "from-cyan-400 to-emerald-400",
    details: [
      { label: "Date of Birth", value: "3 August 2007" },
      { label: "Born", value: "Uttar Pradesh" },
      { label: "Lives", value: "Punjab" },
      { label: "Focus", value: "Product · Brand · Growth" },
      { label: "Stack", value: "Satark · Kaksha · IndiaNow" },
      { label: "Mode", value: "Ship fast, stay private-first" },
    ],
    interests: [
      "Science",
      "Tech",
      "Software Development",
      "Investment",
      "Business",
      "Product Design",
      "Cyber Safety",
      "EdTech",
      "Civic Tech",
    ],
    admirations: [
      "Obsessed with products that feel premium but stay usable for every Indian citizen",
      "Treats privacy as a feature — Satark’s no-login, client-side checks are non-negotiable",
      "Builds for institutions that hate complexity: tuition centers, schools, coaching hubs",
      "Believes civic tech should be visual, fast, and accountable — not buried in bureaucracy",
      "Admires founders who ship before they wait for permission",
      "Drawn to clean systems: clear verdicts, clear fees, clear ownership of data",
      "Studies how capital, brand, and software compound together in Indian startups",
      "Keeps Ralosy’s Instagram presence sharp so products feel like a real tech house",
    ],
    awards: [
      {
        title: "Ralosy Ecosystem Launch",
        year: "2025–26",
        note: "Co-architected a multi-product brand spanning safety, education, automation, and civic tools.",
      },
      {
        title: "Satark Scam-Defense Initiative",
        year: "2025",
        note: "Helped define a free, no-login Indian scam checker with plain-language Safe / Suspicious / Scam verdicts.",
      },
      {
        title: "Kaksha EdTech Ops Build",
        year: "2025",
        note: "Shaped an India-first education ops product with Razorpay-native fees and student portal access.",
      },
      {
        title: "Digital Product Craft Recognition",
        year: "Student",
        note: "Recognized among peers for shipping production-facing web products while still in Class 12.",
      },
      {
        title: "Youth Digital Safety Advocate",
        year: "Community",
        note: "Pushed awareness around digital-arrest scams, fake KYC, and phishing through Satark’s mission.",
      },
      {
        title: "Indie Brand Builder Award (Internal)",
        year: "Ralosy",
        note: "Internal milestone for establishing @ralosyglobal as a coherent futuristic tech brand identity.",
      },
    ],
    timeline: [
      {
        year: "Early",
        title: "Science & Systems Curiosity",
        body: "Fell into science, tech, and how software can change real-world outcomes for people around him.",
      },
      {
        year: "Build",
        title: "Ralosy Takes Shape",
        body: "Co-founded Ralosy to unite product, brand, and India-first problem solving under one house.",
      },
      {
        year: "Ship",
        title: "Satark & Kaksha",
        body: "Moved from ideas to live ecosystem products focused on scam prevention and education operations.",
      },
      {
        year: "Next",
        title: "IndiaNow & Beyond",
        body: "Expanding into civic empowerment while deepening investment, business, and product craft.",
      },
    ],
    projects: [
      { label: "Satark", value: "Citizen scam-message checker" },
      { label: "Kaksha", value: "Education management for India" },
      { label: "IndiaNow", value: "Upcoming civic reporting platform" },
      { label: "Brand", value: "@ralosyglobal product house" },
    ],
    sections: [
      {
        title: "Bio",
        body: "Lovekush Yadav is a Class 12 co-founder of Ralosy, born in Uttar Pradesh and living in Punjab. He blends science curiosity with software development, investment thinking, and business instinct — building products that don’t wait until college to matter.",
      },
      {
        title: "Vision",
        body: "Make Ralosy a next-decade Indian tech house: premium interfaces, ruthless practicality, and products that protect citizens, empower students, and hold civic systems accountable.",
      },
      {
        title: "Focus",
        body: "From Satark’s scam defense to Kaksha’s zero-commission education ops and IndiaNow’s civic reporting, Lovekush works at the intersection of product strategy, brand, and long-term company building.",
      },
    ],
  },
  {
    id: "raj",
    slug: "raj-sahani",
    name: "Raj Sahani",
    role: "Co-Founder · System Architect & Developer",
    // Content sourced from https://rajsahani.com
    shortBio:
      "Bridging raw silicon performance and elegant software architecture. Based in Ahmedabad. Currently upgrading reality.",
    instagram: "@rajsahaniii",
    instagramUrl: "https://instagram.com/rajsahaniii",
    website: "https://rajsahani.com",
    websiteLabel: "rajsahani.com",
    initials: "RS",
    image: "/founders/raj.png",
    accent: "from-violet-400 to-cyan-400",
    details: [
      { label: "Base", value: "Ahmedabad" },
      { label: "Identity", value: "Class 12 · Technologist" },
      { label: "Role", value: "System Architect & Developer" },
      { label: "Hardware", value: "GPU · Homelab · Servers" },
      { label: "Software", value: ".NET · JS · Linux / VPS" },
      { label: "Brand", value: "Ralosy Co-Founder" },
    ],
    interests: [
      "Hardware Architecture",
      "GPU Systems",
      "Full Stack",
      ".NET / C#",
      "Linux & VPS",
      "ERP Systems",
      "Crypto / RandomX",
      "AI & Decentralized Nets",
    ],
    skills: [
      { name: "Hardware Architecture", level: 95 },
      { name: "Web Dev & Apps", level: 90 },
      { name: "Server Ops (Linux / VPS)", level: 85 },
      { name: "Full Stack (.NET / JS)", level: 80 },
    ],
    awards: [
      {
        title: "Odoo ERP Self-Host Deploy",
        year: "2024",
        note: "Deployed enterprise Odoo on Linux VPS with SSL — learned networking, security, and ops under fire.",
      },
      {
        title: "Custom Homelab Server Rack",
        year: "Active",
        note: "Built and maintains a Ubuntu Server home lab hosting production-facing services.",
      },
      {
        title: "Silicon Lab GPU Cluster",
        year: "Research",
        note: "Runs advanced GPU benchmarking and RandomX algorithm research setups.",
      },
      {
        title: "Ralosy Link Systems",
        year: "Ecosystem",
        note: "Engineering bridge between Alexa, webhooks, Home Assistant, and automation APIs at link.ralosy.com.",
      },
    ],
    timeline: [
      {
        year: "2023",
        title: "The Awakening · Class 10",
        body: "Deep-dived into PC components and built his first custom rig — hardware curiosity became a discipline.",
      },
      {
        year: "2024",
        title: "Server Deployment · Class 11",
        body: "Successfully deployed Odoo ERP on a VPS. Learned Linux CLI, network security, and real server ops.",
      },
      {
        year: "2025",
        title: "Current State · Class 12",
        body: "Mastering C# .NET architecture and Monero mining algorithms while preparing for computer engineering.",
      },
      {
        year: "2026",
        title: "Future Loading",
        body: "Expanding into Artificial Intelligence and Decentralized Networks. The system is evolving.",
      },
    ],
    projects: [
      { label: "Odoo ERP", value: "Self-hosted enterprise stack on Linux VPS" },
      { label: "Monero Node", value: "High-efficiency RandomX mining rig" },
      { label: ".NET Core App", value: "Custom C# application architecture" },
      { label: "Web Apps", value: "Full-stack utilities & note-taking platforms" },
      { label: "Silicon Lab", value: "GPU cluster for benchmarking research" },
      { label: "Dev Station", value: "VS environment optimized for .NET Core" },
    ],
    sections: [
      {
        title: "Bio",
        body: "Raj Sahani is an 18-year-old technologist and co-founder of Ralosy who refuses to accept hardware limitations. Based in Ahmedabad, he specializes in analyzing GPU architectures, building custom web platforms, and deploying enterprise-grade ERPs — bridging raw silicon performance with elegant software architecture.",
      },
      {
        title: "Achievements",
        body: "From a Class 10 custom PC build to a Class 11 Odoo ERP VPS deployment, Raj has logged a full ops timeline: Ubuntu home lab, SSL-secured enterprise hosting, GPU research cluster, Monero/RandomX tuning, and .NET Core application architecture — plus active systems work across the Ralosy product stack.",
      },
      {
        title: "Vision",
        body: "Keep upgrading reality — expand into Artificial Intelligence and Decentralized Networks while building resilient, hardware-aware software that powers India-first products like Ralosy Link, Satark, and the wider ecosystem.",
      },
    ],
  },
];

export function getFounder(slug: string) {
  return founders.find((f) => f.slug === slug);
}

export type Founder = {
  id: string;
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  instagram: string;
  instagramUrl: string;
  initials: string;
  accent: string;
  details: { label: string; value: string }[];
  interests?: string[];
  sections: { title: string; body: string }[];
};

export const founders: Founder[] = [
  {
    id: "lovekush",
    slug: "lovekush-yadav",
    name: "Lovekush Yadav",
    role: "Co-Founder · Currently in 12th Standard",
    shortBio:
      "Building futuristic Indian tech products with a focus on safety, education, and civic impact.",
    instagram: "@lovekushyadavvv",
    instagramUrl: "https://instagram.com/lovekushyadavvv",
    initials: "LY",
    accent: "from-cyan-400 to-emerald-400",
    details: [
      { label: "Date of Birth", value: "3 August 2007" },
      { label: "Born", value: "Uttar Pradesh" },
      { label: "Lives", value: "Punjab" },
    ],
    interests: [
      "Science",
      "Tech",
      "Software Development",
      "Investment",
      "Business",
    ],
    sections: [
      {
        title: "Vision",
        body: "Lovekush is building Ralosy as a next-generation Indian tech house — products that feel premium, move fast, and solve real problems for citizens, students, and institutions.",
      },
      {
        title: "Focus",
        body: "From scam prevention with Satark to education ops with Kaksha, his work sits at the intersection of software craft, product strategy, and long-term business building.",
      },
    ],
  },
  {
    id: "raj",
    slug: "raj-sahani",
    name: "Raj Sahani",
    role: "Co-Founder · BTech ECE Student",
    shortBio:
      "Engineering-minded co-founder shaping Ralosy’s product systems and technical direction.",
    instagram: "@rajsahaniii",
    instagramUrl: "https://instagram.com/rajsahaniii",
    initials: "RS",
    accent: "from-violet-400 to-cyan-400",
    details: [
      { label: "Education", value: "BTech ECE" },
      { label: "Focus", value: "Systems · Product · Hardware-aware software" },
      { label: "Brand", value: "Ralosy Co-Founder" },
    ],
    // TODO: Inject scraped / verified data from https://rajsahani.com
    // Replace placeholder Bio, Achievements, and Vision below with live content.
    sections: [
      {
        title: "Bio",
        body: "Raj Sahani is a BTech ECE student and co-founder of Ralosy. [Placeholder — replace with biography from rajsahani.com.]",
      },
      {
        title: "Achievements",
        body: "Key milestones, projects, and recognitions will appear here. [Placeholder — inject achievements from rajsahani.com.]",
      },
      {
        title: "Vision",
        body: "Building resilient, India-first technology that scales from civic tools to education infrastructure. [Placeholder — inject vision statement from rajsahani.com.]",
      },
    ],
  },
];

export function getFounder(slug: string) {
  return founders.find((f) => f.slug === slug);
}

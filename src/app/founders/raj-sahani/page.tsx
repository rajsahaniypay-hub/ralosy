import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FounderProfile } from "@/components/FounderProfile";
import { getFounder } from "@/data/founders";

const founder = getFounder("raj-sahani");

export const metadata: Metadata = {
  title: "Raj Sahani",
  description:
    "Raj Sahani — Co-Founder of Ralosy and BTech ECE student shaping systems and product direction.",
  openGraph: {
    title: "Raj Sahani · Ralosy",
    description:
      "Co-Founder of Ralosy. Engineering-minded builder focused on India-first technology.",
  },
};

export default function RajSahaniPage() {
  if (!founder) notFound();

  // TODO: Inject scraped / verified profile data from https://rajsahani.com
  // Update src/data/founders.ts sections (Bio, Achievements, Vision) when ready.

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: "Co-Founder",
    worksFor: { "@type": "Organization", name: "Ralosy" },
    sameAs: [founder.instagramUrl],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <FounderProfile founder={founder} />
    </>
  );
}

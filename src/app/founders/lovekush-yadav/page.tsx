import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FounderProfile } from "@/components/FounderProfile";
import { getFounder } from "@/data/founders";

const founder = getFounder("lovekush-yadav");

export const metadata: Metadata = {
  title: "Lovekush Yadav",
  description:
    "Lovekush Yadav — Co-Founder of Ralosy. Building futuristic Indian tech across safety, education, and civic impact.",
  openGraph: {
    title: "Lovekush Yadav · Ralosy",
    description:
      "Co-Founder of Ralosy. Interests in Science, Tech, Software Development, Investment, and Business.",
  },
};

export default function LovekushPage() {
  if (!founder) notFound();

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

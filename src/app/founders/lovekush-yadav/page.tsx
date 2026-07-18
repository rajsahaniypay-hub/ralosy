import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FounderProfile } from "@/components/FounderProfile";
import { getFounder } from "@/data/founders";

const founder = getFounder("lovekush-yadav");

export const metadata: Metadata = {
  title: "Lovekush Yadav",
  description:
    "Lovekush Yadav — Co-Founder of Ralosy. Class 12 product builder shipping Satark, Kaksha, and IndiaNow for Indian tech, education, and civic impact.",
  openGraph: {
    title: "Lovekush Yadav · Ralosy",
    description:
      "Co-Founder of Ralosy. Science, tech, software, investment, and business — with a track record of shipping India-first products.",
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

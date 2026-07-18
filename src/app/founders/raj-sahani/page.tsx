import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FounderProfile } from "@/components/FounderProfile";
import { getFounder } from "@/data/founders";

const founder = getFounder("raj-sahani");

export const metadata: Metadata = {
  title: "Raj Sahani",
  description:
    "Raj Sahani — Co-Founder of Ralosy and BTech ECE student. System architect & developer bridging hardware performance and software architecture. Based in Ahmedabad.",
  openGraph: {
    title: "Raj Sahani · Ralosy",
    description:
      "BTech ECE student · System Architect & Developer. GPU systems, Linux ops, .NET, and India-first product engineering.",
  },
};

export default function RajSahaniPage() {
  if (!founder) notFound();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: "Co-Founder · BTech ECE Student",
    url: "https://rajsahani.com",
    worksFor: { "@type": "Organization", name: "Ralosy" },
    sameAs: [founder.instagramUrl, "https://rajsahani.com"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressCountry: "IN",
    },
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

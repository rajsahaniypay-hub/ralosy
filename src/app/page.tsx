import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { FoundersTeaser } from "@/components/FoundersTeaser";
import { siteDescription, siteTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteTitle },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <FoundersTeaser />
    </>
  );
}

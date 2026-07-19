import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://ralosy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ralosy — Indian Tech, Education & Civic Empowerment",
    template: "%s · Ralosy",
  },
  description:
    "Ralosy builds the future of Indian tech — Satark scam protection, Kaksha education ops, Link hub, and IndiaNow civic tools.",
  keywords: [
    "Ralosy",
    "Satark",
    "Kaksha",
    "IndiaNow",
    "Indian tech",
    "scam checker",
    "education management",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ralosy",
    title: "Ralosy — Building the future of Indian Tech",
    description:
      "Premium products for scam defense, education, and civic empowerment across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralosy",
    description:
      "Building the future of Indian Tech, Education, and Civic Empowerment.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ralosy",
  url: siteUrl,
  sameAs: ["https://instagram.com/ralosyglobal"],
  description:
    "Building the future of Indian Tech, Education, and Civic Empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="bg-atmosphere relative flex min-h-full flex-col font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <div className="grain" aria-hidden />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

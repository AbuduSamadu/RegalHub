import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import AbouContentPage from "./about-content";

export const metadata: Metadata = {
  title: "About StartupEco - Building the Future of Entrepreneurship",
  description:
    "Learn about StartupEco's mission to democratize entrepreneurship by connecting 10,000+ startups, mentors, and investors in a global ecosystem.",
  keywords: [
    "about startupeco",
    "startup ecosystem mission",
    "entrepreneurship platform",
    "startup community",
  ],
};
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "StartupEco",
    description:
      "Building the future of entrepreneurship by connecting startups, mentors, investors, and innovators in a thriving global ecosystem",
    foundingDate: "2020",
    numberOfEmployees: "50-100",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Innovation Drive",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94105",
        addressCountry: "US",
      },
    },
  },
};
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={aboutSchema} />
      <Header />
      <AbouContentPage />
      <Footer />
    </div>
  );
}

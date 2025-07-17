import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import FeaturedStartups from "@/components/home/FeaturedStartups";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Global Startup Ecosystem Platform - Connect, Collaborate, Grow",
  description:
    "Join 10,000+ entrepreneurs, mentors, and investors in the world's leading startup ecosystem. Access mentorship, funding opportunities, events, and a thriving community.",
  keywords: [
    "startup ecosystem",
    "entrepreneurship platform",
    "startup mentorship",
    "startup funding",
    "business networking",
    "innovation community",
  ],
  openGraph: {
    title: "StartupEco - Where Innovation Meets Opportunity",
    description:
      "Connect with mentors, find funding, join events, and grow your startup in our global ecosystem of 10,000+ entrepreneurs and investors.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "StartupEco Homepage - Global Startup Ecosystem",
      },
    ],
  },
  twitter: {
    title: "StartupEco - Where Innovation Meets Opportunity",
    description:
      "Connect with mentors, find funding, join events, and grow your startup in our global ecosystem.",
    images: ["/twitter-home.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StartupEco",
  url: "https://startupeco.com",
  logo: "https://startupeco.com/logo.png",
  description:
    "Global startup ecosystem platform connecting entrepreneurs, mentors, and investors",
  foundingDate: "2020",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    email: "hello@startupeco.com",
  },
  sameAs: [
    "https://twitter.com/startupeco",
    "https://linkedin.com/company/startupeco",
    "https://facebook.com/startupeco",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={organizationSchema} />
      <Header />
      <main role="main">
        <HeroSection />
        <FeatureGrid />
        <FeaturedStartups />
        <UpcomingEvents />
        <TestimonialsSection />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}

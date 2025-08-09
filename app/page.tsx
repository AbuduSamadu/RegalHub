import type { Metadata } from "next";
import { TestimonialsSections } from "@/components/home/Testimonial";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { CallToAction } from "@/components/home/call-to-action";
import { GallerySection } from "@/components/home/gallery";
import { FeaturedStartup } from "@/components/home/feature-startups";
import { FeaturesSection } from "@/components/home/featured-sections";
import { StatsSection } from "@/components/home/stats-section";
import { UpcomingEventss } from "@/components/home/upcoming-events";
import Header from "@/components/layout/Header";
import { HeroSection } from "@/components/home/hero-section";
import { Footer } from "@/components/layout/Footer";

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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <FeaturedStartup />
        <GallerySection />
        <UpcomingEventss />
        <TestimonialsSections />
        <CallToAction />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

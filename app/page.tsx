import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import FeaturedStartups from "@/components/home/FeaturedStartups";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
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
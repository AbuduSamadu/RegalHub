import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EventsContent from "./events-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Startup Events & Workshops - Network, Learn, Grow",
    description:
      "Discover upcoming startup events, workshops, and networking opportunities. Connect with entrepreneurs, investors, and industry experts worldwide.",
    keywords: [
      "startup events",
      "entrepreneurship workshops",
      "business networking",
      "startup conferences",
      "innovation events",
    ],
    openGraph: {
      title: "Startup Events & Workshops - StartupEco",
      description:
        "Join upcoming startup events, workshops, and networking opportunities in our global ecosystem.",
      images: ["/og-events.jpg"],
    },
  };
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <EventsContent />
      <Footer />
    </div>
  );
}


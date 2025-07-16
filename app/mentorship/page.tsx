"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MentorshipBooking from "@/components/ui/mentorship-booking";

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              Mentorship Sessions
            </h1>
            <p className="text-lg text-gray-600">
              Book and manage your mentorship sessions with industry experts
            </p>
          </div>
          
          <MentorshipBooking />
        </div>
      </main>
      <Footer />
    </div>
  );
}
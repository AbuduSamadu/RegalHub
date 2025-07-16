"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SavedItems from "@/components/ui/saved-items";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              My Library
            </h1>
            <p className="text-lg text-gray-600">
              Access all your saved startups, events, mentors, and programs
            </p>
          </div>
          
          <SavedItems />
        </div>
      </main>
      <Footer />
    </div>
  );
}
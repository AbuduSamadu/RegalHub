"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserProfile from "@/components/ui/user-profile";
import MobileNav from "@/components/ui/mobile-nav";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 pb-20 md:pb-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              My Profile
            </h1>
            <p className="text-lg text-gray-600">
              Manage your profile information and settings
            </p>
          </div>
          
          <UserProfile isEditable={true} />
        </div>
      </main>
      <MobileNav />
      <Footer />
    </div>
  );
}
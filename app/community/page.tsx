import { CommunitiesGrid } from "@/components/community/communitiy-grid";
import Header from "@/components/layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Communities - StartupEco",
  description:
    "Join specialized communities for entrepreneurs, mentors, investors, and industry professionals. Connect with like-minded individuals in your field.",
  keywords:
    "startup communities, entrepreneur groups, mentor networks, investor circles, industry communities",
};

export default function CommunitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Join Our Communities
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Connect with specialized groups of entrepreneurs, mentors, and
                industry experts who share your passion
              </p>
            </div>
          </div>
        </div>
        <CommunitiesGrid />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

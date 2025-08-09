import { InitiativesShowcase } from "@/components/initiative/initiative-directory";
import Header from "@/components/layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiatives - StartupEco",
  description:
    "Explore our impact-driven initiatives supporting underrepresented founders, sustainability, and social innovation in the startup ecosystem.",
  keywords:
    "startup initiatives, social impact, sustainability, diversity, inclusion, innovation programs",
};

export default function InitiativesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Our Initiatives
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Driving positive change through programs that support diversity,
                sustainability, and social innovation
              </p>
            </div>
          </div>
        </div>
        <InitiativesShowcase />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

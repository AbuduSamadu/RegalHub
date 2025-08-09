import { EventsDirectory } from "@/components/event/events-directory";
import Header from "@/components/layout/Header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Events - StartupEco",
  description:
    "Discover upcoming workshops, networking events, pitch competitions, and conferences. Connect with entrepreneurs, mentors, and investors.",
  keywords:
    "startup events, workshops, networking, pitch competitions, conferences, entrepreneurship",
};

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Upcoming Events
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Join workshops, networking events, and pitch competitions
                designed to accelerate your startup journey
              </p>
            </div>
          </div>
        </div>
        <EventsDirectory />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

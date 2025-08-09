import { GalleryGrid } from "@/components/gallery/gallery-grid";
import Header from "@/components/layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - StartupEco",
  description:
    "Explore our visual journey through events, workshops, and community moments. See the innovation and collaboration that defines our startup ecosystem.",
  keywords:
    "startup gallery, events photos, community moments, innovation showcase, startup ecosystem",
};

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-white py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Visual Stories
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Capturing moments of innovation, collaboration, and success from
                our vibrant startup community
              </p>
            </div>
          </div>
        </div>
        <GalleryGrid />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

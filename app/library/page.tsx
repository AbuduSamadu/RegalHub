import Header from "@/components/layout/Header";
import { ResourceLibrary } from "@/components/library/resource-library";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Resource Library - StartupEco",
  description:
    "Access comprehensive resources including guides, templates, tools, and educational content to accelerate your startup journey.",
  keywords:
    "startup resources, business templates, guides, tools, educational content, startup library",
};

export default function LibrariesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Resource Library
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Comprehensive collection of guides, templates, and tools to
                accelerate your startup success
              </p>
            </div>
          </div>
        </div>
        <ResourceLibrary />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

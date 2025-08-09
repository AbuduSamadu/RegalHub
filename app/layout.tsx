import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StartupEco - Connecting Innovation & Investment",
  description:
    "Join the leading startup ecosystem platform connecting entrepreneurs, mentors, investors, and talent. Discover opportunities, access resources, and grow your startup.",
  keywords:
    "startup ecosystem, entrepreneurs, investors, mentors, innovation, funding, accelerator",
  authors: [{ name: "StartupEco Team" }],
  creator: "StartupEco",
  openGraph: {
    title: "StartupEco - Connecting Innovation & Investment",
    description:
      "Join the leading startup ecosystem platform connecting entrepreneurs, mentors, investors, and talent.",
    url: "https://startupeco.com",
    siteName: "StartupEco",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StartupEco - Connecting Innovation & Investment",
    description:
      "Join the leading startup ecosystem platform connecting entrepreneurs, mentors, investors, and talent.",
    creator: "@startupeco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "StartupEco",
              url: "https://startupeco.com",
              description:
                "Leading startup ecosystem platform connecting entrepreneurs, mentors, investors, and talent.",
              sameAs: [
                "https://twitter.com/startupeco",
                "https://linkedin.com/company/startupeco",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

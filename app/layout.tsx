import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import MobileNav from "@/components/ui/mobile-nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://startupeco.com"),
  title: {
    default: "StartupEco - Global Startup Ecosystem Platform",
    template: "%s | StartupEco",
  },
  description:
    "Connect, collaborate, and grow in the global startup ecosystem. Join 10,000+ entrepreneurs, mentors, and investors building the future together.",
  keywords: [
    "startup ecosystem",
    "entrepreneurship",
    "mentorship",
    "funding",
    "innovation",
    "business networking",
    "startup community",
  ],
  authors: [{ name: "StartupEco Team" }],
  creator: "StartupEco",
  publisher: "StartupEco",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://startupeco.com",
    siteName: "StartupEco",
    title: "StartupEco - Global Startup Ecosystem Platform",
    description:
      "Connect, collaborate, and grow in the global startup ecosystem. Join 10,000+ entrepreneurs, mentors, and investors building the future together.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StartupEco - Global Startup Ecosystem Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@startupeco",
    creator: "@startupeco",
    title: "StartupEco - Global Startup Ecosystem Platform",
    description:
      "Connect, collaborate, and grow in the global startup ecosystem. Join 10,000+ entrepreneurs, mentors, and investors.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://startupeco.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <MobileNav />
        <Toaster />
      </body>
    </html>
  );
}

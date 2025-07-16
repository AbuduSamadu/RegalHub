import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
import MobileNav from "@/components/ui/mobile-nav";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Startup Ecosystem Platform',
  description: 'Connect, collaborate, and grow in the global startup ecosystem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <MobileNav />
        <Toaster />
      </body>
    </html>
  );
}
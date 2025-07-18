import "./admin-globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { AdminSidebar } from "@/components/admin/layout/admin-sidebar";
import { AdminTopbar } from "@/components/admin/layout/admin-topbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Admin Dashboard - StartupEco",
  description:
    "Manage the startup ecosystem platform with comprehensive admin tools",
};
interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Readonly<AdminLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex h-screen bg-gray-50">
          <AdminSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <AdminTopbar />
            <main className="flex-1 lg:ml-64 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

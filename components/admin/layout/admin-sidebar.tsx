"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Building,
  Calendar,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  MessageCircle,
  Mail,
  ImagesIcon,
} from "lucide-react";
import Image from "next/image";

export function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard, badge: null },
    { href: "/admin/startups", label: "Startups", icon: Building, badge: "12" },
    { href: "/admin/mentors", label: "Mentors", icon: Users, badge: "3" },
    { href: "/admin/events", label: "Events", icon: Calendar, badge: "3" },
    { href: "/admin/gallery", label: "Gallery", icon: ImagesIcon, badge: null },
    {
      href: "/admin/messages",
      label: "Messages",
      icon: MessageCircle,
      badge: "23",
    },
    { href: "/admin/newsletter", label: "Newsletter", icon: Mail, badge: "2" },
    {
      href: "/admin/analytics",
      label: "Analytics",
      icon: BarChart3,
      badge: null,
    },
    { href: "/admin/settings", label: "Settings", icon: Settings, badge: null },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white border-r z-50 transition-all duration-300 ${
          isCollapsed ? "-translate-x-full lg:translate-x-0 lg:w-20" : "w-64"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link href="/admin" className="flex items-center space-x-3">
              <div className="w-8 h-8 admin-gradient-primary rounded-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  width={34}
                  height={34}
                  alt="Regalhub Logo"
                  className="object-contain"
                />
              </div>
              {!isCollapsed && (
                <span className="text-xl font-bold admin-text-gradient">
                  StartupEco
                </span>
              )}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/20"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <Badge className="ml-auto bg-[#FF6B35] text-white">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Admin Info */}
          {!isCollapsed && (
            <div className="p-4 border-t">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#00BFCB]/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-[#00BFCB]">
                    AD
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">admin@startupeco.com</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsCollapsed(false)}
        className="fixed top-4 left-4 z-40 lg:hidden"
      >
        <Menu className="w-5 h-5" />
      </Button>
    </>
  );
}

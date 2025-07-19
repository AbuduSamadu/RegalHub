"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Home, Calendar, LayoutDashboard, Users, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "/", badge: null },
  { icon: Calendar, label: "Events", href: "/events", badge: null },
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
    badge: null,
  },
  { icon: Users, label: "Community", href: "/community", badge: null },
  { icon: User, label: "Profile", href: "/profile", badge: null },
];

export default function MobileNav() {
  const [activeItem, setActiveItem] = useState("/");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setActiveItem(item.href)}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              activeItem === item.href
                ? "text-teal-primary bg-teal-primary/5"
                : "text-gray-600 hover:text-teal-primary"
            }`}
          >
            <div className="relative">
              <item.icon className="h-5 w-5" />
              {item.badge && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {item.badge}
                </Badge>
              )}
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  MessageCircle,
  Calendar,
  Building,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function AdminTopbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const notifications = [
    {
      id: 1,
      type: "startup",
      message: "New startup application from TechFlow AI",
      time: "5 min ago",
      unread: true,
    },
    {
      id: 2,
      type: "event",
      message: 'Event "Pitch Night 2025" is tomorrow',
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      type: "mentor",
      message: "Mentor application approved",
      time: "2 hours ago",
      unread: false,
    },
    {
      id: 4,
      type: "message",
      message: "New contact message received",
      time: "3 hours ago",
      unread: true,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "startup":
        return Building;
      case "event":
        return Calendar;
      case "message":
        return MessageCircle;
      default:
        return Bell;
    }
  };

  return (
    <header className="bg-white ml-64 border-b px-6 py-4 flex items-center justify-between">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search startups, events, mentors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#FF6B35] text-white text-xs p-0 flex items-center justify-center">
                  {unreadCount}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <p className="text-sm text-gray-500">
                {unreadCount} unread notifications
              </p>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notification) => {
                const Icon = getNotificationIcon(notification.type);
                return (
                  <DropdownMenuItem
                    key={notification.id}
                    className="flex items-start p-4 space-x-3"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        notification.unread ? "bg-[#FF6B35]/10" : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          notification.unread
                            ? "text-[#FF6B35]"
                            : "text-gray-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-sm ${
                          notification.unread
                            ? "font-medium text-gray-900"
                            : "text-gray-600"
                        }`}
                      >
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                    )}
                  </DropdownMenuItem>
                );
              })}
            </div>
            <div className="p-4 border-t">
              <Button variant="outline" className="w-full" size="sm">
                View All Notifications
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#00BFCB]/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-[#00BFCB]">AD</span>
              </div>
              <span className="hidden md:block font-medium text-gray-900">
                Admin User
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

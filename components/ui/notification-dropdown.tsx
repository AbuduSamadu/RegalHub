"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  Calendar,
  MessageSquare,
  DollarSign,
  Users,
  CheckCircle,
} from "lucide-react";

interface Notification {
  id: string;
  type: "mentorship" | "event" | "funding" | "message" | "application";
  title: string;
  description: string;
  time: string;
  read: boolean;
  actionUrl?: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "mentorship",
    title: "New Mentorship Request",
    description: "Sarah Chen wants to connect with you",
    time: "2 hours ago",
    read: false,
    actionUrl: "/mentorship/requests",
  },
  {
    id: "2",
    type: "event",
    title: "Event Reminder",
    description: "Startup Pitch Night starts in 1 hour",
    time: "1 hour ago",
    read: false,
    actionUrl: "/events/startup-pitch-night",
  },
  {
    id: "3",
    type: "funding",
    title: "Funding Opportunity",
    description: "New accelerator program matches your profile",
    time: "3 hours ago",
    read: true,
    actionUrl: "/funding/accelerators",
  },
  {
    id: "4",
    type: "message",
    title: "New Message",
    description: "John Davis sent you a message",
    time: "5 hours ago",
    read: true,
    actionUrl: "/messages/john-davis",
  },
  {
    id: "5",
    type: "application",
    title: "Application Update",
    description: "Your bootcamp application was approved!",
    time: "1 day ago",
    read: false,
    actionUrl: "/applications/bootcamp-2024",
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "mentorship":
      return <Users className="h-4 w-4 text-magenta-primary" />;
    case "event":
      return <Calendar className="h-4 w-4 text-teal-primary" />;
    case "funding":
      return <DollarSign className="h-4 w-4 text-green-600" />;
    case "message":
      return <MessageSquare className="h-4 w-4 text-blue-600" />;
    case "application":
      return <CheckCircle className="h-4 w-4 text-purple-600" />;
    default:
      return <Bell className="h-4 w-4" />;
  }
};

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-80 bg-white border border-gray-200 shadow-lg"
      >
        <div className="flex items-center justify-between p-4 bg-white">
          <h3 className="font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="text-xs text-teal-primary hover:text-teal-primary/80"
            >
              Mark all read
            </Button>
          )}
        </div>
        <Separator />
        <ScrollArea className="h-96 bg-white">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500 bg-white">
              No notifications
            </div>
          ) : (
            <div className="space-y-1 bg-white">
              {notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`border-0 shadow-none cursor-pointer hover:bg-gray-50 ${
                    !notification.read ? "bg-blue-50/50" : "bg-white"
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm truncate">
                            {notification.title}
                          </p>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-teal-primary rounded-full ml-2" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
        <Separator />
        <div className="p-2 bg-white">
          <Button variant="ghost" className="w-full text-sm">
            View All Notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Calendar,
  MessageSquare,
  DollarSign,
  Users,
  Eye,
  CheckCircle,
  Filter,
  Activity,
} from "lucide-react";

interface ActivityItem {
  id: string;
  type:
    | "event"
    | "message"
    | "funding"
    | "profile"
    | "mentorship"
    | "achievement";
  title: string;
  description: string;
  time: string;
  avatar?: string;
  actionUrl?: string;
}

const mockActivities: ActivityItem[] = [
  {
    id: "1",
    type: "event",
    title: "Event RSVP",
    description: "You RSVP'd to 'Startup Pitch Night 2025'",
    time: "2 hours ago",
    actionUrl: "/events/pitch-night-2025",
  },
  {
    id: "2",
    type: "profile",
    title: "Profile View",
    description: "Investor Sarah Kim viewed your startup profile",
    time: "4 hours ago",
    avatar: "SK",
  },
  {
    id: "3",
    type: "mentorship",
    title: "Mentorship Session",
    description: "Completed session with John Davis",
    time: "1 day ago",
    avatar: "JD",
  },
  {
    id: "4",
    type: "funding",
    title: "Funding Application",
    description: "Applied to AI Accelerator Program",
    time: "2 days ago",
    actionUrl: "/programs/ai-accelerator",
  },
  {
    id: "5",
    type: "achievement",
    title: "Achievement Unlocked",
    description: "Earned 'Community Contributor' badge",
    time: "3 days ago",
  },
  {
    id: "6",
    type: "message",
    title: "New Message",
    description: "Received message from mentor Alex Chen",
    time: "3 days ago",
    avatar: "AC",
    actionUrl: "/messages/alex-chen",
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "event":
      return <Calendar className="h-4 w-4 text-teal-primary" />;
    case "message":
      return <MessageSquare className="h-4 w-4 text-blue-600" />;
    case "funding":
      return <DollarSign className="h-4 w-4 text-green-600" />;
    case "profile":
      return <Eye className="h-4 w-4 text-purple-600" />;
    case "mentorship":
      return <Users className="h-4 w-4 text-magenta-primary" />;
    case "achievement":
      return <CheckCircle className="h-4 w-4 text-yellow-600" />;
    default:
      return <Activity className="h-4 w-4" />;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case "event":
      return "bg-teal-primary/10 text-teal-primary";
    case "message":
      return "bg-blue-100 text-blue-800";
    case "funding":
      return "bg-green-100 text-green-800";
    case "profile":
      return "bg-purple-100 text-purple-800";
    case "mentorship":
      return "bg-magenta-primary/10 text-magenta-primary";
    case "achievement":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function ActivityFeed() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activities] = useState(mockActivities);

  const filters = [
    { key: "all", label: "All Activity" },
    { key: "event", label: "Events" },
    { key: "mentorship", label: "Mentoring" },
    { key: "funding", label: "Funding" },
    { key: "message", label: "Messages" },
  ];

  const filteredActivities =
    selectedFilter === "all"
      ? activities
      : activities.filter((activity) => activity.type === selectedFilter);

  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-teal-primary" />
            <span>Recent Activity</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              className="text-sm border rounded px-2 py-1"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              {filters.map((filter) => (
                <option key={filter.key} value={filter.key}>
                  {filter.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {filteredActivities.map((activity, index) => (
              <div key={activity.id} className="relative">
                {/* Timeline line */}
                {index < filteredActivities.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-200"></div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {activity.avatar ? (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs bg-teal-primary text-white">
                            {activity.avatar}
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        getActivityIcon(activity.type)
                      )}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${getActivityColor(activity.type)}`}
                      >
                        {activity.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {activity.time}
                      </span>
                      {activity.actionUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-teal-primary hover:text-teal-primary/80"
                        >
                          View Details
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="mt-4 pt-4 border-t">
          <Button variant="outline" className="w-full text-sm">
            View All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

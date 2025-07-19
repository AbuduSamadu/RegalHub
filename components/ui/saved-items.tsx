"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bookmark,
  Building,
  Calendar,
  User,
  DollarSign,
  MapPin,
  Clock,
  Trash2,
  ExternalLink,
} from "lucide-react";

interface SavedItem {
  id: string;
  type: "startup" | "event" | "mentor" | "program";
  title: string;
  description: string;
  savedDate: string;
  metadata: {
    location?: string;
    date?: string;
    stage?: string;
    industry?: string;
    rating?: number;
    price?: string;
  };
  url: string;
}

const savedItems: SavedItem[] = [
  {
    id: "1",
    type: "startup",
    title: "EcoTech Solutions",
    description: "Sustainable technology solutions for modern businesses",
    savedDate: "2 days ago",
    metadata: {
      location: "San Francisco, CA",
      stage: "Series A",
      industry: "GreenTech",
    },
    url: "/startups/ecotech",
  },
  {
    id: "2",
    type: "event",
    title: "Startup Pitch Night",
    description: "Present your startup to investors",
    savedDate: "1 week ago",
    metadata: {
      date: "March 15, 2024",
      location: "San Francisco, CA",
    },
    url: "/events/pitch-night",
  },
  {
    id: "3",
    type: "mentor",
    title: "Sarah Kim",
    description: "Former VP of Product at TechCorp",
    savedDate: "3 days ago",
    metadata: {
      rating: 4.9,
      industry: "Product Management",
    },
    url: "/mentors/sarah-kim",
  },
  {
    id: "4",
    type: "program",
    title: "AI Accelerator Program",
    description: "3-month program for AI startups with $100K investment",
    savedDate: "5 days ago",
    metadata: {
      price: "$100K investment",
      location: "Virtual",
    },
    url: "/programs/ai-accelerator",
  },
];

const getItemIcon = (type: string) => {
  switch (type) {
    case "startup":
      return <Building className="h-4 w-4 text-teal-primary" />;
    case "event":
      return <Calendar className="h-4 w-4 text-magenta-primary" />;
    case "mentor":
      return <User className="h-4 w-4 text-blue-600" />;
    case "program":
      return <DollarSign className="h-4 w-4 text-green-600" />;
    default:
      return <Bookmark className="h-4 w-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "startup":
      return "bg-teal-primary/10 text-teal-primary";
    case "event":
      return "bg-magenta-primary/10 text-magenta-primary";
    case "mentor":
      return "bg-blue-100 text-blue-800";
    case "program":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function SavedItems() {
  const [items, setItems] = useState(savedItems);
  const [activeTab, setActiveTab] = useState("all");

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems =
    activeTab === "all"
      ? items
      : items.filter((item) => item.type === activeTab);

  const getTabCount = (type: string) => {
    return type === "all"
      ? items.length
      : items.filter((item) => item.type === type).length;
  };

  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bookmark className="h-5 w-5 text-teal-primary" />
          <span>My Library</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all" className="text-xs">
              All ({getTabCount("all")})
            </TabsTrigger>
            <TabsTrigger value="startup" className="text-xs">
              Startups ({getTabCount("startup")})
            </TabsTrigger>
            <TabsTrigger value="event" className="text-xs">
              Events ({getTabCount("event")})
            </TabsTrigger>
            <TabsTrigger value="mentor" className="text-xs">
              Mentors ({getTabCount("mentor")})
            </TabsTrigger>
            <TabsTrigger value="program" className="text-xs">
              Programs ({getTabCount("program")})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {filteredItems.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Bookmark className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No saved items in this category</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="border hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="mt-1">{getItemIcon(item.type)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-medium text-sm">
                                {item.title}
                              </h4>
                              <Badge
                                variant="secondary"
                                className={`text-xs ${getTypeColor(item.type)}`}
                              >
                                {item.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {item.description}
                            </p>

                            {/* Metadata */}
                            <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                              {item.metadata.location && (
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{item.metadata.location}</span>
                                </div>
                              )}
                              {item.metadata.date && (
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{item.metadata.date}</span>
                                </div>
                              )}
                              {item.metadata.stage && (
                                <Badge variant="outline" className="text-xs">
                                  {item.metadata.stage}
                                </Badge>
                              )}
                              {item.metadata.industry && (
                                <Badge variant="outline" className="text-xs">
                                  {item.metadata.industry}
                                </Badge>
                              )}
                              {item.metadata.rating && (
                                <div className="flex items-center space-x-1">
                                  <span>⭐ {item.metadata.rating}</span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-1 text-xs text-gray-400">
                                <Clock className="h-3 w-3" />
                                <span>Saved {item.savedDate}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-xs"
                                >
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  View
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => removeItem(item.id)}
                                  className="text-xs text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Search,
  Filter,
  Heart,
  Share2,
} from "lucide-react";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [view, setView] = useState("grid");

  const events = [
    {
      id: 1,
      title: "Pitch Night 2025",
      date: "2025-01-15",
      time: "6:00 PM",
      location: "Virtual Event",
      attendees: 250,
      maxAttendees: 300,
      type: "Pitch Competition",
      category: "competition",
      description:
        "Join us for an exciting evening of startup pitches and networking opportunities.",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Pitching", "Networking", "Competition"],
      price: "Free",
      organizer: "StartupEco Team",
      isFeatured: true,
      isBookmarked: false,
    },
    {
      id: 2,
      title: "AI in Healthcare Workshop",
      date: "2025-01-20",
      time: "2:00 PM",
      location: "San Francisco, CA",
      attendees: 45,
      maxAttendees: 50,
      type: "Workshop",
      category: "workshop",
      description:
        "Explore the latest trends and applications of AI in healthcare technology.",
      image:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI", "Healthcare", "Workshop"],
      price: "$50",
      organizer: "HealthTech Innovation",
      isFeatured: false,
      isBookmarked: true,
    },
    {
      id: 3,
      title: "Founder Networking Mixer",
      date: "2025-01-25",
      time: "7:00 PM",
      location: "New York, NY",
      attendees: 80,
      maxAttendees: 100,
      type: "Networking",
      category: "networking",
      description:
        "Connect with fellow founders and potential co-founders in a relaxed environment.",
      image:
        "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Networking", "Founders", "Social"],
      price: "$25",
      organizer: "NYC Startup Community",
      isFeatured: false,
      isBookmarked: false,
    },
    {
      id: 4,
      title: "FinTech Innovation Summit",
      date: "2025-02-01",
      time: "9:00 AM",
      location: "London, UK",
      attendees: 200,
      maxAttendees: 500,
      type: "Conference",
      category: "conference",
      description:
        "Two-day summit featuring the latest innovations in financial technology.",
      image:
        "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["FinTech", "Innovation", "Summit"],
      price: "$150",
      organizer: "FinTech London",
      isFeatured: true,
      isBookmarked: false,
    },
    {
      id: 5,
      title: "Sustainable Startup Bootcamp",
      date: "2025-02-10",
      time: "10:00 AM",
      location: "Berlin, Germany",
      attendees: 30,
      maxAttendees: 40,
      type: "Bootcamp",
      category: "bootcamp",
      description:
        "Intensive 3-day program focused on building sustainable and eco-friendly startups.",
      image:
        "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Sustainability", "Bootcamp", "CleanTech"],
      price: "$200",
      organizer: "Green Innovation Hub",
      isFeatured: false,
      isBookmarked: true,
    },
    {
      id: 6,
      title: "Mobile App Development Workshop",
      date: "2025-02-15",
      time: "1:00 PM",
      location: "Virtual Event",
      attendees: 120,
      maxAttendees: 150,
      type: "Workshop",
      category: "workshop",
      description:
        "Learn the fundamentals of mobile app development with industry experts.",
      image:
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Mobile", "Development", "Workshop"],
      price: "$75",
      organizer: "Dev Academy",
      isFeatured: false,
      isBookmarked: false,
    },
  ];

  const categories = [
    { value: "all", label: "All Events" },
    { value: "competition", label: "Competitions" },
    { value: "workshop", label: "Workshops" },
    { value: "networking", label: "Networking" },
    { value: "conference", label: "Conferences" },
    { value: "bootcamp", label: "Bootcamps" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleBookmark = (eventId: number) => {
    // In a real app, this would update the backend
    console.log("Toggle bookmark for event:", eventId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Events
          </h1>
          <p className="text-gray-600">
            Join workshops, competitions, and networking events to grow your
            startup.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </Button>
        </div>

        {/* Featured Events */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents
              .filter((event) => event.isFeatured)
              .map((event) => (
                <Card
                  key={event.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 bg-white/90 hover:bg-white"
                        onClick={() => toggleBookmark(event.id)}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            event.isBookmarked
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }`}
                        />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 bg-white/90 hover:bg-white"
                      >
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-[#00BFCB] text-white">
                      Featured
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Users className="w-3 h-3" />
                        <span>
                          {event.attendees}/{event.maxAttendees}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-[#00BFCB] transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="text-lg font-semibold text-[#00BFCB]">
                        {event.price}
                      </div>
                      <Button className="bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white">
                        RSVP Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex space-x-1">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-6 h-6 bg-white/90 hover:bg-white"
                      onClick={() => toggleBookmark(event.id)}
                    >
                      <Heart
                        className={`w-3 h-3 ${
                          event.isBookmarked
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </Button>
                  </div>
                  {event.isFeatured && (
                    <Badge className="absolute top-2 left-2 bg-[#00BFCB] text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="w-3 h-3" />
                      <span>
                        {event.attendees}/{event.maxAttendees}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-[#00BFCB] transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-1 pt-2 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <div className="text-lg font-semibold text-[#00BFCB]">
                      {event.price}
                    </div>
                    <Button
                      size="sm"
                      className="bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white"
                    >
                      RSVP
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No events found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

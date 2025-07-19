"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Search,
  Filter,
  Grid,
  List,
  Plus,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Global Startup Summit 2024",
    description:
      "Join entrepreneurs, investors, and innovators from around the world for three days of networking, learning, and collaboration.",
    date: "March 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco, CA",
    type: "Conference",
    price: "$299",
    attendees: 1500,
    maxAttendees: 2000,
    image: "🌍",
    tags: ["Networking", "Innovation", "Global"],
    organizer: "StartupEco",
    status: "open",
  },
  {
    id: 2,
    title: "AI in Business Workshop",
    description:
      "Learn how to integrate artificial intelligence into your business operations with hands-on workshops and expert guidance.",
    date: "March 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual",
    type: "Workshop",
    price: "Free",
    attendees: 450,
    maxAttendees: 500,
    image: "🤖",
    tags: ["AI", "Technology", "Workshop"],
    organizer: "TechMentors",
    status: "open",
  },
  {
    id: 3,
    title: "Founder's Breakfast Meetup",
    description:
      "Casual networking breakfast for startup founders and entrepreneurs. Share experiences and build connections.",
    date: "March 25, 2024",
    time: "8:00 AM - 10:00 AM",
    location: "Austin, TX",
    type: "Networking",
    price: "$25",
    attendees: 45,
    maxAttendees: 50,
    image: "🥐",
    tags: ["Networking", "Founders", "Local"],
    organizer: "Austin Startup Hub",
    status: "filling-fast",
  },
  {
    id: 4,
    title: "Funding Bootcamp",
    description:
      "Comprehensive 2-day program covering everything you need to know about raising capital for your startup.",
    date: "April 1-2, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "New York, NY",
    type: "Bootcamp",
    price: "$199",
    attendees: 180,
    maxAttendees: 200,
    image: "💰",
    tags: ["Funding", "Investment", "Education"],
    organizer: "Venture Academy",
    status: "open",
  },
  {
    id: 5,
    title: "Women in Tech Leadership Summit",
    description:
      "Empowering women leaders in technology with inspiring talks, panel discussions, and networking opportunities.",
    date: "April 8, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Seattle, WA",
    type: "Summit",
    price: "$149",
    attendees: 320,
    maxAttendees: 400,
    image: "👩‍💼",
    tags: ["Leadership", "Women", "Technology"],
    organizer: "WomenTech Alliance",
    status: "open",
  },
  {
    id: 6,
    title: "Pitch Competition Finals",
    description:
      "Watch the top 10 startups compete for $100K in funding. Network with investors and fellow entrepreneurs.",
    date: "April 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Los Angeles, CA",
    type: "Competition",
    price: "$50",
    attendees: 280,
    maxAttendees: 300,
    image: "🏆",
    tags: ["Pitch", "Competition", "Investment"],
    organizer: "LA Startup Scene",
    status: "sold-out",
  },
];

const eventTypes = [
  "All",
  "Conference",
  "Workshop",
  "Networking",
  "Bootcamp",
  "Summit",
  "Competition",
];
const locations = [
  "All",
  "Virtual",
  "San Francisco, CA",
  "New York, NY",
  "Austin, TX",
  "Seattle, WA",
  "Los Angeles, CA",
];

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilter = () => {
    let filtered = events;

    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (selectedType !== "All") {
      filtered = filtered.filter((event) => event.type === selectedType);
    }

    if (selectedLocation !== "All") {
      filtered = filtered.filter(
        (event) => event.location === selectedLocation
      );
    }

    setFilteredEvents(filtered);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-green-100 text-green-800">Open</Badge>;
      case "filling-fast":
        return (
          <Badge className="bg-orange-100 text-orange-800">Filling Fast</Badge>
        );
      case "sold-out":
        return <Badge className="bg-red-100 text-red-800">Sold Out</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              Events & Workshops
            </h1>
            <p className="text-lg text-gray-600">
              Discover upcoming events, workshops, and networking opportunities
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="border-0 shadow-md mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search events, topics, or organizers..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <Button
                    onClick={handleFilter}
                    className="bg-teal-primary hover:bg-teal-primary/90"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>

                  <div className="flex border rounded-md">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-teal-primary" : ""}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "bg-teal-primary" : ""}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredEvents.length} events
            </p>
            <Button
              variant="outline"
              className="border-magenta-primary text-magenta-primary hover:bg-magenta-primary hover:text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Submit Event
            </Button>
          </div>

          {/* Events Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className={`border-0 shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                {viewMode === "grid" ? (
                  <>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-4xl">{event.image}</div>
                        <div className="flex flex-col items-end space-y-1">
                          {getStatusBadge(event.status)}
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-gray-600 line-clamp-2">
                        {event.description}
                      </CardDescription>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2 text-gray-500">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Users className="h-4 w-4" />
                          <span>
                            {event.attendees}/{event.maxAttendees} attending
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {event.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs bg-gray-50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-semibold text-teal-primary">
                          {event.price}
                        </span>
                        <Button
                          size="sm"
                          className="bg-teal-primary hover:bg-teal-primary/90"
                          disabled={event.status === "sold-out"}
                        >
                          {event.status === "sold-out"
                            ? "Sold Out"
                            : "Register"}
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="p-6 flex items-center space-x-6 w-full">
                    <div className="text-4xl">{event.image}</div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(event.status)}
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {event.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{event.date}</span>
                        <span>{event.location}</span>
                        <span>
                          {event.attendees}/{event.maxAttendees} attending
                        </span>
                        <span className="font-semibold text-teal-primary">
                          {event.price}
                        </span>
                      </div>
                    </div>
                    <Button
                      className="bg-teal-primary hover:bg-teal-primary/90"
                      disabled={event.status === "sold-out"}
                    >
                      {event.status === "sold-out" ? "Sold Out" : "Register"}
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No events found matching your criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("All");
                  setSelectedLocation("All");
                  setFilteredEvents(events);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

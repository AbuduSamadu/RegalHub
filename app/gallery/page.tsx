"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Filter,
  Grid,
  List,
  Calendar,
  MapPin,
  Play,
  Download,
  Share,
  Heart,
  Eye,
} from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "Global Startup Summit 2024 - Opening Keynote",
    type: "video",
    event: "Global Startup Summit 2024",
    date: "March 15, 2024",
    location: "San Francisco, CA",
    thumbnail:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 1250,
    likes: 89,
    tags: ["Keynote", "Innovation", "Leadership"],
    description:
      "Inspiring opening keynote about the future of entrepreneurship",
  },
  {
    id: 2,
    title: "AI Workshop - Hands-on Demo",
    type: "image",
    event: "AI in Business Workshop",
    date: "March 20, 2024",
    location: "Virtual",
    thumbnail:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 890,
    likes: 67,
    tags: ["AI", "Workshop", "Technology"],
    description: "Participants working on AI integration projects",
  },
  {
    id: 3,
    title: "Founder's Breakfast - Networking Session",
    type: "image",
    event: "Founder's Breakfast Meetup",
    date: "March 25, 2024",
    location: "Austin, TX",
    thumbnail:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 456,
    likes: 34,
    tags: ["Networking", "Founders", "Community"],
    description: "Entrepreneurs connecting over breakfast and coffee",
  },
  {
    id: 4,
    title: "Pitch Competition Finals - Winner Announcement",
    type: "video",
    event: "Pitch Competition Finals",
    date: "April 15, 2024",
    location: "Los Angeles, CA",
    thumbnail:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 2100,
    likes: 156,
    tags: ["Pitch", "Competition", "Winners"],
    description: "Exciting finale with the winning startup announcement",
  },
  {
    id: 5,
    title: "Women in Tech Leadership Panel",
    type: "image",
    event: "Women in Tech Leadership Summit",
    date: "April 8, 2024",
    location: "Seattle, WA",
    thumbnail:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 1340,
    likes: 98,
    tags: ["Leadership", "Women", "Panel"],
    description: "Inspiring panel discussion with women tech leaders",
  },
  {
    id: 6,
    title: "Funding Bootcamp - Investor Presentations",
    type: "video",
    event: "Funding Bootcamp",
    date: "April 1, 2024",
    location: "New York, NY",
    thumbnail:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 987,
    likes: 72,
    tags: ["Funding", "Investors", "Presentations"],
    description: "Startups presenting to potential investors",
  },
  {
    id: 7,
    title: "Innovation Showcase - Demo Day",
    type: "image",
    event: "Innovation Showcase",
    date: "February 28, 2024",
    location: "Boston, MA",
    thumbnail:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 756,
    likes: 45,
    tags: ["Innovation", "Demo", "Showcase"],
    description: "Startups demonstrating their innovative solutions",
  },
  {
    id: 8,
    title: "Mentorship Program Launch",
    type: "video",
    event: "Mentorship Program Launch",
    date: "February 15, 2024",
    location: "Chicago, IL",
    thumbnail:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 623,
    likes: 41,
    tags: ["Mentorship", "Launch", "Program"],
    description: "Official launch of our global mentorship program",
  },
];

const mediaTypes = ["All", "Image", "Video"];
const years = ["All", "2024", "2023", "2022"];
const events = [
  "All",
  "Global Startup Summit 2024",
  "AI in Business Workshop",
  "Pitch Competition Finals",
  "Women in Tech Leadership Summit",
];

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  const handleFilter = () => {
    let filtered = galleryItems;

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (selectedType !== "All") {
      filtered = filtered.filter(
        (item) => item.type === selectedType.toLowerCase()
      );
    }

    if (selectedYear !== "All") {
      filtered = filtered.filter((item) => item.date.includes(selectedYear));
    }

    if (selectedEvent !== "All") {
      filtered = filtered.filter((item) => item.event === selectedEvent);
    }

    setFilteredItems(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              Event Gallery
            </h1>
            <p className="text-lg text-gray-600">
              Explore photos and videos from our community events and programs
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
                      placeholder="Search gallery..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full lg:w-32">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    {mediaTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full lg:w-32">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Event" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    {events.map((event) => (
                      <SelectItem key={event} value={event}>
                        {event.length > 25
                          ? `${event.substring(0, 25)}...`
                          : event}
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
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredItems.length} items
            </p>
          </div>

          {/* Gallery Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }
          >
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card
                    className={`border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                  >
                    {viewMode === "grid" ? (
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            {item.type === "video" && (
                              <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            )}
                          </div>
                          <div className="absolute top-2 right-2">
                            <Badge
                              className={
                                item.type === "video"
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                              }
                            >
                              {item.type === "video" ? "Video" : "Photo"}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4 space-y-2">
                          <h3 className="font-semibold text-sm line-clamp-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{item.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="h-3 w-3" />
                                <span>{item.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    ) : (
                      <CardContent className="p-4 flex items-center space-x-4 w-full">
                        <div className="relative">
                          <Image
                            src={item.thumbnail}
                              alt={item.title}
                              width={20}
                              height={20}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Play className="h-6 w-6 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{item.title}</h3>
                            <Badge
                              className={
                                item.type === "video"
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                              }
                            >
                              {item.type === "video" ? "Video" : "Photo"}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{item.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{item.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{item.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span>{item.likes}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </DialogTrigger>

                <DialogContent
                  className="max-w-4xl bg-white border border-gray-200 shadow-lg rounded-lg"
                >
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                          <Play className="h-16 w-16 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4 text-gray-500" />
                        <span>{item.views} views</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-gray-500" />
                        <span>{item.likes} likes</span>
                      </div>
                    </div>

                    <p className="text-gray-600">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button className="bg-teal-primary hover:bg-teal-primary/90">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline">
                        <Share className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline">
                        <Heart className="h-4 w-4 mr-2" />
                        Like
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No gallery items found matching your criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("All");
                  setSelectedYear("All");
                  setSelectedEvent("All");
                  setFilteredItems(galleryItems);
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

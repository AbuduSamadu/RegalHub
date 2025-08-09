"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
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
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Bookmark,
  Share2,
  DollarSign,
  Star,
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  attendees: number;
  maxAttendees: number;
  price: string;
  status: string;
  image: string;
  tags: string[];
  rating: number;
  organizer: string;
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Startup Pitch Night",
    description:
      "Watch promising startups pitch their ideas to a panel of experienced investors and get valuable feedback on their business models.",
    date: "2024-02-15",
    time: "6:00 PM - 9:00 PM",
    location: "Innovation Hub, San Francisco",
    type: "Pitch Event",
    attendees: 150,
    maxAttendees: 200,
    price: "Free",
    status: "Open",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Networking", "Pitching", "Investment"],
    rating: 4.8,
    organizer: "StartupEco",
  },
  {
    id: "2",
    title: "AI & Machine Learning Workshop",
    description:
      "Hands-on workshop covering the latest trends in AI and ML for startup applications. Learn practical implementation strategies.",
    date: "2024-02-20",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Campus, Austin",
    type: "Workshop",
    attendees: 85,
    maxAttendees: 100,
    price: "$49",
    status: "Filling Fast",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["AI", "Technology", "Learning"],
    rating: 4.9,
    organizer: "AI Collective",
  },
  {
    id: "3",
    title: "Founder's Networking Mixer",
    description:
      "Connect with fellow entrepreneurs, share experiences, and build meaningful relationships in a relaxed atmosphere.",
    date: "2024-02-25",
    time: "7:00 PM - 10:00 PM",
    location: "Rooftop Lounge, NYC",
    type: "Networking",
    attendees: 120,
    maxAttendees: 150,
    price: "$25",
    status: "Open",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Networking", "Community", "Social"],
    rating: 4.7,
    organizer: "Founder Network",
  },
  {
    id: "4",
    title: "FinTech Innovation Summit",
    description:
      "Explore the future of financial technology with industry leaders and innovative startups reshaping the financial landscape.",
    date: "2024-03-05",
    time: "9:00 AM - 6:00 PM",
    location: "Convention Center, Boston",
    type: "Conference",
    attendees: 45,
    maxAttendees: 500,
    price: "$199",
    status: "Open",
    image:
      "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["FinTech", "Innovation", "Conference"],
    rating: 4.6,
    organizer: "FinTech Alliance",
  },
  {
    id: "5",
    title: "Women in Tech Leadership",
    description:
      "Empowering female entrepreneurs with leadership skills, networking opportunities, and success strategies from industry veterans.",
    date: "2024-03-10",
    time: "2:00 PM - 5:00 PM",
    location: "Business Center, Seattle",
    type: "Panel Discussion",
    attendees: 200,
    maxAttendees: 200,
    price: "Free",
    status: "Sold Out",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Leadership", "Women", "Empowerment"],
    rating: 4.9,
    organizer: "Women Tech Leaders",
  },
  {
    id: "6",
    title: "Blockchain Development Bootcamp",
    description:
      "Intensive 3-day bootcamp covering blockchain fundamentals, smart contracts, and DeFi applications for developers.",
    date: "2024-03-15",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Hub, Denver",
    type: "Bootcamp",
    attendees: 75,
    maxAttendees: 100,
    price: "$299",
    status: "Open",
    image:
      "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Blockchain", "Development", "Bootcamp"],
    rating: 4.8,
    organizer: "Blockchain Academy",
  },
];

const eventTypes = [
  "All",
  "Pitch Event",
  "Workshop",
  "Networking",
  "Conference",
  "Panel Discussion",
  "Bootcamp",
];
const statuses = ["All", "Open", "Filling Fast", "Sold Out"];

export function EventsDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [bookmarkedEvents, setBookmarkedEvents] = useState<Set<string>>(
    new Set()
  );

  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesType = selectedType === "All" || event.type === selectedType;
      const matchesStatus =
        selectedStatus === "All" || event.status === selectedStatus;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchTerm, selectedType, selectedStatus]);

  const toggleBookmark = (eventId: string) => {
    setBookmarkedEvents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-700 border-green-200";
      case "Filling Fast":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Sold Out":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Pitch Event":
        return "bg-purple-100 text-purple-700";
      case "Workshop":
        return "bg-blue-100 text-blue-700";
      case "Networking":
        return "bg-indigo-100 text-indigo-700";
      case "Conference":
        return "bg-green-100 text-green-700";
      case "Panel Discussion":
        return "bg-pink-100 text-pink-700";
      case "Bootcamp":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Search and Filters */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search events by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-0"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                Filter by:
              </span>
            </div>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 text-center"
        >
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredEvents.length}
            </span>{" "}
            events
          </p>
        </motion.div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedType}-${selectedStatus}-${searchTerm}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Event Image */}
                  <div className="relative">
                    <div
                      className="h-48 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url(${event.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleBookmark(event.id)}
                          className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                            bookmarkedEvents.has(event.id)
                              ? "bg-yellow-500 text-white"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                        >
                          <Bookmark
                            className={`w-5 h-5 ${
                              bookmarkedEvents.has(event.id)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        >
                          <Share2 className="w-5 h-5" />
                        </motion.button>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${getStatusColor(
                            event.status
                          )} border font-medium`}
                        >
                          {event.status}
                        </Badge>
                      </div>

                      {/* Date */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {new Date(event.date).getDate()}
                          </div>
                          <div className="text-sm text-gray-600 uppercase">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "short",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {event.title}
                      </CardTitle>
                      <Badge
                        className={`${getTypeColor(
                          event.type
                        )} text-xs font-medium ml-2 shrink-0`}
                      >
                        {event.type}
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Event Details */}
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4 text-green-500" />
                          <span>
                            {event.attendees}/{event.maxAttendees} attending
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{
                            width: `${
                              (event.attendees / event.maxAttendees) * 100
                            }%`,
                          }}
                        />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(event.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {event.rating}
                        </span>
                        <span className="text-sm text-gray-400">
                          • {event.organizer}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" />
                          <span className="font-semibold text-gray-900">
                            {event.price}
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                            disabled={event.status === "Sold Out"}
                          >
                            {event.status === "Sold Out"
                              ? "Sold Out"
                              : "RSVP Now"}
                            {event.status !== "Sold Out" && (
                              <ArrowRight className="ml-1 h-4 w-4" />
                            )}
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No events found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find more events.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedType("All");
                setSelectedStatus("All");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

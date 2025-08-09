"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Bookmark,
  Share2,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function UpcomingEventss() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [bookmarkedEvents, setBookmarkedEvents] = useState<Set<string>>(
    new Set()
  );

  const events = [
    {
      id: "1",
      title: "Startup Pitch Night",
      description:
        "Watch promising startups pitch their ideas to a panel of experienced investors and get feedback.",
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
    },
    {
      id: "2",
      title: "AI & Machine Learning Workshop",
      description:
        "Hands-on workshop covering the latest trends in AI and ML for startup applications.",
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
    },
    {
      id: "3",
      title: "Founder's Networking Mixer",
      description:
        "Connect with fellow entrepreneurs, share experiences, and build meaningful relationships.",
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
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.05),transparent_50%)]" />
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-200/30 to-pink-200/30 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={cardVariants}>
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm"
            >
              📅 Upcoming Events
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Don&apos;t Miss Out on
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Amazing Events
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join workshops, networking events, and pitch competitions designed
              to accelerate your startup journey and connect you with the right
              people.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
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
                            bookmarkedEvents.has(event.id) ? "fill-current" : ""
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
                      <div>
                        <span className="text-sm text-gray-500">Price</span>
                        <div className="font-semibold text-gray-900">
                          {event.price}
                        </div>
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

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg bg-white border-2 hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              View All Events
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

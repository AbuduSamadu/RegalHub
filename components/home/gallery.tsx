"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Calendar,
  Users,
  Award,
  Lightbulb,
  Filter,
  Search,
  Play,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Events", icon: Calendar },
    { id: "workshops", label: "Workshops", icon: Lightbulb },
    { id: "networking", label: "Networking", icon: Users },
    { id: "competitions", label: "Competitions", icon: Award },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Global Startup Summit 2024",
      description:
        "The largest gathering of entrepreneurs, featuring 200+ speakers and 5000+ attendees from 50 countries.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "networking",
      type: "Conference",
      attendees: "5000+",
      duration: "3 Days",
      highlights: ["Keynote Speakers", "Investor Meetings", "Product Demos"],
      videoUrl: "#",
      isVideo: true,
    },
    {
      id: 2,
      title: "AI Innovation Workshop",
      description:
        "Hands-on workshop exploring the latest AI technologies and their applications in startup environments.",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "workshops",
      type: "Workshop",
      attendees: "150",
      duration: "6 Hours",
      highlights: ["Practical AI Tools", "Case Studies", "Expert Mentorship"],
      videoUrl: "#",
      isVideo: false,
    },
    {
      id: 3,
      title: "Pitch Competition Finals",
      description:
        "The ultimate showdown where 20 startups compete for $1M in funding and mentorship opportunities.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "competitions",
      type: "Competition",
      attendees: "1000+",
      duration: "4 Hours",
      highlights: ["$1M Prize Pool", "Live Judging", "Media Coverage"],
      videoUrl: "#",
      isVideo: true,
    },
    {
      id: 4,
      title: "Women in Tech Leadership",
      description:
        "Empowering female entrepreneurs with leadership skills, networking opportunities, and success strategies.",
      image:
        "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "networking",
      type: "Panel Discussion",
      attendees: "300",
      duration: "2 Hours",
      highlights: ["Female Leaders", "Success Stories", "Networking"],
      videoUrl: "#",
      isVideo: false,
    },
    {
      id: 5,
      title: "Blockchain Development Bootcamp",
      description:
        "Intensive 3-day bootcamp covering blockchain fundamentals, smart contracts, and DeFi applications.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "workshops",
      type: "Bootcamp",
      attendees: "100",
      duration: "3 Days",
      highlights: ["Smart Contracts", "DeFi Projects", "Certification"],
      videoUrl: "#",
      isVideo: false,
    },
    {
      id: 6,
      title: "Investor Speed Dating",
      description:
        "Fast-paced networking event connecting startups with potential investors in structured 5-minute meetings.",
      image:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "networking",
      type: "Networking",
      attendees: "200",
      duration: "3 Hours",
      highlights: ["50+ Investors", "Speed Meetings", "Follow-up Platform"],
      videoUrl: "#",
      isVideo: true,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
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
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-8">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-gray-700">
                Event Highlights
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Experience Our
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Amazing Events
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate workshops to global conferences, discover the events
              that are shaping the future of entrepreneurship and innovation.
            </p>
          </motion.div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              variants={filterVariants}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
              }`}
              whileHover={{ scale: activeFilter === filter.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <filter.icon className="w-5 h-5" />
              <span className="font-medium">{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              layout
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Video Play Button */}
                  {item.isVideo && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredItem === item.id ? 1 : 0,
                        scale: hoveredItem === item.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                    </motion.div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800 font-medium">
                      {item.type}
                    </Badge>
                  </div>

                  {/* External Link */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: hoveredItem === item.id ? 1 : 0,
                      scale: hoveredItem === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4"
                  >
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{item.attendees}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.highlights.map((highlight, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs bg-gray-50"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                      {item.isVideo ? "Watch Highlights" : "View Details"}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Do&apos;t Miss Our Upcoming Events
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of entrepreneurs, investors, and innovators at our
              next event. Early bird tickets are now available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl font-bold"
                >
                  View All Events
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 bg-white border-2 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 rounded-2xl font-bold"
                >
                  Get Notified
                  <Search className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

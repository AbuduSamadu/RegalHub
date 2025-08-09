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
  ArrowUpRight,
  MapPin,
  Users,
  TrendingUp,
  Star,
  Heart,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function FeaturedStartup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [likedStartups, setLikedStartups] = useState<Set<string>>(new Set());

  const startups = [
    {
      id: "1",
      name: "EcoTech Solutions",
      tagline: "Sustainable technology for a greener future",
      description:
        "Revolutionary clean energy solutions that reduce carbon footprint by 60% while cutting costs.",
      industry: "CleanTech",
      stage: "Series A",
      location: "San Francisco, CA",
      employees: "25-50",
      funding: "$2.5M",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["AI", "Sustainability", "IoT"],
      rating: 4.8,
      growth: "+150%",
    },
    {
      id: "2",
      name: "HealthAI",
      tagline: "AI-powered healthcare diagnostics",
      description:
        "Advanced machine learning algorithms for early disease detection and personalized treatment plans.",
      industry: "HealthTech",
      stage: "Seed",
      location: "Boston, MA",
      employees: "10-25",
      funding: "$1.2M",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["AI", "Healthcare", "ML"],
      rating: 4.9,
      growth: "+200%",
    },
    {
      id: "3",
      name: "EduConnect",
      tagline: "Connecting students with global opportunities",
      description:
        "Platform bridging the gap between students and international educational opportunities.",
      industry: "EdTech",
      stage: "Pre-Seed",
      location: "Austin, TX",
      employees: "5-10",
      funding: "$500K",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Education", "Global", "Platform"],
      rating: 4.7,
      growth: "+120%",
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

  const toggleLike = (startupId: string) => {
    setLikedStartups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(startupId)) {
        newSet.delete(startupId);
      } else {
        newSet.add(startupId);
      }
      return newSet;
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
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
          <motion.div variants={cardVariants}>
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm"
            >
              ⭐ Featured Startups
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Rising Stars
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative startups that are reshaping industries and
              creating the future. Each one handpicked for their potential and
              impact.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {startups.map((startup, index) => (
            <motion.div
              key={startup.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Header with Logo and Like Button */}
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${startup.logo})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleLike(startup.id)}
                        className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                          likedStartups.has(startup.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            likedStartups.has(startup.id) ? "fill-current" : ""
                          }`}
                        />
                      </motion.button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-medium">
                            {startup.rating}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-green-400">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {startup.growth}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {startup.name}
                      </CardTitle>
                      <p className="text-gray-600 text-sm mt-1">
                        {startup.tagline}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`text-xs font-medium ${
                        startup.stage === "Series A"
                          ? "bg-green-100 text-green-700"
                          : startup.stage === "Seed"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {startup.stage}
                    </Badge>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {startup.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {startup.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{startup.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{startup.employees}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-sm text-gray-500">Funding</span>
                        <div className="font-semibold text-gray-900">
                          {startup.funding}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          View Details
                          <ArrowUpRight className="ml-1 h-4 w-4" />
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
              className="px-8 py-6 text-lg bg-white/80 backdrop-blur-sm border-2 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              Explore All Startups
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

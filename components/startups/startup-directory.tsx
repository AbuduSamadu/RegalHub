"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  MapPin,
  Users,
  TrendingUp,
  ArrowUpRight,
  Star,
  Heart,
  Bookmark,
  ExternalLink,
  Building,
  Calendar,
  DollarSign,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Startup } from "@/response-types";

// Mock data for startups
const mockStartups: Startup[] = [
  {
    id: "1",
    name: "EcoTech Solutions",
    tagline: "Sustainable technology for a greener future",
    description:
      "Revolutionary clean energy solutions that reduce carbon footprint by 60% while cutting operational costs. Our AI-powered platform optimizes energy consumption for businesses.",
    industry: "CleanTech",
    stage: "Series A",
    location: "San Francisco, CA",
    employees: "25-50",
    funding: "$2.5M",
    founded: "2022",
    website: "https://ecotech.example.com",
    logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["AI", "Sustainability", "IoT", "Energy"],
    founderId: "founder1",
    createdAt: new Date("2022-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "HealthAI",
    tagline: "AI-powered healthcare diagnostics",
    description:
      "Advanced machine learning algorithms for early disease detection and personalized treatment plans. Helping doctors make better decisions faster.",
    industry: "HealthTech",
    stage: "Seed",
    location: "Boston, MA",
    employees: "10-25",
    funding: "$1.2M",
    founded: "2023",
    website: "https://healthai.example.com",
    logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["AI", "Healthcare", "ML", "Diagnostics"],
    founderId: "founder2",
    createdAt: new Date("2023-03-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: "3",
    name: "EduConnect",
    tagline: "Connecting students with global opportunities",
    description:
      "Platform bridging the gap between students and international educational opportunities. Making quality education accessible worldwide.",
    industry: "EdTech",
    stage: "Pre-Seed",
    location: "Austin, TX",
    employees: "5-10",
    funding: "$500K",
    founded: "2023",
    website: "https://educonnect.example.com",
    logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Education", "Global", "Platform", "Students"],
    founderId: "founder3",
    createdAt: new Date("2023-06-20"),
    updatedAt: new Date("2024-01-05"),
  },
  {
    id: "4",
    name: "FinFlow",
    tagline: "Smart financial management for SMEs",
    description:
      "Automated bookkeeping and financial insights for small and medium enterprises. Simplifying complex financial operations with AI.",
    industry: "FinTech",
    stage: "Series A",
    location: "New York, NY",
    employees: "50-100",
    funding: "$5M",
    founded: "2021",
    website: "https://finflow.example.com",
    logo: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["FinTech", "AI", "SME", "Automation"],
    founderId: "founder4",
    createdAt: new Date("2021-09-15"),
    updatedAt: new Date("2024-01-12"),
  },
  {
    id: "5",
    name: "AgriSmart",
    tagline: "Precision agriculture through IoT",
    description:
      "IoT sensors and data analytics helping farmers optimize crop yields while reducing water usage and environmental impact.",
    industry: "AgTech",
    stage: "Seed",
    location: "Denver, CO",
    employees: "15-25",
    funding: "$800K",
    founded: "2022",
    website: "https://agrismart.example.com",
    logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["IoT", "Agriculture", "Analytics", "Sustainability"],
    founderId: "founder5",
    createdAt: new Date("2022-11-08"),
    updatedAt: new Date("2024-01-08"),
  },
  {
    id: "6",
    name: "CyberShield",
    tagline: "Next-gen cybersecurity solutions",
    description:
      "AI-driven cybersecurity platform protecting businesses from advanced threats with real-time monitoring and automated response.",
    industry: "Cybersecurity",
    stage: "Series A",
    location: "Seattle, WA",
    employees: "30-50",
    funding: "$3.2M",
    founded: "2021",
    website: "https://cybershield.example.com",
    logo: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Cybersecurity", "AI", "Enterprise", "Monitoring"],
    founderId: "founder6",
    createdAt: new Date("2021-12-03"),
    updatedAt: new Date("2024-01-03"),
  },
];

const industries = [
  "All",
  "CleanTech",
  "HealthTech",
  "EdTech",
  "FinTech",
  "AgTech",
  "Cybersecurity",
];
const stages = ["All", "Pre-Seed", "Seed", "Series A", "Series B", "Growth"];
const locations = [
  "All",
  "San Francisco, CA",
  "Boston, MA",
  "Austin, TX",
  "New York, NY",
  "Denver, CO",
  "Seattle, WA",
];

export function StartupDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [likedStartups, setLikedStartups] = useState<Set<string>>(new Set());
  const [bookmarkedStartups, setBookmarkedStartups] = useState<Set<string>>(
    new Set()
  );

  const filteredStartups = useMemo(() => {
    return mockStartups.filter((startup) => {
      const matchesSearch =
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesIndustry =
        selectedIndustry === "All" || startup.industry === selectedIndustry;
      const matchesStage =
        selectedStage === "All" || startup.stage === selectedStage;
      const matchesLocation =
        selectedLocation === "All" || startup.location === selectedLocation;

      return (
        matchesSearch && matchesIndustry && matchesStage && matchesLocation
      );
    });
  }, [searchTerm, selectedIndustry, selectedStage, selectedLocation]);

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

  const toggleBookmark = (startupId: string) => {
    setBookmarkedStartups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(startupId)) {
        newSet.delete(startupId);
      } else {
        newSet.add(startupId);
      }
      return newSet;
    });
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Pre-Seed":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Seed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Series A":
        return "bg-green-100 text-green-700 border-green-200";
      case "Series B":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Growth":
        return "bg-indigo-100 text-indigo-700 border-indigo-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
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
      <div className="container">
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
                placeholder="Search startups by name, description, or tags..."
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

            <Select
              value={selectedIndustry}
              onValueChange={setSelectedIndustry}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                {stages.map((stage) => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger className="w-48">
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
              {filteredStartups.length}
            </span>{" "}
            startups
          </p>
        </motion.div>

        {/* Startup Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedIndustry}-${selectedStage}-${selectedLocation}-${searchTerm}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStartups.map((startup) => (
              <motion.div
                key={startup.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Header with Logo */}
                  <div className="relative">
                    <div
                      className="h-48 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url(${startup.logo})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2">
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
                              likedStartups.has(startup.id)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleBookmark(startup.id)}
                          className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                            bookmarkedStartups.has(startup.id)
                              ? "bg-yellow-500 text-white"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                        >
                          <Bookmark
                            className={`w-5 h-5 ${
                              bookmarkedStartups.has(startup.id)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        </motion.button>
                      </div>

                      {/* Stage Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${getStageColor(
                            startup.stage
                          )} border font-medium`}
                        >
                          {startup.stage}
                        </Badge>
                      </div>

                      {/* Founded Year */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                          <Calendar className="w-4 h-4" />
                          {startup.founded}
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                        {startup.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="text-xs bg-gray-50 shrink-0 ml-2"
                      >
                        {startup.industry}
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm font-medium mb-2">
                      {startup.tagline}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {startup.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span className="truncate">{startup.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4 text-green-500" />
                          <span>{startup.employees}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <DollarSign className="w-4 h-4 text-purple-500" />
                          <span>{startup.funding}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Building className="w-4 h-4 text-indigo-500" />
                          <span>{startup.stage}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {startup.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {startup.tags.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-gray-50 text-gray-600"
                          >
                            +{startup.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-700">
                              4.8
                            </span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-600">
                            Featured
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs px-3 py-1 h-8"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Visit
                            </Button>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="sm"
                              className="text-xs px-3 py-1 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            >
                              Connect
                              <ArrowUpRight className="w-3 h-3 ml-1" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredStartups.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No startups found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find more
              startups.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedIndustry("All");
                setSelectedStage("All");
                setSelectedLocation("All");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Load More */}
        {filteredStartups.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
            >
              Load More Startups
              <TrendingUp className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

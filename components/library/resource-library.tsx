"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Download,
  BookOpen,
  FileText,
  Video,
  Headphones,
  Code,
  Calculator,
  Presentation as PresentationChart,
  Star,
  Eye,
  Clock,
  ArrowRight,
  Play,
  ExternalLink,
} from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  format: string;
  difficulty: string;
  duration: string;
  downloads: number;
  rating: number;
  views: number;
  image: string;
  tags: string[];
  author: string;
  publishDate: string;
  isPremium: boolean;
}

const mockResources: Resource[] = [
  {
    id: "1",
    title: "Complete Business Plan Template",
    description:
      "Comprehensive business plan template with financial projections, market analysis, and investor pitch sections.",
    category: "Templates",
    type: "Business Plan",
    format: "PDF + Excel",
    difficulty: "Beginner",
    duration: "2-3 hours",
    downloads: 15420,
    rating: 4.8,
    views: 45600,
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Business Plan", "Template", "Funding", "Strategy"],
    author: "StartupEco Team",
    publishDate: "2024-01-15",
    isPremium: false,
  },
  {
    id: "2",
    title: "Fundraising Masterclass",
    description:
      "Complete video course on raising capital from seed to Series A, featuring successful founders and VCs.",
    category: "Courses",
    type: "Video Course",
    format: "Video",
    difficulty: "Intermediate",
    duration: "4 hours",
    downloads: 8900,
    rating: 4.9,
    views: 23400,
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Fundraising", "Investment", "VC", "Pitch"],
    author: "Sarah Chen",
    publishDate: "2024-01-10",
    isPremium: true,
  },
  {
    id: "3",
    title: "Startup Legal Checklist",
    description:
      "Essential legal documents and compliance checklist for early-stage startups, reviewed by top startup lawyers.",
    category: "Guides",
    type: "Legal Guide",
    format: "PDF",
    difficulty: "Beginner",
    duration: "1 hour",
    downloads: 12300,
    rating: 4.7,
    views: 34200,
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Legal", "Compliance", "Incorporation", "Contracts"],
    author: "Legal Experts",
    publishDate: "2024-01-08",
    isPremium: false,
  },
  {
    id: "4",
    title: "Growth Hacking Toolkit",
    description:
      "Collection of growth hacking strategies, templates, and tools used by successful startups to scale rapidly.",
    category: "Tools",
    type: "Toolkit",
    format: "Multiple",
    difficulty: "Advanced",
    duration: "3-5 hours",
    downloads: 6750,
    rating: 4.6,
    views: 18900,
    image:
      "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Growth", "Marketing", "Analytics", "Scaling"],
    author: "Growth Team",
    publishDate: "2024-01-05",
    isPremium: true,
  },
  {
    id: "5",
    title: "Financial Modeling Spreadsheet",
    description:
      "Advanced financial modeling template with automated calculations for revenue projections and unit economics.",
    category: "Templates",
    type: "Financial Model",
    format: "Excel",
    difficulty: "Advanced",
    duration: "2-4 hours",
    downloads: 9800,
    rating: 4.8,
    views: 28700,
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Finance", "Modeling", "Projections", "Metrics"],
    author: "Finance Team",
    publishDate: "2024-01-03",
    isPremium: false,
  },
  {
    id: "6",
    title: "Product Management Podcast Series",
    description:
      "Weekly podcast featuring product management insights from successful startup founders and product leaders.",
    category: "Podcasts",
    type: "Audio Series",
    format: "Audio",
    difficulty: "Intermediate",
    duration: "30 min/episode",
    downloads: 4200,
    rating: 4.5,
    views: 12600,
    image:
      "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Product", "Management", "Strategy", "Leadership"],
    author: "Product Experts",
    publishDate: "2024-01-01",
    isPremium: false,
  },
];

const categories = [
  "All",
  "Templates",
  "Courses",
  "Guides",
  "Tools",
  "Podcasts",
];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const formats = ["All", "PDF", "Video", "Audio", "Excel", "Multiple"];

export function ResourceLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [bookmarkedResources, setBookmarkedResources] = useState<Set<string>>(
    new Set()
  );

  const filteredResources = useMemo(() => {
    return mockResources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "All" ||
        resource.difficulty === selectedDifficulty;
      const matchesFormat =
        selectedFormat === "All" || resource.format.includes(selectedFormat);

      return (
        matchesSearch && matchesCategory && matchesDifficulty && matchesFormat
      );
    });
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedFormat]);

  const toggleBookmark = (resourceId: string) => {
    setBookmarkedResources((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(resourceId)) {
        newSet.delete(resourceId);
      } else {
        newSet.add(resourceId);
      }
      return newSet;
    });
  };

  const getFormatIcon = (format: string) => {
    if (format.includes("PDF")) return FileText;
    if (format.includes("Video")) return Video;
    if (format.includes("Audio")) return Headphones;
    if (format.includes("Excel")) return Calculator;
    if (format.includes("Multiple")) return PresentationChart;
    return FileText;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200";
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
                placeholder="Search resources by title, description, or tags..."
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
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedDifficulty}
              onValueChange={setSelectedDifficulty}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedFormat} onValueChange={setSelectedFormat}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Format" />
              </SelectTrigger>
              <SelectContent>
                {formats.map((format) => (
                  <SelectItem key={format} value={format}>
                    {format}
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
              {filteredResources.length}
            </span>{" "}
            resources
          </p>
        </motion.div>

        {/* Resources Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedDifficulty}-${selectedFormat}-${searchTerm}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource) => {
              const FormatIcon = getFormatIcon(resource.format);

              return (
                <motion.div
                  key={resource.id}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="group"
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Resource Image */}
                    <div className="relative">
                      <div
                        className="h-48 bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url(${resource.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Format Icon */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                            <FormatIcon className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>

                        {/* Premium Badge */}
                        {resource.isPremium && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-yellow-500 text-white border-0 font-medium">
                              Premium
                            </Badge>
                          </div>
                        )}

                        {/* Play Button for Videos */}
                        {resource.format.includes("Video") && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                              <Play className="w-8 h-8 text-blue-600 ml-1" />
                            </div>
                          </motion.div>
                        )}

                        {/* Stats */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                          <div className="flex items-center gap-4 text-white text-sm">
                            <div className="flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              <span>{resource.downloads.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{resource.views.toLocaleString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-white text-sm">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{resource.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {resource.title}
                        </CardTitle>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs bg-gray-50">
                          {resource.category}
                        </Badge>
                        <Badge
                          className={`${getDifficultyColor(
                            resource.difficulty
                          )} text-xs border font-medium`}
                        >
                          {resource.difficulty}
                        </Badge>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {resource.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {/* Details */}
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span>{resource.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FormatIcon className="w-4 h-4 text-green-500" />
                            <span>{resource.format}</span>
                          </div>
                        </div>

                        {/* Author & Date */}
                        <div className="text-sm text-gray-500">
                          <div>By {resource.author}</div>
                          <div>
                            {new Date(
                              resource.publishDate
                            ).toLocaleDateString()}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {resource.tags.length > 3 && (
                            <Badge
                              variant="outline"
                              className="text-xs bg-gray-50 text-gray-600"
                            >
                              +{resource.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="flex gap-2 pt-4 border-t border-gray-100">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1"
                          >
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                              <Download className="w-4 h-4 mr-2" />
                              {resource.isPremium ? "Get Premium" : "Download"}
                            </Button>
                          </motion.div>

                          <Button variant="outline" size="sm" className="px-3">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No resources found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find more
              resources.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedDifficulty("All");
                setSelectedFormat("All");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Something Specific?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Can&apos;t find what you&apos;re looking for? Request a custom
              resource or contribute to our library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                Request Resource
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                Contribute Content
                <Code className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

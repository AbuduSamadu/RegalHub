"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Download,
  Share2,
  X,
  ZoomIn,
  Heart,
  Eye,
  Grid3X3,
  List,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  category: string;
  year: string;
  date: string;
  location: string;
  attendees: number;
  photographer: string;
  tags: string[];
  dimensions: { width: number; height: number };
  size: string;
  views: number;
  likes: number;
}

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const [likedImages, setLikedImages] = useState<number[]>([]);

  const itemsPerPage = 20;

  const galleryItems = [
    {
      id: 1,
      title: "Pitch Night 2024 Winners Celebration",
      description:
        "Celebrating the top 3 startups from our annual pitch competition with investors and mentors",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "events",
      year: "2024",
      date: "2024-12-15",
      location: "San Francisco, CA",
      attendees: 250,
      photographer: "Sarah Chen",
      tags: ["pitch", "competition", "winners", "celebration"],
      dimensions: { width: 1200, height: 800 },
      size: "2.4 MB",
      views: 1250,
      likes: 89,
    },
    {
      id: 2,
      title: "AI Workshop Deep Learning Session",
      description:
        "Hands-on workshop exploring deep learning applications in startup environments",
      image:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "workshops",
      year: "2024",
      date: "2024-11-20",
      location: "Virtual Event",
      attendees: 150,
      photographer: "Marcus Rodriguez",
      tags: ["ai", "workshop", "technology", "learning"],
      dimensions: { width: 1200, height: 900 },
      size: "3.1 MB",
      views: 890,
      likes: 67,
    },
    {
      id: 3,
      title: "Founder Networking Mixer NYC",
      description:
        "Monthly networking event bringing together startup founders from across New York",
      image:
        "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "networking",
      year: "2024",
      date: "2024-11-10",
      location: "New York, NY",
      attendees: 80,
      photographer: "Emily Watson",
      tags: ["networking", "founders", "community", "nyc"],
      dimensions: { width: 1200, height: 600 },
      size: "1.8 MB",
      views: 654,
      likes: 45,
    },
    {
      id: 4,
      title: "FinTech Innovation Summit Keynote",
      description:
        "Keynote presentation on the future of financial technology and blockchain integration",
      image:
        "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "conferences",
      year: "2024",
      date: "2024-10-15",
      location: "London, UK",
      attendees: 500,
      photographer: "Alex Johnson",
      tags: ["fintech", "innovation", "summit", "keynote"],
      dimensions: { width: 1200, height: 800 },
      size: "2.7 MB",
      views: 1890,
      likes: 156,
    },
    {
      id: 5,
      title: "Sustainable Startup Bootcamp Demo Day",
      description:
        "Final presentations from our intensive eco-friendly startup bootcamp participants",
      image:
        "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "bootcamps",
      year: "2024",
      date: "2024-09-20",
      location: "Berlin, Germany",
      attendees: 40,
      photographer: "Lisa Park",
      tags: ["sustainability", "bootcamp", "cleantech", "demo"],
      dimensions: { width: 1200, height: 1000 },
      size: "3.5 MB",
      views: 432,
      likes: 78,
    },
    {
      id: 6,
      title: "Mobile App Development Workshop",
      description:
        "Interactive coding session teaching React Native development for startups",
      image:
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "workshops",
      year: "2024",
      date: "2024-08-15",
      location: "Virtual Event",
      attendees: 120,
      photographer: "David Kim",
      tags: ["mobile", "development", "workshop", "coding"],
      dimensions: { width: 1200, height: 700 },
      size: "2.1 MB",
      views: 765,
      likes: 92,
    },
    {
      id: 7,
      title: "Healthcare Innovation Panel Discussion",
      description:
        "Expert panel discussing the future of healthcare technology and patient care",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "panels",
      year: "2024",
      date: "2024-07-10",
      location: "Boston, MA",
      attendees: 200,
      photographer: "Rachel Green",
      tags: ["healthcare", "panel", "innovation", "discussion"],
      dimensions: { width: 1200, height: 800 },
      size: "2.9 MB",
      views: 1123,
      likes: 134,
    },
    {
      id: 8,
      title: "Annual Startup Showcase Exhibition",
      description:
        "Comprehensive showcase featuring 50+ startups displaying their innovative solutions",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "showcases",
      year: "2024",
      date: "2024-06-20",
      location: "Austin, TX",
      attendees: 300,
      photographer: "Michael Brown",
      tags: ["showcase", "startups", "demo", "exhibition"],
      dimensions: { width: 1200, height: 900 },
      size: "3.2 MB",
      views: 2156,
      likes: 198,
    },
    {
      id: 9,
      title: "Women in Tech Leadership Conference",
      description:
        "Empowering conference focused on women entrepreneurs and tech leaders",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "conferences",
      year: "2024",
      date: "2024-05-15",
      location: "Seattle, WA",
      attendees: 400,
      photographer: "Jennifer Lee",
      tags: ["women", "tech", "empowerment", "leadership"],
      dimensions: { width: 1200, height: 800 },
      size: "2.6 MB",
      views: 1567,
      likes: 223,
    },
    {
      id: 10,
      title: "Blockchain & Web3 Innovation Lab",
      description:
        "Exploring blockchain applications and Web3 technologies for startup ecosystems",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "workshops",
      year: "2023",
      date: "2023-12-10",
      location: "Miami, FL",
      attendees: 100,
      photographer: "Carlos Martinez",
      tags: ["blockchain", "web3", "crypto", "innovation"],
      dimensions: { width: 1200, height: 1100 },
      size: "3.8 MB",
      views: 987,
      likes: 145,
    },
    {
      id: 11,
      title: "Global Startup Summit Opening Ceremony",
      description:
        "Grand opening of our international startup summit with delegates from 50+ countries",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "conferences",
      year: "2023",
      date: "2023-11-05",
      location: "Singapore",
      attendees: 800,
      photographer: "Yuki Tanaka",
      tags: ["global", "summit", "international", "opening"],
      dimensions: { width: 1200, height: 600 },
      size: "2.3 MB",
      views: 3245,
      likes: 287,
    },
    {
      id: 12,
      title: "Mentor Appreciation Gala Evening",
      description:
        "Special evening celebrating our dedicated mentors and their contributions to the ecosystem",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "appreciation",
      year: "2023",
      date: "2023-10-20",
      location: "Chicago, IL",
      attendees: 150,
      photographer: "Amanda Wilson",
      tags: ["mentors", "appreciation", "community", "gala"],
      dimensions: { width: 1200, height: 800 },
      size: "2.8 MB",
      views: 876,
      likes: 167,
    },
    // Add more items to demonstrate pagination
    ...Array.from({ length: 20 }, (_, i) => ({
      id: 13 + i,
      title: `Event ${13 + i} - Innovation Workshop`,
      description: `Description for event ${
        13 + i
      } showcasing various aspects of startup innovation`,
      image: `https://images.pexels.com/photos/${3184300 + i}/pexels-photo-${
        3184300 + i
      }.jpeg?auto=compress&cs=tinysrgb&w=1200`,
      thumbnail: `https://images.pexels.com/photos/${
        3184300 + i
      }/pexels-photo-${3184300 + i}.jpeg?auto=compress&cs=tinysrgb&w=400`,
      category: "workshops",
      year: i % 2 === 0 ? "2024" : "2023",
      date: `2024-0${(i % 9) + 1}-15`,
      location: "Various Locations",
      attendees: 50 + i * 10,
      photographer: "Various Photographers",
      tags: ["innovation", "workshop", "startup"],
      dimensions: { width: 1200, height: 800 },
      size: `${2 + (i % 3)}.${i % 10} MB`,
      views: 100 + i * 50,
      likes: 10 + i * 5,
    })),
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "events", label: "Events" },
    { value: "workshops", label: "Workshops" },
    { value: "conferences", label: "Conferences" },
    { value: "bootcamps", label: "Bootcamps" },
    { value: "networking", label: "Networking" },
    { value: "panels", label: "Panels" },
    { value: "showcases", label: "Showcases" },
    { value: "appreciation", label: "Appreciation" },
  ];

  const years = [
    { value: "all", label: "All Years" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ];

  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      selectedFilter === "all" || item.category === selectedFilter;
    const matchesYear = selectedYear === "all" || item.year === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextImage = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const toggleLike = (imageId: number) => {
    setLikedImages((prev) =>
      prev.includes(imageId)
        ? prev.filter((id) => id !== imageId)
        : [...prev, imageId]
    );
  };

  const getImageHeight = (index: number) => {
    if (viewMode === "grid") return "h-64";
    // Masonry-style varying heights
    const heights = ["h-48", "h-64", "h-80", "h-56", "h-72"];
    return heights[index % heights.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Event Gallery
          </h1>
          <p className="text-gray-600">
            Explore moments from our community events, workshops, and
            conferences.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                {years.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "masonry" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("masonry")}
                className="rounded-r-none"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing {paginatedItems.length} of {filteredItems.length} images
          </p>
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid gap-4 mb-8 ${
            viewMode === "masonry"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {paginatedItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
                  onClick={() => {
                    setSelectedImage(item);
                    setCarouselIndex(
                      filteredItems.findIndex((i) => i.id === item.id)
                    );
                  }}
                >
                  <CardContent>
                    <div
                      className={`relative ${getImageHeight(
                        index
                      )} overflow-hidden`}
                    >
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Overlay Icons */}
                      <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8 bg-white/90 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(item.id);
                          }}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              likedImages.includes(item.id)
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
                          <ZoomIn className="w-4 h-4 text-gray-600" />
                        </Button>
                      </div>

                      {/* Category Badge */}
                      <Badge className="absolute top-3 left-3 bg-[#00BFCB]/90 text-white text-xs">
                        {
                          categories.find((c) => c.value === item.category)
                            ?.label
                        }
                      </Badge>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between text-xs opacity-90">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{item.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-3 h-3" />
                              <span>{item.likes}</span>
                            </div>
                          </div>
                          <span>
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-7xl w-full h-[90vh] p-0">
                <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                  <DialogTitle></DialogTitle>
                  {/* Close button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-20 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => setSelectedImage(null)} // Reset selectedImage to null
                  >
                    <X className="w-5 h-5" />
                  </Button>

                  {/* Navigation buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>

                  {/* Main Image */}
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={filteredItems[carouselIndex]?.image}
                      fill
                      alt={filteredItems[carouselIndex]?.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Image Info Panel */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-white">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">
                            {filteredItems[carouselIndex]?.title}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {filteredItems[carouselIndex]?.description}
                          </p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-white hover:bg-white/20"
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                likedImages.includes(
                                  filteredItems[carouselIndex]?.id || 0
                                )
                                  ? "fill-red-500 text-red-500"
                                  : ""
                              }`}
                            />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-white hover:bg-white/20"
                          >
                            <Download className="w-5 h-5" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-white hover:bg-white/20"
                          >
                            <Share2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(
                              filteredItems[carouselIndex]?.date || ""
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{filteredItems[carouselIndex]?.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>
                            {filteredItems[carouselIndex]?.attendees} attendees
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>
                            {filteredItems[carouselIndex]?.views} views
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-wrap gap-2">
                          {filteredItems[carouselIndex]?.tags.map(
                            (tag, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs bg-white/20 text-white border-white/30"
                              >
                                #{tag}
                              </Badge>
                            )
                          )}
                        </div>
                        <div className="text-xs text-gray-400">
                          Photo by {filteredItems[carouselIndex]?.photographer}{" "}
                          • {filteredItems[carouselIndex]?.size}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {carouselIndex + 1} / {filteredItems.length}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="icon"
                  onClick={() => setCurrentPage(pageNum)}
                  className={
                    currentPage === pageNum
                      ? "bg-[#00BFCB] hover:bg-[#00BFCB]/90"
                      : ""
                  }
                >
                  {pageNum}
                </Button>
              );
            })}

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* No results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No images found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

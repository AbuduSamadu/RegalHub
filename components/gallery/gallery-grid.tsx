"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Users, 
  Play,
  Download,
  Heart,
  Share2,
  Eye,
  X
} from "lucide-react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  location: string;
  attendees?: number;
  isVideo?: boolean;
  likes: number;
  views: number;
}

const mockGalleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Global Startup Summit 2024",
    description: "The largest gathering of entrepreneurs featuring 200+ speakers and 5000+ attendees from 50 countries.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Conference",
    date: "2024-01-15",
    location: "San Francisco, CA",
    attendees: 5000,
    isVideo: true,
    likes: 342,
    views: 12500
  },
  {
    id: "2",
    title: "AI Innovation Workshop",
    description: "Hands-on workshop exploring the latest AI technologies and their applications in startup environments.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Workshop",
    date: "2024-01-10",
    location: "Boston, MA",
    attendees: 150,
    likes: 89,
    views: 3200
  },
  {
    id: "3",
    title: "Pitch Competition Finals",
    description: "The ultimate showdown where 20 startups compete for $1M in funding and mentorship opportunities.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Competition",
    date: "2024-01-08",
    location: "Austin, TX",
    attendees: 1000,
    isVideo: true,
    likes: 256,
    views: 8900
  },
  {
    id: "4",
    title: "Women in Tech Leadership",
    description: "Empowering female entrepreneurs with leadership skills and networking opportunities.",
    image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Networking",
    date: "2024-01-05",
    location: "New York, NY",
    attendees: 300,
    likes: 178,
    views: 5600
  },
  {
    id: "5",
    title: "Blockchain Development Bootcamp",
    description: "Intensive 3-day bootcamp covering blockchain fundamentals and smart contracts.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Workshop",
    date: "2024-01-03",
    location: "Seattle, WA",
    attendees: 100,
    likes: 134,
    views: 4200
  },
  {
    id: "6",
    title: "Investor Speed Dating",
    description: "Fast-paced networking event connecting startups with potential investors.",
    image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Networking",
    date: "2024-01-01",
    location: "Denver, CO",
    attendees: 200,
    isVideo: true,
    likes: 92,
    views: 2800
  }
];

const categories = ["All", "Conference", "Workshop", "Competition", "Networking"];

export function GalleryGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    return mockGalleryItems.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleLike = (itemId: string) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
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
                placeholder="Search gallery by title or description..."
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
              <SelectTrigger className="w-48">
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
              {filteredItems.length}
            </span>{" "}
            items
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Video Play Button */}
                    {item.isVideo && (
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

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(item.id);
                        }}
                        className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                          likedItems.has(item.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            likedItems.has(item.id) ? "fill-current" : ""
                          }`}
                        />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 font-medium">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                        </div>
                        {item.attendees && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{item.attendees}</span>
                          </div>
                        )}
                      </div>

                      <Button
                        size="sm"
                        variant="outline"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-96">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    fill
                  />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedItem.title}
                      </h2>
                      <Badge className="bg-blue-100 text-blue-700">
                        {selectedItem.category}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {selectedItem.likes}
                      </div>
                      <div className="text-sm text-gray-500">Likes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {selectedItem.views}
                      </div>
                      <div className="text-sm text-gray-500">Views</div>
                    </div>
                    {selectedItem.attendees && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {selectedItem.attendees}
                        </div>
                        <div className="text-sm text-gray-500">Attendees</div>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {new Date(selectedItem.date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">Date</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
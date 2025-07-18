"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Upload,
  Image as ImageIcon,
  Search,
  Edit,
  Trash2,
  Eye,
  Download,
  Plus,
  Grid3X3,
  List,
  Calendar,
  User,
} from "lucide-react";
import Image from "next/image";

export default function GalleryManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const images = [
    {
      id: 1,
      title: "Pitch Night 2024 Winners",
      url: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "events",
      uploadDate: "2024-12-15",
      size: "2.4 MB",
      dimensions: "1920x1080",
      views: 1250,
      downloads: 89,
      uploader: "Admin User",
      tags: ["pitch", "competition", "winners", "celebration"],
    },
    {
      id: 2,
      title: "AI Workshop Session",
      url: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "workshops",
      uploadDate: "2024-11-20",
      size: "3.1 MB",
      dimensions: "1920x1280",
      views: 890,
      downloads: 67,
      uploader: "Event Team",
      tags: ["ai", "workshop", "technology", "learning"],
    },
    {
      id: 3,
      title: "Networking Event NYC",
      url: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "networking",
      uploadDate: "2024-11-10",
      size: "1.8 MB",
      dimensions: "1920x1080",
      views: 654,
      downloads: 45,
      uploader: "NYC Team",
      tags: ["networking", "founders", "community", "nyc"],
    },
    {
      id: 4,
      title: "FinTech Summit Keynote",
      url: "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "conferences",
      uploadDate: "2024-10-15",
      size: "2.7 MB",
      dimensions: "1920x1080",
      views: 1890,
      downloads: 156,
      uploader: "Conference Team",
      tags: ["fintech", "innovation", "summit", "keynote"],
    },
    {
      id: 5,
      title: "Startup Showcase Demo",
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "showcases",
      uploadDate: "2024-09-20",
      size: "3.5 MB",
      dimensions: "1920x1280",
      views: 432,
      downloads: 78,
      uploader: "Showcase Team",
      tags: ["startup", "demo", "showcase", "innovation"],
    },
    {
      id: 6,
      title: "Mobile Dev Workshop",
      url: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "workshops",
      uploadDate: "2024-08-15",
      size: "2.1 MB",
      dimensions: "1920x1080",
      views: 765,
      downloads: 92,
      uploader: "Dev Team",
      tags: ["mobile", "development", "workshop", "coding"],
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "events", label: "Events" },
    { value: "workshops", label: "Workshops" },
    { value: "conferences", label: "Conferences" },
    { value: "networking", label: "Networking" },
    { value: "showcases", label: "Showcases" },
  ];

  const filteredImages = images.filter((image) => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "all" || image.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { label: "Total Images", value: "1,247", icon: ImageIcon },
    { label: "Total Views", value: "45.2K", icon: Eye },
    { label: "Downloads", value: "8.9K", icon: Download },
    { label: "Storage Used", value: "2.4 GB", icon: Upload },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gallery Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage event photos and media assets
          </p>
        </div>
        <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Upload Images
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-white border border-gray-200 shadow-lg rounded-lg">
            <DialogHeader>
              <DialogTitle>Upload New Images</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="images">Select Images</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    Drag and drop images here, or click to browse
                  </p>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("images")?.click()}
                  >
                    Choose Files
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="workshops">Workshops</SelectItem>
                    <SelectItem value="conferences">Conferences</SelectItem>
                    <SelectItem value="networking">Networking</SelectItem>
                    <SelectItem value="showcases">Showcases</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  placeholder="e.g., startup, innovation, demo"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsUploadModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  Upload Images
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[#FF6B35]" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and View Controls */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
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
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Images Grid/List */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Images ({filteredImages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative bg-white rounded-xl border shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-1">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8 text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-1">
                      {image.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{image.dimensions}</span>
                      <span>{image.size}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{image.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{image.downloads}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {
                          categories.find((c) => c.value === image.category)
                            ?.label
                        }
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    width={16}
                    height={16}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{image.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span>{image.dimensions}</span>
                      <span>{image.size}</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {new Date(image.uploadDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{image.uploader}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{image.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{image.downloads}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

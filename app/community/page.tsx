"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  MessageCircle,
  ThumbsUp,
  Eye,
  Clock,
  Search,
  Plus,
  Filter,
  TrendingUp,
  Users,
  MessageSquare,
} from "lucide-react";

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("recent");

  const discussions = [
    {
      id: 1,
      title: "How to validate your startup idea in 2025?",
      content:
        "I've been working on a new SaaS product for the past few months and I'm looking for advice on how to properly validate the idea before investing more time and resources...",
      author: {
        name: "Sarah Chen",
        avatar: "👩‍💼",
        role: "Founder",
        company: "TechFlow AI",
      },
      category: "validation",
      tags: ["validation", "startup", "advice"],
      upvotes: 24,
      replies: 12,
      views: 156,
      timeAgo: "2h ago",
      isPinned: false,
      isHot: true,
    },
    {
      id: 2,
      title: "Best practices for remote team management",
      content:
        "Our startup has grown to 15 remote employees across different time zones. What are some proven strategies for maintaining productivity and team cohesion?",
      author: {
        name: "Marcus Rodriguez",
        avatar: "👨‍💻",
        role: "CEO",
        company: "EcoGreen Solutions",
      },
      category: "management",
      tags: ["remote", "management", "team"],
      upvotes: 18,
      replies: 8,
      views: 89,
      timeAgo: "4h ago",
      isPinned: true,
      isHot: false,
    },
    {
      id: 3,
      title: "Raising seed funding in current market conditions",
      content:
        "With the current economic climate, what should startups focus on when preparing for seed funding? Any recent success stories or lessons learned?",
      author: {
        name: "Alex Johnson",
        avatar: "👨‍🚀",
        role: "Founder",
        company: "FinanceFlow",
      },
      category: "funding",
      tags: ["funding", "seed", "investment"],
      upvotes: 32,
      replies: 15,
      views: 203,
      timeAgo: "6h ago",
      isPinned: false,
      isHot: true,
    },
    {
      id: 4,
      title: "AI integration in healthcare startups",
      content:
        "Looking to integrate AI capabilities into our healthcare platform. What are the key compliance considerations and best practices?",
      author: {
        name: "Dr. Emily Watson",
        avatar: "👩‍⚕️",
        role: "Co-founder",
        company: "MedConnect",
      },
      category: "technology",
      tags: ["ai", "healthcare", "compliance"],
      upvotes: 15,
      replies: 6,
      views: 67,
      timeAgo: "8h ago",
      isPinned: false,
      isHot: false,
    },
    {
      id: 5,
      title: "Sustainable startup practices and B-Corp certification",
      content:
        "Our team is interested in making our startup more sustainable and possibly pursuing B-Corp certification. Has anyone gone through this process?",
      author: {
        name: "Green Innovator",
        avatar: "🌱",
        role: "Founder",
        company: "EcoTech Solutions",
      },
      category: "sustainability",
      tags: ["sustainability", "b-corp", "certification"],
      upvotes: 12,
      replies: 4,
      views: 45,
      timeAgo: "12h ago",
      isPinned: false,
      isHot: false,
    },
    {
      id: 6,
      title: "Finding the right co-founder: lessons learned",
      content:
        "After going through the co-founder search process, I wanted to share some insights that might help other solo founders...",
      author: {
        name: "Lisa Park",
        avatar: "👩‍🔬",
        role: "Solo Founder",
        company: "BioInnovate",
      },
      category: "co-founder",
      tags: ["co-founder", "partnership", "lessons"],
      upvotes: 28,
      replies: 11,
      views: 134,
      timeAgo: "1d ago",
      isPinned: false,
      isHot: false,
    },
  ];

  const categories = [
    { value: "all", label: "All Topics" },
    { value: "validation", label: "Validation" },
    { value: "funding", label: "Funding" },
    { value: "management", label: "Management" },
    { value: "technology", label: "Technology" },
    { value: "sustainability", label: "Sustainability" },
    { value: "co-founder", label: "Co-founder" },
  ];

  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "popular", label: "Most Popular" },
    { value: "trending", label: "Trending" },
    { value: "unanswered", label: "Unanswered" },
  ];

  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesSearch =
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    switch (selectedSort) {
      case "popular":
        return b.upvotes - a.upvotes;
      case "trending":
        return b.views - a.views;
      case "unanswered":
        return a.replies - b.replies;
      default:
        return 0; // Keep original order for 'recent'
    }
  });

  const stats = [
    { label: "Total Discussions", value: "2,340", icon: MessageSquare },
    { label: "Active Members", value: "12,500", icon: Users },
    { label: "This Week", value: "156", icon: TrendingUp },
    { label: "Online Now", value: "89", icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Community Hub
          </h1>
          <p className="text-gray-600">
            Connect with fellow entrepreneurs, share insights, and get support
            from the community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg">
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
                  <div className="w-12 h-12 bg-[#00BFCB]/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#00BFCB]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Discussion
          </Button>
        </div>

        {/* Discussions */}
        <div className="space-y-4">
          {sortedDiscussions.map((discussion) => (
            <Card
              key={discussion.id}
              className="bg-white hover:shadow-lg transition-shadow duration-200"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00BFCB]/20 to-[#891C74]/20 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {discussion.author.avatar}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      {discussion.isPinned && (
                        <Badge className="bg-[#891C74]/10 text-[#891C74] border-[#891C74]/20">
                          Pinned
                        </Badge>
                      )}
                      {discussion.isHot && (
                        <Badge className="bg-red-100 text-red-600 border-red-200">
                          🔥 Hot
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {
                          categories.find(
                            (c) => c.value === discussion.category
                          )?.label
                        }
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#00BFCB] transition-colors cursor-pointer">
                      {discussion.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {discussion.content}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {discussion.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{discussion.upvotes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{discussion.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{discussion.views}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{discussion.timeAgo}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">
                            {discussion.author.name}
                          </div>
                          <div className="text-xs">
                            {discussion.author.role} at{" "}
                            {discussion.author.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {sortedDiscussions.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No discussions found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Load More */}
        {sortedDiscussions.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Discussions
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

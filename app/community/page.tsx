"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ThumbsUp,
  Plus,
  Search,
  Filter,
  Pin,
  Clock,
  Eye,
  Reply,
} from "lucide-react";

const discussions = [
  {
    id: 1,
    title: "Best practices for MVP development in 2024",
    author: "Sarah Chen",
    avatar: "SC",
    category: "Product Development",
    replies: 23,
    likes: 45,
    views: 234,
    timeAgo: "2 hours ago",
    isPinned: true,
    preview:
      "I've been working on my MVP for the past 3 months and wanted to share some insights...",
  },
  {
    id: 2,
    title: "Seeking co-founder for HealthTech startup",
    author: "Michael Rodriguez",
    avatar: "MR",
    category: "Co-founder Search",
    replies: 12,
    likes: 28,
    views: 156,
    timeAgo: "4 hours ago",
    isPinned: false,
    preview:
      "Looking for a technical co-founder to join our mission of revolutionizing healthcare...",
  },
  {
    id: 3,
    title: "How to pitch to investors effectively",
    author: "Emily Johnson",
    avatar: "EJ",
    category: "Funding",
    replies: 34,
    likes: 67,
    views: 445,
    timeAgo: "1 day ago",
    isPinned: false,
    preview:
      "After raising Series A, here are the key lessons I learned about pitching...",
  },
  {
    id: 4,
    title: "Remote team management strategies",
    author: "David Kim",
    avatar: "DK",
    category: "Team Building",
    replies: 18,
    likes: 32,
    views: 189,
    timeAgo: "2 days ago",
    isPinned: false,
    preview: "Managing a distributed team across 5 time zones has taught me...",
  },
];

const categories = [
  { name: "All", count: 156, color: "bg-gray-100 text-gray-800" },
  {
    name: "Product Development",
    count: 45,
    color: "bg-teal-primary/10 text-teal-primary",
  },
  {
    name: "Funding",
    count: 32,
    color: "bg-magenta-primary/10 text-magenta-primary",
  },
  { name: "Co-founder Search", count: 28, color: "bg-blue-100 text-blue-800" },
  { name: "Team Building", count: 24, color: "bg-green-100 text-green-800" },
  { name: "Marketing", count: 19, color: "bg-orange-100 text-orange-800" },
  { name: "Legal", count: 8, color: "bg-purple-100 text-purple-800" },
];

const topContributors = [
  { name: "Sarah Chen", avatar: "SC", posts: 45, reputation: 1250 },
  { name: "Michael Rodriguez", avatar: "MR", posts: 38, reputation: 980 },
  { name: "Emily Johnson", avatar: "EJ", posts: 32, reputation: 875 },
  { name: "David Kim", avatar: "DK", posts: 28, reputation: 720 },
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              Community Hub
            </h1>
            <p className="text-lg text-gray-600">
              Connect, share knowledge, and grow together with fellow
              entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Search and Actions */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search discussions..."
                          className="pl-10"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button
                        className="bg-teal-primary hover:bg-teal-primary/90"
                        onClick={() => setShowNewPost(!showNewPost)}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        New Post
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* New Post Form */}
              {showNewPost && (
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>Start a New Discussion</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input placeholder="Discussion title..." />
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Select Category</option>
                      {categories.slice(1).map((cat) => (
                        <option key={cat.name} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    <Textarea placeholder="Share your thoughts..." rows={4} />
                    <div className="flex gap-2">
                      <Button className="bg-teal-primary hover:bg-teal-primary/90">
                        Post Discussion
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowNewPost(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category.name}
                    variant={
                      selectedCategory === category.name
                        ? "default"
                        : "secondary"
                    }
                    className={`cursor-pointer px-3 py-1 ${
                      selectedCategory === category.name
                        ? "bg-teal-primary text-white"
                        : category.color
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name} ({category.count})
                  </Badge>
                ))}
              </div>

              {/* Discussions List */}
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card
                    key={discussion.id}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={`/api/placeholder/40/40`}
                            alt={discussion.author}
                          />
                          <AvatarFallback className="bg-teal-primary text-white">
                            {discussion.avatar}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-2">
                            {discussion.isPinned && (
                              <Pin className="h-4 w-4 text-magenta-primary" />
                            )}
                            <h3 className="text-lg font-semibold text-neutral-dark hover:text-teal-primary cursor-pointer">
                              {discussion.title}
                            </h3>
                          </div>

                          <p className="text-gray-600 text-sm">
                            {discussion.preview}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="font-medium">
                                {discussion.author}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {discussion.category}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{discussion.timeAgo}</span>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Eye className="h-4 w-4" />
                                <span>{discussion.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <ThumbsUp className="h-4 w-4" />
                                <span>{discussion.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Reply className="h-4 w-4" />
                                <span>{discussion.replies}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Community Stats */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Members</span>
                    <span className="font-semibold">10,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Active Today</span>
                    <span className="font-semibold text-teal-primary">
                      1,234
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Posts</span>
                    <span className="font-semibold">45,678</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">This Week</span>
                    <span className="font-semibold text-magenta-primary">
                      +156
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Top Contributors */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Top Contributors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div
                      key={contributor.name}
                      className="flex items-center space-x-3"
                    >
                      <div className="text-sm font-medium text-gray-500 w-4">
                        #{index + 1}
                      </div>
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={`/api/placeholder/32/32`}
                          alt={contributor.name}
                        />
                        <AvatarFallback className="bg-teal-primary text-white text-xs">
                          {contributor.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          {contributor.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {contributor.posts} posts • {contributor.reputation}{" "}
                          rep
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Community Guidelines */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Community Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-600">
                  <div>• Be respectful and professional</div>
                  <div>• Stay on topic and provide value</div>
                  <div>• No spam or self-promotion</div>
                  <div>• Help others and share knowledge</div>
                  <div>• Report inappropriate content</div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Read Full Guidelines
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

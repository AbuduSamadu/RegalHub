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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Filter,
  Users,
  MessageCircle,
  Calendar,
  TrendingUp,
  ArrowRight,
  Star,
  Globe,
  Lock,
  Crown,
  UserPlus,
  Send,
  Heart,
  Share2,
  MoreHorizontal,
  Plus,
} from "lucide-react";

interface Community {
  id: string;
  name: string;
  description: string;
  category: string;
  members: number;
  posts: number;
  events: number;
  isPrivate: boolean;
  isPremium: boolean;
  image: string;
  moderators: Array<{
    name: string;
    avatar: string;
  }>;
  tags: string[];
  activity: string;
  growth: string;
  recentPosts: Array<{
    id: string;
    author: string;
    avatar: string;
    content: string;
    timestamp: string;
    likes: number;
    replies: number;
  }>;
  allowOpenPosting: boolean;
}

const mockCommunities: Community[] = [
  {
    id: "1",
    name: "AI Entrepreneurs",
    description:
      "A community for entrepreneurs building AI-powered startups. Share insights, get feedback, and connect with fellow AI innovators.",
    category: "Technology",
    members: 12500,
    posts: 3420,
    events: 24,
    isPrivate: false,
    isPremium: true,
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    moderators: [
      {
        name: "Sarah Chen",
        avatar:
          "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
      {
        name: "Mike Johnson",
        avatar:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
    ],
    tags: ["AI", "Machine Learning", "Startups", "Innovation"],
    activity: "Very Active",
    growth: "+15%",
    recentPosts: [
      {
        id: "1",
        author: "Alex Chen",
        avatar:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
          "Just launched our AI-powered customer service bot. The response time improved by 80%! Happy to share our learnings.",
        timestamp: "2 hours ago",
        likes: 24,
        replies: 8,
      },
      {
        id: "2",
        author: "Maria Rodriguez",
        avatar:
          "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
          "Looking for feedback on our ML model architecture. Anyone experienced with transformer models for startup analytics?",
        timestamp: "4 hours ago",
        likes: 15,
        replies: 12,
      },
    ],
    allowOpenPosting: true,
  },
  {
    id: "2",
    name: "Female Founders Network",
    description:
      "Empowering women entrepreneurs through mentorship, resources, and a supportive community of like-minded founders.",
    category: "Diversity & Inclusion",
    members: 8900,
    posts: 2150,
    events: 18,
    isPrivate: true,
    isPremium: false,
    image:
      "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400",
    moderators: [
      {
        name: "Emily Watson",
        avatar:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
      {
        name: "Lisa Park",
        avatar:
          "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
    ],
    tags: ["Women", "Leadership", "Mentorship", "Networking"],
    activity: "Active",
    growth: "+22%",
    recentPosts: [
      {
        id: "3",
        author: "Jennifer Kim",
        avatar:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
          "Celebrating our 50th female founder who raised Series A this year! The momentum is incredible. 🚀",
        timestamp: "1 hour ago",
        likes: 42,
        replies: 18,
      },
    ],
    allowOpenPosting: true,
  },
  {
    id: "3",
    name: "FinTech Innovators",
    description:
      "Connect with fintech entrepreneurs, discuss regulatory challenges, and explore the future of financial services.",
    category: "Finance",
    members: 6750,
    posts: 1890,
    events: 12,
    isPrivate: false,
    isPremium: true,
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    moderators: [
      {
        name: "David Rodriguez",
        avatar:
          "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
    ],
    tags: ["FinTech", "Banking", "Payments", "Blockchain"],
    activity: "Active",
    growth: "+8%",
    recentPosts: [
      {
        id: "4",
        author: "David Park",
        avatar:
          "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
          "New regulatory changes in EU affecting fintech startups. Here's what we learned from our compliance journey...",
        timestamp: "3 hours ago",
        likes: 28,
        replies: 15,
      },
    ],
    allowOpenPosting: true,
  },
  {
    id: "4",
    name: "Sustainable Startups",
    description:
      "Building businesses that make a positive impact on the environment. Share green innovations and sustainable practices.",
    category: "Sustainability",
    members: 4200,
    posts: 980,
    events: 15,
    isPrivate: false,
    isPremium: false,
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    moderators: [
      {
        name: "Green Thompson",
        avatar:
          "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
    ],
    tags: ["Sustainability", "CleanTech", "Environment", "Impact"],
    activity: "Moderate",
    growth: "+12%",
    recentPosts: [
      {
        id: "5",
        author: "Emma Green",
        avatar:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
          "Our carbon tracking app just hit 10K users! Sharing our growth strategies and lessons learned.",
        timestamp: "6 hours ago",
        likes: 35,
        replies: 22,
      },
    ],
    allowOpenPosting: true,
  },
  {
    id: "5",
    name: "SaaS Founders Circle",
    description:
      "Exclusive community for SaaS entrepreneurs. Discuss growth strategies, metrics, and scaling challenges.",
    category: "SaaS",
    members: 15600,
    posts: 4200,
    events: 30,
    isPrivate: true,
    isPremium: true,
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    moderators: [
      {
        name: "Alex Kim",
        avatar:
          "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
      {
        name: "Rachel Green",
        avatar:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
    ],
    tags: ["SaaS", "Growth", "Metrics", "Scaling"],
    activity: "Very Active",
    growth: "+18%",
    recentPosts: [
      {
        id: "6",
        author: "Michael Chen",
        avatar:
          "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
          "Reached $1M ARR milestone! Here's our complete playbook for SaaS growth from 0 to 1M.",
        timestamp: "5 hours ago",
        likes: 89,
        replies: 34,
      },
    ],
    allowOpenPosting: true,
  },
  {
    id: "6",
    name: "Early Stage Investors",
    description:
      "Angel investors and VCs sharing deal flow, due diligence insights, and investment strategies for early-stage startups.",
    category: "Investment",
    members: 3400,
    posts: 1200,
    events: 8,
    isPrivate: true,
    isPremium: true,
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    moderators: [
      {
        name: "Investment Pro",
        avatar:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
    ],
    tags: ["Investment", "Angel", "VC", "Due Diligence"],
    activity: "Active",
    growth: "+5%",
    recentPosts: [
      {
        id: "7",
        author: "Sarah Wilson",
        avatar:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
          "Interesting trend: 60% of our portfolio companies are now profitable. Market conditions are driving efficiency.",
        timestamp: "8 hours ago",
        likes: 56,
        replies: 28,
      },
    ],
    allowOpenPosting: false,
  },
];

const categories = [
  "All",
  "Technology",
  "Diversity & Inclusion",
  "Finance",
  "Sustainability",
  "SaaS",
  "Investment",
];
const activityLevels = ["All", "Very Active", "Active", "Moderate"];

export function CommunitiesGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState("All");
  const [joinedCommunities, setJoinedCommunities] = useState<Set<string>>(
    new Set()
  );
  const [expandedCommunity, setExpandedCommunity] = useState<string | null>(
    null
  );
  const [newPostContent, setNewPostContent] = useState<Record<string, string>>(
    {}
  );

  const filteredCommunities = useMemo(() => {
    return mockCommunities.filter((community) => {
      const matchesSearch =
        community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        community.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        community.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || community.category === selectedCategory;
      const matchesActivity =
        selectedActivity === "All" || community.activity === selectedActivity;

      return matchesSearch && matchesCategory && matchesActivity;
    });
  }, [searchTerm, selectedCategory, selectedActivity]);

  const toggleJoin = (communityId: string) => {
    setJoinedCommunities((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(communityId)) {
        newSet.delete(communityId);
      } else {
        newSet.add(communityId);
      }
      return newSet;
    });
  };

  const handlePostSubmit = (communityId: string) => {
    const content = newPostContent[communityId];
    if (!content?.trim()) return;

    // Here you would typically send the post to your backend
    console.log(`Posting to community ${communityId}:`, content);

    // Clear the input
    setNewPostContent((prev) => ({
      ...prev,
      [communityId]: "",
    }));
  };

  const handlePostContentChange = (communityId: string, content: string) => {
    setNewPostContent((prev) => ({
      ...prev,
      [communityId]: content,
    }));
  };
  const getActivityColor = (activity: string) => {
    switch (activity) {
      case "Very Active":
        return "bg-green-100 text-green-700 border-green-200";
      case "Active":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Moderate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
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
                placeholder="Search communities by name, description, or tags..."
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

            <Select
              value={selectedActivity}
              onValueChange={setSelectedActivity}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Activity" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                {activityLevels.map((activity) => (
                  <SelectItem key={activity} value={activity}>
                    {activity}
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
              {filteredCommunities.length}
            </span>{" "}
            communities
          </p>
        </motion.div>

        {/* Communities Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedActivity}-${searchTerm}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Community Image */}
                  <div className="relative">
                    <div
                      className="h-48 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url(${community.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {community.isPremium && (
                          <Badge className="bg-yellow-500 text-white border-0">
                            <Crown className="w-3 h-3 mr-1" />
                            Premium
                          </Badge>
                        )}
                        {community.isPrivate ? (
                          <Badge className="bg-red-500 text-white border-0">
                            <Lock className="w-3 h-3 mr-1" />
                            Private
                          </Badge>
                        ) : (
                          <Badge className="bg-green-500 text-white border-0">
                            <Globe className="w-3 h-3 mr-1" />
                            Public
                          </Badge>
                        )}
                      </div>

                      {/* Activity Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`${getActivityColor(
                            community.activity
                          )} border font-medium`}
                        >
                          {community.activity}
                        </Badge>
                      </div>

                      {/* Growth Indicator */}
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <div className="flex items-center gap-1 text-sm font-medium text-green-600">
                          <TrendingUp className="w-4 h-4" />
                          {community.growth}
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                        {community.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="text-xs bg-gray-50 shrink-0 ml-2"
                      >
                        {community.category}
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {community.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-gray-900">
                            {community.members.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                            <Users className="w-3 h-3" />
                            Members
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900">
                            {community.posts.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            Posts
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900">
                            {community.events}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Events
                          </div>
                        </div>
                      </div>

                      {/* Moderators */}
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">
                          Moderators
                        </div>
                        <div className="flex -space-x-2">
                          {community.moderators.map((moderator, idx) => (
                            <Avatar
                              key={idx}
                              className="w-8 h-8 border-2 border-white"
                            >
                              <AvatarImage
                                src={moderator.avatar}
                                alt={moderator.name}
                              />
                              <AvatarFallback className="text-xs">
                                {moderator.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {community.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {community.tags.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-gray-50 text-gray-600"
                          >
                            +{community.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="space-y-4">
                        {/* Recent Posts Preview */}
                        {community.recentPosts.length > 0 && (
                          <div className="pt-4 border-t border-gray-100">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-sm font-medium text-gray-700">
                                Recent Discussions
                              </h4>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  setExpandedCommunity(
                                    expandedCommunity === community.id
                                      ? null
                                      : community.id
                                  )
                                }
                                className="text-xs"
                              >
                                {expandedCommunity === community.id
                                  ? "Show Less"
                                  : "View All"}
                              </Button>
                            </div>

                            <div className="space-y-3">
                              {community.recentPosts
                                .slice(
                                  0,
                                  expandedCommunity === community.id
                                    ? undefined
                                    : 1
                                )
                                .map((post) => (
                                  <div
                                    key={post.id}
                                    className="bg-gray-50 rounded-lg p-3"
                                  >
                                    <div className="flex items-start gap-2 mb-2">
                                      <Avatar className="w-6 h-6">
                                        <AvatarImage
                                          src={post.avatar}
                                          alt={post.author}
                                        />
                                        <AvatarFallback className="text-xs">
                                          {post.author
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                          <span className="text-xs font-medium text-gray-900">
                                            {post.author}
                                          </span>
                                          <span className="text-xs text-gray-500">
                                            {post.timestamp}
                                          </span>
                                        </div>
                                        <p className="text-xs text-gray-600 line-clamp-2">
                                          {post.content}
                                        </p>
                                        <div className="flex items-center gap-4 mt-2">
                                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors">
                                            <Heart className="w-3 h-3" />
                                            {post.likes}
                                          </button>
                                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-500 transition-colors">
                                            <MessageCircle className="w-3 h-3" />
                                            {post.replies}
                                          </button>
                                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-500 transition-colors">
                                            <Share2 className="w-3 h-3" />
                                            Share
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                        {/* Post Input - Always Available for Open Communities */}
                        {community.allowOpenPosting && (
                          <div className="pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                              <Plus className="w-4 h-4 text-blue-500" />
                              <span className="text-sm font-medium text-gray-700">
                                Share your thoughts
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Input
                                placeholder="What's on your mind? Share insights, ask questions..."
                                value={newPostContent[community.id] || ""}
                                onChange={(e) =>
                                  handlePostContentChange(
                                    community.id,
                                    e.target.value
                                  )
                                }
                                className="flex-1 text-sm"
                                onKeyPress={(e) => {
                                  if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handlePostSubmit(community.id);
                                  }
                                }}
                              />
                              <Button
                                size="sm"
                                onClick={() => handlePostSubmit(community.id)}
                                disabled={!newPostContent[community.id]?.trim()}
                                className="px-3"
                              >
                                <Send className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              💡 No membership required - share your expertise
                              with the community
                            </p>
                          </div>
                        )}

                        {/* Join/Follow Button */}
                        <div className="pt-4 border-t border-gray-100">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              onClick={() => toggleJoin(community.id)}
                              className={`w-full transition-all duration-300 ${
                                joinedCommunities.has(community.id)
                                  ? "bg-green-600 hover:bg-green-700"
                                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                              }`}
                            >
                              {joinedCommunities.has(community.id) ? (
                                <>
                                  <Star className="w-4 h-4 mr-2 fill-current" />
                                  Following
                                </>
                              ) : (
                                <>
                                  <UserPlus className="w-4 h-4 mr-2" />
                                  {community.isPrivate
                                    ? "Request to Follow"
                                    : "Follow Community"}
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </>
                              )}
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
        {filteredCommunities.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No communities found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find more
              communities.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedActivity("All");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

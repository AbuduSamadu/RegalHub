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
  Calendar,
  MapPin,
  Users,
  Clock,
  Search,
  Filter,
  Award,
  Target,
  Lightbulb,
  Rocket,
  BookOpen,
  Trophy,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

export default function InitiativesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const initiatives = [
    {
      id: 1,
      title: "Global Startup Accelerator 2025",
      type: "accelerator",
      status: "open",
      duration: "12 weeks",
      startDate: "2025-03-01",
      location: "Virtual + San Francisco",
      participants: 50,
      maxParticipants: 100,
      description:
        "Intensive 12-week program designed to accelerate early-stage startups with mentorship, funding opportunities, and global market access.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "$50K Seed Funding",
        "Expert Mentorship",
        "Global Network Access",
        "Demo Day Pitch",
      ],
      requirements: [
        "Early-stage startup",
        "Scalable business model",
        "Committed founding team",
      ],
      applicationDeadline: "2025-02-15",
      featured: true,
      difficulty: "Intermediate",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      title: "AI Innovation Challenge",
      type: "challenge",
      status: "open",
      duration: "6 weeks",
      startDate: "2025-02-01",
      location: "Global (Virtual)",
      participants: 200,
      maxParticipants: 500,
      description:
        "Compete to build innovative AI solutions that solve real-world problems. Winners receive funding and mentorship opportunities.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "$100K Prize Pool",
        "AI Expert Mentorship",
        "Tech Resources",
        "Industry Recognition",
      ],
      requirements: [
        "AI/ML experience",
        "Working prototype",
        "Problem-solution fit",
      ],
      applicationDeadline: "2025-01-25",
      featured: true,
      difficulty: "Advanced",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      title: "Sustainable Tech Bootcamp",
      type: "bootcamp",
      status: "open",
      duration: "8 weeks",
      startDate: "2025-02-15",
      location: "Berlin, Germany",
      participants: 30,
      maxParticipants: 40,
      description:
        "Learn to build sustainable technology solutions with focus on environmental impact and social responsibility.",
      image:
        "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Sustainability Certification",
        "Green Tech Network",
        "Impact Measurement Tools",
        "Investor Connections",
      ],
      requirements: [
        "Tech background",
        "Sustainability passion",
        "Commitment to program",
      ],
      applicationDeadline: "2025-02-01",
      featured: false,
      difficulty: "Beginner",
      rating: 4.7,
      reviews: 56,
    },
    {
      id: 4,
      title: "Women in Tech Leadership Program",
      type: "program",
      status: "open",
      duration: "16 weeks",
      startDate: "2025-03-15",
      location: "New York, NY",
      participants: 25,
      maxParticipants: 30,
      description:
        "Empowering women entrepreneurs with leadership skills, networking opportunities, and mentorship from successful female leaders.",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Leadership Training",
        "Female Mentor Network",
        "Speaking Opportunities",
        "Funding Access",
      ],
      requirements: [
        "Female entrepreneur",
        "Leadership potential",
        "Growth-stage startup",
      ],
      applicationDeadline: "2025-03-01",
      featured: false,
      difficulty: "Intermediate",
      rating: 4.9,
      reviews: 78,
    },
    {
      id: 5,
      title: "FinTech Innovation Lab",
      type: "lab",
      status: "closed",
      duration: "10 weeks",
      startDate: "2024-11-01",
      location: "London, UK",
      participants: 40,
      maxParticipants: 40,
      description:
        "Collaborative lab for FinTech startups to experiment with new financial technologies and regulatory frameworks.",
      image:
        "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Regulatory Guidance",
        "Banking Partnerships",
        "Tech Infrastructure",
        "Market Access",
      ],
      requirements: ["FinTech focus", "Regulatory compliance", "MVP ready"],
      applicationDeadline: "2024-10-15",
      featured: false,
      difficulty: "Advanced",
      rating: 4.6,
      reviews: 34,
    },
    {
      id: 6,
      title: "Healthcare Innovation Sprint",
      type: "sprint",
      status: "upcoming",
      duration: "4 weeks",
      startDate: "2025-04-01",
      location: "Boston, MA",
      participants: 0,
      maxParticipants: 60,
      description:
        "Fast-paced sprint to develop healthcare solutions addressing current medical challenges and patient needs.",
      image:
        "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        "Healthcare Expert Access",
        "Clinical Trial Support",
        "Regulatory Guidance",
        "Hospital Partnerships",
      ],
      requirements: [
        "Healthcare focus",
        "Medical validation",
        "Scalable solution",
      ],
      applicationDeadline: "2025-03-20",
      featured: false,
      difficulty: "Advanced",
      rating: 0,
      reviews: 0,
    },
  ];

  const types = [
    { value: "all", label: "All Types" },
    { value: "accelerator", label: "Accelerators" },
    { value: "bootcamp", label: "Bootcamps" },
    { value: "challenge", label: "Challenges" },
    { value: "program", label: "Programs" },
    { value: "lab", label: "Innovation Labs" },
    { value: "sprint", label: "Sprints" },
  ];

  const statuses = [
    { value: "all", label: "All Status" },
    { value: "open", label: "Open for Applications" },
    { value: "upcoming", label: "Upcoming" },
    { value: "closed", label: "Closed" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 border-green-200";
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "closed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "accelerator":
        return Rocket;
      case "bootcamp":
        return BookOpen;
      case "challenge":
        return Trophy;
      case "program":
        return Target;
      case "lab":
        return Lightbulb;
      case "sprint":
        return Award;
      default:
        return Target;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredInitiatives = initiatives.filter((initiative) => {
    const matchesSearch =
      initiative.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      initiative.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      selectedType === "all" || initiative.type === selectedType;
    const matchesStatus =
      selectedStatus === "all" || initiative.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const stats = [
    { label: "Active Programs", value: "12", icon: Target },
    { label: "Participants", value: "2,500+", icon: Users },
    { label: "Success Rate", value: "85%", icon: Trophy },
    { label: "Funding Raised", value: "$50M+", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-[#00BFCB]/10 to-[#891C74]/10 text-[#00BFCB] border-[#00BFCB]/20">
            <Rocket className="w-4 h-4 mr-2" />
            Growth Programs
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Accelerate Your{" "}
            <span className="text-gradient">Startup Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join our comprehensive programs, challenges, and bootcamps designed
            to accelerate your startup growth and connect you with the resources
            you need to succeed.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00BFCB]/20 to-[#891C74]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-[#00BFCB]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search initiatives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              {types.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Initiatives */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Programs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredInitiatives
              .filter((initiative) => initiative.featured)
              .map((initiative) => {
                const TypeIcon = getTypeIcon(initiative.type);
                return (
                  <Card
                    key={initiative.id}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <Badge className="bg-[#00BFCB] text-white">
                          Featured
                        </Badge>
                        <Badge className={getStatusColor(initiative.status)}>
                          {initiative.status.charAt(0).toUpperCase() +
                            initiative.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={getDifficultyColor(initiative.difficulty)}
                        >
                          {initiative.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-[#00BFCB]/10 rounded-lg flex items-center justify-center">
                          <TypeIcon className="w-4 h-4 text-[#00BFCB]" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {
                            types.find((t) => t.value === initiative.type)
                              ?.label
                          }
                        </Badge>
                        {initiative.rating > 0 && (
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">
                              {initiative.rating}
                            </span>
                            <span className="text-sm text-gray-500">
                              ({initiative.reviews})
                            </span>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-[#00BFCB] transition-colors">
                        {initiative.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {initiative.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{initiative.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(
                              initiative.startDate
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{initiative.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>
                            {initiative.participants}/
                            {initiative.maxParticipants}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">
                            Key Benefits:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {initiative.benefits
                              .slice(0, 3)
                              .map((benefit, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {benefit}
                                </Badge>
                              ))}
                            {initiative.benefits.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{initiative.benefits.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-sm text-gray-500">
                          Apply by:{" "}
                          {new Date(
                            initiative.applicationDeadline
                          ).toLocaleDateString()}
                        </div>
                        <Button
                          className="bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white"
                          disabled={initiative.status === "closed"}
                        >
                          {initiative.status === "closed"
                            ? "Closed"
                            : "Apply Now"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>

        {/* All Initiatives */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInitiatives.map((initiative) => {
              const TypeIcon = getTypeIcon(initiative.type);
              return (
                <Card
                  key={initiative.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className={getStatusColor(initiative.status)}>
                        {initiative.status.charAt(0).toUpperCase() +
                          initiative.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge
                        className={getDifficultyColor(initiative.difficulty)}
                      >
                        {initiative.difficulty}
                      </Badge>
                    </div>
                    {initiative.featured && (
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-[#00BFCB] text-white text-xs">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-[#00BFCB]/10 rounded flex items-center justify-center">
                        <TypeIcon className="w-3 h-3 text-[#00BFCB]" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {types.find((t) => t.value === initiative.type)?.label}
                      </Badge>
                      {initiative.rating > 0 && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs">{initiative.rating}</span>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-[#00BFCB] transition-colors line-clamp-2">
                      {initiative.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {initiative.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{initiative.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>
                          {initiative.participants}/{initiative.maxParticipants}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <div className="text-xs text-gray-500">
                        Deadline:{" "}
                        {new Date(
                          initiative.applicationDeadline
                        ).toLocaleDateString()}
                      </div>
                      <Button
                        size="sm"
                        className="bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white"
                        disabled={initiative.status === "closed"}
                      >
                        {initiative.status === "closed" ? "Closed" : "Apply"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* No results */}
        {filteredInitiatives.length === 0 && (
          <div className="text-center py-12">
            <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No initiatives found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

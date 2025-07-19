"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Progress } from "@/components/ui/progress";
import {
  Rocket,
  Users,
  DollarSign,
  Award,
  Search,
  Filter,
  Clock,
  MapPin,
  Target,
  BookOpen,
  Zap,
} from "lucide-react";

const initiatives = [
  {
    id: 1,
    title: "AI Startup Accelerator",
    description:
      "3-month intensive program for AI-focused startups with mentorship, funding, and go-to-market support.",
    type: "Accelerator",
    duration: "3 months",
    location: "San Francisco, CA",
    funding: "$100K",
    equity: "6%",
    startDate: "April 1, 2024",
    applicationDeadline: "March 15, 2024",
    status: "open",
    participants: 12,
    maxParticipants: 15,
    image: "🤖",
    tags: ["AI", "Machine Learning", "B2B"],
    organizer: "TechVenture Labs",
    benefits: [
      "$100K funding",
      "Expert mentorship",
      "Demo day",
      "Office space",
    ],
    requirements: ["AI/ML focus", "MVP ready", "Team of 2-4", "B2B market"],
  },
  {
    id: 2,
    title: "Women Founders Bootcamp",
    description:
      "Intensive 6-week program designed specifically for women entrepreneurs to build and scale their startups.",
    type: "Bootcamp",
    duration: "6 weeks",
    location: "Virtual",
    funding: "N/A",
    equity: "0%",
    startDate: "March 20, 2024",
    applicationDeadline: "March 10, 2024",
    status: "closing-soon",
    participants: 28,
    maxParticipants: 30,
    image: "👩‍💼",
    tags: ["Women", "Leadership", "Networking"],
    organizer: "WomenTech Alliance",
    benefits: [
      "Mentorship network",
      "Pitch training",
      "Investor connections",
      "Community access",
    ],
    requirements: [
      "Women-led startup",
      "Early stage",
      "Scalable business model",
      "Commitment to program",
    ],
  },
  {
    id: 3,
    title: "HealthTech Innovation Challenge",
    description:
      "Global competition for healthcare startups solving critical problems in digital health and medical technology.",
    type: "Challenge",
    duration: "4 months",
    location: "Boston, MA",
    funding: "$250K",
    equity: "0%",
    startDate: "May 1, 2024",
    applicationDeadline: "April 15, 2024",
    status: "open",
    participants: 45,
    maxParticipants: 100,
    image: "🏥",
    tags: ["HealthTech", "Innovation", "Competition"],
    organizer: "HealthTech Ventures",
    benefits: [
      "$250K prize",
      "Hospital partnerships",
      "Regulatory guidance",
      "Clinical trials support",
    ],
    requirements: [
      "Healthcare focus",
      "Proven traction",
      "Regulatory compliance",
      "Clinical validation",
    ],
  },
  {
    id: 4,
    title: "Sustainable Tech Incubator",
    description:
      "12-month program for startups developing sustainable technology solutions for climate change and environmental challenges.",
    type: "Incubator",
    duration: "12 months",
    location: "Austin, TX",
    funding: "$50K",
    equity: "5%",
    startDate: "June 1, 2024",
    applicationDeadline: "May 1, 2024",
    status: "open",
    participants: 8,
    maxParticipants: 10,
    image: "🌱",
    tags: ["Sustainability", "CleanTech", "Environment"],
    organizer: "Green Innovation Hub",
    benefits: [
      "$50K funding",
      "Lab access",
      "Sustainability experts",
      "Corporate partnerships",
    ],
    requirements: [
      "Environmental impact",
      "Scalable solution",
      "Technical feasibility",
      "Market validation",
    ],
  },
  {
    id: 5,
    title: "Fintech Fast Track",
    description:
      "8-week intensive program for fintech startups with focus on regulatory compliance and market entry strategies.",
    type: "Fast Track",
    duration: "8 weeks",
    location: "New York, NY",
    funding: "$75K",
    equity: "4%",
    startDate: "April 15, 2024",
    applicationDeadline: "March 30, 2024",
    status: "closed",
    participants: 20,
    maxParticipants: 20,
    image: "💰",
    tags: ["Fintech", "Compliance", "Banking"],
    organizer: "Financial Innovation Lab",
    benefits: [
      "$75K funding",
      "Regulatory support",
      "Bank partnerships",
      "Compliance training",
    ],
    requirements: [
      "Financial services",
      "Regulatory readiness",
      "B2B focus",
      "Experienced team",
    ],
  },
  {
    id: 6,
    title: "EdTech Innovation Program",
    description:
      "10-week program for education technology startups focused on K-12 and higher education solutions.",
    type: "Program",
    duration: "10 weeks",
    location: "Seattle, WA",
    funding: "$60K",
    equity: "3%",
    startDate: "September 1, 2024",
    applicationDeadline: "August 1, 2024",
    status: "upcoming",
    participants: 0,
    maxParticipants: 12,
    image: "📚",
    tags: ["EdTech", "Education", "K-12"],
    organizer: "Education Ventures",
    benefits: [
      "$60K funding",
      "School partnerships",
      "Educator network",
      "Pilot programs",
    ],
    requirements: [
      "Education focus",
      "Proven pedagogy",
      "User validation",
      "Scalable platform",
    ],
  },
];

const types = [
  "All",
  "Accelerator",
  "Bootcamp",
  "Challenge",
  "Incubator",
  "Fast Track",
  "Program",
];
const statuses = ["All", "Open", "Closing Soon", "Closed", "Upcoming"];

export default function InitiativesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filteredInitiatives, setFilteredInitiatives] = useState(initiatives);

  const handleFilter = () => {
    let filtered = initiatives;

    if (searchTerm) {
      filtered = filtered.filter(
        (initiative) =>
          initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          initiative.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          initiative.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (selectedType !== "All") {
      filtered = filtered.filter(
        (initiative) => initiative.type === selectedType
      );
    }

    if (selectedStatus !== "All") {
      const statusMap: { [key: string]: string } = {
        Open: "open",
        "Closing Soon": "closing-soon",
        Closed: "closed",
        Upcoming: "upcoming",
      };
      filtered = filtered.filter(
        (initiative) => initiative.status === statusMap[selectedStatus]
      );
    }

    setFilteredInitiatives(filtered);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-green-100 text-green-800">Open</Badge>;
      case "closing-soon":
        return (
          <Badge className="bg-orange-100 text-orange-800">Closing Soon</Badge>
        );
      case "closed":
        return <Badge className="bg-red-100 text-red-800">Closed</Badge>;
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Accelerator":
        return <Rocket className="h-5 w-5" />;
      case "Bootcamp":
        return <Zap className="h-5 w-5" />;
      case "Challenge":
        return <Award className="h-5 w-5" />;
      case "Incubator":
        return <BookOpen className="h-5 w-5" />;
      default:
        return <Target className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              Programs & Initiatives
            </h1>
            <p className="text-lg text-gray-600">
              Discover accelerators, bootcamps, and innovation programs to grow
              your startup
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="border-0 shadow-md mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search programs, technologies, or focus areas..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Program Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  onClick={handleFilter}
                  className="bg-teal-primary hover:bg-teal-primary/90"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredInitiatives.length} programs
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredInitiatives.map((initiative) => (
              <Card
                key={initiative.id}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{initiative.image}</div>
                      <div className="flex items-center space-x-2 text-teal-primary">
                        {getTypeIcon(initiative.type)}
                        <Badge variant="outline" className="text-xs">
                          {initiative.type}
                        </Badge>
                      </div>
                    </div>
                    {getStatusBadge(initiative.status)}
                  </div>
                  <CardTitle className="text-xl">{initiative.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {initiative.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{initiative.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{initiative.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <DollarSign className="h-4 w-4" />
                      <span>{initiative.funding}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>
                        {initiative.participants}/{initiative.maxParticipants}{" "}
                        participants
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Applications</span>
                      <span className="text-gray-600">
                        {initiative.participants}/{initiative.maxParticipants}
                      </span>
                    </div>
                    <Progress
                      value={
                        (initiative.participants / initiative.maxParticipants) *
                        100
                      }
                      className="h-2"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {initiative.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs bg-gray-50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">What You Get:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                      {initiative.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-1"
                        >
                          <div className="w-1 h-1 bg-teal-primary rounded-full"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                      {initiative.requirements.map((requirement, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-1"
                        >
                          <div className="w-1 h-1 bg-magenta-primary rounded-full"></div>
                          <span>{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">
                        Application Deadline:
                      </span>
                      <span className="font-medium">
                        {initiative.applicationDeadline}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Program Starts:</span>
                      <span className="font-medium">
                        {initiative.startDate}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button
                      className="bg-teal-primary hover:bg-teal-primary/90 flex-1"
                      disabled={initiative.status === "closed"}
                    >
                      {initiative.status === "closed"
                        ? "Applications Closed"
                        : initiative.status === "upcoming"
                        ? "Coming Soon"
                        : "Apply Now"}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-magenta-primary text-magenta-primary hover:bg-magenta-primary hover:text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInitiatives.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No programs found matching your criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("All");
                  setSelectedStatus("All");
                  setFilteredInitiatives(initiatives);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

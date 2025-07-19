"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, TrendingUp, Users, Filter } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const startups = [
  {
    id: 1,
    name: "EcoTech Solutions",
    logo: "🌱",
    description: "Sustainable technology solutions for modern businesses using AI-powered optimization",
    industry: "GreenTech",
    stage: "Series A",
    location: "San Francisco, CA",
    funding: "$2.5M",
    team: "12 people",
    tags: ["AI", "Sustainability", "B2B"],
    lookingFor: "Funding"
  },
  {
    id: 2,
    name: "HealthConnect",
    logo: "🏥",
    description: "Connecting patients with healthcare providers through seamless digital experiences",
    industry: "HealthTech",
    stage: "Seed",
    location: "Boston, MA",
    funding: "$800K",
    team: "8 people",
    tags: ["Healthcare", "Platform", "B2C"],
    lookingFor: "Talent"
  },
  {
    id: 3,
    name: "EduFlow",
    logo: "📚",
    description: "Personalized learning experiences powered by advanced AI and machine learning",
    industry: "EdTech",
    stage: "Pre-seed",
    location: "Austin, TX",
    funding: "$300K",
    team: "5 people",
    tags: ["Education", "AI", "SaaS"],
    lookingFor: "Mentorship"
  },
  {
    id: 4,
    name: "FinanceFlow",
    logo: "💰",
    description: "Next-generation financial tools and analytics for small and medium businesses",
    industry: "FinTech",
    stage: "Series A",
    location: "New York, NY",
    funding: "$5M",
    team: "25 people",
    tags: ["Finance", "B2B", "Analytics"],
    lookingFor: "Partnership"
  },
  {
    id: 5,
    name: "FoodTech Labs",
    logo: "🍕",
    description: "Revolutionary food technology solutions for the modern food industry",
    industry: "FoodTech",
    stage: "Seed",
    location: "Los Angeles, CA",
    funding: "$1.2M",
    team: "15 people",
    tags: ["Food", "Technology", "B2B"],
    lookingFor: "Funding"
  },
  {
    id: 6,
    name: "SpaceVenture",
    logo: "🚀",
    description: "Making space technology accessible through innovative satellite solutions",
    industry: "SpaceTech",
    stage: "Series B",
    location: "Seattle, WA",
    funding: "$10M",
    team: "45 people",
    tags: ["Space", "Hardware", "B2B"],
    lookingFor: "Talent"
  }
];

export default function StartupsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedStage, setSelectedStage] = useState("all");
  const [filteredStartups, setFilteredStartups] = useState(startups);

  const industries = ["all", "GreenTech", "HealthTech", "EdTech", "FinTech", "FoodTech", "SpaceTech"];
  const stages = ["all", "Pre-seed", "Seed", "Series A", "Series B"];

  const handleSearch = () => {
    let filtered = startups;

    if (searchTerm) {
      filtered = filtered.filter(startup =>
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedIndustry !== "all") {
      filtered = filtered.filter(startup => startup.industry === selectedIndustry);
    }

    if (selectedStage !== "all") {
      filtered = filtered.filter(startup => startup.stage === selectedStage);
    }

    setFilteredStartups(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              Startup Directory
            </h1>
            <p className="text-lg text-gray-600">
              Discover innovative startups from around the world
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
                      placeholder="Search startups, technologies, or industries..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <Select
                  value={selectedIndustry}
                  onValueChange={setSelectedIndustry}
                >
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry === "all" ? "All Industries" : industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedStage} onValueChange={setSelectedStage}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Stage" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    {stages.map((stage) => (
                      <SelectItem key={stage} value={stage}>
                        {stage === "all" ? "All Stages" : stage}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  onClick={handleSearch}
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
              Showing {filteredStartups.length} startups
            </p>
          </div>

          {/* Startup Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStartups.map((startup) => (
              <Card
                key={startup.id}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-3xl">{startup.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          {startup.name}
                        </CardTitle>
                        <Badge
                          variant="magenta"
                          className={`text-xs ${
                            startup.lookingFor === "Funding"
                              ? "bg-green-100 text-green-800"
                              : startup.lookingFor === "Talent"
                              ? "bg-blue-100 text-blue-800"
                              : startup.lookingFor === "Mentorship"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          Looking for {startup.lookingFor}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {startup.industry}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-teal-primary/10 text-teal-primary"
                        >
                          {startup.stage}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {startup.description}
                  </CardDescription>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{startup.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <TrendingUp className="h-4 w-4" />
                      <span>{startup.funding} raised</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{startup.team}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {startup.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs bg-gray-50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-teal-primary hover:bg-teal-primary/90 flex-1"
                    >
                      View Profile
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-magenta-primary text-magenta-primary hover:bg-magenta-primary hover:text-white"
                    >
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStartups.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No startups found matching your criteria
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedIndustry("all");
                  setSelectedStage("all");
                  setFilteredStartups(startups);
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
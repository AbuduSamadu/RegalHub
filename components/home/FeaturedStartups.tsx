"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, TrendingUp, Users } from "lucide-react";

const featuredStartups = [
  {
    id: 1,
    name: "EcoTech Solutions",
    logo: "🌱",
    description: "Sustainable technology solutions for modern businesses",
    industry: "GreenTech",
    stage: "Series A",
    location: "San Francisco",
    funding: "$2.5M",
    team: "12 people",
    tags: ["AI", "Sustainability", "B2B"],
  },
  {
    id: 2,
    name: "HealthConnect",
    logo: "🏥",
    description: "Connecting patients with healthcare providers seamlessly",
    industry: "HealthTech",
    stage: "Seed",
    location: "Boston",
    funding: "$800K",
    team: "8 people",
    tags: ["Healthcare", "Platform", "B2C"],
  },
  {
    id: 3,
    name: "EduFlow",
    logo: "📚",
    description: "Personalized learning experiences powered by AI",
    industry: "EdTech",
    stage: "Pre-seed",
    location: "Austin",
    funding: "$300K",
    team: "5 people",
    tags: ["Education", "AI", "SaaS"],
  },
  {
    id: 4,
    name: "FinanceFlow",
    logo: "💰",
    description: "Next-generation financial tools for small businesses",
    industry: "FinTech",
    stage: "Series A",
    location: "New York",
    funding: "$5M",
    team: "25 people",
    tags: ["Finance", "B2B", "Analytics"],
  },
];

export default function FeaturedStartups() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Featured Startups
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover innovative startups that are making waves in their
            industries.
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {featuredStartups.map((startup) => (
              <CarouselItem
                key={startup.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-3xl">{startup.logo}</div>
                      <div>
                        <CardTitle className="text-lg">
                          {startup.name}
                        </CardTitle>
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
                    <CardDescription className="text-gray-600">
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

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

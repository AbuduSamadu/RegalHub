"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Building, Calendar, User, DollarSign, X } from "lucide-react";

interface SearchResult {
  id: string;
  type: "startup" | "event" | "mentor" | "program";
  title: string;
  description: string;
  tags: string[];
  url: string;
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    type: "startup",
    title: "EcoTech Solutions",
    description: "Sustainable technology solutions for modern businesses",
    tags: ["GreenTech", "AI", "B2B"],
    url: "/startups/ecotech"
  },
  {
    id: "2",
    type: "event",
    title: "Startup Pitch Night",
    description: "Present your startup to investors",
    tags: ["Networking", "Funding"],
    url: "/events/pitch-night"
  },
  {
    id: "3",
    type: "mentor",
    title: "Sarah Kim",
    description: "Former VP of Product at TechCorp",
    tags: ["Product", "B2B SaaS"],
    url: "/mentors/sarah-kim"
  },
  {
    id: "4",
    type: "program",
    title: "AI Accelerator Program",
    description: "3-month program for AI startups",
    tags: ["AI", "Accelerator"],
    url: "/programs/ai-accelerator"
  }
];

const getResultIcon = (type: string) => {
  switch (type) {
    case "startup":
      return <Building className="h-4 w-4 text-teal-primary" />;
    case "event":
      return <Calendar className="h-4 w-4 text-magenta-primary" />;
    case "mentor":
      return <User className="h-4 w-4 text-blue-600" />;
    case "program":
      return <DollarSign className="h-4 w-4 text-green-600" />;
    default:
      return <Search className="h-4 w-4" />;
  }
};

const categoryColors = {
  startup: "bg-teal-primary/10 text-teal-primary",
  event: "bg-magenta-primary/10 text-magenta-primary",
  mentor: "bg-blue-100 text-blue-800",
  program: "bg-green-100 text-green-800"
};

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);

  const categories = [
    { key: "startup", label: "Startups", icon: Building },
    { key: "event", label: "Events", icon: Calendar },
    { key: "mentor", label: "Mentors", icon: User },
    { key: "program", label: "Programs", icon: DollarSign }
  ];

  useEffect(() => {
    if (searchTerm.length > 0) {
      let filtered = mockResults.filter(result =>
        result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );

      if (selectedCategory) {
        filtered = filtered.filter(result => result.type === selectedCategory);
      }

      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm, selectedCategory]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full max-w-sm justify-start text-muted-foreground">
          <Search className="h-4 w-4 mr-2" />
          Search startups, events, mentors...
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-0">
        <div className="flex flex-col">
          {/* Search Input */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search startups, events, mentors, programs..."
                className="pl-10 border-0 focus-visible:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="p-4 border-b">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "bg-teal-primary hover:bg-teal-primary/90" : ""}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.key ? null : category.key
                  )}
                  className={`${
                    selectedCategory === category.key 
                      ? "bg-teal-primary hover:bg-teal-primary/90" 
                      : ""
                  }`}
                >
                  <category.icon className="h-3 w-3 mr-1" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Results */}
          <ScrollArea className="max-h-96">
            {searchTerm.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Start typing to search across the ecosystem</p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>No results found for "{searchTerm}"</p>
              </div>
            ) : (
              <div className="p-2">
                {results.map((result) => (
                  <Card 
                    key={result.id}
                    className="border-0 shadow-none cursor-pointer hover:bg-gray-50 mb-1"
                    onClick={() => {
                      setIsOpen(false);
                      // Navigate to result.url
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">
                          {getResultIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-sm">{result.title}</h4>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${categoryColors[result.type]}`}
                            >
                              {result.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {result.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {result.tags.map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="outline" 
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Press ESC to close</span>
              <span>{results.length} results</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
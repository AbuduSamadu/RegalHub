"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Building, Calendar, User, DollarSign } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
    url: "/startups/ecotech",
  },
  {
    id: "2",
    type: "event",
    title: "Startup Pitch Night",
    description: "Present your startup to investors",
    tags: ["Networking", "Funding"],
    url: "/events/pitch-night",
  },
  {
    id: "3",
    type: "mentor",
    title: "Sarah Kim",
    description: "Former VP of Product at TechCorp",
    tags: ["Product", "B2B SaaS"],
    url: "/mentors/sarah-kim",
  },
  {
    id: "4",
    type: "program",
    title: "AI Accelerator Program",
    description: "3-month program for AI startups",
    tags: ["AI", "Accelerator"],
    url: "/programs/ai-accelerator",
  },
];

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);

  const categories = [
    { key: "startup", label: "Startups", icon: Building },
    { key: "event", label: "Events", icon: Calendar },
    { key: "mentor", label: "Mentors", icon: User },
    { key: "program", label: "Programs", icon: DollarSign },
  ];

  useEffect(() => {
    if (searchTerm.length > 0) {
      let filtered = mockResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );

      if (selectedCategory) {
        filtered = filtered.filter(
          (result) => result.type === selectedCategory
        );
      }

      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm, selectedCategory]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full max-w-sm justify-start text-muted-foreground"
        >
          <Search className="h-4 w-4 mr-2" />
          Search startups, events, mentors...
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl p-0 bg-white">
        <VisuallyHidden>
          <DialogTitle>Global Search</DialogTitle>
        </VisuallyHidden>

        <div className="flex flex-col">
          {/* Search Input */}
          <div className="p-4 border-b bg-white">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search startups, events, mentors, programs..."
                className="pl-10 border-0 focus-visible:ring-0 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="p-4 border-b bg-white">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("")}
                className={
                  selectedCategory === ""
                    ? "bg-teal-primary hover:bg-teal-primary/90"
                    : ""
                }
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={
                    selectedCategory === category.key ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.key)}
                  className={
                    selectedCategory === category.key
                      ? "bg-teal-primary hover:bg-teal-primary/90"
                      : ""
                  }
                >
                  <category.icon className="h-3 w-3 mr-1" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Results */}
          <ScrollArea className="max-h-96 bg-white">
            {searchTerm.length > 0 ? (
              results.length > 0 ? (
                <div className="p-2">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      onClick={() => {
                        // Handle result click
                        setIsOpen(false);
                      }}
                    >
                      <div className="flex-shrink-0">
                        {result.type === "startup" && (
                          <Building className="h-4 w-4 text-blue-600" />
                        )}
                        {result.type === "event" && (
                          <Calendar className="h-4 w-4 text-green-600" />
                        )}
                        {result.type === "mentor" && (
                          <User className="h-4 w-4 text-purple-600" />
                        )}
                        {result.type === "program" && (
                          <DollarSign className="h-4 w-4 text-orange-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {result.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {result.description}
                        </p>
                        <div className="flex items-center mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {
                              categories.find((c) => c.key === result.type)
                                ?.label
                            }
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Search className="h-8 w-8 mx-auto mb-3 text-gray-300" />
                  <p>No results found for "{searchTerm}"</p>
                  <p className="text-sm mt-1">
                    Try different keywords or categories
                  </p>
                </div>
              )
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Search className="h-8 w-8 mx-auto mb-3 text-gray-300" />
                <p>Start typing to search...</p>
                <p className="text-sm mt-1">
                  Search across startups, events, mentors, and more
                </p>
              </div>
            )}
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t bg-gray-50 text-center">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">
                  ↵
                </kbd>
                <span>to select</span>
              </div>
              <div className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">
                  Esc
                </kbd>
                <span>to close</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

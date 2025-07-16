"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProgressTracker from "@/components/ui/progress-tracker";
import ActivityFeed from "@/components/ui/activity-feed";
import { 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Star, 
  CheckCircle,
  Clock,
  DollarSign,
  Target
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-2">
              Welcome back, Sarah! 👋
            </h1>
            <p className="text-lg text-gray-600">
              Here's what's happening in your startup ecosystem
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Next Event</p>
                    <p className="text-2xl font-bold text-neutral-dark">2 days</p>
                  </div>
                  <Calendar className="h-8 w-8 text-teal-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Messages</p>
                    <p className="text-2xl font-bold text-neutral-dark">12</p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-magenta-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Connections</p>
                    <p className="text-2xl font-bold text-neutral-dark">284</p>
                  </div>
                  <Users className="h-8 w-8 text-teal-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Progress</p>
                    <p className="text-2xl font-bold text-neutral-dark">78%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-magenta-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <ProgressTracker />
              <ActivityFeed />

              {/* Suggested Opportunities */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Suggested Opportunities</CardTitle>
                  <CardDescription>
                    Personalized recommendations based on your profile
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">AI Startup Accelerator</h4>
                      <Badge className="bg-teal-primary text-white">New</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      3-month program focused on AI startups with $100K investment
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📍 San Francisco</span>
                      <span>📅 Applications close March 30</span>
                    </div>
                    <Button size="sm" className="bg-teal-primary hover:bg-teal-primary/90">
                      Apply Now
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Mentor Match: Sarah Kim</h4>
                      <Badge variant="secondary" className="bg-magenta-primary/10 text-magenta-primary">
                        97% Match
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      Former VP of Product at TechCorp, specializes in B2B SaaS
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>⭐ 4.9 rating</span>
                      <span>💼 15 years experience</span>
                    </div>
                    <Button size="sm" variant="outline" className="border-magenta-primary text-magenta-primary hover:bg-magenta-primary hover:text-white">
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Current Mentor */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Your Mentor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" />
                      <AvatarFallback className="bg-magenta-primary text-white">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">John Davis</h4>
                      <p className="text-sm text-gray-600">Serial Entrepreneur</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>4.8 rating</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Next session: March 18</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button size="sm" className="w-full bg-magenta-primary hover:bg-magenta-primary/90">
                      Schedule Session
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-teal-primary pl-4 space-y-1">
                    <h4 className="font-medium text-sm">Startup Pitch Night</h4>
                    <p className="text-xs text-gray-600">March 15, 7:00 PM</p>
                    <Badge variant="secondary" className="text-xs">Registered</Badge>
                  </div>
                  
                  <div className="border-l-4 border-magenta-primary pl-4 space-y-1">
                    <h4 className="font-medium text-sm">AI Workshop</h4>
                    <p className="text-xs text-gray-600">March 20, 2:00 PM</p>
                    <Badge variant="outline" className="text-xs">Available</Badge>
                  </div>
                  
                  <div className="border-l-4 border-gray-300 pl-4 space-y-1">
                    <h4 className="font-medium text-sm">Funding Bootcamp</h4>
                    <p className="text-xs text-gray-600">April 1, 10:00 AM</p>
                    <Badge variant="outline" className="text-xs">Available</Badge>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message Community
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Explore Funding
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Find Collaborators
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
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Mail,
  Send,
  Users,
  Eye,
  Download,
  Plus,
  Edit,
  Trash2,
  Search,
  Calendar,
  TrendingUp,
  FileText,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function NewsletterManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const newsletters = [
    {
      id: 1,
      subject: "Weekly Startup Digest - January 2025",
      status: "sent",
      sentDate: "2025-01-15",
      recipients: 12450,
      openRate: 68.5,
      clickRate: 12.3,
      content:
        "This week in the startup ecosystem: New funding rounds, upcoming events, and featured startups...",
      template: "weekly-digest",
    },
    {
      id: 2,
      subject: "Pitch Night 2025 - Registration Open",
      status: "sent",
      sentDate: "2025-01-10",
      recipients: 8920,
      openRate: 72.1,
      clickRate: 18.7,
      content:
        "Join us for the biggest pitch competition of the year. Registration is now open...",
      template: "event-announcement",
    },
    {
      id: 3,
      subject: "New Mentorship Program Launch",
      status: "draft",
      sentDate: null,
      recipients: 0,
      openRate: 0,
      clickRate: 0,
      content:
        "We're excited to announce our new AI-powered mentorship matching program...",
      template: "program-launch",
    },
    {
      id: 4,
      subject: "Monthly Funding Report - December 2024",
      status: "scheduled",
      sentDate: "2025-01-20",
      recipients: 15600,
      openRate: 0,
      clickRate: 0,
      content:
        "December was a record month for startup funding in our ecosystem...",
      template: "monthly-report",
    },
  ];

  const subscribers = [
    {
      id: 1,
      email: "sarah@techflow.ai",
      name: "Sarah Chen",
      role: "Startup Founder",
      subscribeDate: "2024-01-15",
      status: "active",
      segments: ["Founders", "AI/ML", "Series A"],
    },
    {
      id: 2,
      email: "marcus@ecogreen.com",
      name: "Marcus Rodriguez",
      role: "Mentor",
      subscribeDate: "2024-02-20",
      status: "active",
      segments: ["Mentors", "CleanTech", "Sustainability"],
    },
    {
      id: 3,
      email: "emily@medconnect.com",
      name: "Dr. Emily Watson",
      role: "Investor",
      subscribeDate: "2024-03-10",
      status: "active",
      segments: ["Investors", "HealthTech", "Series B"],
    },
    {
      id: 4,
      email: "alex@financeflow.com",
      name: "Alex Johnson",
      role: "Startup Founder",
      subscribeDate: "2024-04-05",
      status: "unsubscribed",
      segments: ["Founders", "FinTech", "MVP"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-800 border-green-200";
      case "draft":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredNewsletters = newsletters.filter((newsletter) =>
    newsletter.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    {
      label: "Total Subscribers",
      value: "15,420",
      icon: Users,
      change: "+12%",
    },
    { label: "Avg Open Rate", value: "68.2%", icon: Eye, change: "+5.3%" },
    { label: "Newsletters Sent", value: "24", icon: Mail, change: "+8" },
    { label: "Click Rate", value: "15.4%", icon: TrendingUp, change: "+2.1%" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Newsletter Management
          </h1>
          <p className="text-gray-600 mt-1">
            Create and manage newsletter campaigns
          </p>
        </div>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Newsletter
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-white border border-gray-200 shadow-lg rounded-lg">
            <DialogHeader>
              <DialogTitle>Create New Newsletter</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject Line</Label>
                <Input id="subject" placeholder="Enter newsletter subject" />
              </div>
              <div>
                <Label htmlFor="template">Template</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    <SelectItem value="weekly-digest">Weekly Digest</SelectItem>
                    <SelectItem value="event-announcement">
                      Event Announcement
                    </SelectItem>
                    <SelectItem value="program-launch">
                      Program Launch
                    </SelectItem>
                    <SelectItem value="monthly-report">
                      Monthly Report
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Newsletter content"
                  className="min-h-[200px]"
                />
              </div>
              <div>
                <Label htmlFor="segments">Target Segments</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    <SelectItem value="all">All Subscribers</SelectItem>
                    <SelectItem value="founders">Startup Founders</SelectItem>
                    <SelectItem value="mentors">Mentors</SelectItem>
                    <SelectItem value="investors">Investors</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Save Draft
                </Button>
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  Send Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    {stat.change} from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[#FF6B35]" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Campaigns */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Newsletter Campaigns</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search newsletters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Open Rate</TableHead>
                  <TableHead>Click Rate</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNewsletters.map((newsletter) => (
                  <TableRow key={newsletter.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900">
                          {newsletter.subject}
                        </p>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {newsletter.content}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(newsletter.status)}>
                        {newsletter.status.charAt(0).toUpperCase() +
                          newsletter.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{newsletter.recipients.toLocaleString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {newsletter.status === "sent"
                        ? `${newsletter.openRate}%`
                        : "-"}
                    </TableCell>
                    <TableCell>
                      {newsletter.status === "sent"
                        ? `${newsletter.clickRate}%`
                        : "-"}
                    </TableCell>
                    <TableCell>
                      {newsletter.sentDate
                        ? new Date(newsletter.sentDate).toLocaleDateString()
                        : "Not sent"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Subscribers Management */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Subscribers ({subscribers.length})</CardTitle>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subscriber</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Segments</TableHead>
                  <TableHead>Subscribe Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscribers.map((subscriber) => (
                  <TableRow key={subscriber.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900">
                          {subscriber.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {subscriber.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{subscriber.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {subscriber.segments
                          .slice(0, 2)
                          .map((segment, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {segment}
                            </Badge>
                          ))}
                        {subscriber.segments.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{subscriber.segments.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(subscriber.subscribeDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          subscriber.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }
                      >
                        {subscriber.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

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
  MessageCircle,
  Mail,
  Phone,
  Search,
  Filter,
  Eye,
  Reply,
  Archive,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle,
  Send,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  type: string;
  status: string;
  priority: string;
  receivedDate: string;
  assignedTo: string | null;
}

export default function MessagesManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);

  const messages: Message[] = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah@techflow.ai",
      phone: "+1 (555) 123-4567",
      company: "TechFlow AI",
      subject: "Partnership Inquiry",
      message:
        "Hi, I'm interested in exploring partnership opportunities between TechFlow AI and StartupEco. We're developing AI-powered workflow automation solutions and believe there could be synergies with your platform. Could we schedule a call to discuss potential collaboration?",
      type: "partnership",
      status: "new",
      priority: "high",
      receivedDate: "2025-01-15T10:30:00Z",
      assignedTo: null,
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      email: "marcus@ecogreen.com",
      phone: "+1 (555) 234-5678",
      company: "EcoGreen Solutions",
      subject: "Mentorship Program Question",
      message:
        "I have some questions about your mentorship program. Specifically, I'd like to know about the matching process and time commitment expected from mentors. I have 10+ years of experience in CleanTech and would like to give back to the community.",
      type: "mentorship",
      status: "in-progress",
      priority: "medium",
      receivedDate: "2025-01-14T14:20:00Z",
      assignedTo: "Community Team",
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      email: "emily@medconnect.com",
      phone: "+1 (555) 345-6789",
      company: "MedConnect",
      subject: "Event Sponsorship Opportunity",
      message:
        "MedConnect would like to sponsor upcoming healthcare innovation events on your platform. We're particularly interested in events focused on telemedicine and digital health solutions. Please send us information about sponsorship packages and upcoming events.",
      type: "sponsorship",
      status: "resolved",
      priority: "high",
      receivedDate: "2025-01-13T09:15:00Z",
      assignedTo: "Events Team",
    },
    {
      id: 4,
      name: "Alex Johnson",
      email: "alex@financeflow.com",
      phone: "+1 (555) 456-7890",
      company: "FinanceFlow",
      subject: "Technical Support Request",
      message:
        "I'm having trouble uploading my pitch deck to the platform. The file size is within limits (under 10MB) but I keep getting an error message. Could someone from your technical team help me resolve this issue?",
      type: "support",
      status: "new",
      priority: "medium",
      receivedDate: "2025-01-15T16:45:00Z",
      assignedTo: null,
    },
    {
      id: 5,
      name: "Lisa Park",
      email: "lisa@bioinnovate.com",
      phone: "+1 (555) 567-8901",
      company: "BioInnovate",
      subject: "Media Interview Request",
      message:
        "I'm a journalist writing an article about the startup ecosystem and would like to interview someone from your team about trends in biotech startups. The article will be published in TechCrunch. Please let me know if someone would be available for a 30-minute interview.",
      type: "media",
      status: "in-progress",
      priority: "low",
      receivedDate: "2025-01-12T11:30:00Z",
      assignedTo: "PR Team",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "resolved":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return AlertCircle;
      case "in-progress":
        return Clock;
      case "resolved":
        return CheckCircle;
      default:
        return Clock;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || message.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = [
    { label: "Total Messages", value: "1,247", icon: MessageCircle },
    { label: "New Messages", value: "23", icon: AlertCircle },
    { label: "In Progress", value: "45", icon: Clock },
    { label: "Resolved Today", value: "12", icon: CheckCircle },
  ];

  const handleReply = (message: Message) => {
    setSelectedMessage(message);
    setIsReplyModalOpen(true);
  };

  const handleStatusChange = (messageId: number, newStatus: string) => {
    console.log("Update message status:", messageId, newStatus);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Messages Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage contact messages and support requests
          </p>
        </div>
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
                </div>
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[#FF6B35]" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Messages Table */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Contact Messages ({filteredMessages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contact</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMessages.map((message) => {
                  const StatusIcon = getStatusIcon(message.status);
                  return (
                    <TableRow key={message.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-gray-900">
                            {message.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {message.email}
                          </p>
                          <p className="text-sm text-gray-500">
                            {message.company}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-medium text-gray-900">
                          {message.subject}
                        </p>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {message.message}
                        </p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {message.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(message.priority)}>
                          {message.priority.charAt(0).toUpperCase() +
                            message.priority.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(message.status)}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {message.status.charAt(0).toUpperCase() +
                            message.status.slice(1).replace("-", " ")}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-gray-600">
                          {message.assignedTo || "Unassigned"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-gray-600">
                          {new Date(message.receivedDate).toLocaleDateString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              console.log("View message:", message.id)
                            }
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleReply(message)}
                          >
                            <Reply className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              handleStatusChange(message.id, "resolved")
                            }
                            className="text-green-600 hover:text-green-700"
                          >
                            <CheckCircle className="w-4 h-4" />
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
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Reply Modal */}
      <Dialog open={isReplyModalOpen} onOpenChange={setIsReplyModalOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="max-w-2xl bg-white border border-gray-200 shadow-lg rounded-lg">
          <DialogHeader>
            <DialogTitle>Reply to Message</DialogTitle>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Original Message
                </h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>From:</strong> {selectedMessage.name} (
                    {selectedMessage.email})
                  </p>
                  <p>
                    <strong>Subject:</strong> {selectedMessage.subject}
                  </p>
                  <p>
                    <strong>Message:</strong> {selectedMessage.message}
                  </p>
                </div>
              </div>
              <div>
                <Label htmlFor="reply-subject">Subject</Label>
                <Input
                  id="reply-subject"
                  defaultValue={`Re: ${selectedMessage.subject}`}
                />
              </div>
              <div>
                <Label htmlFor="reply-message">Reply Message</Label>
                <Textarea
                  id="reply-message"
                  placeholder="Type your reply..."
                  className="min-h-[150px]"
                />
              </div>
              <div>
                <Label htmlFor="assign-to">Assign To</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select team member" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    <SelectItem value="community">Community Team</SelectItem>
                    <SelectItem value="events">Events Team</SelectItem>
                    <SelectItem value="pr">PR Team</SelectItem>
                    <SelectItem value="support">Support Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsReplyModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Reply
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

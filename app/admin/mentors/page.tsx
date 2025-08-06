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
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Star,
  Award,
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

interface Mentor {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  expertise: string[];
  experience: string;
  status: string;
  rating: number;
  totalSessions: number;
  activeMentees: number;
  joinDate: string;
  bio: string;
  availability: string;
  languages: string[];
}

export default function MentorsManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expertiseFilter, setExpertiseFilter] = useState("all");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      email: "sarah@techexpert.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      company: "Former VP at Google",
      expertise: ["AI/ML", "Product Strategy", "Team Building"],
      experience: "15+ years",
      status: "approved",
      rating: 4.9,
      totalSessions: 45,
      activeMentees: 8,
      joinDate: "2024-01-15",
      bio: "Former VP at Google Ventures with 15+ years in startup ecosystem development. Passionate about helping AI startups scale.",
      availability: "Available",
      languages: ["English", "Mandarin"],
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      email: "marcus@cleantech.com",
      phone: "+1 (555) 234-5678",
      location: "Berlin, Germany",
      company: "CleanTech Innovations",
      expertise: ["CleanTech", "Sustainability", "Funding"],
      experience: "12+ years",
      status: "pending",
      rating: 0,
      totalSessions: 0,
      activeMentees: 0,
      joinDate: "2024-01-20",
      bio: "Serial entrepreneur in the CleanTech space with multiple successful exits. Expert in sustainable technology development.",
      availability: "Available",
      languages: ["English", "Spanish", "German"],
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      email: "emily@healthtech.com",
      phone: "+1 (555) 345-6789",
      location: "London, UK",
      company: "HealthTech Ventures",
      expertise: ["HealthTech", "Regulatory", "Clinical Trials"],
      experience: "20+ years",
      status: "approved",
      rating: 4.8,
      totalSessions: 67,
      activeMentees: 12,
      joinDate: "2023-11-10",
      bio: "PhD in Biomedical Engineering with extensive experience in healthcare innovation and regulatory compliance.",
      availability: "Busy",
      languages: ["English", "French"],
    },
    {
      id: 4,
      name: "Alex Johnson",
      email: "alex@fintech.com",
      phone: "+1 (555) 456-7890",
      location: "New York, NY",
      company: "FinTech Capital",
      expertise: ["FinTech", "Banking", "Compliance"],
      experience: "10+ years",
      status: "rejected",
      rating: 0,
      totalSessions: 0,
      activeMentees: 0,
      joinDate: "2024-01-25",
      bio: "Former investment banker turned FinTech entrepreneur. Specialized in financial services innovation.",
      availability: "Available",
      languages: ["English"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return CheckCircle;
      case "pending":
        return Clock;
      case "rejected":
        return XCircle;
      default:
        return Clock;
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Busy":
        return "bg-yellow-100 text-yellow-800";
      case "Unavailable":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((exp) =>
        exp.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesStatus =
      statusFilter === "all" || mentor.status === statusFilter;
    const matchesExpertise =
      expertiseFilter === "all" ||
      mentor.expertise.some((exp) =>
        exp.toLowerCase().includes(expertiseFilter.toLowerCase())
      );
    return matchesSearch && matchesStatus && matchesExpertise;
  });

  const handleApprove = (id: number) => {
    console.log("Approve mentor:", id);
  };

  const handleReject = (id: number) => {
    console.log("Reject mentor:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete mentor:", id);
  };

  const handleEdit = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsEditModalOpen(true);
  };

  const stats = [
    { label: "Total Mentors", value: "1,234", icon: Users },
    { label: "Active Mentors", value: "892", icon: CheckCircle },
    { label: "Pending Applications", value: "45", icon: Clock },
    { label: "Total Sessions", value: "5,678", icon: Award },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Mentors Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage mentor applications and profiles
          </p>
        </div>
        <Dialog open={isInviteModalOpen} onOpenChange={setIsInviteModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Invite Mentor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-white border border-gray-200 shadow-lg rounded-lg">
            <DialogHeader>
              <DialogTitle>Invite New Mentor</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mentorName">Full Name</Label>
                  <Input id="mentorName" placeholder="Enter mentor's name" />
                </div>
                <div>
                  <Label htmlFor="mentorEmail">Email Address</Label>
                  <Input
                    id="mentorEmail"
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="mentorCompany">Company/Organization</Label>
                <Input id="mentorCompany" placeholder="Enter company name" />
              </div>
              <div>
                <Label htmlFor="expertise">Areas of Expertise</Label>
                <Input
                  id="expertise"
                  placeholder="e.g., AI/ML, FinTech, Marketing"
                />
              </div>
              <div>
                <Label htmlFor="inviteMessage">Personal Message</Label>
                <Textarea
                  id="inviteMessage"
                  placeholder="Add a personal message to the invitation..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsInviteModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Invitation
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-lg">
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
                placeholder="Search mentors..."
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
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={expertiseFilter} onValueChange={setExpertiseFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by expertise" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                <SelectItem value="all">All Expertise</SelectItem>
                <SelectItem value="ai">AI/ML</SelectItem>
                <SelectItem value="fintech">FinTech</SelectItem>
                <SelectItem value="healthtech">HealthTech</SelectItem>
                <SelectItem value="cleantech">CleanTech</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Mentors Table */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Mentor Applications ({filteredMentors.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mentor</TableHead>
                  <TableHead>Expertise</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Sessions</TableHead>
                  <TableHead>Availability</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMentors.map((mentor) => {
                  const StatusIcon = getStatusIcon(mentor.status);
                  return (
                    <TableRow key={mentor.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-[#FF6B35]" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {mentor.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {mentor.email}
                            </p>
                            <p className="text-sm text-gray-500">
                              {mentor.company}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {mentor.expertise.slice(0, 2).map((exp, index) => (
                            <Badge
                              key={`${exp}-${index}`}
                              variant="secondary"
                              className="text-xs"
                            >
                              {exp}
                            </Badge>
                          ))}
                          {mentor.expertise.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{mentor.expertise.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-gray-600">
                          {mentor.experience}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(mentor.status)}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {mentor.status.charAt(0).toUpperCase() +
                            mentor.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {mentor.rating > 0 ? (
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">
                              {mentor.rating}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-400">
                            No rating
                          </span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                          <div>{mentor.totalSessions} total</div>
                          <div>{mentor.activeMentees} active</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={getAvailabilityColor(mentor.availability)}
                        >
                          {mentor.availability}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              console.log("View mentor:", mentor.id)
                            }
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(mentor)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          {mentor.status === "pending" && (
                            <>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleApprove(mentor.id)}
                                className="text-green-600 hover:text-green-700"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleReject(mentor.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(mentor.id)}
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

      {/* Edit Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl bg-white border border-gray-200 shadow-lg rounded-lg">
          <DialogHeader>
            <DialogTitle>Edit Mentor Profile</DialogTitle>
          </DialogHeader>
          {selectedMentor && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editName">Full Name</Label>
                  <Input id="editName" defaultValue={selectedMentor.name} />
                </div>
                <div>
                  <Label htmlFor="editEmail">Email</Label>
                  <Input
                    id="editEmail"
                    type="email"
                    defaultValue={selectedMentor.email}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editPhone">Phone</Label>
                  <Input id="editPhone" defaultValue={selectedMentor.phone} />
                </div>
                <div>
                  <Label htmlFor="editLocation">Location</Label>
                  <Input
                    id="editLocation"
                    defaultValue={selectedMentor.location}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="editCompany">Company</Label>
                <Input id="editCompany" defaultValue={selectedMentor.company} />
              </div>
              <div>
                <Label htmlFor="editExpertise">Expertise Areas</Label>
                <Input
                  id="editExpertise"
                  defaultValue={selectedMentor.expertise.join(", ")}
                />
              </div>
              <div>
                <Label htmlFor="editBio">Bio</Label>
                <Textarea id="editBio" defaultValue={selectedMentor.bio} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editAvailability">Availability</Label>
                  <Select
                    defaultValue={selectedMentor.availability.toLowerCase()}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200">
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="busy">Busy</SelectItem>
                      <SelectItem value="unavailable">Unavailable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="editStatus">Status</Label>
                  <Select defaultValue={selectedMentor.status}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200">
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

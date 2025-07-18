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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Building,
  MapPin,
  Users,
  Mail,
  Phone,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Startup {
  id: number;
  name: string;
  founder: string;
  email: string;
  phone: string;
  industry: string;
  stage: string;
  location: string;
  description: string;
  services: string[];
  status: string;
  registrationDate: string;
  employees: string;
  website: string;
}

export default function StartupsManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const startups: Startup[] = [
    {
      id: 1,
      name: "TechFlow AI",
      founder: "Sarah Chen",
      email: "sarah@techflow.ai",
      phone: "+1 (555) 123-4567",
      industry: "Artificial Intelligence",
      stage: "Series A",
      location: "San Francisco, CA",
      description:
        "Revolutionizing workflow automation with AI-powered solutions.",
      services: ["Mentorship", "Funding"],
      status: "approved",
      registrationDate: "2024-01-15",
      employees: "25-50",
      website: "https://techflow.ai",
    },
    {
      id: 2,
      name: "EcoGreen Solutions",
      founder: "Marcus Rodriguez",
      email: "marcus@ecogreen.com",
      phone: "+1 (555) 234-5678",
      industry: "CleanTech",
      stage: "Seed",
      location: "Berlin, Germany",
      description: "Sustainable energy solutions for urban environments.",
      services: ["Mentorship", "Co-working"],
      status: "pending",
      registrationDate: "2024-01-20",
      employees: "10-25",
      website: "https://ecogreen.com",
    },
    {
      id: 3,
      name: "MedConnect",
      founder: "Dr. Emily Watson",
      email: "emily@medconnect.com",
      phone: "+1 (555) 345-6789",
      industry: "HealthTech",
      stage: "Series B",
      location: "London, UK",
      description:
        "Connecting patients with healthcare providers through telemedicine.",
      services: ["Funding", "Partnerships"],
      status: "approved",
      registrationDate: "2024-01-10",
      employees: "100+",
      website: "https://medconnect.com",
    },
    {
      id: 4,
      name: "FinanceFlow",
      founder: "Alex Johnson",
      email: "alex@financeflow.com",
      phone: "+1 (555) 456-7890",
      industry: "FinTech",
      stage: "MVP",
      location: "Toronto, Canada",
      description: "Simplifying financial management for small businesses.",
      services: ["Mentorship", "Funding", "Co-working"],
      status: "rejected",
      registrationDate: "2024-01-25",
      employees: "5-10",
      website: "https://financeflow.com",
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

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || startup.status === statusFilter;
    const matchesService =
      serviceFilter === "all" ||
      startup.services.some((service) =>
        service.toLowerCase().includes(serviceFilter.toLowerCase())
      );
    return matchesSearch && matchesStatus && matchesService;
  });

  const handleApprove = (id: number) => {
    console.log("Approve startup:", id);
  };

  const handleReject = (id: number) => {
    console.log("Reject startup:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete startup:", id);
  };

  const handleEdit = (startup: Startup) => {
    setSelectedStartup(startup);
    setIsEditModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Startups Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage startup applications and profiles
          </p>
        </div>
        <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Startup
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Startups
                </p>
                <p className="text-2xl font-bold text-gray-900">2,847</p>
              </div>
              <Building className="w-8 h-8 text-[#FF6B35]" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-green-600">2,234</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">456</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-[#00BFCB]">157</p>
              </div>
              <Users className="w-8 h-8 text-[#00BFCB]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search startups, founders, or industries..."
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
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by service" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="mentorship">Mentorship</SelectItem>
                <SelectItem value="funding">Funding</SelectItem>
                <SelectItem value="co-working">Co-working</SelectItem>
                <SelectItem value="partnerships">Partnerships</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Startups Table */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>
            Startup Applications ({filteredStartups.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Startup</TableHead>
                  <TableHead>Founder</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Services</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Registration</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStartups.map((startup) => {
                  const StatusIcon = getStatusIcon(startup.status);
                  return (
                    <TableRow key={startup.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                            <Building className="w-5 h-5 text-[#FF6B35]" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {startup.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {startup.stage}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-gray-900">
                            {startup.founder}
                          </p>
                          <p className="text-sm text-gray-500">
                            {startup.email}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{startup.industry}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {startup.services.map((service, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(startup.status)}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {startup.status.charAt(0).toUpperCase() +
                            startup.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-gray-600">
                          {new Date(
                            startup.registrationDate
                          ).toLocaleDateString()}
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              console.log("View startup:", startup.id)
                            }
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(startup)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          {startup.status === "pending" && (
                            <>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleApprove(startup.id)}
                                className="text-green-600 hover:text-green-700"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleReject(startup.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(startup.id)}
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
            <DialogTitle>Edit Startup</DialogTitle>
          </DialogHeader>
          {selectedStartup && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Startup Name</Label>
                  <Input id="name" defaultValue={selectedStartup.name} />
                </div>
                <div>
                  <Label htmlFor="founder">Founder</Label>
                  <Input id="founder" defaultValue={selectedStartup.founder} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={selectedStartup.email}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue={selectedStartup.phone} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    defaultValue={selectedStartup.industry}
                  />
                </div>
                <div>
                  <Label htmlFor="stage">Stage</Label>
                  <Select defaultValue={selectedStartup.stage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200">
                      <SelectItem value="MVP">MVP</SelectItem>
                      <SelectItem value="Seed">Seed</SelectItem>
                      <SelectItem value="Series A">Series A</SelectItem>
                      <SelectItem value="Series B">Series B</SelectItem>
                      <SelectItem value="Growth">Growth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  defaultValue={selectedStartup.description}
                />
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

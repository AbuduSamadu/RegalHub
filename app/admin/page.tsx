"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Building,
  Calendar,
  MessageCircle,
  TrendingUp,
  UserPlus,
  Eye,
  CheckCircle,
  Clock,
  ArrowUpRight,
  BarChart3,
  PieChart,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
  Pie,
} from "recharts";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Startups",
      value: "2,847",
      change: "+12%",
      changeType: "positive",
      icon: Building,
      color: "text-[#FF6B35]",
      bgColor: "bg-[#FF6B35]/10",
    },
    {
      title: "Active Mentors",
      value: "1,234",
      change: "+8%",
      changeType: "positive",
      icon: Users,
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      title: "Upcoming Events",
      value: "45",
      change: "+23%",
      changeType: "positive",
      icon: Calendar,
      color: "text-[#FF6B35]",
      bgColor: "bg-[#FF6B35]/10",
    },
    {
      title: "Contact Messages",
      value: "189",
      change: "+5%",
      changeType: "positive",
      icon: MessageCircle,
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "signup",
      user: "TechFlow AI",
      action: "New startup registered",
      time: "2 minutes ago",
      status: "pending",
    },
    {
      id: 2,
      type: "event",
      user: "Sarah Chen",
      action: "RSVP'd to Pitch Night 2025",
      time: "15 minutes ago",
      status: "completed",
    },
    {
      id: 3,
      type: "mentor",
      user: "Dr. Marcus Rodriguez",
      action: "Applied as mentor",
      time: "1 hour ago",
      status: "pending",
    },
    {
      id: 4,
      type: "message",
      user: "Emily Watson",
      action: "Sent contact message",
      time: "2 hours ago",
      status: "pending",
    },
    {
      id: 5,
      type: "signup",
      user: "EcoGreen Solutions",
      action: "Profile updated",
      time: "3 hours ago",
      status: "completed",
    },
  ];

  const chartData = [
    { name: "Jan", startups: 120, mentors: 80, events: 12 },
    { name: "Feb", startups: 150, mentors: 95, events: 15 },
    { name: "Mar", startups: 180, mentors: 110, events: 18 },
    { name: "Apr", startups: 220, mentors: 130, events: 22 },
    { name: "May", startups: 280, mentors: 160, events: 28 },
    { name: "Jun", startups: 320, mentors: 180, events: 32 },
  ];

  const pieData = [
    { name: "Mentorship", value: 35, color: "#FF6B35" },
    { name: "Funding", value: 28, color: "#00BFCB" },
    { name: "Networking", value: 22, color: "#6B7280" },
    { name: "Events", value: 15, color: "#10B981" },
  ];

  const getStatusIcon = (status: string) => {
    return status === "completed" ? CheckCircle : Clock;
  };

  const getStatusColor = (status: string) => {
    return status === "completed" ? "text-green-600" : "text-yellow-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here&apos;s what&apos;s happening in your ecosystem.
          </p>
        </div>
        <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
          <UserPlus className="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-sm font-medium text-green-600">
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      from last month
                    </span>
                  </div>
                </div>
                <div
                  className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Chart */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-[#FF6B35]" />
              Growth Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="startups" fill="#FF6B35" />
                <Bar dataKey="mentors" fill="#00BFCB" />
                <Bar dataKey="events" fill="#6B7280" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Service Distribution */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-[#00BFCB]" />
              Service Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Eye className="w-5 h-5 mr-2 text-[#FF6B35]" />
              Recent Activity
            </CardTitle>
            <Button variant="outline" size="sm">
              View All
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const StatusIcon = getStatusIcon(activity.status);
              return (
                <div
                  key={activity.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === "completed"
                        ? "bg-green-100"
                        : "bg-yellow-100"
                    }`}
                  >
                    <StatusIcon
                      className={`w-5 h-5 ${getStatusColor(activity.status)}`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        activity.status === "completed"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {activity.status}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Manage Startups
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Review and approve new startup applications
            </p>
            <Button variant="outline" className="w-full">
              View Startups
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-[#00BFCB]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-[#00BFCB]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Create Event</h3>
            <p className="text-sm text-gray-600 mb-4">
              Schedule new events and workshops
            </p>
            <Button variant="outline" className="w-full">
              Add Event
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-[#6B7280]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-[#6B7280]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Invite Mentors</h3>
            <p className="text-sm text-gray-600 mb-4">
              Add new mentors to the platform
            </p>
            <Button variant="outline" className="w-full">
              Send Invites
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

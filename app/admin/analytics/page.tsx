"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingUp,
  Users,
  Calendar,
  Eye,
  UserPlus,
  Download,
  BarChart3,
  PieChart,
  Activity,
  Award,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
  AreaChart,
  Area,
  Pie,
} from "recharts";

export default function AnalyticsPage() {
  const trafficData = [
    { month: "Jan", visitors: 12400, signups: 890, events: 45 },
    { month: "Feb", visitors: 15600, signups: 1200, events: 52 },
    { month: "Mar", visitors: 18900, signups: 1450, events: 48 },
    { month: "Apr", visitors: 22300, signups: 1680, events: 61 },
    { month: "May", visitors: 25800, signups: 1920, events: 58 },
    { month: "Jun", visitors: 28400, signups: 2150, events: 67 },
  ];

  const serviceRequestData = [
    { name: "Mentorship", value: 35, color: "#FF6B35" },
    { name: "Funding", value: 28, color: "#00BFCB" },
    { name: "Networking", value: 22, color: "#6B7280" },
    { name: "Co-working", value: 15, color: "#10B981" },
  ];

  const eventAttendanceData = [
    { event: "Pitch Night", attendance: 85 },
    { event: "AI Workshop", attendance: 92 },
    { event: "Networking", attendance: 78 },
    { event: "FinTech Summit", attendance: 96 },
    { event: "Bootcamp", attendance: 88 },
  ];

  const userGrowthData = [
    { month: "Jan", startups: 2100, mentors: 890, investors: 340 },
    { month: "Feb", startups: 2350, mentors: 980, investors: 380 },
    { month: "Mar", startups: 2580, mentors: 1120, investors: 420 },
    { month: "Apr", startups: 2820, mentors: 1280, investors: 460 },
    { month: "May", startups: 3100, mentors: 1450, investors: 510 },
    { month: "Jun", startups: 3420, mentors: 1620, investors: 580 },
  ];

  const topPerformingEvents = [
    { name: "AI in Healthcare Workshop", attendees: 245, rating: 4.8 },
    { name: "Pitch Night 2024", attendees: 320, rating: 4.9 },
    { name: "FinTech Innovation Summit", attendees: 180, rating: 4.7 },
    { name: "Startup Networking Mixer", attendees: 150, rating: 4.6 },
    { name: "Women in Tech Conference", attendees: 280, rating: 4.9 },
  ];

  const kpiCards = [
    {
      title: "Total Visitors",
      value: "142,350",
      change: "+23.5%",
      changeType: "positive",
      icon: Eye,
      color: "text-[#FF6B35]",
      bgColor: "bg-[#FF6B35]/10",
    },
    {
      title: "New Signups",
      value: "8,290",
      change: "+18.2%",
      changeType: "positive",
      icon: UserPlus,
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      title: "Event Attendance",
      value: "12,450",
      change: "+12.8%",
      changeType: "positive",
      icon: Calendar,
      color: "text-[#FF6B35]",
      bgColor: "bg-[#FF6B35]/10",
    },
    {
      title: "Bounce Rate",
      value: "24.3%",
      change: "-5.2%",
      changeType: "positive",
      icon: Activity,
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Track platform performance and user engagement
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue="30days">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200">
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {kpi.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {kpi.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendingUp
                      className={`w-4 h-4 mr-1 ${
                        kpi.changeType === "positive"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        kpi.changeType === "positive"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {kpi.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      vs last month
                    </span>
                  </div>
                </div>
                <div
                  className={`w-12 h-12 ${kpi.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Insights */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-[#FF6B35]" />
              Traffic & Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stackId="1"
                  stroke="#FF6B35"
                  fill="#FF6B35"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="signups"
                  stackId="2"
                  stroke="#00BFCB"
                  fill="#00BFCB"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Service Requests Distribution */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-[#00BFCB]" />
              Service Request Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={serviceRequestData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                >
                  {serviceRequestData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {serviceRequestData.map((item, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-[#FF6B35]" />
              User Growth by Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="startups"
                  stroke="#FF6B35"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="mentors"
                  stroke="#00BFCB"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="investors"
                  stroke="#6B7280"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#FF6B35] rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Startups</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#00BFCB] rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Mentors</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#6B7280] rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Investors</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Attendance */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-[#00BFCB]" />
              Event Attendance Rates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={eventAttendanceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="event" type="category" width={100} />
                <Tooltip />
                <Bar
                  dataKey="attendance"
                  fill="#00BFCB"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Events */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="w-5 h-5 mr-2 text-[#FF6B35]" />
            Top Performing Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#FF6B35]">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{event.name}</p>
                    <p className="text-sm text-gray-500">
                      {event.attendees} attendees
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium text-gray-900">
                      {event.rating}
                    </span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    High Performance
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

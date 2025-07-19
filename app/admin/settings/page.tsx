"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Settings as SettingsIcon,
  User,
  Shield,
  Bell,
  Database,
  Mail,
  Globe,
  Lock,
  Plus,
  Edit,
  Trash2,
  Save,
  Upload,
  BarChart3,
  CreditCard,
  MessageCircle,
  Video,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SettingsPage() {
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);

  const adminUsers = [
    {
      id: 1,
      name: "John Smith",
      email: "john@startupeco.com",
      role: "Super Admin",
      status: "active",
      lastLogin: "2025-01-15T10:30:00Z",
      permissions: ["all"],
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@startupeco.com",
      role: "Content Manager",
      status: "active",
      lastLogin: "2025-01-14T16:45:00Z",
      permissions: ["events", "gallery", "newsletter"],
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@startupeco.com",
      role: "Community Manager",
      status: "active",
      lastLogin: "2025-01-13T09:20:00Z",
      permissions: ["startups", "mentors", "messages"],
    },
  ];

  const platformSettings = {
    siteName: "StartupEco",
    siteDescription: "Global Startup Ecosystem Platform",
    contactEmail: "hello@startupeco.com",
    supportEmail: "support@startupeco.com",
    maintenanceMode: false,
    registrationEnabled: true,
    emailVerificationRequired: true,
    autoApproveStartups: false,
    maxFileUploadSize: "10",
    allowedFileTypes: "jpg,jpeg,png,pdf,doc,docx",
    sessionTimeout: "24",
    passwordMinLength: "8",
  };

  const notificationSettings = {
    emailNotifications: true,
    newUserRegistration: true,
    newStartupApplication: true,
    newMentorApplication: true,
    newContactMessage: true,
    eventReminders: true,
    systemAlerts: true,
    weeklyReports: true,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage platform settings and configurations
          </p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="admins">Admin Users</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-[#FF6B35]" />
                  Site Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    defaultValue={platformSettings.siteName}
                  />
                </div>
                <div>
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea
                    id="siteDescription"
                    defaultValue={platformSettings.siteDescription}
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    defaultValue={platformSettings.contactEmail}
                  />
                </div>
                <div>
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    defaultValue={platformSettings.supportEmail}
                  />
                </div>
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SettingsIcon className="w-5 h-5 mr-2 text-[#00BFCB]" />
                  Platform Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-gray-500">
                      Temporarily disable public access
                    </p>
                  </div>
                  <Switch defaultChecked={platformSettings.maintenanceMode} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>User Registration</Label>
                    <p className="text-sm text-gray-500">
                      Allow new user registrations
                    </p>
                  </div>
                  <Switch
                    defaultChecked={platformSettings.registrationEnabled}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Verification</Label>
                    <p className="text-sm text-gray-500">
                      Require email verification for new users
                    </p>
                  </div>
                  <Switch
                    defaultChecked={platformSettings.emailVerificationRequired}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto-approve Startups</Label>
                    <p className="text-sm text-gray-500">
                      Automatically approve startup applications
                    </p>
                  </div>
                  <Switch
                    defaultChecked={platformSettings.autoApproveStartups}
                  />
                </div>
                <div>
                  <Label htmlFor="maxFileSize">Max File Upload Size (MB)</Label>
                  <Input
                    id="maxFileSize"
                    type="number"
                    defaultValue={platformSettings.maxFileUploadSize}
                  />
                </div>
                <div>
                  <Label htmlFor="allowedTypes">Allowed File Types</Label>
                  <Input
                    id="allowedTypes"
                    defaultValue={platformSettings.allowedFileTypes}
                  />
                </div>
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Admin Users */}
        <TabsContent value="admins">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-[#FF6B35]" />
                  Admin Users
                </CardTitle>
                <Dialog
                  open={isAddAdminModalOpen}
                  onOpenChange={setIsAddAdminModalOpen}
                >
                  <DialogTrigger asChild>
                    <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Admin
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-white border border-gray-200 shadow-lg rounded-lg">
                    <DialogHeader>
                      <DialogTitle>Add New Admin User</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="adminName">Full Name</Label>
                        <Input id="adminName" placeholder="Enter full name" />
                      </div>
                      <div>
                        <Label htmlFor="adminEmail">Email Address</Label>
                        <Input
                          id="adminEmail"
                          type="email"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="adminRole">Role</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200">
                            <SelectItem value="super-admin">
                              Super Admin
                            </SelectItem>
                            <SelectItem value="content-manager">
                              Content Manager
                            </SelectItem>
                            <SelectItem value="community-manager">
                              Community Manager
                            </SelectItem>
                            <SelectItem value="support-agent">
                              Support Agent
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Permissions</Label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {[
                            "Dashboard",
                            "Startups",
                            "Events",
                            "Gallery",
                            "Messages",
                            "Analytics",
                          ].map((permission) => (
                            <div
                              key={permission}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                id={permission.toLowerCase()}
                              />
                              <Label
                                htmlFor={permission.toLowerCase()}
                                className="text-sm"
                              >
                                {permission}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => setIsAddAdminModalOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                          Add Admin
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {adminUsers.map((admin) => (
                      <TableRow key={admin.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-gray-900">
                              {admin.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {admin.email}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{admin.role}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              admin.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {admin.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-gray-600">
                            {new Date(admin.lastLogin).toLocaleDateString()}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {admin.permissions
                              .slice(0, 2)
                              .map((permission, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {permission}
                                </Badge>
                              ))}
                            {admin.permissions.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{admin.permissions.length - 2}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
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
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2 text-[#FF6B35]" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Email Notifications
                  </h3>
                  {Object.entries(notificationSettings).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <Label className="capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </Label>
                        <p className="text-sm text-gray-500">
                          {key === "emailNotifications" &&
                            "Enable/disable all email notifications"}
                          {key === "newUserRegistration" &&
                            "Notify when new users register"}
                          {key === "newStartupApplication" &&
                            "Notify when startups apply"}
                          {key === "newMentorApplication" &&
                            "Notify when mentors apply"}
                          {key === "newContactMessage" &&
                            "Notify when contact messages are received"}
                          {key === "eventReminders" &&
                            "Send event reminder notifications"}
                          {key === "systemAlerts" &&
                            "Send system maintenance alerts"}
                          {key === "weeklyReports" &&
                            "Send weekly analytics reports"}
                        </p>
                      </div>
                      <Switch defaultChecked={value} />
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Notification Recipients
                  </h3>
                  <div>
                    <Label htmlFor="adminEmails">Admin Email Addresses</Label>
                    <Textarea
                      id="adminEmails"
                      placeholder="Enter email addresses (one per line)"
                      defaultValue="admin@startupeco.com&#10;notifications@startupeco.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="notificationFrequency">
                      Digest Frequency
                    </Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200">
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-[#FF6B35]" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="sessionTimeout">
                    Session Timeout (hours)
                  </Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    defaultValue={platformSettings.sessionTimeout}
                  />
                </div>
                <div>
                  <Label htmlFor="passwordLength">
                    Minimum Password Length
                  </Label>
                  <Input
                    id="passwordLength"
                    type="number"
                    defaultValue={platformSettings.passwordMinLength}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">
                      Require 2FA for admin accounts
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>IP Whitelist</Label>
                    <p className="text-sm text-gray-500">
                      Restrict admin access to specific IPs
                    </p>
                  </div>
                  <Switch />
                </div>
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Update Security
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-[#00BFCB]" />
                  API & Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="apiKey"
                      type="password"
                      defaultValue="sk_live_..."
                      readOnly
                    />
                    <Button variant="outline">Regenerate</Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input
                    id="webhookUrl"
                    placeholder="https://your-app.com/webhook"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Rate Limiting</Label>
                    <p className="text-sm text-gray-500">
                      Enable API rate limiting
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Button className="bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Save API Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Cloudinary",
                description: "Image and video management",
                status: "connected",
                icon: Upload,
              },
              {
                name: "SendGrid",
                description: "Email delivery service",
                status: "connected",
                icon: Mail,
              },
              {
                name: "Google Analytics",
                description: "Website analytics",
                status: "disconnected",
                icon: BarChart3,
              },
              {
                name: "Stripe",
                description: "Payment processing",
                status: "disconnected",
                icon: CreditCard,
              },
              {
                name: "Slack",
                description: "Team notifications",
                status: "connected",
                icon: MessageCircle,
              },
              {
                name: "Zoom",
                description: "Video conferencing",
                status: "disconnected",
                icon: Video,
              },
            ].map((integration, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <integration.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      className={
                        integration.status === "connected"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {integration.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      {integration.status === "connected"
                        ? "Configure"
                        : "Connect"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Backup */}
        <TabsContent value="backup">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-[#FF6B35]" />
                  Database Backup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Automatic Backups</Label>
                    <p className="text-sm text-gray-500">
                      Enable daily automatic backups
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label htmlFor="backupFrequency">Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200">
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="retentionPeriod">
                    Retention Period (days)
                  </Label>
                  <Input id="retentionPeriod" type="number" defaultValue="30" />
                </div>
                <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  Create Backup Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Backups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: "2025-01-15", size: "245 MB", status: "completed" },
                    { date: "2025-01-14", size: "243 MB", status: "completed" },
                    { date: "2025-01-13", size: "241 MB", status: "completed" },
                    { date: "2025-01-12", size: "238 MB", status: "completed" },
                  ].map((backup, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {backup.date}
                        </p>
                        <p className="text-sm text-gray-500">{backup.size}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800">
                          {backup.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

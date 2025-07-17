"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building,
  Users,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@startupeco.com",
      description: "Send us an email anytime",
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Street",
      description: "San Francisco, CA 94105",
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM PST",
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "partnership", label: "Partnership" },
    { value: "support", label: "Technical Support" },
    { value: "media", label: "Media & Press" },
    { value: "investment", label: "Investment Opportunities" },
    { value: "events", label: "Events & Speaking" },
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 Innovation Street, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@startupeco.com",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "456 Tech Avenue, London EC2A 4DP",
      phone: "+44 20 7123 4567",
      email: "london@startupeco.com",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Startup Boulevard, Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@startupeco.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our platform? Want to partner with us? We'd
            love to hear from you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-200"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-gray-900 mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-[#00BFCB]" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) =>
                      handleInputChange("inquiryType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    placeholder="Enter message subject"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Office Locations */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-[#00BFCB]/20 to-[#891C74]/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#00BFCB] mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      Find our offices worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-[#00BFCB]" />
                  Our Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {office.city}, {office.country}
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions
              </CardTitle>
              <p className="text-gray-600">Quick answers to common questions</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      How do I join the platform?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Simply click "Join the Ecosystem" and complete our
                      onboarding process. It takes less than 5 minutes!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Is there a cost to join?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Basic membership is free. We offer premium features for
                      advanced users and organizations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      How do I find a mentor?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Browse our mentor directory, filter by expertise, and send
                      connection requests directly through the platform.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Can I host my own events?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Yes! Community members can propose and host events.
                      Contact us for guidelines and support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      How do I apply for funding programs?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Check our funding opportunities page and follow the
                      application process for each program.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Do you offer international support?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Yes, we have offices in multiple countries and support
                      startups globally.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

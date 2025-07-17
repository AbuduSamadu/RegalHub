"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  MessageSquare,
  Send,
  CheckCircle,
  Globe,
  Users,
  Building,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "hello@startupeco.com",
    response: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    response: "Mon-Fri, 9AM-6PM PST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    contact: "123 Innovation Drive, San Francisco, CA 94105",
    response: "By appointment only",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with support",
    contact: "Available on our website",
    response: "Mon-Fri, 9AM-6PM PST",
  },
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@startupeco.com",
  },
  {
    city: "New York",
    address: "456 Tech Avenue, New York, NY 10001",
    phone: "+1 (555) 234-5678",
    email: "ny@startupeco.com",
  },
  {
    city: "Austin",
    address: "789 Startup Street, Austin, TX 73301",
    phone: "+1 (555) 345-6789",
    email: "austin@startupeco.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      inquiryType: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our platform? Want to partner with us?
              We&apos;d love to hear from you and help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Full Name *
                          </label>
                          <Input
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Company/Organization
                          </label>
                          <Input
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Inquiry Type *
                          </label>
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
                              <SelectItem value="general">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="partnership">
                                Partnership
                              </SelectItem>
                              <SelectItem value="support">
                                Technical Support
                              </SelectItem>
                              <SelectItem value="media">
                                Media & Press
                              </SelectItem>
                              <SelectItem value="investment">
                                Investment Opportunities
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Subject *</label>
                        <Input
                          placeholder="Brief subject line"
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange("subject", e.target.value)
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Message *</label>
                        <Textarea
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-teal-primary hover:bg-teal-primary/90 text-lg py-6"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12 space-y-4">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                      <h3 className="text-2xl font-semibold text-neutral-dark">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactMethods.map((method) => (
                    <div
                      key={method.title}
                      className="flex items-start space-x-3"
                    >
                      <div className="bg-teal-primary/10 p-2 rounded-lg">
                        <method.icon className="h-5 w-5 text-teal-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-neutral-dark">
                          {method.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium">{method.contact}</p>
                        <p className="text-xs text-gray-500">
                          {method.response}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Our Offices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                    >
                      <h4 className="font-medium text-neutral-dark mb-2">
                        {office.city}
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3 w-3" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-teal-primary">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Emergency support available 24/7
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <Card className="border-0 shadow-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>
                  Quick answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">
                        How do I join the ecosystem?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Click &quot;Join Ecosystem&quot; in the header and complete our
                        onboarding process. It takes just a few minutes to get
                        started.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        Is there a cost to join?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Basic membership is free. Premium features and programs
                        may have associated costs.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        How do I find a mentor?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Use our mentor matching system in your dashboard to find
                        mentors based on your industry and needs.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Can I host an event?</h4>
                      <p className="text-sm text-gray-600">
                        Yes! Community members can submit events for approval.
                        Contact us for event hosting guidelines.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        How do I apply for programs?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Browse our initiatives page and click &quot;Apply Now&quot; on
                        programs that match your startup&#39;s stage and focus.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        Do you offer investor connections?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Yes, we facilitate connections between startups and
                        investors through our platform and events.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

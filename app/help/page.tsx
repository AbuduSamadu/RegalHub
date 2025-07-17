"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  MessageCircle,
  Book,
  Video,
  Mail,
  Phone,
  Clock,
  ChevronRight,
  HelpCircle,
  Users,
  Settings,
  CreditCard,
  Shield,
} from "lucide-react";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Topics", icon: Book, count: 45 },
    { id: "getting-started", name: "Getting Started", icon: Users, count: 12 },
    { id: "account", name: "Account & Profile", icon: Settings, count: 8 },
    { id: "billing", name: "Billing & Payments", icon: CreditCard, count: 6 },
    { id: "privacy", name: "Privacy & Security", icon: Shield, count: 7 },
    { id: "features", name: "Platform Features", icon: Book, count: 12 },
  ];

  const faqs = [
    {
      id: 1,
      category: "getting-started",
      question: "How do I create an account?",
      answer:
        'To create an account, click the "Join the Ecosystem" button on our homepage. You\'ll be guided through a simple onboarding process where you can choose your role (Startup, Mentor, Investor, etc.) and provide basic information about yourself and your interests.',
    },
    {
      id: 2,
      category: "getting-started",
      question: "What types of users can join the platform?",
      answer:
        "Our platform welcomes five types of users: Startup Founders looking to grow their companies, Mentors who want to share expertise, Investors seeking opportunities, Talent looking for startup roles, and Partners interested in ecosystem collaboration.",
    },
    {
      id: 3,
      category: "features",
      question: "How does the mentor matching system work?",
      answer:
        "Our AI-powered matching system analyzes your profile, industry, stage, and specific needs to suggest relevant mentors. You can browse mentor profiles, view their expertise areas, and send connection requests directly through the platform.",
    },
    {
      id: 4,
      category: "features",
      question: "Can I host my own events on the platform?",
      answer:
        "Yes! Community members can propose and host events. Submit your event proposal through the Events section, and our team will review it. We provide support for event promotion and management tools.",
    },
    {
      id: 5,
      category: "account",
      question: "How do I update my profile information?",
      answer:
        'Go to your Dashboard and click on "Profile Settings" or use the profile dropdown in the top navigation. You can update your bio, company information, interests, and profile picture at any time.',
    },
    {
      id: 6,
      category: "account",
      question: "Can I change my user role after registration?",
      answer:
        "Yes, you can switch between roles or add additional roles. Contact our support team or use the role switcher in your dashboard if you have multiple roles (e.g., both Startup Founder and Mentor).",
    },
    {
      id: 7,
      category: "billing",
      question: "Is the platform free to use?",
      answer:
        "Basic membership is completely free and includes access to community features, events, and basic matching. We offer premium features for advanced users and organizations with additional benefits.",
    },
    {
      id: 8,
      category: "billing",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise accounts. All payments are processed securely through our payment partners.",
    },
    {
      id: 9,
      category: "privacy",
      question: "How is my data protected?",
      answer:
        "We use industry-standard encryption and security measures to protect your data. We never sell personal information to third parties and only share data as outlined in our Privacy Policy.",
    },
    {
      id: 10,
      category: "privacy",
      question: "Can I control who sees my profile?",
      answer:
        "Yes, you have full control over your profile visibility. You can choose to make your profile public, visible only to verified members, or private. You can also control which information is displayed.",
    },
    {
      id: 11,
      category: "features",
      question: "How do I apply for funding programs?",
      answer:
        "Browse available funding opportunities in the Funding section of your dashboard. Each program has specific requirements and application processes. Follow the guidelines and submit your application through the platform.",
    },
    {
      id: 12,
      category: "features",
      question: "What is the community discussion feature?",
      answer:
        "Our Community Hub allows members to start discussions, ask questions, share insights, and connect with peers. You can filter discussions by topic, upvote helpful content, and participate in conversations relevant to your interests.",
    },
  ];

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      action: "Start Chat",
      available: "Available 24/7",
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      action: "Send Email",
      available: "Response within 24h",
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      icon: Phone,
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM PST",
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      icon: Video,
      action: "Watch Videos",
      available: "Available anytime",
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Find answers to common questions or get in touch with our support
            team
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-4 text-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Browse by Category
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? "bg-[#00BFCB]/10 text-[#00BFCB]"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Support Options */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get Support
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`w-12 h-12 ${option.bgColor} rounded-lg flex items-center justify-center`}
                        >
                          <option.icon className={`w-6 h-6 ${option.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {option.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {option.available}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        {option.description}
                      </p>
                      <Button className="w-full bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <Badge variant="outline" className="text-sm">
                  {filteredFaqs.length} articles
                </Badge>
              </div>

              {filteredFaqs.length > 0 ? (
                <Card>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {filteredFaqs.map((faq) => (
                        <AccordionItem
                          key={faq.id}
                          value={faq.id.toString()}
                          className="border-b last:border-b-0"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                            <div className="flex items-center space-x-3">
                              <HelpCircle className="w-5 h-5 text-[#00BFCB] flex-shrink-0" />
                              <span className="font-medium text-gray-900">
                                {faq.question}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="pl-8">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No articles found
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your search or browse by category.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Popular Help Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Getting started guide",
                    "How to find a mentor",
                    "Booking mentorship sessions",
                    "Applying for funding",
                    "Hosting events",
                    "Profile optimization",
                    "Privacy settings",
                    "Billing questions",
                  ].map((topic, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left"
                    >
                      <span className="text-gray-700">{topic}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-gradient-to-br from-[#00BFCB]/10 to-[#891C74]/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Still need help?
                </h3>
                <p className="text-gray-600 mb-6">
                  Can't find what you're looking for? Our support team is here
                  to help.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Live Chat
                  </Button>
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

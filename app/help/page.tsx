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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  HelpCircle,
  Book,
  MessageSquare,
  Video,
  FileText,
  Users,
  Settings,
  CreditCard,
  Shield,
  Rocket,
  Mail,
} from "lucide-react";

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Rocket,
    faqs: [
      {
        question: "How do I create an account?",
        answer:
          "Click 'Join Ecosystem' in the header and follow the onboarding process. You'll choose your role, provide basic information, and set your preferences.",
      },
      {
        question: "What roles are available on the platform?",
        answer:
          "We support five main roles: Startup Founder, Mentor, Investor, Talent, and Partner. Each role has customized features and dashboard views.",
      },
      {
        question: "Is there a cost to join?",
        answer:
          "Basic membership is free and includes access to community features, events, and basic mentorship. Premium features and programs may have associated costs.",
      },
      {
        question: "How do I complete my profile?",
        answer:
          "After registration, visit your profile page to add your bio, experience, interests, and profile photo. A complete profile helps with better matching and networking.",
      },
    ],
  },
  {
    id: "mentorship",
    title: "Mentorship",
    icon: Users,
    faqs: [
      {
        question: "How do I find a mentor?",
        answer:
          "Use the mentor matching system in your dashboard. Filter by industry, experience, and availability. You can also browse mentor profiles and send connection requests.",
      },
      {
        question: "How do I become a mentor?",
        answer:
          "Select 'Mentor' during onboarding or update your role in settings. Complete your mentor profile with your expertise areas and availability.",
      },
      {
        question: "How are mentorship sessions conducted?",
        answer:
          "Sessions can be conducted via video call, phone, or in-person (if location permits). Our platform provides booking and scheduling tools.",
      },
      {
        question: "What if I need to reschedule a session?",
        answer:
          "You can reschedule sessions up to 24 hours in advance through your dashboard. Both parties will receive notifications about changes.",
      },
    ],
  },
  {
    id: "events",
    title: "Events & Programs",
    icon: Book,
    faqs: [
      {
        question: "How do I register for events?",
        answer:
          "Browse events on the Events page, click on an event you're interested in, and click 'Register'. Some events may require approval or have prerequisites.",
      },
      {
        question: "Can I host my own event?",
        answer:
          "Yes! Community members can submit events for approval. Contact our team with your event proposal, and we'll help you get it listed.",
      },
      {
        question: "What types of programs are available?",
        answer:
          "We offer accelerators, bootcamps, innovation challenges, and incubators. Each program has specific requirements and application processes.",
      },
      {
        question: "How do I apply for an accelerator program?",
        answer:
          "Visit the Initiatives page, find a program that matches your startup stage and focus, then click 'Apply Now' to start the application process.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Support",
    icon: Settings,
    faqs: [
      {
        question: "I'm having trouble logging in",
        answer:
          "Try resetting your password using the 'Forgot Password' link. If issues persist, clear your browser cache or try a different browser.",
      },
      {
        question: "How do I update my notification preferences?",
        answer:
          "Go to Settings > Notifications in your dashboard to customize which notifications you receive and how you receive them.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, you can delete your account from Settings > Account. Note that this action is permanent and cannot be undone.",
      },
      {
        question: "How do I report a technical issue?",
        answer:
          "Use the 'Contact Support' button in your dashboard or email support@startupeco.com with details about the issue you're experiencing.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    icon: Shield,
    faqs: [
      {
        question: "How is my data protected?",
        answer:
          "We use industry-standard encryption and security measures. Read our Privacy Policy for detailed information about data protection.",
      },
      {
        question: "Can I control who sees my profile?",
        answer:
          "Yes, you can set your profile visibility in Settings. Choose between public, community members only, or private visibility.",
      },
      {
        question: "How do I report inappropriate behavior?",
        answer:
          "Use the report function on user profiles or content, or contact our moderation team directly at moderation@startupeco.com.",
      },
      {
        question: "What information is shared with mentors/investors?",
        answer:
          "Only information you choose to share is visible. You control your profile visibility and can choose what to include in applications.",
      },
    ],
  },
  {
    id: "billing",
    title: "Billing & Payments",
    icon: CreditCard,
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, PayPal, and bank transfers for program fees. Payment processing is handled securely through Stripe.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Refund policies vary by program. Generally, refunds are available within 7 days of payment for programs that haven't started.",
      },
      {
        question: "How do I update my billing information?",
        answer:
          "Go to Settings > Billing to update your payment methods and billing address. Changes take effect immediately.",
      },
      {
        question: "Do you offer discounts for students or nonprofits?",
        answer:
          "Yes, we offer special pricing for students and nonprofit organizations. Contact us with verification documents for discount codes.",
      },
    ],
  },
];

const resources = [
  {
    title: "Platform Guide",
    description: "Complete guide to using all platform features",
    icon: Book,
    type: "Guide",
    link: "#",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video walkthroughs",
    icon: Video,
    type: "Video",
    link: "#",
  },
  {
    title: "API Documentation",
    description: "For developers integrating with our platform",
    icon: FileText,
    type: "Documentation",
    link: "#",
  },
  {
    title: "Community Forum",
    description: "Ask questions and get help from the community",
    icon: MessageSquare,
    type: "Community",
    link: "#",
  },
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("getting-started");

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-teal-primary mb-4">
              <HelpCircle className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Help Center
              </span>
            </div>
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              How can we help you?
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions, browse our guides, or get in
              touch with our support team.
            </p>
          </div>

          {/* Search */}
          <Card className="border-0 shadow-md mb-8">
            <CardContent className="p-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="pl-12 py-6 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {faqCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? "default" : "ghost"
                      }
                      className={`w-full justify-start ${
                        selectedCategory === category.id
                          ? "bg-teal-primary text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <category.icon className="h-4 w-4 mr-2" />
                      {category.title}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-md mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Need More Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Live Chat
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Book className="h-4 w-4 mr-2" />
                    User Guide
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs value="faq" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="faq">
                    Frequently Asked Questions
                  </TabsTrigger>
                  <TabsTrigger value="resources">
                    Resources & Guides
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="faq" className="space-y-6">
                  {searchTerm ? (
                    // Search Results
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-neutral-dark">
                        Search Results for &quot;{searchTerm}&quot;
                      </h2>
                      {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((category) => (
                          <Card
                            key={category.id}
                            className="border-0 shadow-md"
                          >
                            <CardHeader>
                              <CardTitle className="flex items-center space-x-2">
                                <category.icon className="h-5 w-5 text-teal-primary" />
                                <span>{category.title}</span>
                                <Badge variant="secondary">
                                  {category.faqs.length}
                                </Badge>
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <Accordion type="single" collapsible>
                                {category.faqs.map((faq, index) => (
                                  <AccordionItem
                                    key={index}
                                    value={`${category.id}-${index}`}
                                  >
                                    <AccordionTrigger className="text-left">
                                      {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600">
                                      {faq.answer}
                                    </AccordionContent>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <Card className="border-0 shadow-md">
                          <CardContent className="p-12 text-center">
                            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">
                              No results found
                            </h3>
                            <p className="text-gray-600">
                              Try different keywords or browse our categories
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  ) : (
                    // Category View
                    <div className="space-y-6">
                      {(() => {
                        const category = faqCategories.find(
                          (cat) => cat.id === selectedCategory
                        );
                        return category ? (
                          <Card className="border-0 shadow-md">
                            <CardHeader>
                              <CardTitle className="flex items-center space-x-2">
                                <category.icon className="h-6 w-6 text-teal-primary" />
                                <span>{category.title}</span>
                              </CardTitle>
                              <CardDescription>
                                Common questions about{" "}
                                {category.title.toLowerCase()}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <Accordion type="single" collapsible>
                                {category.faqs.map((faq, index) => (
                                  <AccordionItem
                                    key={index}
                                    value={`faq-${index}`}
                                  >
                                    <AccordionTrigger className="text-left">
                                      {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600">
                                      {faq.answer}
                                    </AccordionContent>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </CardContent>
                          </Card>
                        ) : null;
                      })()}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="resources" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.map((resource, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="bg-teal-primary/10 p-3 rounded-lg">
                              <resource.icon className="h-6 w-6 text-teal-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">
                                {resource.title}
                              </h3>
                              <Badge variant="outline" className="text-xs mt-1">
                                {resource.type}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {resource.description}
                          </p>
                          <Button
                            variant="outline"
                            className="w-full border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white"
                          >
                            Access Resource
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Contact Support */}
          <Card className="border-0 shadow-md mt-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Still need help?
              </h2>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you succeed. Get in touch and
                we&#39;ll respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-teal-primary hover:bg-teal-primary/90">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button
                  variant="outline"
                  className="border-magenta-primary text-magenta-primary hover:bg-magenta-primary hover:text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

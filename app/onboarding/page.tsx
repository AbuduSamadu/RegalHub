"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Building, Users, DollarSign, User, Handshake } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const userRoles = [
  {
    id: "startup",
    title: "Startup Founder",
    description: "Building the next big thing",
    icon: Building,
    color: "bg-teal-primary",
    benefits: ["Access to mentors", "Funding opportunities", "Networking events"]
  },
  {
    id: "mentor",
    title: "Mentor",
    description: "Share your expertise and guide others",
    icon: User,
    color: "bg-magenta-primary",
    benefits: ["Give back to community", "Expand network", "Recognition"]
  },
  {
    id: "investor",
    title: "Investor",
    description: "Discover promising startups",
    icon: DollarSign,
    color: "bg-teal-primary",
    benefits: ["Deal flow", "Due diligence tools", "Portfolio management"]
  },
  {
    id: "talent",
    title: "Talent",
    description: "Find opportunities in innovative companies",
    icon: Users,
    color: "bg-magenta-primary",
    benefits: ["Job opportunities", "Skills development", "Career growth"]
  },
  {
    id: "partner",
    title: "Partner",
    description: "Connect with the ecosystem",
    icon: Handshake,
    color: "bg-teal-primary",
    benefits: ["Collaboration opportunities", "Market access", "Brand exposure"]
  }
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interests: [] as string[]
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-2">
              Welcome to the Ecosystem
            </h1>
            <p className="text-lg text-gray-600">
              Let's get you set up in just a few steps
            </p>
          </div>

          <div className="mb-8">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>
                Step {currentStep} of {totalSteps}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <CardTitle className="text-2xl mb-2">
                      Choose Your Role
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Select the role that best describes you
                    </CardDescription>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userRoles.map((role) => (
                      <Card
                        key={role.id}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                          selectedRole === role.id
                            ? "ring-2 ring-teal-primary"
                            : ""
                        }`}
                        onClick={() => setSelectedRole(role.id)}
                      >
                        <CardContent className="p-6 text-center space-y-4">
                          <div
                            className={`${role.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto`}
                          >
                            <role.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">
                              {role.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {role.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {role.benefits.map((benefit) => (
                              <Badge
                                key={benefit}
                                variant="secondary"
                                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                              >
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <CardTitle className="text-2xl mb-2">
                      Tell us about yourself
                    </CardTitle>
                    <CardDescription className="text-lg">
                      We'll use this information to personalize your experience
                    </CardDescription>
                  </div>

                  <div className="space-y-4 max-w-md mx-auto">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <CardTitle className="text-2xl mb-2">
                      What interests you most?
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Select all that apply to customize your experience
                    </CardDescription>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                    {[
                      "Mentorship",
                      "Funding",
                      "Networking",
                      "Education",
                      "Events",
                      "Innovation",
                      "Technology",
                      "Marketing",
                      "Sales",
                      "Product Development",
                      "Leadership",
                      "Strategy",
                    ].map((interest) => (
                      <Card
                        key={interest}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                          formData.interests.includes(interest)
                            ? "ring-2 ring-teal-primary"
                            : ""
                        }`}
                        onClick={() => handleInterestToggle(interest)}
                      >
                        <CardContent className="p-4 text-center">
                          <span className="text-sm font-medium">
                            {interest}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6 text-center">
                  <div className="text-6xl mb-6">🎉</div>
                  <CardTitle className="text-3xl mb-4">
                    Welcome to the Ecosystem!
                  </CardTitle>
                  <CardDescription className="text-lg max-w-2xl mx-auto">
                    You're all set! We've created your profile and you can now
                    access all the features of our platform. Let's start
                    building the future together.
                  </CardDescription>

                  <div className="bg-gray-50 rounded-lg p-6 mt-8">
                    <h3 className="font-semibold mb-4">Your Profile Summary</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Role:</strong>{" "}
                        {userRoles.find((r) => r.id === selectedRole)?.title}
                      </p>
                      <p>
                        <strong>Name:</strong> {formData.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Company:</strong> {formData.company}
                      </p>
                      <p>
                        <strong>Interests:</strong>{" "}
                        {formData.interests.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    disabled={currentStep === 1 && !selectedRole}
                    className="bg-teal-primary hover:bg-teal-primary/90 flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    className="bg-teal-primary hover:bg-teal-primary/90"
                    onClick={() => (window.location.href = "/dashboard")}
                  >
                    Go to Dashboard
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
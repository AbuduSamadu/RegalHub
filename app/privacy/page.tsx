"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users, Database, Globe } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-teal-primary mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Privacy Policy
              </span>
            </div>
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              Your Privacy Matters
            </h1>
            <p className="text-lg text-gray-600">
              We&apos;re committed to protecting your privacy and being
              transparent about how we collect, use, and share your information.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <Badge variant="secondary">Last updated: March 1, 2024</Badge>
              <Badge variant="outline">Effective: March 1, 2024</Badge>
            </div>
          </div>

          <div className="space-y-8">
            {/* Overview */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-teal-primary" />
                  <span>Privacy Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  StartupEco (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
                  committed to protecting your personal information. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our platform and
                  services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-teal-primary/5 rounded-lg">
                    <Lock className="h-8 w-8 text-teal-primary mx-auto mb-2" />
                    <h4 className="font-medium">Secure</h4>
                    <p className="text-sm text-gray-600">
                      Your data is encrypted and protected
                    </p>
                  </div>
                  <div className="text-center p-4 bg-magenta-primary/5 rounded-lg">
                    <Users className="h-8 w-8 text-magenta-primary mx-auto mb-2" />
                    <h4 className="font-medium">Transparent</h4>
                    <p className="text-sm text-gray-600">
                      Clear about what we collect and why
                    </p>
                  </div>
                  <div className="text-center p-4 bg-teal-primary/5 rounded-lg">
                    <Shield className="h-8 w-8 text-teal-primary mx-auto mb-2" />
                    <h4 className="font-medium">Controlled</h4>
                    <p className="text-sm text-gray-600">
                      You control your privacy settings
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-teal-primary" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Personal Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Name, email address, and contact information</li>
                    <li>
                      • Profile information including bio, company, and role
                    </li>
                    <li>• Professional background and interests</li>
                    <li>• Profile photos and uploaded content</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Usage Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• How you interact with our platform and services</li>
                    <li>• Pages visited, features used, and time spent</li>
                    <li>• Search queries and preferences</li>
                    <li>• Device information and IP address</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Communication Data</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Messages sent through our platform</li>
                    <li>• Event registrations and participation</li>
                    <li>• Support requests and feedback</li>
                    <li>• Newsletter subscriptions and preferences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-teal-primary">
                      Platform Services
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Provide and maintain our services</li>
                      <li>• Match you with mentors and opportunities</li>
                      <li>• Process event registrations</li>
                      <li>• Enable communication features</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-magenta-primary">
                      Improvements
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Analyze usage patterns and trends</li>
                      <li>• Improve platform functionality</li>
                      <li>• Develop new features and services</li>
                      <li>• Personalize your experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-teal-primary">
                      Communication
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Send important updates and notifications</li>
                      <li>• Respond to your inquiries</li>
                      <li>• Share relevant opportunities</li>
                      <li>• Deliver newsletters (with consent)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-magenta-primary">
                      Legal & Safety
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Comply with legal obligations</li>
                      <li>• Protect against fraud and abuse</li>
                      <li>• Enforce our terms of service</li>
                      <li>• Ensure platform security</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-teal-primary" />
                  <span>Information Sharing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We do not sell your personal information. We may share your
                  information in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-primary pl-4">
                    <h4 className="font-semibold">With Your Consent</h4>
                    <p className="text-sm text-gray-600">
                      When you explicitly agree to share information with
                      specific parties
                    </p>
                  </div>
                  <div className="border-l-4 border-magenta-primary pl-4">
                    <h4 className="font-semibold">Service Providers</h4>
                    <p className="text-sm text-gray-600">
                      With trusted third parties who help us operate our
                      platform
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-primary pl-4">
                    <h4 className="font-semibold">Legal Requirements</h4>
                    <p className="text-sm text-gray-600">
                      When required by law or to protect our rights and safety
                    </p>
                  </div>
                  <div className="border-l-4 border-magenta-primary pl-4">
                    <h4 className="font-semibold">Business Transfers</h4>
                    <p className="text-sm text-gray-600">
                      In connection with mergers, acquisitions, or asset sales
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-teal-primary" />
                  <span>Data Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures
                  to protect your personal information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-primary rounded-full"></div>
                      <span className="text-sm">
                        SSL/TLS encryption for data transmission
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-primary rounded-full"></div>
                      <span className="text-sm">Encrypted data storage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-primary rounded-full"></div>
                      <span className="text-sm">Regular security audits</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-magenta-primary rounded-full"></div>
                      <span className="text-sm">
                        Access controls and authentication
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-magenta-primary rounded-full"></div>
                      <span className="text-sm">
                        Employee training and background checks
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-magenta-primary rounded-full"></div>
                      <span className="text-sm">
                        Incident response procedures
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-teal-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm">
                        Access & Portability
                      </h4>
                      <p className="text-xs text-gray-600">
                        Request a copy of your personal data
                      </p>
                    </div>
                    <div className="p-3 bg-magenta-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm">Correction</h4>
                      <p className="text-xs text-gray-600">
                        Update or correct your information
                      </p>
                    </div>
                    <div className="p-3 bg-teal-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm">Deletion</h4>
                      <p className="text-xs text-gray-600">
                        Request deletion of your data
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-magenta-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm">Restriction</h4>
                      <p className="text-xs text-gray-600">
                        Limit how we process your data
                      </p>
                    </div>
                    <div className="p-3 bg-teal-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm">Objection</h4>
                      <p className="text-xs text-gray-600">
                        Object to certain processing activities
                      </p>
                    </div>
                    <div className="p-3 bg-magenta-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm">
                        Withdraw Consent
                      </h4>
                      <p className="text-xs text-gray-600">
                        Revoke previously given consent
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-teal-primary" />
                  <span>International Data Transfers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  As a global platform, we may transfer your information to
                  countries outside your residence. We ensure appropriate
                  safeguards are in place, including:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Adequacy decisions by relevant authorities</li>
                  <li>• Standard contractual clauses</li>
                  <li>• Binding corporate rules</li>
                  <li>• Certification schemes and codes of conduct</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have questions about this Privacy Policy or want to
                  exercise your rights, contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      General Privacy Inquiries
                    </h4>
                    <p className="text-sm text-gray-600">
                      privacy@startupeco.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Data Protection Officer
                    </h4>
                    <p className="text-sm text-gray-600">dpo@startupeco.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mailing Address</h4>
                    <p className="text-sm text-gray-600">
                      StartupEco Privacy Team
                      <br />
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className="text-sm text-gray-600">
                      We respond to privacy requests within 30 days
                    </p>
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

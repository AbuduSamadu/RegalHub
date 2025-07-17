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
import {
  FileText,
  Scale,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-teal-primary mb-4">
              <FileText className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Terms of Service
              </span>
            </div>
            <h1 className="text-4xl font-bold text-neutral-dark mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Please read these terms carefully before using our platform and
              services.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <Badge variant="secondary">Last updated: March 1, 2024</Badge>
              <Badge variant="outline">Effective: March 1, 2024</Badge>
            </div>
          </div>

          <div className="space-y-8">
            {/* Agreement Overview */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-teal-primary" />
                  <span>Agreement Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  These Terms of Service (&quot;Terms&quot;) govern your use of the
                  StartupEco platform and services (&quot;Service&quot;) operated by
                  StartupEco Inc. (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;). By accessing or using
                  our Service, you agree to be bound by these Terms.
                </p>
                <div className="bg-teal-primary/5 border border-teal-primary/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-teal-primary" />
                    <span className="font-semibold">Key Points</span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• You must be 18 or older to use our services</li>
                    <li>
                      • You&apos;re responsible for maintaining account security
                    </li>
                    <li>
                      • We provide the platform &quot;as is&quot; without warranties
                    </li>
                    <li>• You retain ownership of your content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  By accessing and using StartupEco, you accept and agree to be
                  bound by the terms and provision of this agreement. If you do
                  not agree to abide by the above, please do not use this
                  service.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold">Eligibility</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• You must be at least 18 years old</li>
                    <li>
                      • You must provide accurate and complete information
                    </li>
                    <li>
                      • You must not be prohibited from using our services under
                      applicable law
                    </li>
                    <li>
                      • You must comply with all local laws and regulations
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Accounts */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-teal-primary" />
                  <span>2. User Accounts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Account Creation</h4>
                    <p className="text-gray-600 text-sm">
                      When you create an account with us, you must provide
                      information that is accurate, complete, and current at all
                      times. You are responsible for safeguarding the password
                      and for all activities that occur under your account.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Account Security</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Keep your password secure and confidential</li>
                      <li>
                        • Notify us immediately of any unauthorized access
                      </li>
                      <li>
                        • You&apos;re responsible for all activities under your
                        account
                      </li>
                      <li>
                        • We may suspend accounts that violate these terms
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Account Termination</h4>
                    <p className="text-gray-600 text-sm">
                      You may terminate your account at any time. We reserve the
                      right to terminate or suspend accounts that violate these
                      terms or for any other reason at our discretion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Acceptable Use */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-teal-primary" />
                  <span>3. Acceptable Use Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  You agree to use our Service only for lawful purposes and in
                  accordance with these Terms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">
                      ✓ Permitted Uses
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Connect with other entrepreneurs and mentors</li>
                      <li>• Share professional content and insights</li>
                      <li>• Participate in events and programs</li>
                      <li>• Use platform features as intended</li>
                      <li>• Provide constructive feedback</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">
                      ✗ Prohibited Uses
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Harassment, abuse, or harmful behavior</li>
                      <li>• Spam, unsolicited messages, or advertising</li>
                      <li>• Sharing false or misleading information</li>
                      <li>• Violating intellectual property rights</li>
                      <li>• Attempting to hack or disrupt the service</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content and Intellectual Property */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>4. Content and Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Your Content</h4>
                    <p className="text-gray-600 text-sm">
                      You retain ownership of any content you submit, post, or
                      display on or through the Service. By posting content, you
                      grant us a worldwide, non-exclusive, royalty-free license
                      to use, reproduce, and distribute your content in
                      connection with the Service.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Our Content</h4>
                    <p className="text-gray-600 text-sm">
                      The Service and its original content, features, and
                      functionality are owned by StartupEco and are protected by
                      international copyright, trademark, patent, trade secret,
                      and other intellectual property laws.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Content Standards</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Content must be accurate and not misleading</li>
                      <li>
                        • No offensive, harmful, or inappropriate material
                      </li>
                      <li>
                        • Respect others&apos; intellectual property rights
                      </li>
                      <li>
                        • No confidential or proprietary information without
                        permission
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>5. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Your privacy is important to us. Our Privacy Policy explains
                  how we collect, use, and protect your information when you use
                  our Service.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Data Processing</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                      • We process data in accordance with our Privacy Policy
                    </li>
                    <li>
                      • You consent to data processing as described in our
                      Privacy Policy
                    </li>
                    <li>• You can request data deletion or modification</li>
                    <li>
                      • We implement security measures to protect your data
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers and Limitations */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <span>6. Disclaimers and Limitations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Service Disclaimer</h4>
                  <p className="text-sm text-gray-600">
                    The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
                    basis. We make no warranties, expressed or implied, and
                    hereby disclaim all other warranties including implied
                    warranties of merchantability, fitness for a particular
                    purpose, or non-infringement.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Limitation of Liability</h4>
                  <p className="text-gray-600 text-sm">
                    In no event shall StartupEco, its directors, employees,
                    partners, agents, suppliers, or affiliates be liable for any
                    indirect, incidental, special, consequential, or punitive
                    damages, including without limitation, loss of profits,
                    data, use, goodwill, or other intangible losses.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>7. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We may terminate or suspend your account and bar access to the
                  Service immediately, without prior notice or liability, under
                  our sole discretion, for any reason whatsoever and without
                  limitation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Reasons for Termination
                    </h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Breach of these Terms</li>
                      <li>• Violation of applicable laws</li>
                      <li>• Harmful or disruptive behavior</li>
                      <li>• Inactivity for extended periods</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Effect of Termination
                    </h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Immediate loss of access to Service</li>
                      <li>• Deletion of account and data</li>
                      <li>• Survival of certain provisions</li>
                      <li>• No refund of fees paid</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>8. Governing Law and Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Governing Law</h4>
                    <p className="text-gray-600 text-sm">
                      These Terms shall be interpreted and governed by the laws
                      of the State of California, without regard to its conflict
                      of law provisions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                    <p className="text-gray-600 text-sm">
                      Any disputes arising from these Terms or your use of the
                      Service will be resolved through binding arbitration in
                      San Francisco, California, except for claims that may be
                      brought in small claims court.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>9. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days notice prior to any new terms taking effect.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Notification Process</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Email notification to registered users</li>
                    <li>• Notice posted on our website</li>
                    <li>• In-app notifications for significant changes</li>
                    <li>
                      • 30-day period to review changes before they take effect
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Legal Department</h4>
                    <p className="text-sm text-gray-600">
                      legal@startupeco.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">General Support</h4>
                    <p className="text-sm text-gray-600">
                      support@startupeco.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mailing Address</h4>
                    <p className="text-sm text-gray-600">
                      StartupEco Legal Team
                      <br />
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
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

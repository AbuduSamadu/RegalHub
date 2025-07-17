import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Shield, Lock, Eye, Database, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: Shield,
      content: `StartupEco ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.`,
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, update your profile, participate in events, or contact us. This may include:

• Personal Information: Name, email address, phone number, company information
• Profile Information: Bio, expertise areas, interests, profile photo
• Professional Information: Work history, education, skills, achievements
• Communication Data: Messages, forum posts, event RSVPs
• Usage Information: How you interact with our platform, features used, time spent
• Device Information: IP address, browser type, operating system, device identifiers`,
    },
    {
      id: "information-use",
      title: "3. How We Use Your Information",
      icon: UserCheck,
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Create and manage your account
• Facilitate connections between users (mentors, startups, investors)
• Send you technical notices, updates, security alerts, and support messages
• Respond to your comments, questions, and provide customer service
• Communicate about events, opportunities, and platform updates
• Personalize your experience and provide relevant content
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions and other illegal activities`,
    },
    {
      id: "information-sharing",
      title: "4. Information Sharing and Disclosure",
      icon: Eye,
      content: `We may share your information in the following circumstances:

• With Other Users: Profile information you choose to make public
• With Service Providers: Third-party vendors who perform services on our behalf
• For Legal Reasons: When required by law or to protect our rights
• Business Transfers: In connection with mergers, acquisitions, or asset sales
• With Consent: When you give us explicit permission to share specific information

We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes without your consent.`,
    },
    {
      id: "data-security",
      title: "5. Data Security",
      icon: Lock,
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Regular security assessments and updates
• Access controls and authentication requirements
• Employee training on data protection
• Incident response procedures

However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      icon: Database,
      content: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. We may also retain information to comply with legal obligations, resolve disputes, and enforce our agreements.

When you delete your account, we will delete or anonymize your personal information within a reasonable timeframe, except where we are required to retain it for legal or regulatory purposes.`,
    },
    {
      id: "your-rights",
      title: "7. Your Rights and Choices",
      icon: UserCheck,
      content: `Depending on your location, you may have certain rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information
• Portability: Request transfer of your data to another service
• Objection: Object to certain processing of your information
• Restriction: Request restriction of processing in certain circumstances

To exercise these rights, please contact us using the information provided below.`,
    },
    {
      id: "cookies",
      title: "8. Cookies and Tracking Technologies",
      icon: Eye,
      content: `We use cookies and similar tracking technologies to collect and use personal information about you. Cookies are small data files stored on your device that help us improve our services and your experience.

Types of cookies we use:
• Essential cookies: Necessary for the platform to function
• Analytics cookies: Help us understand how you use our platform
• Preference cookies: Remember your settings and preferences
• Marketing cookies: Used to deliver relevant advertisements

You can control cookies through your browser settings, but disabling certain cookies may affect platform functionality.`,
    },
    {
      id: "international-transfers",
      title: "9. International Data Transfers",
      icon: Shield,
      content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.

When we transfer your personal information internationally, we implement appropriate safeguards to protect your information, including:
• Standard contractual clauses approved by relevant authorities
• Adequacy decisions by regulatory bodies
• Other legally recognized transfer mechanisms`,
    },
    {
      id: "children-privacy",
      title: "10. Children's Privacy",
      icon: UserCheck,
      content: `Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.`,
    },
    {
      id: "changes",
      title: "11. Changes to This Privacy Policy",
      icon: Shield,
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.`,
    },
    {
      id: "contact",
      title: "12. Contact Us",
      icon: UserCheck,
      content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us at:

Email: privacy@startupeco.com
Address: 123 Innovation Street, San Francisco, CA 94105
Phone: +1 (555) 123-4567

For EU residents, you may also contact our Data Protection Officer at: dpo@startupeco.com`,
    },
  ];

  const principles = [
    {
      title: "Transparency",
      description: "We are clear about what data we collect and how we use it",
      icon: Eye,
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      title: "Security",
      description:
        "We protect your data with industry-standard security measures",
      icon: Lock,
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
    },
    {
      title: "Control",
      description:
        "You have control over your personal information and privacy settings",
      icon: UserCheck,
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      title: "Minimal Collection",
      description: "We only collect data that is necessary for our services",
      icon: Database,
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-[#00BFCB]/10 to-[#891C74]/10 text-[#00BFCB] border-[#00BFCB]/20">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your Privacy Matters
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn how we collect, use, and protect your personal information
            </p>
          </div>

          {/* Document Info */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="w-12 h-12 bg-[#00BFCB]/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#00BFCB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Privacy Policy
                    </h3>
                    <p className="text-sm text-gray-600">
                      How we handle your personal data
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 1, 2025</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core values that guide how we handle your personal information
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${principle.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <principle.icon className={`w-6 h-6 ${principle.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <Card
                key={section.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <div className="w-8 h-8 bg-[#00BFCB]/10 rounded-lg flex items-center justify-center mr-3">
                      <section.icon className="w-5 h-5 text-[#00BFCB]" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="mt-12 bg-gradient-to-br from-[#00BFCB]/10 to-[#891C74]/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Questions about your privacy?
              </h3>
              <p className="text-gray-600 mb-6">
                Our privacy team is here to help you understand how we protect
                your data and exercise your rights.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="mailto:privacy@startupeco.com"
                  className="inline-flex items-center px-6 py-3 bg-[#00BFCB] text-white rounded-lg hover:bg-[#00BFCB]/90 transition-colors duration-200"
                >
                  Contact Privacy Team
                </a>
                <a
                  href="/help"
                  className="inline-flex items-center px-6 py-3 border border-[#00BFCB] text-[#00BFCB] rounded-lg hover:bg-[#00BFCB] hover:text-white transition-colors duration-200"
                >
                  Visit Help Center
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

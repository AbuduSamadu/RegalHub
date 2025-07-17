import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Scale } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: `By accessing and using the StartupEco platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      id: "description",
      title: "2. Service Description",
      content: `StartupEco is a global platform that connects entrepreneurs, mentors, investors, and other stakeholders in the startup ecosystem. Our services include but are not limited to: networking opportunities, mentorship programs, event hosting, funding connections, and community discussions.`,
    },
    {
      id: "registration",
      title: "3. User Registration and Accounts",
      content: `To access certain features of our Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities under your account.`,
    },
    {
      id: "conduct",
      title: "4. User Conduct",
      content: `You agree not to use the Service to: (a) upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable; (b) impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity; (c) upload, post, or transmit any content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party; (d) upload, post, or transmit any unsolicited or unauthorized advertising, promotional materials, spam, or any other form of solicitation.`,
    },
    {
      id: "content",
      title: "5. Content and Intellectual Property",
      content: `You retain ownership of any intellectual property rights that you hold in content that you submit to the Service. By submitting content, you grant StartupEco a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with the Service.`,
    },
    {
      id: "privacy",
      title: "6. Privacy Policy",
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.`,
    },
    {
      id: "mentorship",
      title: "7. Mentorship and Professional Services",
      content: `StartupEco facilitates connections between mentors and mentees but does not provide professional advice directly. Any advice, guidance, or services provided by mentors are their own opinions and should not be considered as professional advice from StartupEco. Users should exercise their own judgment when acting on any advice received.`,
    },
    {
      id: "events",
      title: "8. Events and Third-Party Services",
      content: `StartupEco may host or facilitate events and may integrate with third-party services. We are not responsible for the content, accuracy, or availability of third-party services or events hosted by community members. Your participation in events is at your own risk.`,
    },
    {
      id: "payments",
      title: "9. Payments and Subscriptions",
      content: `Some features of our Service may require payment. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing at any time, with notice to existing subscribers. Subscription fees will be charged on a recurring basis until cancelled.`,
    },
    {
      id: "termination",
      title: "10. Termination",
      content: `We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach the Terms. Upon termination, your right to use the Service will cease immediately.`,
    },
    {
      id: "disclaimers",
      title: "11. Disclaimers and Limitation of Liability",
      content: `The Service is provided on an "AS IS" and "AS AVAILABLE" basis. StartupEco disclaims all warranties, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall StartupEco be liable for any indirect, incidental, special, consequential, or punitive damages.`,
    },
    {
      id: "indemnification",
      title: "12. Indemnification",
      content: `You agree to defend, indemnify, and hold harmless StartupEco and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Service.`,
    },
    {
      id: "governing-law",
      title: "13. Governing Law",
      content: `These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms will be resolved in the courts of California.`,
    },
    {
      id: "changes",
      title: "14. Changes to Terms",
      content: `We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.`,
    },
    {
      id: "contact",
      title: "15. Contact Information",
      content: `If you have any questions about these Terms, please contact us at legal@startupeco.com or through our contact page.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-[#00BFCB]/10 to-[#891C74]/10 text-[#00BFCB] border-[#00BFCB]/20">
              <Scale className="w-4 h-4 mr-2" />
              Legal Document
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using our platform
            </p>
          </div>

          {/* Document Info */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="w-12 h-12 bg-[#00BFCB]/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#00BFCB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Terms of Service
                    </h3>
                    <p className="text-sm text-gray-600">
                      Legal agreement for platform usage
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

      {/* Terms Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <Card
                key={section.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer Note */}
          <Card className="mt-12 bg-gradient-to-br from-[#00BFCB]/10 to-[#891C74]/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Questions about our Terms?
              </h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please
                don't hesitate to contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="mailto:legal@startupeco.com"
                  className="inline-flex items-center px-6 py-3 bg-[#00BFCB] text-white rounded-lg hover:bg-[#00BFCB]/90 transition-colors duration-200"
                >
                  Contact Legal Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-[#00BFCB] text-[#00BFCB] rounded-lg hover:bg-[#00BFCB] hover:text-white transition-colors duration-200"
                >
                  General Contact
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

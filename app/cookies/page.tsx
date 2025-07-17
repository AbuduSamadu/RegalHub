import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Cookie,
  Settings,
  Eye,
  BarChart,
  Target,
  Shield,
} from "lucide-react";

export default function CookiesPage() {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      icon: Shield,
      description:
        "These cookies are necessary for the website to function and cannot be switched off.",
      purpose: "Authentication, security, basic functionality",
      retention: "Session or up to 1 year",
      examples: ["Login status", "Security tokens", "Language preferences"],
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
      required: true,
    },
    {
      type: "Analytics Cookies",
      icon: BarChart,
      description:
        "Help us understand how visitors interact with our website by collecting anonymous information.",
      purpose: "Website performance analysis, user behavior insights",
      retention: "Up to 2 years",
      examples: ["Google Analytics", "Page views", "Session duration"],
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
      required: false,
    },
    {
      type: "Functional Cookies",
      icon: Settings,
      description:
        "Enable enhanced functionality and personalization based on your interactions.",
      purpose: "Personalized experience, remember preferences",
      retention: "Up to 1 year",
      examples: [
        "Theme preferences",
        "Dashboard layout",
        "Notification settings",
      ],
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
      required: false,
    },
    {
      type: "Marketing Cookies",
      icon: Target,
      description:
        "Track visitors across websites to display relevant and engaging advertisements.",
      purpose: "Targeted advertising, campaign effectiveness",
      retention: "Up to 1 year",
      examples: [
        "Ad targeting",
        "Conversion tracking",
        "Social media integration",
      ],
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
      required: false,
    },
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and performance monitoring",
      cookies: ["_ga", "_gid", "_gat"],
      retention: "2 years",
      optOut: "https://tools.google.com/dlpage/gaoptout",
    },
    {
      name: "Intercom",
      purpose: "Customer support and live chat functionality",
      cookies: ["intercom-*"],
      retention: "1 year",
      optOut: "Contact support to disable",
    },
    {
      name: "Hotjar",
      purpose: "User experience analysis and heatmaps",
      cookies: ["_hjid", "_hjSession*"],
      retention: "1 year",
      optOut: "https://www.hotjar.com/legal/compliance/opt-out",
    },
    {
      name: "LinkedIn",
      purpose: "Social media integration and professional networking",
      cookies: ["li_*", "bcookie"],
      retention: "2 years",
      optOut: "LinkedIn privacy settings",
    },
  ];

  const sections = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners about how users interact with their sites.

Cookies contain information that is transferred to your computer's hard drive. They help us improve our services and deliver a better, more personalized experience by enabling us to:
• Estimate our audience size and usage patterns
• Store your preferences and customize content
• Speed up your searches and navigation
• Recognize you when you return to our website`,
    },
    {
      id: "how-we-use-cookies",
      title: "How We Use Cookies",
      content: `StartupEco uses cookies for several purposes:

1. **Essential Operations**: To provide core functionality like user authentication and security
2. **Performance Monitoring**: To understand how our platform is used and identify areas for improvement
3. **Personalization**: To remember your preferences and provide a customized experience
4. **Analytics**: To analyze user behavior and improve our services
5. **Marketing**: To deliver relevant content and measure campaign effectiveness

We use both first-party cookies (set by StartupEco) and third-party cookies (set by our partners and service providers).`,
    },
    {
      id: "managing-cookies",
      title: "Managing Your Cookie Preferences",
      content: `You have several options for managing cookies:

**Browser Settings**: Most web browsers allow you to control cookies through their settings. You can:
• Block all cookies
• Block third-party cookies only
• Delete existing cookies
• Set preferences for specific websites

**Our Cookie Preferences**: You can manage your cookie preferences for our website using our cookie consent tool, which appears when you first visit our site.

**Opt-Out Tools**: Many advertising networks provide opt-out tools for their cookies.

Please note that blocking or deleting cookies may impact your experience on our platform and limit certain functionality.`,
    },
    {
      id: "legal-basis",
      title: "Legal Basis for Cookie Use",
      content: `Our use of cookies is based on:

• **Consent**: For non-essential cookies, we obtain your explicit consent before placing them on your device
• **Legitimate Interest**: For essential cookies necessary for website functionality and security
• **Contract Performance**: For cookies required to provide services you've requested

You can withdraw your consent at any time by adjusting your cookie preferences or contacting us directly.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-[#00BFCB]/10 to-[#891C74]/10 text-[#00BFCB] border-[#00BFCB]/20">
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn about how we use cookies and similar technologies on our
              platform
            </p>
          </div>

          {/* Document Info */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="w-12 h-12 bg-[#00BFCB]/10 rounded-lg flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-[#00BFCB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Cookie Policy
                    </h3>
                    <p className="text-sm text-gray-600">
                      Information about cookies and tracking
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

      {/* Cookie Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Different types of cookies serve different purposes on our
              platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 ${cookie.bgColor} rounded-lg flex items-center justify-center`}
                      >
                        <cookie.icon className={`w-5 h-5 ${cookie.color}`} />
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {cookie.type}
                      </span>
                    </div>
                    <Badge
                      variant={cookie.required ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {cookie.required ? "Required" : "Optional"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{cookie.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">
                        Purpose:{" "}
                      </span>
                      <span className="text-gray-600">{cookie.purpose}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Retention:{" "}
                      </span>
                      <span className="text-gray-600">{cookie.retention}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Examples:{" "}
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {cookie.examples.map((example, exampleIndex) => (
                          <Badge
                            key={exampleIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-gray-50">
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
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              External services we use that may set cookies on your device
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {thirdPartyServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      Third-party
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.purpose}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">
                        Cookies:{" "}
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {service.cookies.map((cookie, cookieIndex) => (
                          <Badge
                            key={cookieIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {cookie}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Retention:{" "}
                      </span>
                      <span className="text-gray-600">{service.retention}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Opt-out:{" "}
                      </span>
                      <span className="text-gray-600">{service.optOut}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-[#00BFCB]/10 to-[#891C74]/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#00BFCB]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-[#00BFCB]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Manage Your Cookie Preferences
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                You have control over which cookies we use. Update your
                preferences at any time or contact us if you need help managing
                your cookie settings.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button className="bg-[#00BFCB] hover:bg-[#00BFCB]/90 text-white px-8">
                  <Settings className="w-4 h-4 mr-2" />
                  Cookie Preferences
                </Button>
                <Button
                  variant="outline"
                  className="border-[#00BFCB] text-[#00BFCB] hover:bg-[#00BFCB] hover:text-white px-8"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View All Cookies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Questions About Cookies?
              </h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies or need help
                managing your preferences, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="mailto:privacy@startupeco.com"
                  className="inline-flex items-center px-6 py-3 bg-[#00BFCB] text-white rounded-lg hover:bg-[#00BFCB]/90 transition-colors duration-200"
                >
                  Contact Support
                </a>
                <a
                  href="/privacy"
                  className="inline-flex items-center px-6 py-3 border border-[#00BFCB] text-[#00BFCB] rounded-lg hover:bg-[#00BFCB] hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

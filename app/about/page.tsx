import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Users,
  Target,
  Heart,
  Award,
  TrendingUp,
  Building,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Active Startups", value: "10,000+", icon: Building },
    { label: "Expert Mentors", value: "2,500+", icon: Users },
    { label: "Funding Raised", value: "$500M+", icon: TrendingUp },
    { label: "Countries", value: "50+", icon: Globe },
  ];

  const values = [
    {
      icon: Globe,
      title: "Global Collaboration",
      description:
        "We believe innovation knows no borders. Our platform connects entrepreneurs worldwide.",
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      icon: Heart,
      title: "Community First",
      description:
        "Building genuine relationships and fostering a supportive ecosystem for all members.",
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Empowering breakthrough ideas and supporting disruptive technologies.",
      color: "text-[#00BFCB]",
      bgColor: "bg-[#00BFCB]/10",
    },
    {
      icon: Target,
      title: "Impact Driven",
      description:
        "Focusing on startups that create positive change in the world.",
      color: "text-[#891C74]",
      bgColor: "bg-[#891C74]/10",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former VP at Google Ventures with 15+ years in startup ecosystem development.",
      avatar: "👩‍💼",
      expertise: ["Venture Capital", "Strategy", "Global Expansion"],
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      bio: "Ex-Tesla engineer passionate about building scalable platforms for innovation.",
      avatar: "👨‍💻",
      expertise: ["Technology", "Product", "Engineering"],
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Community",
      bio: "PhD in Organizational Psychology, expert in building thriving communities.",
      avatar: "👩‍⚕️",
      expertise: ["Community Building", "Psychology", "Mentorship"],
    },
    {
      name: "Alex Johnson",
      role: "Head of Partnerships",
      bio: "Former McKinsey consultant specializing in ecosystem partnerships.",
      avatar: "👨‍🚀",
      expertise: ["Partnerships", "Strategy", "Business Development"],
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description:
        "StartupEco was founded with a vision to democratize access to startup resources.",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description:
        "Launched in 10 countries with our first 1,000 startups and 200 mentors.",
    },
    {
      year: "2022",
      title: "Funding Milestone",
      description:
        "Our community raised over $100M in funding across 500+ startups.",
    },
    {
      year: "2023",
      title: "Platform Evolution",
      description:
        "Launched advanced matching algorithms and virtual event capabilities.",
    },
    {
      year: "2024",
      title: "Community Growth",
      description:
        "Reached 10,000+ active startups and 2,500+ mentors across 50+ countries.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-[#00BFCB]/10 to-[#891C74]/10 text-[#00BFCB] border-[#00BFCB]/20">
            <Globe className="w-4 h-4 mr-2" />
            About StartupEco
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Empowering the Global{" "}
            <span className="text-gradient">Startup Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We&#39;re building the world&#39;s most comprehensive platform for startup
            collaboration, connecting entrepreneurs, mentors, investors, and
            innovators across the globe.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00BFCB]/20 to-[#891C74]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-[#00BFCB]" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize access to startup resources and create a global
                community where innovation thrives. We believe every
                entrepreneur deserves the opportunity to turn their ideas into
                reality, regardless of their location or background.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our platform, we&#39;re breaking down barriers, fostering
                collaboration, and accelerating the growth of startups
                worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00BFCB]/10 to-[#891C74]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A world where geographical boundaries don&#39;t limit
                entrepreneurial potential. Where every startup has access to
                mentorship, funding, and community support. Where innovation is
                collaborative, inclusive, and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to empowering entrepreneurs
              worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00BFCB]/20 to-[#891C74]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#00BFCB] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in building the global startup ecosystem
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00BFCB] to-[#891C74]"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-[#00BFCB] mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-[#00BFCB] rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00BFCB] to-[#891C74]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Whether you're a startup founder, mentor, investor, or just
            passionate about innovation, there's a place for you in our global
            community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-white text-[#00BFCB] hover:bg-white/90 px-8 py-4 text-lg font-semibold"
            >
              Join the Ecosystem
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#00BFCB] px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import type { Metadata } from "next";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Globe,
  Users,
  Lightbulb,
  Target,
  Heart,
  Rocket,
  Award,
  Building,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Community Members",
    value: "10,000+",
    color: "text-teal-primary",
  },
  {
    icon: Building,
    label: "Startups Launched",
    value: "500+",
    color: "text-magenta-primary",
  },
  { icon: Globe, label: "Countries", value: "50+", color: "text-teal-primary" },
  {
    icon: Award,
    label: "Success Stories",
    value: "200+",
    color: "text-magenta-primary",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Former VP at TechCorp, passionate about connecting global entrepreneurs",
    avatar: "SJ",
    linkedin: "#",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Full-stack engineer with 10+ years building scalable platforms",
    avatar: "MC",
    linkedin: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Community",
    bio: "Community builder focused on creating meaningful connections",
    avatar: "ER",
    linkedin: "#",
  },
  {
    name: "David Kim",
    role: "Head of Partnerships",
    bio: "Business development expert with extensive startup ecosystem experience",
    avatar: "DK",
    linkedin: "#",
  },
];

const values = [
  {
    icon: Globe,
    title: "Global Connection",
    description:
      "Breaking down geographical barriers to connect entrepreneurs worldwide",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Building genuine relationships and fostering collaborative growth",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Empowering breakthrough ideas and disruptive technologies",
  },
  {
    icon: Target,
    title: "Impact Driven",
    description: "Measuring success by the positive change we create together",
  },
];


export default function AbouContentPage() {
  return (
    <main role="main">
      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-to-br from-teal-primary/10 to-magenta-primary/10"
        role="banner"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center space-x-2 text-teal-primary">
              <Globe className="h-6 w-6" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-wider">
                About StartupEco
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight tracking-tight">
              Building the Future of
              <span className="text-teal-primary"> Entrepreneurship</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              We&apos;re on a mission to democratize entrepreneurship by
              connecting startups, mentors, investors, and innovators in a
              thriving global ecosystem where ideas become reality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-3">
                <div className="flex items-center justify-center">
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-neutral-dark">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create a world where every entrepreneur has access to the
                  resources, mentorship, and community they need to turn their
                  vision into reality, regardless of their background or
                  location.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A globally connected startup ecosystem where innovation
                  thrives, barriers are broken down, and the next generation of
                  world-changing companies are built through collaboration and
                  shared knowledge.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-teal-primary to-magenta-primary rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Rocket className="h-8 w-8" />
                    <span className="text-xl font-semibold">Since 2020</span>
                  </div>
                  <p className="text-lg opacity-90">
                    We&apos;ve been dedicated to fostering innovation and
                    connecting entrepreneurs across the globe, creating lasting
                    impact in the startup ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center">
                    <value.icon className="h-12 w-12 text-teal-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to empowering entrepreneurs
              worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card
                key={member.name}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarImage
                      src={`/api/placeholder/80/80`}
                      alt={member.name}
                    />
                    <AvatarFallback className="bg-teal-primary text-white text-lg">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark">
                      {member.name}
                    </h3>
                    <p className="text-magenta-primary font-medium">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white"
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-primary to-magenta-primary">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-4xl font-bold">Ready to Join Our Mission?</h2>
            <p className="text-xl opacity-90">
              Be part of a community that&apos;s shaping the future of
              entrepreneurship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-primary hover:bg-gray-100 font-semibold px-8"
              >
                Join the Ecosystem
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-teal-primary font-semibold px-8"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

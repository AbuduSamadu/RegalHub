"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Leaf,
  Users,
  Globe,
  Award,
  TrendingUp,
  ArrowRight,
  Target,
  Lightbulb,
  Shield,
  BookOpen,
  Zap,
} from "lucide-react";

interface Initiative {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  impact: string;
  beneficiaries: string;
  status: string;
  image: string;
  icon: React.ElementType;
  stats: Array<{
    label: string;
    value: string;
    icon: React.ElementType;
  }>;
  tags: string[];
  color: string;
  bgColor: string;
}

const mockInitiatives: Initiative[] = [
  {
    id: "1",
    title: "Diversity in Tech Program",
    description:
      "Supporting underrepresented founders through mentorship, funding, and resources to build inclusive startups.",
    longDescription:
      "Our comprehensive program provides targeted support for underrepresented entrepreneurs, including women and minorities. We offer specialized mentorship, access to diverse investor networks, and resources tailored to overcome systemic barriers in the tech industry.",
    category: "Diversity & Inclusion",
    impact: "High",
    beneficiaries: "500+ founders",
    status: "Active",
    image:
      "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Users,
    stats: [
      { label: "Founders Supported", value: "500+", icon: Users },
      { label: "Funding Raised", value: "$50M+", icon: TrendingUp },
      { label: "Success Rate", value: "85%", icon: Award },
    ],
    tags: ["Diversity", "Inclusion", "Mentorship", "Funding"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    id: "2",
    title: "Green Innovation Challenge",
    description:
      "Accelerating climate-positive startups with funding, mentorship, and partnerships to combat climate change.",
    longDescription:
      "A comprehensive program designed to identify, support, and scale startups that are developing innovative solutions to address climate change. We provide seed funding, expert mentorship, and strategic partnerships to help green tech startups make a meaningful environmental impact.",
    category: "Sustainability",
    impact: "Very High",
    beneficiaries: "200+ startups",
    status: "Active",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Leaf,
    stats: [
      { label: "CO2 Reduced", value: "1M+ tons", icon: Leaf },
      { label: "Startups Funded", value: "200+", icon: Lightbulb },
      { label: "Investment", value: "$100M+", icon: TrendingUp },
    ],
    tags: ["Climate", "Sustainability", "Innovation", "Impact"],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    id: "3",
    title: "Rural Entrepreneurship Initiative",
    description:
      "Bringing startup opportunities to underserved rural communities through digital infrastructure and education.",
    longDescription:
      "This initiative focuses on bridging the digital divide by providing rural communities with the tools, education, and infrastructure needed to participate in the digital economy. We establish innovation hubs, provide high-speed internet access, and offer entrepreneurship training programs.",
    category: "Community Development",
    impact: "High",
    beneficiaries: "50+ communities",
    status: "Expanding",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Globe,
    stats: [
      { label: "Communities Served", value: "50+", icon: Globe },
      { label: "Jobs Created", value: "2,000+", icon: Users },
      { label: "Digital Hubs", value: "25", icon: Zap },
    ],
    tags: ["Rural", "Digital Divide", "Education", "Infrastructure"],
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    id: "4",
    title: "Mental Health Tech Fund",
    description:
      "Supporting startups developing innovative mental health solutions to address the global mental health crisis.",
    longDescription:
      "Dedicated to funding and supporting startups that are developing technology-driven solutions for mental health challenges. We provide specialized mentorship from healthcare professionals, regulatory guidance, and connections to healthcare systems for pilot programs.",
    category: "Healthcare",
    impact: "Very High",
    beneficiaries: "1M+ users",
    status: "Active",
    image:
      "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Heart,
    stats: [
      { label: "Lives Impacted", value: "1M+", icon: Heart },
      { label: "Startups Funded", value: "75", icon: Target },
      { label: "Healthcare Partners", value: "100+", icon: Shield },
    ],
    tags: ["Mental Health", "Healthcare", "Technology", "Wellness"],
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
  },
  {
    id: "5",
    title: "Education Technology Access",
    description:
      "Democratizing access to quality education through innovative EdTech solutions for underserved populations.",
    longDescription:
      "Our EdTech initiative focuses on making quality education accessible to all, regardless of geographic location or economic status. We support startups developing innovative educational technologies and provide them with resources to scale their impact globally.",
    category: "Education",
    impact: "High",
    beneficiaries: "500K+ students",
    status: "Active",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: BookOpen,
    stats: [
      { label: "Students Reached", value: "500K+", icon: BookOpen },
      { label: "Schools Partnered", value: "1,000+", icon: Users },
      { label: "Learning Hours", value: "10M+", icon: Award },
    ],
    tags: ["Education", "Access", "Technology", "Learning"],
    color: "from-orange-500 to-yellow-500",
    bgColor: "from-orange-50 to-yellow-50",
  },
  {
    id: "6",
    title: "Cybersecurity for SMEs",
    description:
      "Protecting small and medium enterprises from cyber threats through affordable security solutions and education.",
    longDescription:
      "This initiative addresses the cybersecurity gap for small and medium enterprises by supporting startups that develop affordable, easy-to-implement security solutions. We also provide cybersecurity education and best practices training for SME owners and employees.",
    category: "Cybersecurity",
    impact: "Medium",
    beneficiaries: "10K+ businesses",
    status: "Growing",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Shield,
    stats: [
      { label: "Businesses Protected", value: "10K+", icon: Shield },
      { label: "Threats Blocked", value: "1M+", icon: Target },
      { label: "Security Partners", value: "50+", icon: Users },
    ],
    tags: ["Cybersecurity", "SME", "Protection", "Education"],
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
  },
];

export function InitiativesShowcase() {
  const [selectedInitiative, setSelectedInitiative] =
    useState<Initiative | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Very High":
        return "bg-green-100 text-green-700 border-green-200";
      case "High":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 border-green-200";
      case "Expanding":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Growing":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Initiatives Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {mockInitiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedInitiative(initiative)}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Initiative Image */}
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${initiative.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${initiative.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <initiative.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${getStatusColor(
                          initiative.status
                        )} border font-medium`}
                      >
                        {initiative.status}
                      </Badge>
                    </div>

                    {/* Impact Badge */}
                    <div className="absolute bottom-4 right-4">
                      <Badge
                        className={`${getImpactColor(
                          initiative.impact
                        )} border font-medium`}
                      >
                        {initiative.impact} Impact
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {initiative.title}
                    </CardTitle>
                  </div>

                  <Badge
                    variant="outline"
                    className="w-fit text-xs bg-gray-50 mb-3"
                  >
                    {initiative.category}
                  </Badge>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {initiative.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-3">
                      {initiative.stats.slice(0, 2).map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div
                            className={`w-8 h-8 bg-gradient-to-r ${initiative.color} rounded-lg flex items-center justify-center`}
                          >
                            <stat.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-500">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {initiative.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-100">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className={`w-full bg-gradient-to-r ${initiative.color} hover:shadow-lg transition-all duration-300`}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedInitiative && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedInitiative(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${selectedInitiative.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <button
                      onClick={() => setSelectedInitiative(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      ×
                    </button>
                    <div className="absolute bottom-6 left-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${selectedInitiative.color} rounded-2xl flex items-center justify-center shadow-lg mb-4`}
                      >
                        <selectedInitiative.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedInitiative.title}
                      </h2>
                      <Badge
                        className={`${getStatusColor(
                          selectedInitiative.status
                        )} border font-medium`}
                      >
                        {selectedInitiative.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <Badge variant="outline" className="mb-4">
                        {selectedInitiative.category}
                      </Badge>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {selectedInitiative.longDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedInitiative.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Impact Metrics
                      </h3>
                      <div className="space-y-4">
                        {selectedInitiative.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                          >
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${selectedInitiative.color} rounded-lg flex items-center justify-center`}
                            >
                              <stat.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-xl font-bold text-gray-900">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-500">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-2">
                          Beneficiaries
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {selectedInitiative.beneficiaries}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button
                      className={`flex-1 bg-gradient-to-r ${selectedInitiative.color}`}
                    >
                      Get Involved
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Make an Impact?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join our initiatives or propose a new one. Together, we can create
              positive change in the startup ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                Propose Initiative
                <Lightbulb className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                Partner With Us
                <Users className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

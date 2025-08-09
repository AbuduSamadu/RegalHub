"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = [
    {
      icon: Users,
      title: "Expert Mentorship Network",
      description:
        "Connect with industry veterans who've built billion-dollar companies. Get personalized guidance tailored to your startup's unique challenges.",
      benefits: ["1-on-1 Sessions", "Group Workshops", "24/7 Support"],
      color: "from-blue-500 to-cyan-500",
      bgColor:
        "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      icon: TrendingUp,
      title: "Smart Investor Matching",
      description:
        "Our AI-powered platform connects you with the right investors based on your industry, stage, and funding needs.",
      benefits: ["AI Matching", "Warm Introductions", "Pitch Deck Reviews"],
      color: "from-purple-500 to-pink-500",
      bgColor:
        "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      icon: Target,
      title: "Growth Acceleration Tools",
      description:
        "Access premium resources, templates, and frameworks used by successful startups to scale faster and more efficiently.",
      benefits: ["Growth Templates", "Analytics Dashboard", "Market Insights"],
      color: "from-indigo-500 to-purple-500",
      bgColor:
        "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description:
        "Join exclusive innovation sessions where breakthrough ideas are born and refined through collaborative thinking.",
      benefits: ["Idea Validation", "Prototype Support", "Tech Resources"],
      color: "from-yellow-500 to-orange-500",
      bgColor:
        "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
    },
    {
      icon: Shield,
      title: "Legal & Compliance Hub",
      description:
        "Navigate complex legal requirements with expert guidance and automated compliance tools designed for startups.",
      benefits: [
        "Legal Templates",
        "Compliance Tracking",
        "Expert Consultations",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor:
        "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      icon: Zap,
      title: "Rapid Deployment Suite",
      description:
        "Launch faster with our comprehensive suite of tools for MVP development, testing, and market validation.",
      benefits: ["MVP Builder", "A/B Testing", "User Feedback"],
      color: "from-red-500 to-pink-500",
      bgColor:
        "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
    },
  ];

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-60 h-60 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/10 dark:bg-indigo-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-8 dark:bg-gray-800/80 dark:border-gray-700/20">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                World-Class Features
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Build & Scale
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform provides all the tools, connections,
              and resources you need to transform your startup vision into a
              thriving business.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group"
            >
              <div
                className={`h-full bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/20 relative overflow-hidden`}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold cursor-pointer group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto dark:bg-gray-800/80 dark:border-gray-700/20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience the Future of Startup Growth?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Join thousands of entrepreneurs who are already building
              tomorrow&apos;s innovations with our platform.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="px-12 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl font-bold"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

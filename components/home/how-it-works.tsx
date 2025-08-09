"use client";

import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  UserPlus, 
  Search, 
  MessageCircle, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Sign up and build your comprehensive startup profile with your vision, goals, and current stage.",
      details: [
        "Complete startup assessment",
        "Define your goals and needs",
        "Upload pitch deck and materials",
        "Set preferences for mentors and investors"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: Search,
      title: "Smart Matching",
      description: "Our AI algorithm analyzes your profile and connects you with the most relevant mentors and investors.",
      details: [
        "AI-powered compatibility analysis",
        "Industry and stage-specific matching",
        "Personality and working style alignment",
        "Geographic and timezone considerations"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: MessageCircle,
      title: "Connect & Collaborate",
      description: "Start meaningful conversations, schedule meetings, and begin building valuable relationships.",
      details: [
        "Secure messaging platform",
        "Video call integration",
        "Shared workspace tools",
        "Progress tracking and milestones"
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      icon: TrendingUp,
      title: "Scale & Succeed",
      description: "Leverage ongoing support, resources, and network effects to accelerate your startup's growth.",
      details: [
        "Continuous mentorship support",
        "Access to funding opportunities",
        "Growth resources and tools",
        "Community events and networking"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
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
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-8">
              <Play className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-gray-700">
                How It Works
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Your Journey to
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Startup Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow our proven 4-step process that has helped thousands of
              entrepreneurs build successful companies and secure funding.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className={`relative cursor-pointer transition-all duration-500 ${
                  activeStep === index ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ x: 10 }}
              >
                <div
                  className={`p-8 rounded-3xl border-2 transition-all duration-500 ${
                    activeStep === index
                      ? `bg-gradient-to-br ${step.bgColor} border-transparent shadow-2xl`
                      : "bg-white/80 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-2 transition-all duration-500 ${
                          activeStep === index
                            ? `bg-gradient-to-r ${step.color} shadow-lg scale-110`
                            : "bg-gray-100"
                        }`}
                      >
                        <step.icon
                          className={`w-8 h-8 ${
                            activeStep === index
                              ? "text-white"
                              : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div
                        className={`text-center text-sm font-bold ${
                          activeStep === index
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      >
                        Step {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                          activeStep === index
                            ? "text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-gray-600 mb-4 leading-relaxed ${
                          activeStep === index ? "text-gray-700" : ""
                        }`}
                      >
                        {step.description}
                      </p>

                      {/* Expandable Details */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeStep === index ? "auto" : 0,
                          opacity: activeStep === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pt-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Arrow Indicator */}
                    <motion.div
                      animate={{
                        x: activeStep === index ? 5 : 0,
                        opacity: activeStep === index ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight
                        className={`w-6 h-6 ${
                          activeStep === index
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Visual Representation */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div
                  className={`w-32 h-32 bg-gradient-to-r ${steps[activeStep].color} rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl`}
                >
                  {/* <steps[activeStep].icon className="w-16 h-16 text-white" /> */}
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {steps[activeStep].title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {steps[activeStep].description}
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {steps[activeStep].details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="px-12 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl font-bold"
            >
              Start Your Journey Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
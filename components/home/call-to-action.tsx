"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Sparkles,
  Rocket,
  Star,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry veterans",
    },
    {
      icon: TrendingUp,
      title: "Funding Access",
      description: "Get introduced to investors",
    },
    {
      icon: Target,
      title: "Growth Tools",
      description: "Resources to scale your startup",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900/50 dark:to-black/50" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Floating Icons */}
          <div className="absolute -top-10 -left-10 hidden lg:block">
            <motion.div variants={floatingVariants} animate="animate">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center border border-white/20">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
            </motion.div>
          </div>

          <div className="absolute -top-5 -right-10 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center border border-white/20">
                <Star className="w-7 h-7 text-purple-400" />
              </div>
            </motion.div>
          </div>

          <div className="absolute top-20 -left-20 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center border border-white/20">
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>
            </motion.div>
          </div>

          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">
                Join the Future of Innovation
              </span>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Startup Journey?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of entrepreneurs, mentors, and investors who are
              building the future together. Your success story starts here.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                Join Our Ecosystem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:shadow-lg transition-all duration-300"
              >
                Schedule a Demo
                <Target className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "10K+", label: "Active Members", icon: Users },
              { number: "$50M+", label: "Funding Raised", icon: TrendingUp },
              { number: "500+", label: "Success Stories", icon: Target },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Text */}
          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-gray-400 text-sm">
              No credit card required • Free to join • Cancel anytime
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}

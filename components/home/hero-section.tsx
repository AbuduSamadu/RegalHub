"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Target,
  Sparkles,
  Rocket,
  Star,
  Zap,
  ChevronDown,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(59, 130, 246, 0.4)",
        "0 0 0 20px rgba(59, 130, 246, 0)",
        "0 0 0 0 rgba(59, 130, 246, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Gradient Mesh */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`,
          }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-lg"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div className="container relative z-10" style={{ y, opacity }}>
        <motion.div
          className="mx-auto max-w-6xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Floating Icons */}
          <div className="absolute -top-20 -left-20 hidden lg:block">
            <motion.div variants={floatingVariants} animate="animate">
              <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg flex items-center justify-center border border-gray-200/50 dark:bg-gray-800/90 dark:border-gray-700/20">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
            </motion.div>
          </div>

          <div className="absolute -top-10 -right-20 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg flex items-center justify-center border border-gray-200/50 dark:bg-gray-800/90 dark:border-gray-700/20">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </motion.div>
          </div>

          <div className="absolute top-32 -left-32 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
            >
              <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg flex items-center justify-center border border-gray-200/50 dark:bg-gray-800/90 dark:border-gray-700/20">
                <Target className="w-7 h-7 text-indigo-600" />
              </div>
            </motion.div>
          </div>

          <div className="absolute top-20 -right-32 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 3 }}
            >
              <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg flex items-center justify-center border border-gray-200/50 dark:bg-gray-800/90 dark:border-gray-700/20">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
            </motion.div>
          </div>

          {/* Premium Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50 hover:shadow-lg transition-all duration-300 dark:bg-gray-800/80 dark:border-gray-700/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Trusted by 50,000+ Global Entrepreneurs
              </span>
              <Star className="w-5 h-5 text-blue-500 fill-current" />
            </div>
          </motion.div>

          {/* Main Headline with Gradient Text */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-none">
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Build the
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Future
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Together
              </motion.span>
            </h1>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              The world&apos;s most advanced platform connecting
              <span className="font-medium text-blue-600">
                {" "}
                visionary entrepreneurs
              </span>
              ,
              <span className="font-medium text-indigo-600">
                {" "}
                expert mentors
              </span>
              , and
              <span className="font-medium text-blue-700">
                {" "}
                strategic investors
              </span>
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Join the ecosystem that has powered over $2B in startup funding
              and 10,000+ successful ventures
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl border-0 font-semibold"
              >
                <Rocket className="mr-3 h-6 w-6" />
                Join Ecosystem
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="text-xl px-12 py-8 bg-white/95 backdrop-blur-sm border-2 border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-500 rounded-2xl font-semibold hover:border-blue-300 dark:bg-gray-800/90 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:border-blue-400"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats with Glassmorphism */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                number: "50K+",
                label: "Active Members",
                icon: Users,
                color: "from-blue-500 to-cyan-500",
              },
              {
                number: "$2B+",
                label: "Funding Raised",
                icon: TrendingUp,
                color: "from-blue-500 to-indigo-500",
              },
              {
                number: "10K+",
                label: "Success Stories",
                icon: Target,
                color: "from-indigo-500 to-purple-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, delay:1.2 + index * 0.1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-500 group-hover:bg-white dark:bg-gray-800/80 dark:border-gray-700/20 dark:hover:bg-gray-800/90">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-normal">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-8 h-14 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center bg-white/80 backdrop-blur-sm dark:bg-gray-800/50">
          <motion.div
            className="w-2 h-4 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mt-3"
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Star, Quote, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function TestimonialsSections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: "1",
      content:
        "StartupEco completely transformed our journey from idea to Series A. The mentorship quality is unmatched, and the investor connections opened doors we never thought possible. We raised $5M in just 8 months!",
      author: {
        name: "Sarah Chen",
        role: "CEO & Founder",
        company: "TechFlow AI",
        avatar:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      rating: 5,
      highlight: "Series A Success",
      metrics: "$5M Raised",
      videoUrl: "#",
    },
    {
      id: "2",
      content:
        "As an investor, I've discovered some of my best portfolio companies through StartupEco. The quality of startups and the comprehensive due diligence support makes every investment decision more confident.",
      author: {
        name: "Michael Rodriguez",
        role: "Managing Partner",
        company: "Venture Capital Partners",
        avatar:
          "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      rating: 5,
      highlight: "Top Investor",
      metrics: "50+ Investments",
      videoUrl: "#",
    },
    {
      id: "3",
      content:
        "The mentorship program connected me with industry veterans who guided me through critical decisions. My startup grew 300% in the first year thanks to their strategic insights and network introductions.",
      author: {
        name: "David Park",
        role: "Founder",
        company: "GreenTech Solutions",
        avatar:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      rating: 5,
      highlight: "300% Growth",
      metrics: "2M+ Users",
      videoUrl: "#",
    },
    {
      id: "4",
      content:
        "StartupEco's events and workshops provided the knowledge and network I needed to scale my business. The community support is unmatched in the industry. It's like having a co-founder who never sleeps.",
      author: {
        name: "Emily Watson",
        role: "Co-founder",
        company: "HealthTech Innovations",
        avatar:
          "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      rating: 5,
      highlight: "Community Leader",
      metrics: "10K+ Network",
      videoUrl: "#",
    },
    {
      id: "5",
      content:
        "From pitch deck reviews to investor introductions, StartupEco provided end-to-end support. We raised $2M seed funding within 6 months of joining. The ROI on our membership is incredible.",
      author: {
        name: "James Liu",
        role: "CEO",
        company: "EdTech Pro",
        avatar:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      rating: 5,
      highlight: "$2M Raised",
      metrics: "6 Months",
      videoUrl: "#",
    },
    {
      id: "6",
      content:
        "The platform's AI-powered matching system connected me with the perfect co-founder and lead investor. Together, we've built something incredible that's changing our industry. This platform is magic.",
      author: {
        name: "Lisa Thompson",
        role: "CTO & Co-founder",
        company: "AI Dynamics",
        avatar:
          "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      rating: 5,
      highlight: "Perfect Match",
      metrics: "AI-Powered",
      videoUrl: "#",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-8">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold text-white">
                Trusted by 50,000+ Entrepreneurs
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Success Stories from
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Community
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hear from entrepreneurs, investors, and mentors who have
              transformed their journeys through our ecosystem.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8 mx-auto"
                  >
                    <Quote className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl text-white mb-8 leading-relaxed italic text-center font-light"
                  >
                    {currentTestimonial.content}
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-6"
                  >
                    <Avatar className="w-20 h-20 ring-4 ring-white/20 shadow-2xl">
                      <AvatarImage
                        src={currentTestimonial.author.avatar}
                        alt={currentTestimonial.author.name}
                      />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                        {currentTestimonial.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="text-center">
                      <div className="text-xl font-bold text-white mb-1">
                        {currentTestimonial.author.name}
                      </div>
                      <div className="text-gray-300 mb-1">
                        {currentTestimonial.author.role}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {currentTestimonial.author.company}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="hidden md:flex flex-col items-center gap-2">
                      <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                        <span className="text-white font-bold text-sm">
                          {currentTestimonial.highlight}
                        </span>
                      </div>
                      <div className="text-gray-300 text-sm">
                        {currentTestimonial.metrics}
                      </div>
                    </div>
                  </motion.div>

                  {/* Video Play Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center mt-8"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full px-8 py-4"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Video Story
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Testimonial Thumbnails */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`flex-shrink-0 p-4 rounded-2xl border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white/20 border-white/40 scale-105"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
              whileHover={{ scale: index === currentIndex ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                  />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                    {testimonial.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">
                    {testimonial.author.name}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {testimonial.author.company}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Progress Indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center gap-2 mb-12"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </motion.div>

        {/* Auto-play Control */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-white/70 hover:text-white text-sm transition-colors duration-300"
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

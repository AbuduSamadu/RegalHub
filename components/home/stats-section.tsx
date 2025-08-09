"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Award,
  Building,
  Rocket,
} from "lucide-react";

interface Stat {
  number: number;
  suffix?: string;
  label: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
  color: string;
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Users,
      number: 10000,
      suffix: "+",
      label: "Active Members",
      description: "Entrepreneurs, mentors, and investors",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: DollarSign,
      number: 50,
      suffix: "M+",
      label: "Funding Raised",
      description: "Total capital raised by our startups",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Building,
      number: 1200,
      suffix: "+",
      label: "Startups Launched",
      description: "Successful companies in our ecosystem",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Award,
      number: 500,
      suffix: "+",
      label: "Success Stories",
      description: "Documented success cases",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      icon: TrendingUp,
      number: 85,
      suffix: "%",
      label: "Success Rate",
      description: "Startups reaching Series A",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      icon: Rocket,
      number: 150,
      suffix: "+",
      label: "Events Hosted",
      description: "Workshops, pitches, and networking",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.05),transparent_50%)]" />
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powering Innovation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Across the Globe
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ecosystem has become the launchpad for thousands of successful
              startups, connecting visionaries with the resources they need to
              thrive.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: Readonly<{ stat: Stat; index: number }>) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const increment = stat.number / 50;
        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev >= stat.number) {
              clearInterval(interval);
              return stat.number;
            }
            return Math.min(prev + increment, stat.number);
          });
        }, 30);
        return () => clearInterval(interval);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, stat.number, index]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    >
      <div className="flex items-center justify-between mb-6">
        <div
          className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <stat.icon className={`w-7 h-7 ${stat.color}`} />
        </div>
        <motion.div
          animate={{ rotate: isInView ? 360 : 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
        />
      </div>

      <div className="text-4xl font-bold text-gray-900 mb-2">
        {Math.floor(count).toLocaleString()}
        {stat.suffix}
      </div>

      <div className="text-lg font-semibold text-gray-800 mb-2">
        {stat.label}
      </div>

      <div className="text-gray-600 text-sm">{stat.description}</div>
    </motion.div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/10 to-magenta-primary/10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight">
            Connect, Collaborate, and{" "}
            <span className="text-teal-primary">Grow</span> Together
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join a thriving ecosystem where startups, mentors, investors, and
            innovators come together to shape the future of business and
            technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-teal-primary hover:bg-teal-primary/90 text-white font-semibold px-8 py-6 text-lg group"
            >
              <Link href="/onboarding">
                Join the Ecosystem
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-magenta-primary text-magenta-primary hover:bg-magenta-primary hover:text-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center">
              <Users className="h-8 w-8 text-teal-primary" />
            </div>
            <div className="text-3xl font-bold text-neutral-dark">10K+</div>
            <div className="text-gray-600">Community Members</div>
          </div>

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-magenta-primary" />
            </div>
            <div className="text-3xl font-bold text-neutral-dark">500+</div>
            <div className="text-gray-600">Startups Launched</div>
          </div>

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center">
              <Globe className="h-8 w-8 text-teal-primary" />
            </div>
            <div className="text-3xl font-bold text-neutral-dark">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}

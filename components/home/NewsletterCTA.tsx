"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#00BFCB] to-[#891C74]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Ecosystem
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get weekly insights, upcoming events, and exclusive opportunities
            delivered to your inbox.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/90 border-white/20 placeholder:text-gray-500"
            />
            <Button className="bg-white text-[#00BFCB] hover:bg-white/90 px-8 font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

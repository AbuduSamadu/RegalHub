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
    <section className="py-20 bg-gradient-to-br from-teal-primary/10 to-magenta-primary/10">
      <div className="container mx-auto px-6 lg:px-20">
        <Card className="max-w-2xl mx-auto border-0 shadow-lg">
          <CardContent className="p-8 text-center space-y-6">
            <div className="flex items-center justify-center mb-4">
              <Mail className="h-12 w-12 text-teal-primary" />
            </div>
            
            <h2 className="text-3xl font-bold text-neutral-dark">
              Stay in the Loop
            </h2>
            
            <p className="text-lg text-gray-600">
              Get the latest updates on startups, events, and opportunities 
              delivered straight to your inbox.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-teal-primary hover:bg-teal-primary/90 px-8"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  No spam, unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-medium">Thank you for subscribing!</span>
                </div>
                <p className="text-sm text-gray-500">
                  You'll receive our next newsletter soon.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsLoading(false);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail("");
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-teal-primary/10 to-magenta-primary/10"
      role="region"
      aria-labelledby="newsletter-heading"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <Card className="max-w-2xl mx-auto border-0 shadow-lg">
          <CardContent className="p-8 text-center space-y-6">
            <div className="flex items-center justify-center mb-4">
              <Mail
                className="h-12 w-12 text-teal-primary"
                aria-hidden="true"
              />
            </div>

            <h2
              id="newsletter-heading"
              className="text-3xl font-bold text-neutral-dark tracking-tight"
            >
              Stay in the Loop
            </h2>

            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Get the latest updates on startups, events, and opportunities
              delivered straight to your inbox.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                    aria-label="Email address for newsletter subscription"
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    className="bg-teal-primary hover:bg-teal-primary/90 px-8 transition-all duration-200 shadow-lg hover:shadow-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  No spam, unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  <span className="font-medium">
                    Thank you for subscribing!
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  You&apos;ll receive our next newsletter soon.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

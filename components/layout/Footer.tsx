import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
// import Logo from "../ui/Logo";


export default function Footer() {
  return (
    <footer className="bg-neutral-dark pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            {/* <Logo /> */}
            <p className="text-gray-400 text-sm">
              Connecting the global startup ecosystem through mentorship,
              funding, and community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-teal-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-teal-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-teal-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-teal-primary cursor-pointer" />
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Platform</h4>
            <div className="space-y-2">
              <Link
                href="/startups"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Startups
              </Link>
              <Link
                href="/events"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Events
              </Link>
              <Link
                href="/initiatives"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Initiatives
              </Link>
              <Link
                href="/community"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Community
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/help"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Help Center
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Get the latest news and updates from the startup ecosystem.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-teal-primary hover:bg-teal-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2024 StartupEco. All rights reserved. Building the future
            together.
          </p>
        </div>
      </div>
    </footer>
  );
}

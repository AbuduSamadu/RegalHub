"use client";

import { Button } from "@/components/ui/button";
import NotificationDropdown from "@/components/ui/notification-dropdown";
import GlobalSearch from "@/components/ui/global-search";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// import Logo from "../ui/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex h-16 items-center justify-between">
          {/* <Logo /> */}

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px]">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/startups"
                        className="block p-2 hover:bg-muted rounded-md"
                      >
                        <div className="font-medium">Startups</div>
                        <div className="text-sm text-muted-foreground">
                          Browse innovative startups
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/events"
                        className="block p-2 hover:bg-muted rounded-md"
                      >
                        <div className="font-medium">Events</div>
                        <div className="text-sm text-muted-foreground">
                          Upcoming ecosystem events
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/initiatives"
                        className="block p-2 hover:bg-muted rounded-md"
                      >
                        <div className="font-medium">Initiatives</div>
                        <div className="text-sm text-muted-foreground">
                          Bootcamps and programs
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/community"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Community
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/gallery"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <GlobalSearch />
            <NotificationDropdown />
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              asChild
              className="bg-teal-primary hover:bg-teal-primary/90"
            >
              <Link href="/onboarding">Join Ecosystem</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="/startups"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Startups
                </Link>
                <Link
                  href="/events"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/initiatives"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Initiatives
                </Link>
                <Link
                  href="/community"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Community
                </Link>
                <Link
                  href="/gallery"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" asChild>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-teal-primary hover:bg-teal-primary/90"
                  >
                    <Link href="/onboarding" onClick={() => setIsOpen(false)}>
                      Join Ecosystem
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

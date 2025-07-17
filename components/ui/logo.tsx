"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-teal-primary to-magenta-primary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">S</span>
      </div>
      <span className="text-white font-bold text-xl">StartupEco</span>
    </Link>
  );
}

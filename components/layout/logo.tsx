"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
    >
      <div className="relative w-8 h-8 bg-gradient-to-r from-teal-primary to-magenta-primary rounded-lg flex items-center justify-center overflow-hidden">
        <Image
          src="/logo.png"
          width={34}
          height={34}
          alt="Regalhub Logo"
          className="object-contain"
        />
      </div>
      <span className="font-bold text-xl text-neutral-dark">Regalhub</span>
    </Link>
  );
}

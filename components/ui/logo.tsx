"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  showText = true,
  size = "md",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  const imageSizes = {
    sm: { width: 16, height: 16 },
    md: { width: 20, height: 20 },
    lg: { width: 28, height: 28 },
  };

  return (
    <Link
      href="/"
      className={`flex items-center space-x-2 hover:opacity-80 transition-opacity ${className}`}
    >
      {/* Logo Icon with gradient background */}
      <div
        className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br from-teal-primary to-magenta-primary p-1.5 flex items-center justify-center`}
      >
        <Image
          src="/logo.png"
          alt="RegalHub Logo"
          width={imageSizes[size].width}
          height={imageSizes[size].height}
          className="object-contain"
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`${textSizeClasses[size]} font-bold text-neutral-dark leading-none`}
          >
            Regal<span className="text-teal-primary">Hub</span>
          </span>
          {size !== "sm" && (
            <span className="text-xs text-gray-500 leading-none">
              Startup Ecosystem
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

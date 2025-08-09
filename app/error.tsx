"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-yellow-950/20">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Something went wrong!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            We encountered an unexpected error. Please try again or contact
            support if the problem persists.
          </p>
        </div>

        <Button onClick={reset} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}

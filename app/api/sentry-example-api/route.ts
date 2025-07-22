import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
class SentryExampleAPIError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "SentryExampleAPIError";
  }
}
// A faulty API route to test Sentry's error monitoring
export function GET() {
  const shouldThrowError = Math.random() > 0.5; // or some other condition
  
  if (shouldThrowError) {
    throw new SentryExampleAPIError("This error is raised on the backend called by the example page.");
  }
  
  return NextResponse.json({ data: "Testing Sentry Error..." });
}

import {  NextResponse } from 'next/server';
import { register } from 'prom-client';

export async function GET() {
  const metrics = await register.metrics();
  
  const response = NextResponse.json(null, { status: 200 });
  response.headers.set('Content-Type', register.contentType);
  
  // Return the metrics as text instead of JSON
  return new NextResponse(metrics, {
    status: 200,
    headers: response.headers,
  });
}
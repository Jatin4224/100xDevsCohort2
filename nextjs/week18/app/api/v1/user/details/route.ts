import { NextResponse } from "next/server";

// Handle GET request
export function GET() {
  return NextResponse.json({
    user: "harkirat",
    email: "harkirat@gmail.com",
  });
}

// Handle POST request
export function POST() {
  return NextResponse.json({
    message: "User data received",
    user: "harkirat",
    email: "harkirat@gmail.com",
  });
}

// Handle PUT request
export function PUT() {
  return NextResponse.json({
    message: "User data updated",
    user: "harkirat",
    email: "harkirat@gmail.com",
  });
}

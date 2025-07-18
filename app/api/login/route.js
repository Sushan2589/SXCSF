import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();

  // Simple static check, replace with DB/auth service in real app
  if (username === process.env.NEXT_PUBLIC_USERNAME && password === process.env.NEXT_PUBLIC_PASSWORD) {
    const response = NextResponse.json({ message: "Login successful" });

    // Set cookie - HTTP only, secure, maxAge ~1 day
    response.cookies.set({
      name: "isAdmin",
      value: "true",
      httpOnly: true,
      path: "/admin",   // cookie valid for /admin routes only
      maxAge: 60 * 60 * 24,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
}

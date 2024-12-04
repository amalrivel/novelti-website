import { auth } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { sessionToken } = await request.json();

  if (!sessionToken) {
    return NextResponse.json(
      { error: "No session token provided" },
      { status: 401 }
    );
  }

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionToken, true);

    const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];
    if (!adminEmails.includes(decodedClaims.email || "")) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    return NextResponse.json(decodedClaims);
  } catch {
    return NextResponse.json({ error: "Invalid session" }, { status: 401 });
  }
}

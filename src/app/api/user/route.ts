import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { auth } from "@/libs/firebase-admin";

export async function GET() {
  try {
    // Check API key first
    const headersList = await headers();
    const apiKey = headersList.get("x-api-key");
    const userToken = headersList.get("x-user-token");

    if (apiKey === process.env.API_KEY && userToken) {
      const decodedClaims = await auth.verifyIdToken(userToken);

      return NextResponse.json(decodedClaims);
    }

    // Check session
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session");

    if (!sessionCookie?.value) {
      console.log("No session cookie found");
      return NextResponse.json("No session cookie found", { status: 401 });
    }

    // Verify session cookie
    const decodedClaims = await auth.verifySessionCookie(
      sessionCookie.value,
      true
    );

    return NextResponse.json(decodedClaims);
  } catch {
    return NextResponse.json({ isAuthorized: false }, { status: 401 });
  }
}

import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { auth } from "@/libs/firebase-admin";

export async function GET() {
  try {
    // Check API key first
    const headersList = await headers();
    const apiKey = headersList.get("x-api-key");
    const userToken = headersList.get("x-user-token");

    const protocol = headersList.get("x-forwarded-proto") || "http";
    const host = headersList.get("host") || "";
    const baseUrl = `${protocol}://${host}`;

    const response = await fetch(`${baseUrl}/api/settings/admin`);

    if (!response.ok) throw new Error();
    const data = await response.json();

    const adminEmails = data.users || [];

    if (apiKey === process.env.API_KEY && userToken) {
      const decodedClaims = await auth.verifyIdToken(userToken);
      if (!adminEmails.includes(decodedClaims.email || "")) {
        return NextResponse.json({
          isAuthorized: true,
          isAdmin: false,
        });
      }

      return NextResponse.json({
        isAuthorized: true,
        isAdmin: true,
      });
    }

    // Check session
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session");

    if (!sessionCookie?.value) {
      console.log("No session cookie found");
      return NextResponse.json({ isAuthorized: false }, { status: 401 });
    }

    // Verify session cookie
    const decodedClaims = await auth.verifySessionCookie(
      sessionCookie.value,
      true
    );

    if (!adminEmails.includes(decodedClaims.email || "")) {
      return NextResponse.json({
        isAuthorized: true,
        isAdmin: false,
      });
    }

    return NextResponse.json({
      isAuthorized: true,
      isAdmin: true,
    });
  } catch {
    return NextResponse.json({ isAuthorized: false }, { status: 401 });
  }
}

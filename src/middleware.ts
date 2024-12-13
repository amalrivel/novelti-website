import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // Get session cookie from request
    const session = request.cookies.get('session')
    
    const response = await fetch(`${request.nextUrl.origin}/api/auth/verify`, {
      headers: {
        Cookie: `session=${session?.value || ''}`
      }
    });

    const data = await response.json()
    
    if (!response.ok || !data.isAuthorized || !data.isAdmin) {
      return NextResponse.redirect(
        new URL(
          "/?authError=Kamu tidak memiliki akses ke halaman ini",
          request.url
        )
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

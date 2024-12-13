import { cookies } from "next/headers";
import { headers } from "next/headers";

export async function verifyAdmin() {
  try {
    const headersList = await headers();
    const protocol = headersList.get("x-forwarded-proto") || "http";
    const host = headersList.get("host") || "";
    const baseUrl = `${protocol}://${host}`;

    const cookiesList = await cookies();
    const response = await fetch(`${baseUrl}/api/auth/verify`, {
      headers: {
        Cookie: `session=${cookiesList.get("session")?.value || ""}`,
      },
    });

    const data = await response.json();
    if (!data.isAuthorized || !data.isAdmin) {
      throw new Error(
        `Access denied: ${
          !data.isAuthorized ? "Authentication" : "Admin access"
        } required`
      );
    }

    return data.isAuthorized && data.isAdmin;
  } catch {
    throw new Error("Failed to verify user and admin");
  }
}

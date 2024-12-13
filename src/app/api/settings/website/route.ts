import { db } from "@/libs/firebase-admin";
import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin } from "@/libs/verify-admin";

export async function GET() {
  try {
    await verifyAdmin();

    const doc = await db.collection("settings").doc("website").get();
    const data = doc.data();

    return NextResponse.json(data || {});
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await verifyAdmin();
    
    const data = await request.json();

    await db.collection("settings").doc("website").set({
      title: data.title,
      description: data.description,
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({ status: "success" });
  } catch {
    return NextResponse.json(
      { error: "Failed to save settings" },
      { status: 500 }
    );
  }
}

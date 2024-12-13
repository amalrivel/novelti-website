import { db } from "@/libs/firebase-admin";
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { verifyAdmin } from "@/libs/verify-admin";

export async function GET() {
  try {
    const doc = await db.collection("settings").doc("admin").get();
    const data = doc.data();

    return NextResponse.json({
      users:
        (data?.users as string[])?.sort((a: string, b: string) =>
          a.localeCompare(b)
        ) || [],
    });
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

    const { email } = await request.json();

    await db
      .collection("settings")
      .doc("admin")
      .set({ users: FieldValue.arrayUnion(email) }, { merge: true });

    return NextResponse.json({ status: "success" });
  } catch {
    return NextResponse.json({ error: "Failed to add admin" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await verifyAdmin();

    const { email } = await request.json();

    await db
      .collection("settings")
      .doc("admin")
      .set({ users: FieldValue.arrayRemove(email) }, { merge: true });

    return NextResponse.json({ status: "success" });
  } catch {
    return NextResponse.json(
      { error: "Failed to remove admin" },
      { status: 500 }
    );
  }
}

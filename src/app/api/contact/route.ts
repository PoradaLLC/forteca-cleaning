import { NextResponse } from "next/server";
import { ContactSchema } from "@/lib/validators";
import { sendContactNotification, sendContactConfirmation } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    await Promise.all([
      sendContactNotification(data),
      sendContactConfirmation(data),
    ]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

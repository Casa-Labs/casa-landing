import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Ensure `db` is set up with Prisma or your preferred ORM.

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    console.log(req.json());

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Save the email to the database
    await db.email.create({
      data: {
        emailId: email,
      },
    });

    return NextResponse.json(
      { message: "Subscription successful!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

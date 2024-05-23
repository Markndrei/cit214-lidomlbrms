import { db } from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {
    const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("api/auth/login");
  }
    try {
        const tags = await db.book.findMany();
        return NextResponse.json(tags, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'could not fetch tags' }, { status: 500 });
    }
}
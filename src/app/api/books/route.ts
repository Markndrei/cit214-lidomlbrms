import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function GET() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("api/auth/login");
  }
    try {
        const response = await db.book.findMany({
            select: {
              ISBN: true,
              bookTitle: true,
              bookAuthor: true,
              yearOfPublication: true,
            },
            orderBy: {
              bookTitle: "asc",
            },
          });
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'CANNOT FETCH BOOKS' }, { status: 500 });
    }
}
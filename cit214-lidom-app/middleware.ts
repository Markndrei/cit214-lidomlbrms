import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession();
  return res;
}


// export async function middlewareAuth(req:NextRequest) {
//   const userSession = await getKindeServerSession({req}as any);

//   if (!userSession) {
//     return NextResponse.redirect('/');
//   }

//   const userRole = userSession.user.role;

//   switch (userRole) {
//     case 'LIBRARIAN':
//       return NextResponse.redirect('/admin');
//     case 'USER':
//       return NextResponse.redirect('/dashboard');
//     default:
//       return NextResponse.redirect('/');
//   }
// }

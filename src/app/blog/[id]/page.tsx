import BackButton from "@/app/components/BackButton";
import ButtonAction from "@/app/components/ButtonAction";
import { db } from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { FC } from "react";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

async function getBook(id: string) {
  const reponse = await db.book.findFirst({
    where: {
      ISBN: id,
    },
    select: {
      ISBN: true,
      bookTitle: true,
      bookAuthor: true,
      yearOfPublication: true,
      publisher: true,
    },
  });
  return reponse;
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("api/auth/login");
  }
  const book = await getBook(params.id);

  return (
    <div>
      <BackButton />
      <div className="mb-8 mt-5 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h2 className="text-2xl font-bold my-4">{book?.bookTitle}</h2>
        <span className="badge badge-neutral">{book?.yearOfPublication}</span>
        <p className="text-slate-700">Author: {book?.bookAuthor}</p>
        <p className="text-slate-700">ISBN: {book?.ISBN}</p>
        <p className="text-slate-700">
          Publication Year: {book?.yearOfPublication}
        </p>
        <p className="text-slate-700">Publlisher: {book?.publisher}</p>
      </div>
      <ButtonAction id={params.id} />
    </div>
  );
};

export default BlogDetailPage;

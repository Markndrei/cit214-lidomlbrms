import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface PostCardProps {
  post: {
    ISBN: string;
    bookTitle: string;
    bookAuthor: string;
    yearOfPublication: number;
    library: number;
    imageUrlM: string;
  };
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { ISBN, bookTitle, bookAuthor, yearOfPublication } = post;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg mx-auto"
          style={{
            width: "90%",
            height: "280px",
            objectPosition: "center",
            maxHeight: "150",
          }}
          src={post.imageUrlM}
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = "/favicon.ico";
          }}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
            {bookTitle.slice(0, 20)}
          </h5>
        </a>
      </div>
      <div className="flex items-center justify-between">
        <span className="badge badge-neutral mb-6 mt-3 ml-4">
          {yearOfPublication}
        </span>
        <a
          href={`/blog/${ISBN}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mb-4 mr-3 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Find Book
        </a>
      </div>
    </div>

    // <div className="">
    //   <div className="card-body bg-[url('/image.png')] backdrop-blur-sm bg-white/30">
    //     <Image
    //       src="/next.svg"
    //       className="rounded-lg shadow-lg"
    //       alt="Description of the image"
    //       width={600}
    //       height={400}
    //     />
    //     <h2 className="card-title font-bold max-h-12 min-h-12 mb-2">
    //       {bookTitle.slice(0, 15)}
    //     </h2>
    //     <p className="text-sm place-self-start mb-0">
    //       by {bookAuthor.slice(0, 30)}
    //     </p>
    //     <div className="card-actions justify-end">
    //       <span className="badge badge-neutral place-self-end mb-2 mt-3">
    //         {yearOfPublication}
    //       </span>
    //       <Link href={`/blog/${ISBN}`} className="hover:underline text-sm">
    //         More details...
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PostCard;

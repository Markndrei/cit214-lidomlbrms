"use client";
import axios from "axios";
import * as fs from "fs";
import { Book } from "lucide-react";
import * as React from "react";

interface Book {
  ISBN: string;
  bookTitle: string;
  bookAuthor: string;
  yearOfPublication: number;
  imageUrlM: string;
}

const Recommendations: React.FC = () => {
  const [books, setBooks] = React.useState<Book[]>([]);

  const fetchBooks = () => {
    axios
      .get("../api/books")
      .then((response) => {
        const books = response.data;
        // Shuffle the array`
        const shuffled = books.sort(() => 0.5 - Math.random());
        // Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(0, 5);
        setBooks(selected);
      })
      .catch((error) => console.error(error));
  };

  React.useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Random Books</h1>
      <button onClick={fetchBooks}>Fetch Books</button>
      {books.map((book, index) => (
        <div key={index}>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {" "}
                {book.yearOfPublication}{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">
                  {book.bookTitle}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;

// <div>
//   <h1>Random Books</h1>
//   <button onClick={fetchBooks}>Fetch Books</button>
//   {books.map((book, index) => (
//     <div key={index}>
//       <h2>{book.bookTitle}</h2>
//       <p>{book.bookAuthor}</p>
//       <p>{book.yearOfPublication}</p>
//       <img src={book.imageUrlM} alt={book.bookTitle} />
//     </div>
//   ))}
// </div>

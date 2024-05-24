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
  publisher: string;
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
      <button
        onClick={fetchBooks}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Fetch Books
      </button>
      {books.map((book, index) => (
        <div
          className="grid md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10 justify-items-stretch"
          key={index}
        >
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src={book.imageUrlM}
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
                By: {book.bookAuthor}
                <br />
                ISBN: {book.ISBN}
                <br />
                Publisher: {book.publisher}
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

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
          <h2>{book.bookTitle}</h2>
          <p>{book.bookAuthor}</p>
          <p>{book.yearOfPublication}</p>
          <img src={book.imageUrlM} alt={book.bookTitle} />
        </div>
      ))}
    </div>
  );
};

export default Recommendations;

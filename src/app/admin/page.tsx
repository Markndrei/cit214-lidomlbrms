"use client";

import axios from "axios";
import PostCard from "../components/PostCard";
import { useState, useEffect, SetStateAction } from "react";

interface Book {
  ISBN: string;
  bookTitle: string;
  bookAuthor: string;
  yearOfPublication: number;
  imageUrlM: string;
}

async function getBooks() {
  const response = await axios.get("../api/books");
  console.log(response);
  return response.data; // Return the data from the response
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]); // State to store books
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    async function fetchBooks() {
      const data = await getBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []); // Empty dependency array to fetch books only once

  const searchFilter = (books: Book[]) => {
    return books.filter(
      (book) =>
        book.bookTitle.toLowerCase().includes(query.toLowerCase()) ||
        book.bookAuthor.toLowerCase().includes(query.toLowerCase()) ||
        book.yearOfPublication.toString().includes(query.toLowerCase())
    );
  };

  const filteredBooks = searchFilter(books);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} placeholder="Search Title" />
      <main className="grid items-center justify-center md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
        {filteredBooks.map((book: Book) => (
          <PostCard key={book.ISBN.toString()} post={book} />
        ))}
      </main>
    </div>
  );
}

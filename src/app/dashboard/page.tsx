"use client";
import PostCard from "../components/PostCard";
import prisma from "@/lib/prismadb";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { useState, useEffect, SetStateAction } from "react";
import axios from "axios";

interface Book {
  ISBN: string;
  bookTitle: string;
  bookAuthor: string;
  yearOfPublication: number;
}

export async function getBooks() {
  const response = await axios.get("../api/books");
  console.log(response);
  return response.data; // Return the data from the response
}

export default function Dashboard() {
  const [books, setBooks] = useState([]); // State to store books
  const [query, setQuery] = useState("");
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
        book.bookAuthor.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredBooks = searchFilter(books);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <div>
        <Input
          className="space-y-10 mb-6"
          name="search"
          type="text"
          id="filter"
          placeholder="Search a Book"
          onChange={handleChange}
        />
      </div>
      <main className="md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10 grid justify-items-stretch">
        {filteredBooks.map((book: Book) => (
          <PostCard key={book.ISBN.toString()} post={book} />
        ))}
      </main>
    </div>
  );
}

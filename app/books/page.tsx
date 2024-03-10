"use client";
import { retrieveBooks } from "@/api/api";
import React, { useState, useEffect } from "react";
import BooksList from "../components/BooksList";

import { IBookArr } from "@/types/types";

const AllUserBooks: React.FC = () => {
  const [allBooks, setAllBooks] = useState<IBookArr>([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await retrieveBooks();
      return setAllBooks(books);
    };

    getAllBooks();
  }, []);

  return <BooksList books={allBooks} />;
};

export default AllUserBooks;

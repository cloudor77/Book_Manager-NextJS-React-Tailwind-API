"use client";
import { retrieveBooks } from "@/api/api";
import BooksList from "@/app/components/BooksList";
import { IBookArr } from "@/types/types";

import React, { useEffect, useState } from "react";

const AllAdminBooks: React.FC = () => {
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

export default AllAdminBooks;

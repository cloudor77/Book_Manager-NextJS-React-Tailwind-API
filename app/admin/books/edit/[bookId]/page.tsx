"use client";
import { retrieveBook } from "@/api/api";
import BookDetailEdit from "@/app/components/BookDetailEdit";
import { IBook, BookParams } from "@/types/types";
import { useParams } from "next/navigation";

import React, { useEffect, useState } from "react";

const EditBook: React.FC = () => {
  const [editedBook, setEditedBook] = useState<IBook>({});
  const { bookId } = useParams<BookParams>();

  useEffect(() => {
    const constUpdateBook = async () => {
      const book = await retrieveBook(`${bookId}`);

      return setEditedBook(book);
    };

    constUpdateBook();
  }, []);

  return (
    <>
      <BookDetailEdit book={editedBook} />
    </>
  );
};

export default EditBook;

"use client";
import { retrieveBook } from "@/api/api";
import BooksDetail from "@/app/components/BooksDetail";
import { IBook, BookParams } from "@/types/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserBookDetail: React.FC = () => {
  const [bookData, setBookData] = useState<IBook>();
  const { bookId } = useParams<BookParams>();
  useEffect(() => {
    const getData = async () => {
      const book = await retrieveBook(`${bookId}`);
      return setBookData(book);
    };

    getData();
  }, []);

  return <BooksDetail book={bookData} />;
};

export default UserBookDetail;

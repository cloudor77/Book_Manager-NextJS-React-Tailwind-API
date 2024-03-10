"use client";
import React, { useEffect, useState } from "react";
import { IBook, BookParams } from "@/types/types";
import { retrieveBook } from "@/api/api";
import BooksDetail from "@/app/components/BooksDetail";
import { useParams } from "next/navigation";

const AdminBookDetail: React.FC = () => {
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

export default AdminBookDetail;

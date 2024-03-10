"use client";

import { IBook } from "@/types/types";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

interface BooksListProps {
  books?: IBook[];
}

const BooksList: React.FC<BooksListProps> = ({ books }) => {
  const [currUrl, setCurUrl] = useState<boolean>();
  const [randomPic, setRandomPic] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const windowPath = window.location.pathname;

    const randomPics = [
      "/bookcovers/bookCov-1.jpg",
      "/bookcovers/bookCov-2.jpg",
      "/bookcovers/bookCov-3.jpg",
      "/bookcovers/bookCov-4.jpg",
      "/bookcovers/bookCov-5.jpg",
      "/bookcovers/bookCov-6.jpg",
    ];

    setRandomPic(randomPics);

    if (windowPath === "/admin/books") {
      setCurUrl(true);
    }
    router.refresh();
  }, []);

  return (
    <Fragment>
      <div className="sm:h-screen bg-gray-300 grid gap-10 grid-rows-4 py-5">
        {books?.map((book) => (
          <div
            key={book._id}
            className="allDivs flex flex-col justify-center rounded w-1/2 justify-center m-auto scroll-smooth"
          >
            <Link
              className="font-bold uppercase text-center"
              href={currUrl ? `/admin/books/${book._id}` : `/books/${book._id}`}
            >
              <h4 className="py-5 text-xl text-purple-600 hover:text-white transition duration-150 ease-in-out">
                {book.title}
              </h4>
            </Link>
            <img
              src={randomPic[Math.floor(Math.random() * randomPic?.length)]}
              alt="...Missing Image..."
              srcSet=""
              className="w-1/2 object-fill justify-self-center m-auto rounded sm:w-full"
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default BooksList;

import { IBook, NoEdit } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface BooksDetailProps {
  book?: IBook;
}

const BooksDetail: React.FC<BooksDetailProps> = ({ book }) => {
  const [adminEdit, setAdminEdit] = useState<NoEdit>({ editAvailable: true });

  useEffect(() => {
    const currPth = window.location.pathname;
    if (currPth.includes("/admin/books")) {
      setAdminEdit({ editAvailable: false });
    }
  }, []);

  return (
    <div className="h-screen bg-gray-300 flex justify-center align-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-2xl w-full lg:w-3/4 xl:w-2/3 m-auto">
        <h2 className="text-2xl font-semibold mb-4">Book Details</h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <p id="title" className="mt-1 text-lg font-semibold text-gray-900">
            {`${book?.title}`}
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-600"
          >
            Price
          </label>
          <p id="price" className="mt-1 text-lg font-semibold text-green-600">
            ${book?.price}
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <p
            id="description"
            className="mt-1 text-sm text-gray-700 word-break: break-all;"
          >
            {book?.description}
          </p>
        </div>

        {!adminEdit.editAvailable ? (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            <Link href={`/admin/books/edit/${book?._id}`}>Edit</Link>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BooksDetail;

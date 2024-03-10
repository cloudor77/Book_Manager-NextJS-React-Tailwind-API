// Form here
"use client";
import { updateBook } from "@/api/api";
import { IBook } from "@/types/types";
import { useRouter } from "next/navigation";

import { FormEventHandler, useState } from "react";

interface BookDetailEditProps {
  book: IBook;
}

const BookDetailEdit: React.FC<BookDetailEditProps> = ({ book }) => {
  const router = useRouter();

  const [bookValues, setBookValues] = useState({
    title: book?.title!,
    description: book?.description!,
    price: book?.price!,
  });

  const handleBookSubmitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const update = async () => {
      try {
        await updateBook(book?._id as string, bookValues);
      } catch (error) {
        console.log(error);
      }
    };

    update();
    router.back();
  };

  return (
    <div className="bg-gray-300 h-screen flex justify-center align-center sm:w:h-1/3">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full m-auto self-center justify-self-center">
        <div className="my-5">
          <h1 className="text-2xl font-semibold mb-4">Edit Book</h1>
        </div>

        <form onSubmit={handleBookSubmitForm} className="">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={book.title}
              onChange={(e) =>
                setBookValues({ ...bookValues!, title: e.target.value })
              }
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Description:
            </label>
            <input
              type="text"
              name="description"
              defaultValue={book?.description}
              placeholder="Description"
              onChange={(e) => {
                setBookValues({ ...bookValues!, description: e.target.value });
              }}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Price:
            </label>
            <input
              type="number"
              name="price"
              defaultValue={book?.price || ""}
              placeholder="Price"
              onChange={(e) =>
                setBookValues({
                  ...bookValues,
                  price: parseInt(e.target.value),
                })
              }
              min={1}
              step={0.01}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Edit Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookDetailEdit;

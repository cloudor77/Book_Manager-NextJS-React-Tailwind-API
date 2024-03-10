// Form here
"use client";
import { addBook } from "@/api/api";
import { IBook } from "@/types/types";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

const NewBookForm: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState<IBook>({
    title: "",
    description: "",
    price: 0,
  });

  const handleChangeToDo: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitToDo: ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addBook(form);
    setForm({
      title: "",
      description: "",
      price: 0,
    });

    if (window && window.location.pathname === "/admin/books/new") {
      router.push("/admin/books");
    }
  };

  return (
    <div className="bg-gray-300  h-screen flex justify-center align-center sm:w:h-1/3">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full m-auto self-center justify-self-center">
        <div className="my-5">
          <h1 className="text-2xl font-semibold mb-4">
            Enter New Book Record:{" "}
          </h1>
        </div>

        <form onSubmit={handleSubmitToDo}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              placeholder="Title"
              onChange={handleChangeToDo}
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
              value={form.description}
              placeholder="Description"
              onChange={handleChangeToDo}
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
              value={form.price}
              placeholder="Price"
              onChange={handleChangeToDo}
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
            Add New Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBookForm;

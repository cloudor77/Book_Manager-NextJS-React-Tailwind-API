import { IBook } from "@/types/types";

export const API_URL =
  "https://crudcrud.com/api/528592caf7214c7d8a0bf33ef84966d7";

export const retrieveBooks = async (): Promise<IBook[]> => {
  const response = await fetch(`${API_URL}/books`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const allBooks = response.json();
  return allBooks;
};

export const retrieveBook = async (bookID: string): Promise<IBook> => {
  const response = await fetch(`${API_URL}/books/${bookID}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const book = response.json();
  return book;
};

export const addBook = async (book: IBook): Promise<IBook> => {
  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
    cache: "no-store",
  });

  const newBook = await response.json();
  return await newBook;
};

export const updateBook = async (
  bookID: string,
  book: IBook
): Promise<IBook> => {
  const response = await fetch(`${API_URL}/books/${bookID}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
    cache: "no-cache",
  });

  if (!response.ok) {
    console.log(response.status);
  }

  const bookToUpdate = await response.json();

  return bookToUpdate;
};

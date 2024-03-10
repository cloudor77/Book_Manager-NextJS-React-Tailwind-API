// Form here
"use client";
import { addBook } from "@/api/api";
import NewBookForm from "@/app/components/NewBookForm";
import { IBook } from "@/types/types";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

const NewBook: React.FC = () => {
  return <NewBookForm />;
};

export default NewBook;

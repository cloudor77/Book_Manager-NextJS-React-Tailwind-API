import React from "react";

import Link from "next/link";

const Admin = () => {
  return (
    <nav className="flex justify-evenly py-10 px-4">
      <div>
        <h4 className="text-xl uppercase">AdminNav</h4>
      </div>
      <div className="ml-auto">
        <ul className="flex justify-around">
          <li className="mx-5">
            <Link href="/books"> All Books {"(Admin)"}</Link>
          </li>
          <li className="mx-5">
            <Link href="/admin/books/new"> New Book{"(Admin) "}</Link>
          </li>
          <li className="mx-5">
            <Link href="/books"> All Books{"(User) "}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Admin;

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center p-5 font-sans text-lg font-semibold mt-5 space-x-16">
        <li className="hover:text-blue-500 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

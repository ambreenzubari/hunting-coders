import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">MyProject</Link>
        </div>
        <ul className="flex space-x-6 text-white">
          <li className="relative group">
            <Link href="/" className="block py-2 px-4 hover:bg-blue-500 rounded-lg transition-colors">
              Home
            </Link>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </li>
          <li className="relative group">
            <Link href="/about" className="block py-2 px-4 hover:bg-blue-500 rounded-lg transition-colors">
              About
            </Link>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </li>
          <li className="relative group">
            <Link href="/blog" className="block py-2 px-4 hover:bg-blue-500 rounded-lg transition-colors">
              Blog
            </Link>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </li>
          <li className="relative group">
            <Link href="/contact" className="block py-2 px-4 hover:bg-blue-500 rounded-lg transition-colors">
              Contact
            </Link>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

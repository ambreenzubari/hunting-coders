"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md fixed top-0 w-full z-[50]">
      <div className="max-w-6xl mx mx-auto w-full px-4 py-3 flex  justify-between items-center   ">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold whitespace-nowrap  ">
          <Link href="/" className="flex">
            <p> Hunting Coder</p>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-3xl md:hidden z-[51]" // Ensure the button is above other content
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Links Section */}
        <div>
          <ul
            className={`md:flex md:space-x-6 text-white fixed md:static top-16 left-0 right-0 bg-gray-800 md:bg-transparent md:items-center md:justify-start flex-col md:flex-row md:h-auto h-screen w-full max-w-xs md:max-w-none transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-y-0" : "translate-y-full"
            } md:translate-y-0 z-[50]`}
          >
            <li className="relative group py-2 px-4">
              <Link
                href="/"
                className="block py-2 px-4 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Home
              </Link>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
            <li className="relative group py-2 px-4">
              <Link
                href="/about"
                className="block py-2 px-4 hover:bg-blue-500 rounded-lg transition-colors"
              >
                About
              </Link>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
            <li className="relative group py-2 px-4">
              <Link
                href="/blog"
                className="block py-2 px-4 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Blog
              </Link>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
            <li className="relative group py-2 px-4">
              <Link
                href="/contact"
                className="block py-2 px-4 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Contact
              </Link>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

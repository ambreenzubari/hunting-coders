import React from "react";
import Link from "next/link";
import { FaUsers, FaBookOpen, FaRocket, FaMapSigns } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-5xl bg-white shadow-lg rounded-3xl p-10 mx-auto">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide coding solutions, tutorials, and resources designed to
            help developers of all skill levels grow and succeed. Our mission is
            to empower the coding community with the tools and knowledge they
            need.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Our Project Section */}
          <div className="flex flex-col items-center text-center bg-gradient-to-r from-indigo-500 to-purple-500 p-8 rounded-lg transform hover:scale-105 transition-transform">
            <FaUsers className="text-white text-4xl mb-4" />
            <h2 className="text-3xl font-semibold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-gray-200">
              Structured coding solutions and guides for developers at all
              levels.
            </p>
          </div>

          {/* Tutorials Section */}
          <div className="flex flex-col items-center text-center bg-gradient-to-r from-pink-500 to-red-500 p-8 rounded-lg transform hover:scale-105 transition-transform">
            <FaBookOpen className="text-white text-4xl mb-4" />
            <h2 className="text-3xl font-semibold text-white mb-4">
              In-Depth Tutorials
            </h2>
            <p className="text-gray-200">
              Step-by-step coding tutorials on modern technologies.
            </p>
          </div>

          {/* Community Section */}
          <div className="flex flex-col items-center text-center bg-gradient-to-r from-green-500 to-teal-500 p-8 rounded-lg transform hover:scale-105 transition-transform">
            <FaRocket className="text-white text-4xl mb-4" />
            <h2 className="text-3xl font-semibold text-white mb-4">
              Join the Community
            </h2>
            <p className="text-gray-200">
              Share knowledge, collaborate, and grow together.
            </p>
          </div>

          {/* Future Vision Section */}
          <div className="flex flex-col items-center text-center bg-gradient-to-r from-blue-500 to-indigo-500 p-8 rounded-lg transform hover:scale-105 transition-transform">
            <FaMapSigns className="text-white text-4xl mb-4" />
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Future Vision
            </h2>
            <p className="text-gray-200">
              Growing our platform to support developers across the globe.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1 bg-white shadow-md rounded-lg p-6 mb-6 md:mb-0">
              <p className="text-gray-700 mb-4">
                "The tutorials provided on this platform are fantastic! They
                have helped me level up my coding skills significantly."
              </p>
              <p className="font-semibold text-gray-800">Jane Doe</p>
              <p className="text-gray-600">Software Engineer</p>
            </div>
            <div className="flex-1 bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                "A great resource for both beginners and experienced developers.
                The community support is exceptional."
              </p>
              <p className="font-semibold text-gray-800">John Smith</p>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

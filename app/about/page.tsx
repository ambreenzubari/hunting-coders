// pages/about.js
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-50 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-5xl bg-white shadow-2xl rounded-3xl p-10 mx-auto">
        <div className="text-center mb-10">
          <p className="text-gray-700 text-lg">
            Explore a world of coding solutions, tutorials, and resources
            designed to empower developers at all skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Our Project Section */}
          <div className="flex flex-col items-center justify-center text-center bg-gradient-to-tr from-pink-200 via-purple-200 to-indigo-200 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold text-purple-700 mb-2">
              What We Offer
            </h2>
            <p className="text-gray-600">
              Discover structured coding solutions and guides tailored for every
              developer.
            </p>
          </div>

          {/* Tutorials and Guides */}
          <div className="flex flex-col items-center justify-center text-center bg-gradient-to-tr from-yellow-200 via-orange-200 to-red-200 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold text-red-700 mb-2">
              In-Depth Tutorials
            </h2>
            <p className="text-gray-600">
              Dive deep into coding with step-by-step guides and tutorials on
              various technologies.
            </p>
          </div>

          {/* Community Section */}
          <div className="flex flex-col items-center justify-center text-center bg-gradient-to-tr from-green-200 via-blue-200 to-teal-200 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold text-teal-700 mb-2">
              Join the Community
            </h2>
            <p className="text-gray-600">
              Connect with fellow developers, share knowledge, and solve
              challenges together.
            </p>
          </div>

          {/* Future Vision Section */}
          <div className="flex flex-col items-center justify-center text-center bg-gradient-to-tr from-indigo-200 via-blue-200 to-purple-200 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-2">
              Our Future Vision
            </h2>
            <p className="text-gray-600">
              We are committed to growing and enhancing our platform to meet the
              needs of the ever-evolving coding landscape.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

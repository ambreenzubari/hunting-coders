import Link from "next/link";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// Async function to fetch data on the server
export default async function BlogPage() {
  // Fetch blog data from your API
  const response = await fetch("http://localhost:3000/api/getAllBlogsData", {
    cache: "no-store",
  });
  const blogs = await response.json();

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
        {/* Header with black color */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-8 sm:mb-10 md:mb-12">
          Popular Blogs
        </h1>

        <ul className="space-y-6 sm:space-y-8">
          {blogs.map((blog: any) => (
            <li
              key={blog.id}
              className="border-l-4 border-blue-500 pl-4 sm:pl-6 bg-white p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h2 className="text-xl sm:text-2xl font-semibold text-black hover:text-blue-700 transition-colors duration-300">
                  <Link href={`/blogpost/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>
              </div>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                {blog.metaDesc}
              </p>
              <Link
                href={`/blogpost/${blog.slug}`}
                className="mt-2 sm:mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold text-sm sm:text-base"
              >
                Read more &rarr;
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

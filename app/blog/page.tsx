import Link from "next/link";
import React from "react";

// Async function to fetch data on the server
export default async function BlogPage() {
  // Fetch blog data from your API
  const response = await fetch("http://localhost:3000/api/getAllBlogsData", { cache: 'no-store' });
  const blogs = await response.json();
  
  return (
    <div className="p-8 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-lg">
        {/* Header with black color */}
        <h1 className="text-5xl font-bold text-center text-black mb-12">Popular Blogs</h1>

        <ul className="space-y-8">
          {blogs.map((blog: any) => (
            <li key={blog.id} className="border-l-4 border-blue-500 pl-6 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <div className="flex justify-between items-center">
                {/* Blog title with black color */}
                <h2 className="text-2xl font-semibold text-black hover:text-blue-700 transition-colors duration-300">
                  <Link href={`/blogpost/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>
              </div>
              <p className="text-gray-700 mt-2">
                {blog.metaDesc}
              </p>
              <Link href={`/blogpost/${blog.slug}`} className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold">
                Read more &rarr;
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

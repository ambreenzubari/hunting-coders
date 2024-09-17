import Link from "next/link";
import React from "react";

// Async function to fetch data on the server
export default async function BlogPage() {
  // Fetch blog data from your API
  const response = await fetch("http://localhost:3000/api/getAllBlogsData", { cache: 'no-store' });
  const blogs = await response.json();
  
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Popular Blogs</h1>
        <div className="space-y-6">
          {blogs.map((blog: any) => (
            <div key={blog.id} className="border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                <Link href={`/blogpost/${blog.slug}`} className="hover:text-blue-500">
                  {blog.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{blog.metaDesc}</p>
              <Link href={`/blogpost/${blog.slug}`} className="text-blue-600 hover:underline">
                Read more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

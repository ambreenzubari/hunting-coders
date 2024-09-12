import Link from "next/link";
import React from "react";

// Async function to fetch data on the server
export default async function BlogPage() {
  // Fetch blog data from your API
  const response = await fetch("http://localhost:3000/api/getAllBlogsData");
  const blogs = await response.json();

  return (
    <div className="p-8 rounded-lg max-w-3xl mx-auto h-full">
      <p className="text-3xl font-semibold mb-6">Popular Blogs</p>
      <div className="space-y-8">
        <div>
          {blogs.map((blog: any, index: number) => (
            <div key={index}>
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/blogpost/${blog.slug}`}>{blog.title}</Link>
              </h2>
              <p className="text-gray-600">{blog.content.substr(0, 400)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
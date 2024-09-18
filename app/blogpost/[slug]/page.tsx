import React from "react";

// Fetch the blog post data from the API
const fetchBlog = async (slug: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/getblog?slug=${slug}`,
      { cache: "no-store" }
    );

    // Check if the response is okay
    if (!response.ok) {
      throw new Error("Failed to fetch blog post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

// Blog post component that takes in dynamic params
const BlogPost = async ({ params }: any) => {
  const blog = await fetchBlog(params.slug);

  // Function to inject the blog content into the HTML
  const createMarkup = () => {
    return { __html: blog?.content || "<p>No content available</p>" };
  };

  // Check if the blog data exists before rendering
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <p className="text-xl font-semibold text-gray-700">
          Blog post not found!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <section className="relative bg-gray-900 text-white pt-24 pb-10 px-6 text-center">
          <div className="absolute inset-0">
            <img
              src="/coder.jpg" // Replace with your image path
              alt="Hero Image"
              className="object-cover w-full h-full absolute inset-0 opacity-30"
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-2xl font-extrabold mb-4 leading-tight">
              {blog.title}
            </h1>
            <p className="text-lg md:text-xl mb-8">
              by {blog.author}
            </p>
            <div className="flex justify-center flex-wrap gap-2 mb-4">
              {blog.tags &&
                blog.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-teal-600 text-white text-sm font-medium px-4 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <div className="px-10 pt-10 bg-gray-100">
          <div
            dangerouslySetInnerHTML={createMarkup()}
            className="prose prose-lg max-w-none text-gray-800"
          ></div>
          <div className="p-8 text-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </div>
  );
};

export default BlogPost;

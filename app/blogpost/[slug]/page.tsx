import React from "react";

// Fetch the blog post data from the API
const fetchBlog = async (slug: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`, { cache: 'no-store' });
    
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
        <p className="text-xl font-semibold">Blog post not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-12 text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">{blog.title}</h1>
          <p className="text-lg mb-4">{blog.author}</p>
          <div className="flex justify-center mb-4">
            {blog.tags && blog.tags.map((tag: string, index: number) => (
              <span key={index} className="bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded-full mx-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-8">
          <div dangerouslySetInnerHTML={createMarkup()} className="prose prose-lg max-w-none mx-auto"></div>
        </div>

        {/* Call to Action */}
        <div className="p-8 text-center">
          <a href="/contact" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

import React from "react";

// Fetch the blog post data from the API
const fetchBlog = async (slug: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`, {cache:'no-store'});
    
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          {/* Inject the blog content safely */}
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </>
      </div> 
    </div>
  );
};

export default BlogPost;

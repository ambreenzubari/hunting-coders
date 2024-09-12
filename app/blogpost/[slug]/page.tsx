import React from "react";


const fetchBlog =async (slug: string)=>{
  let response= await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let data = await response.json();
  return data
}

const BlogPost = async ({ params }: any) => {
 const blog = await fetchBlog(params.slug)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <>
          <h1 className="text-3xl font-bold mb-4">
            Blog Post: {blog && blog.title}
          </h1>
          <p className="text-lg text-gray-700">{blog && blog.content}</p>
        </>
      </div>
    </div>
  );
};

export default BlogPost;

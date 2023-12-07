"use client";
import React, { useState } from "react";
import axios from "axios";

interface Blog {
  id: string;
  Title: string;
  Text: string;
  createdAT: Date;
}

type BlogListProps = {
  blogs: Blog[];
};

export default function BlogList(props: BlogListProps) {
  const [Blogs, setBlogs] = useState<Blog[]>(props.blogs);

  const handleRemove = async (id: string, Title: string) => {
    try {
      await axios.delete("./api/deleteBlog", {
        params: { id },
      });
      const updatedBlogs = Blogs.filter((blog) => blog.id !== id);
      setBlogs(updatedBlogs);
      
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col justify-center relative h-[100vh]">
      <h1 className="font-mono w-full h-40 text-center text-xl font-bold text-white mt-0">
        Blog List
      </h1>
      <ul className="flex flex-wrap justify-center">
        {Blogs.map((blog) => (
          <li key={blog.id} className="flex-none w-[20vw] m-5">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl font-bold mb-4">{blog.Title}</h2>
              <p className="text-gray-600">{blog.Text}</p>
              <p className="text-xs">{blog.createdAT.toString()}</p>
              <button
                className="bg-slate-700 text-white px-4 py-2 rounded font-mono mt-4 hover:bg-white hover:text-slate-700 border border-slate-700 hover:border-slate-700 hover:cursor-pointer"
                onClick={() => handleRemove(blog.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

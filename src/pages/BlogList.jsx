// React Import
import { useState } from "react";

// Components
import { useAuth } from "../context/AuthContext";

const BlogList = ({ blogs, setBlogs }) => {
  const { currentUser } = useAuth();

  const handleDelete = (id) => {
    if (
      currentUser.role === "admin" ||
      blogs.find((blog) => blog.id === id)?.author === currentUser.email
    ) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
      localStorage.setItem("blogs", JSON.stringify(blogs.filter((blog) => blog.id !== id)));
    }
  };

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p>{blog.content}</p>
          <p className="text-sm text-gray-500">Author: {blog.author}</p>
          {currentUser.role === "admin" ||
            blog.author === currentUser.email ? (
            <button
              onClick={() => handleDelete(blog.id)}
              className="mt-2 px-4 py-2 text-white bg-red-500 rounded"
            >
              Delete
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default BlogList;

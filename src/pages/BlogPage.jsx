import React, { useEffect, useState } from "react";
import BlogList from "../components/Blog/BlogList";
import BlogForm from "../components/Blog/BlogForm";
import { useAuth } from "../context/AuthContext";

const BlogPage = () => {
  const [blogs, setBlogs] = useState(
    JSON.parse(localStorage.getItem("blogs")) || []
  );
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        {currentUser?.role === "author" || currentUser?.role === "admin" ? (
          <BlogForm blogs={blogs} setBlogs={setBlogs} />
        ) : null}
        <BlogList blogs={blogs} setBlogs={setBlogs} />
      </div>
    </div>
  );
};

export default BlogPage;

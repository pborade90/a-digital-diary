import React, { useEffect, useState } from "react";
import CreateBlogPage from "./CreateBlogPage";
import BlogList from "./BlogList";
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
        <BlogList blogs={blogs} setBlogs={setBlogs} />
        {currentUser?.role === "author" || currentUser?.role === "admin" ? (
          <CreateBlogPage blogs={blogs} setBlogs={setBlogs} />
        ) : null}
      </div>
    </div>
  );
};

export default BlogPage;

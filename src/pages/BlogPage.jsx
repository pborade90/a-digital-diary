// React Imports
import { useEffect, useState } from "react";

// Pages
import CreateBlogPage from "./CreateBlogPage";
import BlogList from "./BlogList";

// Components
import { useAuth } from "../context/AuthContext";

// RRD Import
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState(
    JSON.parse(localStorage.getItem("blogs")) || []
  );
  const { currentUser } = useAuth();

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto space-y-6">

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#022b3a]">All Blogs</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-[#1f7a8c] text-white rounded hover:bg-[#022b3a]"
          >
            Go to Dashboard
          </button>
        </div>

        <BlogList blogs={blogs} setBlogs={setBlogs} />
        {currentUser?.role === "author" || currentUser?.role === "admin" ? (
          <CreateBlogPage blogs={blogs} setBlogs={setBlogs} />
        ) : null}
      </div>
    </div>
  );
};

export default BlogPage;

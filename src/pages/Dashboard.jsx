// React Imports
import { useState, useEffect } from "react";

// RRD Imports
import { Link, useNavigate } from "react-router-dom";

// Components
import { useAuth } from "../context/AuthContext";

// Heroicons Imports
import { ArrowRightStartOnRectangleIcon, PencilSquareIcon, UsersIcon, WalletIcon } from "@heroicons/react/20/solid";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [userBlogsCount, setUserBlogsCount] = useState(0);

  useEffect(() => {
    // Fetch blogs from localStorage
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);

    if (currentUser?.role === "author") {
      // Count blogs created by the logged-in author
      const count = storedBlogs.filter((blog) => blog.authorId === currentUser.id).length;
      setUserBlogsCount(count);
    }
  }, [currentUser]);

  const handleDelete = (id) => {
    // Filter out the blog to be deleted
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#e1e5f2]">
      {/* Navbar */}
      <nav className="bg-[#022b3a] text-white p-4 flex flex-wrap justify-between items-center shadow-md">
        <div className="text-2xl font-bold mb-2 sm:mb-0 flex items-center">
          Welcome, {currentUser?.name || "User"}
          <span className="ml-2 text-sm text-[#bfdbf7] font-medium">
            ({currentUser?.role || "Unknown"})
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/blogs"
            className="px-6 py-2 bg-[#bfdbf7] text-[#022b3a] rounded-lg shadow hover:bg-[#1f7a8c] hover:text-white flex items-center justify-center gap-2 transition"
          >
            <span>All Blogs</span>
            <WalletIcon width={20} />
          </Link>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-[#bfdbf7] text-[#022b3a] rounded-lg shadow hover:bg-[#1f7a8c] hover:text-white flex items-center justify-center gap-2 transition"
          >
            <span>Logout</span>
            <ArrowRightStartOnRectangleIcon width={20} />
          </button>
        </div>
      </nav>


      <div className="flex justify-center p-6">
        <div className="w-full max-w-screen-xl">

          <div className="flex flex-col lg:flex-row justify-between gap-6">

            {/* Admin Panel */}
            {currentUser?.role === "admin" && (
              <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg p-6">
                {/* Panel Header */}
                <h2 className="text-2xl font-bold text-[#022b3a] mb-6 border-b pb-4">
                  Admin Dashboard
                </h2>

                {/* Blogs List */}
                <div className="flex justify-between mb-8">
                  {blogs.length > 0 ? (
                    <div className="space-y-6">
                      {blogs.map((blog) => (
                        <div
                          key={blog.id}
                          className="border border-gray-200 p-4 rounded-md hover:shadow-md transition"
                        >
                          {/* Blog Title */}
                          <h3 className="text-lg font-bold text-[#022b3a] truncate">
                            {blog.title}
                          </h3>

                          {/* Blog Content Preview */}
                          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                            {blog.content.slice(0, 100)}
                          </p>

                          <div className="flex justify-between items-center mt-4">
                            <span className="text-xs text-gray-400">
                              Published: {new Date(blog.createdAt).toLocaleDateString()}
                            </span>
                            <div className="flex items-center space-x-3">
                              {/* Delete Button */}
                              <button
                                onClick={() => handleDelete(blog.id)}
                                className="text-red-600 hover:text-red-800 text-sm font-medium"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center">No blogs available to display.</p>
                  )}
                </div>

                <div className="mt-6">
                  <a
                    href="/admin"
                    className="flex items-center justify-center gap-2 w-full bg-[#1f7a8c] text-white hover:bg-[#022b3a] font-semibold rounded-lg py-2 px-4 shadow transition text-center"
                  >
                    <span>Manage Users</span>
                    <UsersIcon width={20} />
                  </a>
                </div>
              </div>
            )}


            {/* Author Dashboard */}
            {currentUser?.role === "author" && (
              <div className="w-full lg:w-2/3">
                <div className="flex justify-between mb-8">
                  {/* Blog Overview Section */}
                  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
                    <h2 className="text-xl font-semibold mb-4 text-[#022b3a]">Blog Overview</h2>
                    <div className="text-gray-600">
                      <p>
                        Total Blogs Published: <span className="font-bold">{userBlogsCount}</span>
                      </p>
                      <p>
                        Last Updated:{" "}
                        <span className="font-bold">
                          {new Date().toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Create Blog Button */}
                  <button
                    onClick={() => navigate("/create-blog")}
                    className="flex items-center justify-center gap-2 bg-[#1f7a8c] text-white hover:bg-[#022b3a] rounded-lg shadow-md py-2 px-4 transition"
                  >
                    <span>Create Blog</span>
                    <PencilSquareIcon width={20} />
                  </button>
                </div>

                {/* Your Blogs Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-6 text-[#022b3a]">Your Blogs</h2>
                  {blogs.filter((blog) => blog.authorId === currentUser.id).length > 0 ? (
                    <div className="flex flex-col space-y-6">
                      {blogs
                        .filter((blog) => blog.authorId === currentUser.id)
                        .map((blog) => (
                          <div
                            key={blog.id}
                            className="border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                          >
                            <h3 className="text-2xl font-semibold text-[#022b3a] mb-4">{blog.title}</h3>
                            <p className="text-base text-gray-600 mb-6">
                              {blog.content.slice(0, 350)}...
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-500">
                                Published on {new Date(blog.createdAt).toLocaleDateString()}
                              </span>
                              <button
                                onClick={() => handleDelete(blog.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No blogs found. Start by creating a blog!</p>
                  )}
                </div>
              </div>
            )}

            {/* Reader Dashboard */}
            {currentUser?.role === "reader" && (
              <div className="flex flex-col space-y-6">
                <h1 className="text-xl font-semibold mb-6 text-[#022b3a]">Latest Blogs</h1>
                {blogs.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs
                      .filter((blog) => blog.authorId === currentUser.id)
                      .map((blog) => (
                        <div
                          key={blog.id}
                          className="border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                          <h3 className="text-2xl font-semibold text-[#022b3a] mb-4">{blog.title}</h3>
                          <p className="text-base text-gray-600 mb-6">
                            {blog.content.slice(0, 350)}...
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">
                              Published on {new Date(blog.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No blogs available to display.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

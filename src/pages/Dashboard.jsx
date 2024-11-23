import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");  // Redirect to login page after logout
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold">Welcome, {currentUser?.name || "User"}!</h1>
        <p className="text-gray-600 mt-2">Role: {currentUser?.role || "Unknown"}</p>
      </div>

      {/* Role-Based Actions */}
      {currentUser?.role === "admin" && (
        <div className="mb-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Admin Actions</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <button
              onClick={() => handleNavigation("/manage-users")}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Manage Users
            </button>
            <button
              onClick={() => handleNavigation("/manage-blogs")}
              className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
            >
              Manage Blogs
            </button>
          </div>
        </div>
      )}

      {currentUser?.role === "author" && (
        <div className="mb-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Author Actions</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <button
              onClick={() => handleNavigation("/create-blog")}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Create Blog
            </button>
            <button
              onClick={() => handleNavigation("/my-blogs")}
              className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
            >
              Manage My Blogs
            </button>
          </div>
        </div>
      )}

      {currentUser?.role === "reader" && (
        <div className="mb-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Explore Blogs</h2>
          <button
            onClick={() => handleNavigation("/blogs")}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Browse Blogs
          </button>
        </div>
      )}

      {/* Recent Activities */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Recent Activities</h2>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>- Viewed "How to Use React Hooks"</li>
          <li>- Edited "My First Blog Post"</li>
          <li>- Commented on "10 Tips for Tailwind CSS"</li>
        </ul>
      </div>

      {/* Blog Summary */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Blog Overview</h2>
        <div className="mt-4">
          <p className="text-gray-600">Total Blogs: 15</p>
          <p className="text-gray-600">Blogs Written by You: 5</p>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [userBlogsCount, setUserBlogsCount] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Fetch all blogs from localStorage
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Count blogs created by the logged-in user
    if (currentUser) {
      const count = blogs.filter((blog) => blog.authorId === currentUser.id).length;
      setUserBlogsCount(count);
    }

    // Fetch recent activities from localStorage
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    const userActivities = activities.filter((activity) => activity.userId === currentUser?.id);
    setRecentActivities(userActivities);
  }, [currentUser]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <header className="bg-blue-500 text-white p-6 rounded shadow-md mb-6">
        <h1 className="text-3xl font-bold">Welcome, {currentUser?.name || "User"}!</h1>
        <p className="mt-2 text-lg">
          Role: <span className="font-semibold">{currentUser?.role || "Unknown"}</span>
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Role-Based Actions */}
        {currentUser?.role === "admin" && (
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
            <button
              onClick={() => handleNavigation("/manage-users")}
              className="block w-full px-4 py-2 mb-2 text-center bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Manage Users
            </button>
            <button
              onClick={() => handleNavigation("/manage-blogs")}
              className="block w-full px-4 py-2 text-center bg-green-500 text-white rounded shadow hover:bg-green-600"
            >
              Manage Blogs
            </button>
          </div>
        )}

        {currentUser?.role === "author" && (
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Toolbox</h2>
            <button
              onClick={() => handleNavigation("/create-blog")}
              className="block w-full px-4 py-2 mb-2 text-center bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Create Blog
            </button>
            <button
              onClick={() => handleNavigation("/my-blogs")}
              className="block w-full px-4 py-2 text-center bg-green-500 text-white rounded shadow hover:bg-green-600"
            >
              Manage My Blogs
            </button>
          </div>
        )}

        {currentUser?.role === "reader" && (
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Explore Blogs</h2>
            <button
              onClick={() => handleNavigation("/blogs")}
              className="block w-full px-4 py-2 text-center bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Browse Blogs
            </button>
          </div>
        )}

        {/* Blog Overview */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Blog Overview</h2>
          <p className="text-gray-700">
            Total Blogs Published by You: <span className="font-bold">{userBlogsCount}</span>
          </p>
        </div>

        {/* Dynamic Recent Activities Section */}
        <div className="bg-white p-6 rounded shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          {recentActivities.length > 0 ? (
            <ul className="space-y-2 text-gray-700">
              {recentActivities.slice(0, 5).map((activity, index) => (
                <li key={index}>
                  • {activity.action} on{" "}
                  <span className="font-semibold">{activity.target}</span> at{" "}
                  {new Date(activity.timestamp).toLocaleString()}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No recent activities to show.</p>
          )}
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

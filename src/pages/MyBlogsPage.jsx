import React, { useState } from "react";

const MyBlogsPage = () => {
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem("blogs")) || []);

  const handleDelete = (id) => {
    // Filter out the blog to be deleted
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);

    // Update the state and local storage
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">My Blogs</h1>
        {blogs.length > 0 ? (
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li key={blog.id} className="p-4 border rounded">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{blog.title}</h2>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-gray-600 text-sm">Published on: {blog.createdAt}</p>
                <p className="mt-2 text-gray-800">{blog.content.substring(0, 100)}...</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No blogs found. Start by creating a blog!</p>
        )}
      </div>
    </div>
  );
};

export default MyBlogsPage;

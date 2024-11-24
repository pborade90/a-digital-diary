import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const [form, setForm] = useState({ title: "", content: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.title.trim() || !form.content.trim()) {
      setMessage("Both Title and Content are required.");
      return;
    }

    // Save the blog to localStorage or API
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const newBlog = {
      id: Date.now(),
      title: form.title,
      content: form.content,
      createdAt: new Date().toLocaleString(),
    };

    // Save the blog and redirect
    localStorage.setItem("blogs", JSON.stringify([...blogs, newBlog]));
    setMessage("Blog created successfully!");
    setTimeout(() => navigate("/my-blogs"), 1500); // Redirect to "My Blogs" after 1.5s
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
        {message && <p className="mb-4 text-center text-green-500">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Blog Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          {/* Blog Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">Content</label>
            <textarea
              placeholder="Write your blog content here..."
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              rows={8}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPage;

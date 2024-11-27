// React Import
import { useState } from "react";

// RRD Import
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const [form, setForm] = useState({ title: "", content: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

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
      author: JSON.parse(localStorage.getItem("currentUser"))?.email,
    };

    localStorage.setItem("blogs", JSON.stringify([...blogs, newBlog]));
    setMessage("Blog created successfully!");
    setTimeout(() => navigate("/blogs"), 1000);
  };

  return (
    <div className="p-6 bg-[#e1e5f2] min-h-screen flex justify-center items-center">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-7xl font-semibold text-[#022b3a] mb-6 text-center">Create a New Blog</h1>
        {message && <p className="mb-4 text-center text-green-500">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blog Title */}
          <div>
            <label className="block text-sm font-semibold text-[#1f7a8c]">Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full p-3 border border-[#e1e5f2] rounded-lg focus:ring-2 focus:ring-[#1f7a8c] transition"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          {/* Blog Content */}
          <div>
            <label className="block text-sm font-semibold text-[#1f7a8c]">Content</label>
            <textarea
              placeholder="Write your blog content here..."
              className="w-full p-3 border border-[#e1e5f2] rounded-lg focus:ring-2 focus:ring-[#1f7a8c] transition"
              rows={8}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1f7a8c] text-white rounded-lg hover:bg-[#022b3a] transition duration-300"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPage;

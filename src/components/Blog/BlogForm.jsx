import React, { useState } from "react";

const BlogForm = ({ blogs, setBlogs }) => {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      ...form,
      id: Date.now(),
      author: JSON.parse(localStorage.getItem("currentUser"))?.email,
    };
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setForm({ title: "", content: "" });
  };

  return (
    <form className="space-y-4 p-4 bg-gray-100 rounded" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Create a Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        className="w-full p-2 border rounded"
        rows="5"
        required
      ></textarea>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};

export default BlogForm;

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "reader" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = signup(form);
    if (success) {
      navigate("/dashboard"); // Redirect to dashboard after successful signup
    } else {
      setMessage("Email already exists.");
    }
  };

  return (
    <form className="p-4 space-y-4 bg-gray-100 rounded" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Signup</h2>
      <input
        type="text"
        placeholder="Name"
        className="p-2 border rounded w-full"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded w-full"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded w-full"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <select
        className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
        required
      >
        <option value="reader">Reader</option>
        <option value="author">Author</option>
        <option value="admin">Admin</option>
      </select>
      <button className="w-full py-2 text-white bg-blue-500 rounded">Signup</button>
      <p>{message}</p>
    </form>
  );
};

export default Signup;

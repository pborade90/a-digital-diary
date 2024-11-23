import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (success) {
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <form className="p-4 space-y-4 bg-gray-100 rounded" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Login</h2>
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
      <button className="w-full py-2 text-white bg-blue-500 rounded">Login</button>
      {message && <p className="text-red-500">{message}</p>}
    </form>
  );
};

export default Login;

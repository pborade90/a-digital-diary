import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="p-8 space-y-6 bg-white shadow-lg rounded-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600">
          Login to access your dashboard
        </p>

        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="w-full py-3 text-white bg-[#1f7a8c] rounded-lg hover:bg-[#022b3a]">
          Login
        </button>

        {message && (
          <p className="text-center text-red-500 text-sm">{message}</p>
        )}

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Sign up here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

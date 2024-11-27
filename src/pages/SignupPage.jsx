// React Import
import { useState } from "react";

// RRD Imports
import { Link, useNavigate } from "react-router-dom";

// Component
import { useAuth } from "../context/AuthContext";

// Heroicons Import
import { UserPlusIcon } from "@heroicons/react/20/solid";

const SignupPage = () => {
  const { signup } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "reader" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = signup(form);
    if (success) {
      navigate("/dashboard");
    } else {
      setMessage("Email already exists.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="p-8 space-y-6 bg-white shadow-lg rounded-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600">
          Signup to join our community
        </p>

        <input
          type="text"
          placeholder="Name"
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
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
        <select
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          required
        >
          <option value="reader">Reader</option>
          <option value="author">Author</option>
        </select>

        <button className="w-full py-3 text-white bg-[#1f7a8c] rounded-lg hover:bg-[#022b3a] flex items-center justify-center gap-2">
          <span>Signup</span>
          <UserPlusIcon width={20} />
        </button>


        {message && (
          <p className="text-center text-red-500 text-sm">{message}</p>
        )}

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Login here
            </Link>
          </p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            For Admin Signup{" "}
            <Link
              to="/admin-signup"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Click here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

// React Import
import { useState } from "react";

// RRD Import
import { useNavigate } from "react-router-dom";

// Components
import { useAuth } from "../context/AuthContext";

// Heroicons Import
import { LockClosedIcon } from "@heroicons/react/20/solid";

const AdminSignupPage = () => {
  const { signup } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "admin", accessKey: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded access key for example purposes
    const validAccessKey = "pibee";
    if (form.accessKey !== validAccessKey) {
      setMessage("Invalid access key.");
      return;
    }

    const { accessKey, ...userData } = form;
    const success = signup(userData);
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
          Admin Signup
        </h1>
        <p className="text-center text-gray-600">
          Signup with an authorized access key
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
        <input
          type="text"
          placeholder="Admin Access Key"
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring focus:ring-red-300"
          value={form.accessKey}
          onChange={(e) => setForm({ ...form, accessKey: e.target.value })}
          required
        />

        <button className="w-full py-3 text-white bg-[#1f7a8c] rounded-lg hover:bg-[#022b3a] flex items-center justify-center gap-2">
          <span>Signup as Admin</span>
          <LockClosedIcon width={20} />
        </button>

        {message && (
          <p className="text-center text-red-500 text-sm">{message}</p>
        )}

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Go back to{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              User Signup
            </a>
          </p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Use "pibee" as Admin Access Key
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdminSignupPage;

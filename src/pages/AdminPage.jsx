import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const { users, currentUser, deleteUser } = useAuth(); // Access deleteUser from context
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#022b3a]">Admin Panel</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-[#1f7a8c] text-white rounded hover:bg-[#022b3a]"
          >
            Go to Dashboard
          </button>
        </div>

        {/* User Management Table */}
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold text-[#022b3a] mb-4">
            User Management
          </h2>
          {users.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Email</th>
                  <th className="border border-gray-300 p-2">Role</th>
                  <th className="border border-gray-300 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email}>
                    <td className="border border-gray-300 p-2">{user.name}</td>
                    <td className="border border-gray-300 p-2">{user.email}</td>
                    <td className="border border-gray-300 p-2">{user.role}</td>
                    <td className="border border-gray-300 p-2">
                      {user.email !== currentUser.email && (
                        <button
                          onClick={() => deleteUser(user.email)} // Use deleteUser from context
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No users available to manage.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

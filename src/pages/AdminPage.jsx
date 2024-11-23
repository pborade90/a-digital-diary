import React from "react";
import UserManagement from "../components/Admin/UserManagement";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <UserManagement />
      </div>
    </div>
  );
};

export default AdminPage;

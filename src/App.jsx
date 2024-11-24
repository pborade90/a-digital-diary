import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard";
import BlogPage from "./pages/BlogPage";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./components/Admin/ProtectedRoutes";
import LandingPage from "./pages/LandingPage";

// Placeholder pages for new functionality
const ManageUsersPage = () => <div>Manage Users Page</div>;
const ManageBlogsPage = () => <div>Manage Blogs Page</div>;
const CreateBlogPage = () => <div>Create Blog Page</div>;
const MyBlogsPage = () => <div>My Blogs Page</div>;

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Default redirection */}
        <Route path="/" element={<LandingPage />} />

        {/* Public Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin", "author", "reader"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute allowedRoles={["reader", "author", "admin"]}>
              <BlogPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-blogs"
          element={
            <ProtectedRoute allowedRoles={["author"]}>
              <MyBlogsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-blog"
          element={
            <ProtectedRoute allowedRoles={["author"]}>
              <CreateBlogPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageUsersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-blogs"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageBlogsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

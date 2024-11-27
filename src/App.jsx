// react router dom imports
import { Routes, Route } from "react-router-dom";

// Pages 
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard";
import AdminSignupPage from "./pages/AdminSignupPage";
import AdminPage from "./pages/AdminPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import BlogPage from "./pages/BlogPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import TermsPage from "./pages/TermsPage";

// Components
import ProtectedRoute from "./components/Admin/ProtectedRoutes";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Public Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin-signup" element={<AdminSignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsPage />} />

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

        {/* Not Found Page  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

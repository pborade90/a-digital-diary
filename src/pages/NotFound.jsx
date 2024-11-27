// RRD Imports
import { Link } from "react-router-dom";

// Heroicons Import
import { HomeIcon } from "@heroicons/react/20/solid";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-[#1f7a8c] mb-4">404: Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1f7a8c] text-white rounded-lg shadow hover:bg-[#022b3a] transition"
      >
        <span className="font-medium">Return to Homepage</span>
        <HomeIcon width={20} />
      </Link>
    </div>
  );
};

export default NotFound;

// RRD Imports
import { Link } from "react-router-dom";

// Heroicon Imports
import { PlusIcon } from "@heroicons/react/20/solid";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-8">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#022b3a]">
            About Our Digital Diary
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Welcome to our application! A place where stories are written, shared, and celebrated.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#1f7a8c]">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Readers:</strong> Explore and enjoy blogs from various authors.</li>
            <li><strong>Authors:</strong> Share your creativity by writing and publishing blogs.</li>
            <li><strong>Admins:</strong> Manage users and blogs to ensure quality and organization.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1f7a8c]">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to empower individuals to express themselves through writing and to create
            a community where everyone’s voice matters. Whether you’re here to share your thoughts or
            learn from others, our platform is designed to make that easy and enjoyable.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f7a8c] text-white rounded-lg shadow hover:bg-[#022b3a] transition"
          >
            <span>Join Us Today</span>
            <PlusIcon width={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

// importing assets
import icon from "../assets/icon.svg"
import createBlog from "../assets/create-blog.svg"
import manageBlog from "../assets/manage-blog.svg"
import discoverBlog from "../assets/discover-blog.svg"

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <img src={icon} alt="A Digital Diary icon" width={30} />
          <h1 className="text-xl font-bold">A Digital Diary</h1>
        </div>

        {/* Right Section */}
        <div>
          <a href="/login" className="px-4 py-2 bg-white text-blue-500 rounded mr-2 hover:bg-gray-200">Login</a>
          <a href="/signup" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Sign Up</a>
        </div>
      </header>


      {/* Hero Section */}
      <section className="text-center bg-gray-100 py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to A Digital Diary</h1>
        <p className="text-lg text-gray-600 mb-6">
          Create, manage, and explore blogs effortlessly. Whether you're an author, or just a reader, we've got something for you!
        </p>
        <a href="/signup" className="px-6 py-3 bg-blue-500 text-white text-lg rounded shadow hover:bg-blue-600">Get Started</a>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={createBlog} alt="Create Blog" className="mx-auto mb-4" width={230} />
              <h3 className="text-xl font-semibold">Create Blogs</h3>
              <p className="text-gray-600">Write and publish blogs with an intuitive editor.</p>
            </div>
            <div>
              <img src={manageBlog} alt="Manage Blogs" className="mx-auto mb-4" width={230} />
              <h3 className="text-xl font-semibold">Manage Blogs</h3>
              <p className="text-gray-600">Authors can efficiently manage blogs and users.</p>
            </div>
            <div>
              <img src={discoverBlog} alt="Read Blogs" className="mx-auto mb-4" width={230} />
              <h3 className="text-xl font-semibold">Discover Blogs</h3>
              <p className="text-gray-600">Readers can explore a wide range of interesting blogs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="space-y-6">
            <blockquote className="text-gray-700 italic">"This app is a game-changer for bloggers and readers alike!"</blockquote>
            <blockquote className="text-gray-700 italic">"I love how easy it is to create and manage blogs here."</blockquote>
            <blockquote className="text-gray-700 italic">"The role-based access is perfect for our team!"</blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-blue-500 text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Join today and start blogging like a pro!</p>
        <a href="/signup" className="px-6 py-3 bg-white text-blue-500 text-lg rounded shadow hover:bg-gray-200">Sign Up</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 My Blog App. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

import React from "react";

// importing assets
import icon from "../assets/icon.svg";
import createBlog from "../assets/create-blog.svg";
import manageBlog from "../assets/manage-blog.svg";
import discoverBlog from "../assets/discover-blog.svg";

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#022b3a] text-white">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <img src={icon} alt="A Digital Diary icon" width={30} />
          <h1 className="text-xl font-bold">A Digital Diary</h1>
        </div>

        {/* Right Section */}
        <div>
          <a
            href="/login"
            className="px-4 py-2 bg-white text-[#022b3a] rounded mr-2 hover:bg-gray-200 hover:scale-105 transition-transform"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-[#1f7a8c] text-white rounded hover:scale-105 transition-transform"
          >
            Sign Up
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center bg-[#e1e5f2] py-16">
        <h1 className="text-4xl font-bold mb-4 text-[#022b3a]">
          Welcome to A Digital Diary
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Write your thoughts, share your stories, and explore a world of blogs
          with ease.
        </p>
        <p className="text-lg text-gray-600">
          With A Digital Diary, you can effortlessly dive into a diverse
          collection of articles and showcase your unique voice to the world.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#022b3a]">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border rounded shadow hover:scale-105 transition-transform">
              <img
                src={createBlog}
                alt="Create Blog"
                className="mx-auto mb-4"
                width={200}
              />
              <h3 className="text-xl font-semibold text-[#1f7a8c]">
                Create Blogs
              </h3>
              <p className="text-gray-600">
                An easy-to-use editor to craft compelling blog posts.
              </p>
            </div>
            <div className="p-4 border rounded shadow hover:scale-105 transition-transform">
              <img
                src={manageBlog}
                alt="Manage Blogs"
                className="mx-auto mb-4"
                width={200}
              />
              <h3 className="text-xl font-semibold text-[#1f7a8c]">
                Manage Blogs
              </h3>
              <p className="text-gray-600">
                Take control of your content with powerful management tools.
              </p>
            </div>
            <div className="p-4 border rounded shadow hover:scale-105 transition-transform">
              <img
                src={discoverBlog}
                alt="Discover Blogs"
                className="mx-auto mb-4"
                width={200}
              />
              <h3 className="text-xl font-semibold text-[#1f7a8c]">
                Discover Blogs
              </h3>
              <p className="text-gray-600">
                Explore a variety of blogs tailored to your interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded CTA Section */}
      <section className="text-center py-16 bg-[#022b3a] text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-4">
          Sign up today and begin your journey as a blogger or avid reader.
        </p>
        <p className="text-lg mb-6">
          Unleash your creativity, connect with like-minded individuals, and
          make your voice heard in the blogging community.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-white text-[#022b3a] text-lg rounded shadow hover:bg-gray-200 transform hover:scale-105 transition-transform"
        >
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#022b3a] text-[#e1e5f2] py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 A Digital Diary. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white">
              About Us
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default LandingPage;


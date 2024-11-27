const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-8">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#022b3a]">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Have questions, feedback, or need assistance? We’d love to hear from you!
          </p>
        </div>


        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#1f7a8c]">
            Get in Touch
          </h2>
          <p className="text-gray-700">
            You can reach out to us via email for any inquiries or support. We are here to help and
            ensure your experience on our platform is as smooth as possible.
          </p>
          <p className="text-lg font-semibold">
            Email:{" "}
            <a
              href="mailto:pborade90@gmail.com"
              className="text-[#1f7a8c] hover:underline"
            >
              pborade90@gmail.com
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            Whether you’re reporting an issue, sharing feedback, or just saying hello, we look forward to
            hearing from you. We aim to respond to all emails within 1-2 business days.
          </p>
          <p className="text-gray-700">
            Thank you for being a part of our community. Happy blogging!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

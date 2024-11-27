const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-8">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#022b3a]">Terms and Conditions</h1>
          <p className="text-gray-600 mt-4 text-lg">
            Please read these terms and conditions carefully before using our platform.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#1f7a8c]">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            By accessing or using our platform, you agree to comply with and be bound by these terms. If you do not agree to these terms, please refrain from using our platform.
          </p>

          <h2 className="text-2xl font-semibold text-[#1f7a8c]">
            2. User Responsibilities
          </h2>
          <p className="text-gray-700">
            As a user, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Provide accurate and complete information during signup.</li>
            <li>Refrain from posting offensive, harmful, or illegal content.</li>
            <li>Respect the rights and privacy of other users.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#1f7a8c]">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700">
            All content available on our platform, including but not limited to text, graphics, and logos, is the intellectual property of the platform owner. Unauthorized use is strictly prohibited.
          </p>

          <h2 className="text-2xl font-semibold text-[#1f7a8c]">
            4. Termination
          </h2>
          <p className="text-gray-700">
            We reserve the right to terminate or suspend access to your account if you violate these terms or engage in any behavior deemed inappropriate or harmful.
          </p>

          <h2 className="text-2xl font-semibold text-[#1f7a8c]">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            We are not responsible for any direct or indirect damages resulting from your use of our platform. Use our platform at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-[#1f7a8c]">
            6. Changes to Terms
          </h2>
          <p className="text-gray-700">
            We reserve the right to update or modify these terms at any time. Users will be notified of any significant changes, and continued use of the platform constitutes acceptance of the updated terms.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            Thank you for using our platform. If you have any questions regarding these terms, please contact us at{" "}
            <a
              href="mailto:pborade90@gmail.com"
              className="text-[#1f7a8c] hover:underline"
            >
              pborade90@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

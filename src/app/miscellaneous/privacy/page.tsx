import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 bg-white text-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-jssorange mb-8">
          Privacy Policy
        </h1>

        <p className="text-base text-justify text-jssblue mb-4">
          At <strong>SJCE MAP</strong>, we prioritize the privacy of our users.
          This Privacy Policy outlines the minimal information we collect and
          how it is used and protected when you use our mobile application and
          website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-jssorange">
          Information We Collect
        </h2>
        <p className="text-base text-justify text-jssblue mb-4">
          <strong>Location Data:</strong> The only data we collect is your
          current location (latitude and longitude) to provide navigation
          services within the SJCE campus. This information is used solely to
          offer real-time directions and guide users to various campus
          locations.
        </p>
        <p className="text-base text-justify text-jssblue mb-4">
          <strong>Data Storage:</strong> We do not store any of the location
          data (latitude and longitude) that we collect. The location
          information is used in real-time for the functionality of the web app and
          is immediately discarded after use.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-jssorange">
          No Collection of Personal Information
        </h2>
        <p className="text-base text-justify text-jssblue mb-4">
          We do not collect any personal information such as your name, email
          address, phone number, or any other identifying data. The{" "}
          <strong>SJCE MAP</strong> web app is designed to respect your privacy and
          does not store or share any personal or sensitive information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-jssorange">
          Data Security
        </h2>
        <p className="text-base text-justify text-jssblue mb-4">
          Since we do not store any data, there is no risk of your information
          being accessed, shared, or misused. Your location data is used solely
          to improve the user experience within the SJCE campus and is discarded
          after the navigation process is complete.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-jssorange">
          Third-Party Services
        </h2>
        <p className="text-base text-justify text-jssblue mb-4">
          <strong>SJCE MAP</strong> does not integrate or use any third-party
          services that collect, store, or process user data. Your location data
          is only used within the web app for navigation purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-jssorange">
          Changes to This Policy
        </h2>
        <p className="text-base text-justify text-jssblue mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be communicated clearly to ensure that you are always aware of what
          data we collect (if any) and how it is used.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-jssorange">
          Contact Dev
        </h2>
        <p className="text-base text-justify text-jssblue mb-4">
          If you have any questions or concerns about this Privacy Policy or
          your data, please contact us at:{" "}
          <strong>vishnustechnologies@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

/* AboutPage.tsx */

import React from "react";

const aboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        About SJCE MAP
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-jssorange">
          App Overview
        </h2>
        <p className="text-base text-jssblue text-justify">
          SJCE MAP is your comprehensive navigation guide to the Sri
          Jayachamarajendra College of Engineering (SJCE) Mysore campus. With
          this app, you can easily find various locations within the campus and
          get walking directions to any spot. Our app also provides stunning
          360-degree views of key landmarks on campus, making it easier for
          students, faculty, and visitors to navigate and explore.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-jssorange">
          Key Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-base text-jssblue">
          <li>Interactive campus map with detailed spot locations.</li>
          <li>Walking directions using Google Maps integration.</li>
          <li>360-degree virtual views of prominent spots on campus.</li>
          <li>User-friendly interface for easy navigation.</li>
          <li>
            Search functionality to quickly locate buildings and facilities.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-jssorange">
          Technologies Used
        </h2>
        <p className="text-base text-jssblue text-justify">
          SJCE MAP is built using modern web development technologies to provide
          a fast and smooth user experience. Below are the key technologies that
          power the app:
        </p>
        <ul className="list-disc list-inside text-justify space-y-2 text-base text-jssblue mt-4">
          <li>
            <strong>React & TypeScript</strong>: For building the interactive
            user interface and ensuring type safety.
          </li>
          <li>
            <strong>Next.js</strong>: For server-side rendering and fast
            routing.
          </li>
          <li>
            <strong>Google Maps API</strong>: For map display, walking
            directions, and real-time navigation.
          </li>
          <li>
            <strong>Google Street View API</strong>: For 360-degree virtual
            views of campus locations.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: For creating responsive,
            customizable, and mobile-friendly UI components.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-jssorange">
          How to Use the App
        </h2>
        <p className="text-base text-jssblue text-justify">
          For newcomers, navigating the SJCE campus can be quite challenging,
          especially when trying to locate various spots spread across the large
          campus. However, with the SJCE MAP app, we`ve made it much easier to
          find your way around.
        </p>
        <ol className="list-decimal list-inside text-justify space-y-2 text-base text-jssblue mt-4">
          <li>Open the SJCE MAP app and allow location permissions.</li>
          <li>Search for a building or spot using the search bar.</li>
          <li>Select the location to view details and get 360-degree views.</li>
          <li>Click the `Get Directions` button for walking directions.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-jssorange">
          Contact Dev
        </h2>
        <p className="text-base text-jssblue">
          For any questions, feedback, or suggestions, please contact developer
          at:
        </p>
        <p className="text-base font-semibold mt-4 text-jssorange">
          Email:{" "}
          <a
            href="mailto:vishnustechnologies@gmail.com"
            className="text-jssblue underline"
          >
            vishnustechnologies@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default aboutPage;

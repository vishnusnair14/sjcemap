// pages/index.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/auth");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-center">
      <h2 className="text-1xl font-bold text-gray-800 mb-3 uppercase tracking-wide shadow-sm">
        JSS MAHAVIDYAPEETHA
      </h2>
      {/* College Logo */}
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/sjce-map.appspot.com/o/SJCE-MAP-IMAGES%2Fjssstulogo.png?alt=media&token=8658a235-9910-4395-9815-3588bc88fa87"
        alt="Logo"
        width={350}
        height={200}
        className="mb-5 transition-transform duration-400 transform hover:scale-110"
      />

      <div>
        <h4 className="text-xl font-semibold text-center text-gray-700">
          Sri Jayachamarajendra College of Engineering, Mysuru
        </h4>
        {/* <h5 className="text-md text-justify text-gray-600">
          JSS Science and Technology University, Mysuru 570006
        </h5> */}
      </div>
      <br />
      <button
        onClick={handleGetStartedClick}
        className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;

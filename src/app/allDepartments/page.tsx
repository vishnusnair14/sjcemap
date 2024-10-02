"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";

type Department = {
  id: string;
  spot_name: string;
  google_360_view_url: string;
  image: string;
};

const AllLocations = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const router = useRouter();

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/json/allDepartments.json")
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data);
        setLoading(false);
        setIsDisabled(false);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
        setLoading(false);
        setIsDisabled(false);
      });
  }, []);

  // Filter departments based on search term
  const filteredDepartments = departments.filter((item) =>
    item.spot_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Clear search input
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="container mt-2 pt-0 text-black">
      <h1 className="text-xl font-bold">ALL DEPARTMENTS</h1>

      {/* Search input field with icon */}
      <div className="relative mb-4">
        {/* Search Icon */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-jssorange"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 4a6 6 0 100 12 6 6 0 000-12zm6 6h.01M20 20l-4-4"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search departments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          disabled={isDisabled}
          className="border rounded-md pl-10 py-2 w-full"
        />

        {/* Cross Icon for clearing search input */}
        <Transition
          show={searchTerm.length > 0}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={clearSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </Transition>
      </div>

      {/* Display loader while fetching data */}
      {loading ? (
        <div className="custom-spinner-container">
          <div className="custom-spinner"></div>
        </div>
      ) : (
        <div className="recycler-view">
          {filteredDepartments.map((item) => (
            <div
              key={item.id}
              className="item cursor-pointer"
              onClick={() => {
                router.push(`/locationDetails?id=${item.id}&type=dept`);
              }}
            >
              <Image
                src={item.image}
                alt={item.spot_name}
                width={100}
                height={100}
                className="item-image"
              />
              <div className="item-title text-black">{item.spot_name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllLocations;

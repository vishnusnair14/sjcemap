"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Location = {
  lat: number;
  lng: number;
};

// Define the SJCE-Mysore polygon boundary (latitude, longitude points)
const GEOFENCE_BOUNDARY: Location[] = [
  { lat: 12.318826537540374, lng: 76.60912010901417 },
  { lat: 12.319252473825248, lng: 76.6174069034744 },
  { lat: 12.310046591113828, lng: 76.61175813657036 },
  { lat: 12.311200979425825, lng: 76.61675042811834 },
];

// Ray-casting algorithm to check if a point is inside a polygon
const isPointInPolygon = (point: Location, polygon: Location[]) => {
  let isInside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].lat,
      yi = polygon[i].lng;
    const xj = polygon[j].lat,
      yj = polygon[j].lng;

    const intersect =
      yi > point.lng !== yj > point.lng &&
      point.lat < ((xj - xi) * (point.lng - yi)) / (yj - yi) + xi;
    if (intersect) isInside = !isInside;
  }
  return isInside;
};

const GeoFenceCheck = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [locationError, setLocationError] = useState("");
  const [withinBoundary, setWithinBoundary] = useState(false);

  const playAlertSound = () => {
    const audio = new Audio("/sound/auth-success.mp3");
    audio.play();
  };

  useEffect(() => {
    const checkGeolocation = () => {
      setLoading(true);
      setLocationError("");

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation: Location = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            if (isPointInPolygon(userLocation, GEOFENCE_BOUNDARY)) {
              setWithinBoundary(true);
              setTimeout(() => {
                sessionStorage.setItem("authenticated", "true"); // Set authentication flag
                router.push("/home");
                playAlertSound();
              }, 500);
            } else {
              setWithinBoundary(false);
              setLocationError(
                "You are outside the allowed geofence boundary."
              );
            }
            setLoading(false);
          },
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              setLocationError("Permission to access location was denied.");
            } else if (error.code === error.POSITION_UNAVAILABLE) {
              setLocationError("Location information is unavailable.");
            } else if (error.code === error.TIMEOUT) {
              setLocationError("The request to get user location timed out.");
            } else {
              setLocationError("An unknown error occurred.");
            }
            setLoading(false);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      } else {
        setLocationError("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };

    checkGeolocation();
  }, [router]);

  useEffect(() => {
    if (withinBoundary && !loading) {
      playAlertSound();
    }
  }, [withinBoundary, loading]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-700 mb-2">
          Authentication
        </h2>
        <h4 className="text-center mb-8 text-black">
          You should be within SJCE-Mysore Campus to use this website
        </h4>

        {loading && (
          <div className="flex flex-col items-center justify-center">
            <svg
              className="animate-spin h-8 w-8 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-blue-500 text-center mt-4">
              Checking your geo-location...
            </p>
          </div>
        )}

        {locationError && (
          <div className="bg-red-100 p-4 rounded-lg mt-4">
            <p className="text-red-500 text-center">{locationError}</p>
            <div className="mt-4 flex justify-center">
              <a
                href="/home"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Redirect anyways
              </a>
            </div>
          </div>
        )}

        {withinBoundary && !loading && (
          <p className="text-green-500 text-center">
            Authentication success, please wait...
          </p>
        )}
      </div>
    </div>
  );
};

export default GeoFenceCheck;

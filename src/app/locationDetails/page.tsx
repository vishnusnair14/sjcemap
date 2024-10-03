/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Suspense, useEffect, useState, FC } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "@/components/Card";
import Button from "@/components/Button";
import BottomSheet from "@/components/BottomSheet";
import PhotoBottomSheet from "@/components/PhotoBottomSheet";
import LoadingSpinner from "@/components/LoadingSpinner";

const LocationDetailsContent: FC = () => {
  const [location, setLocation] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isPhotoSheetOpen, setPhotoSheetOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  const openSheet = () => setSheetOpen(true);
  const closeSheet = () => setSheetOpen(false);
  const closePhotoSheet = () => setPhotoSheetOpen(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/locations/${id}/${type}`)
        .then((response) => response.json())
        .then((data) => {
          setLocation(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching location data:", error);
          setLoading(false);
          router.push("/allLocations");
        });
    } else {
      router.push("/allLocations");
    }
  }, [id, router, type]);

  const startDirections = (): void => {
    if (location) {
      const { latitude, longitude } = location;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const currentLatitude = position.coords.latitude;
            const currentLongitude = position.coords.longitude;

            const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${currentLatitude},${currentLongitude}&destination=${latitude},${longitude}&travelmode=walking`;
            window.open(directionsUrl, "_self");
          },
          (error: GeolocationPositionError) => {
            if (error.code === error.PERMISSION_DENIED) {
              alert(
                "Location permission denied. Please enable location services in your browser settings to get directions."
              );
            } else {
              alert(
                "Unable to retrieve your location. Please ensure location services are enabled."
              );
            }
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    } else {
      alert("Location data is not available.");
    }
  };

  const handleOpenSheet = () => {
    openSheet();
  };

  const openPhotoSheet = (index: number) => {
    if (location.images && location.images.length > 0) {
      setCurrentPhotoIndex(index);
      setPhotoSheetOpen(true);

      if (navigator.vibrate) {
        navigator.vibrate(450);
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!location) return null;

  const isLocationValid = location.latitude !== 0 && location.longitude !== 0;
  const has360View =
    location.google_360_view_url && location.google_360_view_url.trim() !== "";

  return (
    <div className="container mt-8 pt-0 relative">
      {/* Open the photo sheet when tapping the image */}
      <div onClick={() => openPhotoSheet(0)} className="cursor-pointer">
        <Image
          src={location.image}
          alt={location.spot_name}
          width={500}
          height={300}
          className="ld-item-image relative" // Makes it clickable
        />
      </div>
      <h1 className="ld-h1 text-black">{location.spot_name.toUpperCase()}</h1>

      {location.description && (
        <Card>
          <h3 className="ld-h3 text-black">{location.description}</h3>
        </Card>
      )}

      <div className="ld-button-container">
        <Button
          className="ld-button bg-jssorange text-white"
          text="Show 360° view"
          onClick={handleOpenSheet}
          disabled={!has360View}
        />

        <Button
          className="ld-button bg-jssorange text-white"
          text="Get Direction"
          onClick={startDirections}
          disabled={!isLocationValid}
        />
      </div>

      {/* Bottom sheet for images */}
      <PhotoBottomSheet
        isOpen={isPhotoSheetOpen}
        onClose={closePhotoSheet}
        images={location.images}
        initialPhotoIndex={currentPhotoIndex}
      />

      {/* Bottom sheet for Google 360 view */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={closeSheet}
        google360Url={location.google_360_view_url}
      />
    </div>
  );
};

const LocationDetails = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <LocationDetailsContent />
  </Suspense>
);

export default LocationDetails;

"use client";

import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import Card from "../../components/ButtonCard";
import CardGrid from "../../components/ButtonCardGrid";

const HomePage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Check authentication status
    const authenticatedStatus = sessionStorage.getItem("authenticated");

    if (!authenticatedStatus) {
      // Redirect to auth page if not authenticated
      // router.push("/auth");
    }
  }, [router]);

  return (
    <>
      <label className="font-bold text-2xl text-center text-black">
        ALL CAMPUS LOCATIONS
      </label>

      <div className="pt-4 font-semibold text-black">
        <Card
          title="Top Locations"
          buttonTitle="View all locations"
          btntitle="View all locations"
          imageSrc="/icons/location.png"
          link="/allLocations"
        />
        <Card
          title="All Departments"
          btntitle="View all departments"
          buttonTitle="View all departments"
          imageSrc="/icons/departments.png"
          link="/allDepartments"
        ></Card>

        <CardGrid
          title="Others"
          imageSrc="/icons/others.png"
          link="/allParkings"
        >
          <div className="button-grid-2">
            <a
              className="a-button"
              href={`/locationDetails?id=sjce_library&type=others`}
            >
              SJCE Library
            </a>
            <a
              className="a-button"
              href={`/locationDetails?id=reference_section&type=others`}
            >
              Reference Hall
            </a>
          </div>
          <div className="button-grid-2">
            <a
              className="a-button"
              href={`/locationDetails?id=is_seminar_hall&type=others`}
            >
              IS Seminar Hall
            </a>
            <a
              className="a-button"
              href={`/locationDetails?id=cms_seminar_hall&type=others`}
            >
              CMS Seminar Hall
            </a>
          </div>
        </CardGrid>

        <CardGrid
          title="Campus Parkings"
          imageSrc="/icons/parking.png"
          link="/allParkings"
        >
          <div className="button-grid-1 mb-4">
            <a
              className="a-button"
              href={`/locationDetails?id=main_parking&type=parking`}
            >
              Main Parking
            </a>
          </div>
          <div className="button-grid-2">
            <a
              className="a-button"
              href={`/locationDetails?id=staff_parking_1&type=parking`}
            >
              Staff Parking 1
            </a>
            <a
              className="a-button"
              href={`/locationDetails?id=staff_parking_2&type=parking`}
            >
              Staff Parking 2
            </a>
            <a
              className="a-button"
              href={`/locationDetails?id=parking_lot_1&type=parking`}
            >
              Parking Lot 1
            </a>
            <a
              className="a-button"
              href={`/locationDetails?id=parking_lot_2&type=parking`}
            >
              Parking Lot 2
            </a>
          </div>
        </CardGrid>

        <CardGrid
          title="Cafeterias"
          imageSrc="/icons/cafeteria.png"
          link="/allParkings"
        >
          <div className="button-grid-1">
            <a
              className="a-button"
              href={`/locationDetails?id=aloks_kitchen&type=cafeteria`}
            >
              ALOK`S Kitchen
            </a>
          </div>
          <div className="button-grid-2">
            <a
              className="a-button"
              href={`/locationDetails?id=yampa&type=cafeteria`}
            >
              YAMPA
            </a>
            <a
              className="a-button"
              href={`/locationDetails?id=laras_cafe&type=cafeteria`}
            >
              Laras Cafe
            </a>
            <a
              className="a-button"
              href={`/locationDetails?id=annapoorna&type=cafeteria`}
            >
              Annapoorna Canteen
            </a>
            <a
              className="a-button"
              href={`/locationDetails?id=pda_canteen&type=cafeteria`}
            >
              PDA<br></br>Canteen
            </a>
          </div>
        </CardGrid>
      </div>
    </>
  );
};

export default HomePage;

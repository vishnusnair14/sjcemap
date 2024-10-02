import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Function to resolve file path based on type
const resolveFilePath = (type: string) => {
  const basePath = path.resolve(process.cwd(), "public", "json");

  switch (type) {
    case "spot":
      return path.join(basePath, "allCampusLocations.json");
    case "dept":
      return path.join(basePath, "allDepartments.json");
    case "parking":
      return path.join(basePath, "campusParkings.json");
    case "cafeteria":
      return path.join(basePath, "cafeterias.json");
    case "others":
      return path.join(basePath, "otherCampusLocations.json");
    default:
      throw new Error("Invalid type");
  }
};

export async function GET(
  request: Request,
  { params }: { params: { id: string; type: string } }
) {
  const { id, type } = params;

  try {
    const filePath = resolveFilePath(type);
    const fileData = fs.readFileSync(filePath, "utf8");
    const locations = JSON.parse(fileData);

    // Find the location by its id
    const location = locations.find((loc: { id: string }) => loc.id === id);

    if (location) {
      return NextResponse.json(location);
    } else {
      return NextResponse.json(
        { error: "Location not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import cloudinary from "./cloudinary";
import { unstable_cache as cache } from "next/cache";

// Funkcja z pełną konfiguracją cachowania
export default cache(
  async function getResults() {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER || ""}/*`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute();

    return fetchedResults;
  },
  // Unikalny klucz cache dla tej operacji
  ["cloudinary-gallery-results"],
  {
    // Czas revalidacji w sekundach - np. 1 godzina (lub false dla nieskończonego cache)
    revalidate: 3600,
    // Tagi cache do selektywnej rewalidacji
    tags: ["gallery", "cloudinary-images"],
  }
);

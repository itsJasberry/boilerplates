import cloudinary from "./cloudinary";

type CloudinarySearchResult = {
  resources: Array<{
    public_id: string;
    [key: string]: unknown;
  }>;
  [key: string]: unknown;
};

let cachedResults: CloudinarySearchResult | undefined;

export default async function getResults(): Promise<CloudinarySearchResult> {
  if (!cachedResults) {
    const fetchedResults: CloudinarySearchResult = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER || ""}/*`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute();

    cachedResults = fetchedResults;
  }

  return cachedResults;
}

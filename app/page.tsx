import cloudinary from "@/lib/gallery/cloudinary";
import getBase64ImageUrl from "@/lib/gallery/generateBlurPlaceholder";
import type { ImageProps } from "@/lib/gallery/types";
import HomeClient from "@/components/gallery/HomeClient";

export const metadata = {
  title: "Next.js Conf 2022 Photos",
  openGraph: {
    images: ["https://nextjsconf-pics.vercel.app/og-image.png"],
  },
  twitter: {
    images: ["https://nextjsconf-pics.vercel.app/og-image.png"],
  },
};

export default async function Page() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  let reducedResults: ImageProps[] = [];
  let i = 0;
  for (const result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = reducedResults.map((image) =>
    getBase64ImageUrl(image)
  );
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  reducedResults = reducedResults.map((img, index) => ({
    ...img,
    blurDataUrl: imagesWithBlurDataUrls[index],
  }));

  return <HomeClient images={reducedResults} />;
}

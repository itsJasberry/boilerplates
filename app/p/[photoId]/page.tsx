import type { Metadata } from "next";
import Carousel from "@/components/gallery/Carousel";
import getResults from "@/lib/gallery/cachedImages";
import cloudinary from "@/lib/gallery/cloudinary";
import getBase64ImageUrl from "@/lib/gallery/generateBlurPlaceholder";
import type { ImageProps } from "@/lib/gallery/types";

type PageProps = {
  params: Promise<{ photoId: string }>;
};

export async function generateStaticParams() {
  // Pobieramy listę zasobów z Cloudinary
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  // Generujemy tablicę parametrów { photoId: string }
  const paramsArray = results.resources.map((_, i: number) => ({
    photoId: i.toString(),
  }));

  return paramsArray;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { photoId } = await params;

  // Pobieramy wszystkie wyniki (możesz zastąpić optymalizacją – np. cachowaniem)
  const results = await getResults();

  // Mapujemy wyniki do uproszczonej tablicy
  const reducedResults: ImageProps[] = [];
  let i = 0;
  for (const result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height as string,
      width: result.width as string,
      public_id: result.public_id,
      format: result.format as string,
    });
    i++;
  }

  const currentPhoto = reducedResults.find((img) => img.id === Number(photoId));

  if (!currentPhoto)
    return {
      title: "Photo Not Found",
    };

  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format};`;

  return {
    title: "Next.js Conf 2022 Photos",
    openGraph: {
      images: [currentPhotoUrl],
    },
    twitter: {
      images: [currentPhotoUrl],
    },
  };
}

export default async function Page({ params }: PageProps) {
  // Pobieramy wszystkie wyniki
  const results = await getResults();
  const { photoId } = await params;

  const reducedResults: ImageProps[] = [];
  let i = 0;
  for (const result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height as string,
      width: result.width as string,
      public_id: result.public_id,
      format: result.format as string,
    });
    i++;
  }

  const currentPhoto = reducedResults.find((img) => img.id === Number(photoId));

  if (!currentPhoto) {
    return <div>Photo not found</div>;
  }

  // Generujemy blurDataUrl
  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

  // Możesz utworzyć dodatkowy URL do meta danych, jeżeli to konieczne:
  // const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format};`

  return (
    <main className="mx-auto max-w-[1200px] p-4">
      <Carousel currentPhoto={currentPhoto} images={reducedResults} index={Number(photoId)} />
    </main>
  );
}

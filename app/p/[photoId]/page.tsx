// app/[photoId]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Carousel from '../../components/Carousel';
import getResults from '../../utils/cachedImages';
import cloudinary from '../../utils/cloudinary';
import getBase64ImageUrl from '../../utils/generateBlurPlaceholder';
import type { ImageProps } from '../../utils/types';

type Props = {
  params: {
    photoId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const results = await getResults();
  
  const reducedResults: ImageProps[] = [];
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

  const currentPhoto = reducedResults.find(
    (img) => img.id === Number(params.photoId)
  );
  
  if (!currentPhoto) {
    return { title: 'Photo not found' };
  }

  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format}`;

  return {
    title: 'Next.js Conf 2022 Photos',
    openGraph: {
      images: [currentPhotoUrl],
    },
    twitter: {
      card: 'summary_large_image',
      images: [currentPhotoUrl],
    },
  };
}

export default async function PhotoPage({ params }: Props) {
  const index = Number(params.photoId);
  
  const results = await getResults();
  
  const reducedResults: ImageProps[] = [];
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

  const currentPhoto = reducedResults.find(
    (img) => img.id === index
  );
  
  if (!currentPhoto) {
    notFound();
  }
  
  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Carousel currentPhoto={currentPhoto} index={index} />
    </main>
  );
}

export async function generateStaticParams() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  return results.resources.map((_, i) => ({
    photoId: i.toString(),
  }));
}

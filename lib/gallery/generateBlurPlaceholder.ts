import { getPlaiceholder } from "plaiceholder";
import type { ImageProps } from "./types";
import { unstable_cache as cache } from 'next/cache';

// Tworzymy funkcję generującą unikalny klucz cache dla każdego obrazu
// function getCacheKey(image: ImageProps): string {
//   return `blur-${image.public_id}-${image.format}`;
// }

// Wykorzystujemy cache z Next.js zamiast własnej implementacji Map
const getBase64ImageUrl = cache(async function(image: ImageProps): Promise<string> {
  const imageUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`;
  
  // Użycie fetch z opcją cache dla dodatkowej warstwy cachowania
  const response = await fetch(imageUrl, {
    cache: 'force-cache' // Używamy silnego cachowania dla miniatur
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
  }

  const buffer = await response.arrayBuffer();
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  // Ensure the resulting string is a proper data URI
  return base64.startsWith("data:") ? base64 : `data:image/jpeg;base64,${base64}`;
});

export default getBase64ImageUrl;

import { getPlaiceholder } from "plaiceholder";
import type { ImageProps } from "./types";

const cache = new Map<ImageProps, string>();

export default async function getBase64ImageUrl(image: ImageProps): Promise<string> {
  let url = cache.get(image);
  if (url) {
    return url;
  }
  
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
  }
  
  const buffer = await response.arrayBuffer();
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  url = `data:image/jpeg;base64,${base64}`;
  cache.set(image, url);
  return url;
}

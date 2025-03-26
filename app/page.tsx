// app/page.tsx
import { getImages } from "@/lib/imageUtils";
import Gallery from "@/components/gallery/Gallery";

export default async function Home() {
  const images = await getImages();
  return <Gallery images={images} />;
}

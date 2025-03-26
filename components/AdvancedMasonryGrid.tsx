import React from "react";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.webp";
import foto4 from "@/assets/foto4.jpg";
import foto5 from "@/assets/foto5.jpg";
import foto6 from "@/assets/foto6.jpg";
import adobe from "@/assets/AdobeStock_434929411-scaled.webp";
import download from "@/assets/download.jpg";
import grafika3d from "@/assets/grafika-3d.jpg";
import imagess from "@/assets/images.jpg";
import obrazWektorowy from "@/assets/obraz-wektorowy.jpg";
import r1 from "@/assets/r1.jpg";
import r2 from "@/assets/r2.jpg";
import r3 from "@/assets/r3.webp";
import r4 from "@/assets/r4.webp";
import r5 from "@/assets/r5.webp";
import Image from "next/image";
import huber2 from "@/assets/huber2.png"

type Photo = { src: string; width: number; height: number; alt: string };
type Props = { photo: Photo };

function ImgContainer({ photo }: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(350 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div className="w-[350px] justify-self-center" style={{ gridRow: `span ${photoSpans}` }}>
      <div className="rounded-xl overflow-hidden group">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="350px"
          className="group-hover:opacity-75 transition-opacity"
        />
      </div>
    </div>
  );
}

const images = [
  { ...foto1, alt: "Image 1" },
  { ...foto2, alt: "Image 2" },
  { ...foto3, alt: "Image 3" },
  { ...foto4, alt: "Image 4" },
  { ...foto5, alt: "Image 5" },
  { ...foto6, alt: "Image 6" },
  { ...adobe, alt: "imag" },
  { ...grafika3d, alt: "imag" },
  { ...download, alt: "imag" },
  { ...imagess, alt: "imag" },
  { ...obrazWektorowy, alt: "imag" },
  { ...r1, alt: "imag" },
  { ...r2, alt: "imag" },
  { ...r3, alt: "imag" },
  { ...r4, alt: "imag" },
  { ...r5, alt: "imag" },
  { ...r3, alt: "imag" },
  { ...r3, alt: "imag" },
  { ...huber2, alt: "imag" },
  { ...huber2, alt: "imag" },
  { ...huber2, alt: "imag" },
];
const AdvancedMasonryGrid = () => {
  return (
    <div className="w-full min-h-screen p-4">
      {" "}
      <section className="grid [grid-template-columns:repeat(auto-fit,minmax(350px,1fr))] auto-rows-[10px]">
        {" "}
        {images.map((photo, index) => (
          <ImgContainer key={index} photo={photo} />
        ))}{" "}
      </section>{" "}
    </div>
  );
};
export default AdvancedMasonryGrid;

import React from "react";
import Image from "next/image";

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
import huber2 from "@/assets/huber2.png"

const images = [
  { src: foto1, alt: "Image 1" },
  { src: foto2, alt: "Image 2" },
  { src: foto3, alt: "Image 3" },
  { src: foto4, alt: "Image 4" },
  { src: foto5, alt: "Image 5" },
  { src: foto6, alt: "Image 6" },
  { src: adobe, alt: "Adobe Stock" },
  { src: grafika3d, alt: "3D Graphics" },
  { src: download, alt: "Download" },
  { src: imagess, alt: "Images" },
  { src: obrazWektorowy, alt: "Vector Image" },
  { src: r1, alt: "R1" },
  { src: r2, alt: "R2" },
  { src: r3, alt: "R3" },
  { src: r4, alt: "R4" },
  { src: r5, alt: "R5" },
  { src: huber2, alt: "R5" },
  { src: huber2, alt: "R5" },

];

const SimpleMasonryGrid = () => {
  return (
    <div className="w-full min-h-screen p-4">
      <section className="columns-[300px]">
        {images.map((photo, index) => (
          <Image 
            key={index} 
            src={photo.src} 
            alt={photo.alt} 
            width={photo.src.width} 
            height={photo.src.height}
            className="w-full mb-2 object-cover"
          />
        ))}
      </section>
    </div>
  );
};

export default SimpleMasonryGrid;
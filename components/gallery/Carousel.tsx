"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useKeypress from "react-use-keypress";
import type { ImageProps } from "@/lib/gallery/types";
import { useLastViewedPhoto } from "@/lib/gallery/useLastViewedPhoto";
import SharedModal from "./SharedModal";
import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "motion/react";

export default function Carousel({
  index,
  images,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageProps;
  images: ImageProps[];
}) {
  const router = useRouter();
  const [, setLastViewedPhoto] = useLastViewedPhoto();
  const [direction, setDirection] = useState(0);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [curIndex, setCurIndex] = useState(index);

  useKeypress("Escape", () => {
    closeModal();
  });

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });

  const closeModal = () => {
    setLastViewedPhoto(currentPhoto.id);
    router.push("/");
  };

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }

    setCurIndex(newVal);
    router.push(`/p/${newVal}`);
  }

  console.log("direction", direction)

  return (
    <Dialog
      static
      open={true}
      onClose={closeModal}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <motion.div
        ref={overlayRef}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={closeModal}
      >
        <Image
          src={currentPhoto?.blurDataUrl || ""}
          className="pointer-events-none h-full w-full"
          alt="blurred background"
          fill
          priority={true}
        />
      </motion.div>
      <SharedModal
        index={curIndex}
        changePhotoId={changePhotoId}
        direction={direction}
        images={images}
        closeModal={closeModal}
        navigation={true}
      />
    </Dialog>
  );
}

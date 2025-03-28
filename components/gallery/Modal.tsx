"use client";

import { Dialog } from "@headlessui/react";
import { motion } from "motion/react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import useKeypress from "react-use-keypress";
import type { ImageProps } from "@/lib/gallery/types";
import SharedModal from "./SharedModal";

export default function Modal({
  images,
  onClose,
}: {
  images: ImageProps[];
  onClose?: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const photoId = (params.photoId as string) || searchParams.get("photoId");
  const index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  console.log("reender")

  function handleClose() {
    router.push("/");
    if (onClose) {
      onClose();
    }
  }

  function changePhotoId(newVal: number) {    
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    
    setCurIndex(newVal);
    router.push(`/p/${newVal}`);
  }

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

  return (
    <Dialog
      static
      open={true}
      onClose={() => {
        console.log('Dialog overlay clicked');
        handleClose();
      }}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <motion.div
        ref={overlayRef}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        changePhotoId={changePhotoId}
        direction={direction}
        images={images}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
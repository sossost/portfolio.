import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ImageFrameProps {
  imageUrl: string;
  imageAlt: string;
  aspectRatio: number;
}

const ImageFrame = ({ imageUrl, imageAlt, aspectRatio }: ImageFrameProps) => {
  const style = `aspect-[10/${aspectRatio * 10}]`;

  return (
    <div
      className={twMerge(
        `
        relative 
        flex
        mt-[${aspectRatio * 100 + "%"}] 
        overflow-hidden 
        rounded-2xl
        w-full
        aspect-[10/6]`,
        style
      )}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        placeholder="blur"
        blurDataURL={imageUrl}
        fill
        sizes={"900px"}
        className="
          absolute 
          inset-0 
          w-full 
          h-full
          object-cover
        "
      />
    </div>
  );
};

export default ImageFrame;

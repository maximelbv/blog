import Image from "next/image";
import React from "react";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

interface BlurImageProps {
  src: string;
  className?: string;
  style?: object;
  alt?: string;
}

const BlurImage = async ({ src, className, style, alt }: BlurImageProps) => {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      style={style}
      className={className}
      src={src.replace("./public", "")}
      fill
      alt={alt ? alt : "image"}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
};

export default BlurImage;

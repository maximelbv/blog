import Image from "next/image";
import ImagePlaceholder from "./image-placeholder";
import React from "react";

interface CustomImageProps {
  href: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}

const CustomImage = ({
  href,
  alt = "",
  className,
  imgClassName,
}: CustomImageProps) => {
  if (!href) return <ImagePlaceholder />;

  return (
    <div className={`${className} article-layout m-auto`}>
      <Image
        src={href}
        alt={alt}
        width={0}
        height={0}
        sizes="(max-width: 700px) 100vw, 700px"
        className={`w-full h-auto rounded-[6px] ${imgClassName}`}
      />
    </div>
  );
};

export default CustomImage;

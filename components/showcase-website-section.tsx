import React from "react";
import Image from "next/image";

type MediaType = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

const ShowcaseWebsiteSection = ({ media }: { media: MediaType[] }) => {
  return (
    <div className="default-layout my-[24px] p-[15px] bg-highlighted md:rounded-xl grid grid-cols-1 md:grid-cols-[14.5fr_4.59fr] gap-[15px] items-start">
      <div className="relative aspect-video rounded-lg">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {media[0] &&
            (media[0].type === "image" ? (
              <Image
                src={media[0].src}
                alt={media[0].alt || "Main showcase media"}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <video
                src={media[0].src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ))}
        </div>
      </div>

      <div className="relative aspect-phone rounded-lg">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {media[1] &&
            (media[1].type === "image" ? (
              <Image
                src={media[1].src}
                alt={media[1].alt || "Secondary showcase media"}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <video
                src={media[1].src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseWebsiteSection;

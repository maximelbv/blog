import BlurImage from "./blur-image";
import ImagePlaceholder from "./image-placeholder";

import React from "react";

const CustomImage = ({ href }: { href: string }) => {
  return (
    <div className="w-full aspect-video relative m-0">
      {href ? (
        <BlurImage
          src={href}
          className="rounded-[6px]"
          style={{
            objectFit: "cover",
            margin: "0",
          }}
        />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  );
};

export default CustomImage;

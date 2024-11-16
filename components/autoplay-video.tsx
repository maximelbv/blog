import React from "react";

const AutoplayVideo = ({ src, style }: { src: string; style: object }) => {
  return (
    <video
      style={style}
      className="rounded-lg my-6 article-layout w-full"
      controls
      loop
      autoPlay
      playsInline
      muted
      src={src}
      preload="metadata"
    ></video>
  );
};

export default AutoplayVideo;

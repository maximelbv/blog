import React from "react";

const AutoplayVideo = ({ src, style }: { src: string; style: object }) => {
  return (
    <video
      style={style}
      className="rounded-lg mt-0 mb-7"
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

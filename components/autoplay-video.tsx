import React from "react";

const AutoplayVideo = ({ src }: { src: string }) => {
  return (
    <video
      className="rounded-lg mt-0 mb-7"
      controls
      loop
      autoPlay
      playsinline
      muted
      src={src}
      preload="metadata"
    ></video>
  );
};

export default AutoplayVideo;

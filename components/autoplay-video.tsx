import React from "react";

const AutoplayVideo = ({ src }: { src: string }) => {
  return (
    <video
      className="rounded-lg"
      controls
      loop
      autoPlay
      muted
      src={src}
      preload="metadata"
    ></video>
  );
};

export default AutoplayVideo;

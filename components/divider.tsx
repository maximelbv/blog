import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} h-[1px] bg-border rounded-full w-full my-[50px]`}
    />
  );
};

export default Divider;

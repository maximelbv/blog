import React from "react";
import { Icons } from "./icons";

const KeyboardKey = ({ value }: { value: string }) => {
  const specialChars = [
    {
      value: "TAB",
      icon: <Icons.tabKey />,
    },
    {
      value: "SHIFT",
      icon: <Icons.shiftKey />,
    },
    {
      value: "OPT",
      icon: <Icons.optionKey />,
    },
    {
      value: "CMD",
      icon: <Icons.commandKey />,
    },
  ];

  const specialChar = specialChars.find((char) => char.value === value);

  return (
    <span
      className=" h-6 text-foregroundAlt inline-flex items-center justify-center bg-muted border-[1px] 
    border-border rounded-md leading-5 py-0.5 px-1 text-[15px] font-semibold"
    >
      {specialChar ? (
        <>
          <span className="mr-2">{specialChar.icon}</span>
          {value}
        </>
      ) : (
        value
      )}
    </span>
  );
};

export default KeyboardKey;

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
      className="h-6 text-foregroundAlt inline-flex items-center justify-center bg-muted border-[1px] 
      border-border rounded-md leading-none py-0.5 px-1 text-[14px] font-medium shadow-[2.5px_3px_0px_0px] shadow-border"
    >
      <span className="flex items-center min-h-[1.5rem]">
        {specialChar ? (
          <>
            <span className="mr-1 flex items-center">{specialChar.icon}</span>
            <span className="align-middle">{value}</span>
          </>
        ) : (
          <>
            <span className="flex items-center">{<Icons.invisibleKey />}</span>
            <span className="align-middle">{value}</span>
          </>
        )}
      </span>
    </span>
  );
};

export default KeyboardKey;

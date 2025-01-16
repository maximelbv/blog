"use client";

import { useState } from "react";
import { Icons } from "./icons";
import AnimatedText from "./animated-text";
import { motion } from "framer-motion";

const PersonalPortrait = () => {
  const [making, setMaking] = useState("Making");
  const [makingHover, setMakingHover] = useState<string | null>(null);

  const [software, setSoftware] = useState("Web & Software");
  const [softwareHover, setSoftwareHover] = useState<string | null>(null);

  const [videoGame, setVideoGame] = useState("Video Game & 3D");
  const [videoGameHover, setVideoGameHover] = useState<string | null>(null);

  const [lifestyle, setLifestyle] = useState("Lifestyle");
  const [lifestyleHover, setLifestyleHover] = useState<string | null>(null);

  const makingArray = [
    { name: "Electronics", icon: <Icons.electronics /> },
    { name: "D.I.Y", icon: <Icons.diy /> },
    { name: "3D Modelling", icon: <Icons.modelisation /> },
    { name: "Mechanics", icon: <Icons.mechanics /> },
  ];

  const softwareArray = [
    { name: "App dev", icon: <Icons.web /> },
    { name: "Data viz", icon: <Icons.data /> },
    { name: "Tools & scripts", icon: <Icons.devTools /> },
    { name: "UI design", icon: <Icons.ui /> },
  ];

  const videoGameArray = [
    { name: "Level design", icon: <Icons.environmentArt /> },
    { name: "Prop art", icon: <Icons.propArt /> },
    { name: "XR", icon: <Icons.xr /> },
    { name: "VFX", icon: <Icons.vfx /> },
  ];

  const lifestyleArray = [
    { name: "Sports", icon: <Icons.sport /> },
    { name: "Wellness", icon: <Icons.health /> },
    { name: "Cooking", icon: <Icons.cooking /> },
    { name: "Travel", icon: <Icons.travel /> },
  ];

  return (
    <div className="default-layout px-[20px] flex flex-col gap-[15px]">
      <span className="text-[20px] bg-secondary px-[10px] py-[5px] w-fit rounded-lg">
        Interests
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-2">
            <AnimatedText text={making} />
            {makingHover && (
              <AnimatedText
                text={`/ ${makingHover}`}
                className="text-foregroundAlt"
                delay={0}
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-[10px] rounded-lg bg-secondary aspect-square p-[10px]">
            {makingArray.map((elem) => (
              <div
                key={elem.name}
                onMouseEnter={() => setMakingHover(elem.name)}
                onMouseLeave={() => setMakingHover(null)}
                className="rounded-md flex items-center justify-center bg-highlighted group"
              >
                {elem.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Software Section */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-2">
            <AnimatedText text={software} />
            {softwareHover && (
              <AnimatedText
                text={`/ ${softwareHover}`}
                className="text-gray-500"
                delay={0} // Optionnel
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-[10px] rounded-lg bg-secondary aspect-square p-[10px]">
            {softwareArray.map((elem) => (
              <div
                key={elem.name}
                onMouseEnter={() => setSoftwareHover(elem.name)}
                onMouseLeave={() => setSoftwareHover(null)}
                className="rounded-md flex items-center justify-center bg-highlighted"
              >
                {elem.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Video Game Section */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-2">
            <AnimatedText text={videoGame} />
            {videoGameHover && (
              <AnimatedText
                text={`/ ${videoGameHover}`}
                className="text-gray-500"
                delay={0} // Optionnel
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-[10px] rounded-lg bg-secondary aspect-square p-[10px]">
            {videoGameArray.map((elem) => (
              <div
                key={elem.name}
                onMouseEnter={() => setVideoGameHover(elem.name)}
                onMouseLeave={() => setVideoGameHover(null)}
                className="rounded-md flex items-center justify-center bg-highlighted"
              >
                {elem.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Lifestyle Section */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-2">
            <AnimatedText text={lifestyle} />
            {lifestyleHover && (
              <AnimatedText
                text={`/ ${lifestyleHover}`}
                className="text-gray-500"
                delay={0} // Optionnel
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-[10px] rounded-lg bg-secondary aspect-square p-[10px]">
            {lifestyleArray.map((elem) => (
              <div
                key={elem.name}
                onMouseEnter={() => setLifestyleHover(elem.name)}
                onMouseLeave={() => setLifestyleHover(null)}
                className="rounded-md flex items-center justify-center bg-highlighted"
              >
                {elem.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPortrait;

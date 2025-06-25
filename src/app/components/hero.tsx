"use-client";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ContainerTextFlip } from "./ui/ContainerTextFlip";
import MagicButton from "./ui/MagicButton";

import { FaCaretDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-24">
      {/* Spotlight */}
      <Spotlight
        className="-top-40 -left-10 md:-left-60 md: -top-20 h-[150vh]"
        fill="silver"
      />
      <Spotlight
        className="top-10 left-32 h-[80vh] w-[100vw]"
        fill="royalblue"
      />
      <Spotlight className="top-28 left-80 h-[50vh] w-[50vw]" fill="gray" />

      <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.5] bg-grid-black/[0.2] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      {/* Spotlight */}

      {/* Hero text */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md: max-w-2xl lg: max-w-[60vw] flex flex-col items-center justify-center">
          <ContainerTextFlip
            words={[
              "creative...",
              "dynamic...",
              "innovative...",
              "passionate...",
              "dedicated...",
            ]}
            className={`uppercase font-bold tracking-widest`}
          />
          <TextGenerateEffect
            className="text-center text-[40px] md: text-5xl lg: text-6xl"
            words="Make Your Experience Worthwhile"
          />
          <p className="text-center md: tracking-wider md: text-lg lg: text-2xl">
            Hello, I&lsquo;m Valentine, a Frontend Developer based in Nigeria
          </p>

          {/* Magic button */}
          <div className="flex justify-center">
            <a href="#projects">
              <MagicButton
                title="Explore Projects"
                icon={<FaCaretDown />}
                position="right"
              />
            </a>
            {/* <a href="#">
              <MagicButton
                title="Download Resume"
                icon={<FaCaretDown />}
                position="left"
              />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

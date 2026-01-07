"use-client";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ContainerTextFlip } from "./ui/ContainerTextFlip";
import MagicButton from "./ui/MagicButton";

import { FaCaretDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-10 pt-16 md:pb-20 md:pt-24">
      {/* Spotlight */}
      <Spotlight
        className="-top-40 -left-10 md:-left-60 md:-top-20 h-[100vh] md:h-[150vh]"
        fill="silver"
      />
      <Spotlight
        className="top-10 left-8 sm:left-16 md:left-32 h-[40vh] sm:h-[60vh] md:h-[80vh] w-[90vw] md:w-[100vw]"
        fill="royalblue"
      />
      <Spotlight className="top-20 left-20 md:top-28 md:left-80 h-[30vh] md:h-[50vh] w-[60vw] md:w-[50vw]" fill="gray" />

      <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.5] bg-grid-black/[0.2] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      {/* Spotlight */}

      {/* Hero text */}
      <div className="flex justify-center relative my-10 md:my-20 z-10">
        <div className="w-full max-w-[95vw] sm:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center px-4">
          <ContainerTextFlip
            words={[
              "creative...",
              "dynamic...",
              "innovative...",
              "passionate...",
              "dedicated...",
            ]}
            className="uppercase font-bold tracking-widest text-base sm:text-lg md:text-xl"
          />
          <TextGenerateEffect
            className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
            words="Make Your Experience Worthwhile"
          />
          <p className="text-center tracking-wider text-sm sm:text-base md:text-lg lg:text-2xl mt-2">
            Hello, I&apos;m Valentine, a Frontend Developer based in Nigeria
          </p>

          {/* Magic button */}
          <div className="flex justify-center mt-6">
            <a href="#projects">
              <MagicButton
                title="Explore Projects"
                icon={<FaCaretDown />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

"use client";

import { Stack } from "../assets/data";

type RevolvingIconsProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export const RevolvingIcons = ({
  activeIndex,
  setActiveIndex,
}: RevolvingIconsProps) => {
  const icons = Stack.map((item) => item.skill_icon);

  // Responsive radius: 20vw, but clamp between 80px and 200px for usability
  const radius = "clamp(80px, 20vw, 200px)";
  if (!icons.length) return null; // Prevent rendering if no icons

  return (
    <div className="absolute inset-0 animate-spin">
      {icons.map((Icon, index) => {
        const angle = (360 / icons.length) * index;

        return (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(${radius}) rotate(-${angle}deg)`,
              transition: "transform 0.3s ease-in-out",
              zIndex: activeIndex === index ? 20 : 10,
            }}
          >
            <button
              className={`animate-reverse justify-center rounded-full shadow-lg w-6 h-6 ${
                activeIndex === index ? "ring-4  shadow-blue-500/[0.2] scale-125" : "hover:scale-110"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {Icon}
            </button>
          </div>
        );
      })}
    </div>
  );
};

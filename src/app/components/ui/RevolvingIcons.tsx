"use client";

import { StackIcons } from "../assets/stack";

export default function Component() {
  const icons = StackIcons;

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative">
        {/* Central Circle */}
        <div className="w-40 h-40 bg-transparent rounded-full shadow-2xl flex items-center justify-center z-10 relative">
          <div className="text-white font-semibold text-lg">Center</div>
        </div>

        {/* Revolving Icons Container */}
        <div className="absolute inset-0 animate-spin">
          {icons.map((item, index) => {
            const Icon = item;
            const angle = (360 / icons.length) * index;
            const radius = 160; // Distance from center

            return (
              <div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <div className="animate-reverse justify-center rounded-full shadow-lg w-12 h-12">
                  {Icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

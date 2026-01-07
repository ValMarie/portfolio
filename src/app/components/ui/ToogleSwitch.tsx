"use client"
import React from "react";

export const Switch = () => {
  return (
    <div className="inline-block">
      <div className="relative">
        <input id="checkbox" type="checkbox" className="sr-only peer" aria-label="toggle" />
        <label
          htmlFor="checkbox"
          className={`
            block w-[120px] h-[60px] rounded-full cursor-pointer relative overflow-hidden
            bg-[#a59f9f] transition-transform duration-300
            hover:[transform:perspective(100px)_rotateX(5deg)_rotateY(-5deg)]
            peer-checked:hover:[transform:perspective(100px)_rotateX(-5deg)_rotateY(5deg)]
            shadow-[inset_0_0_5px_4px_rgba(255,255,255,1),inset_0_0_20px_1px_rgba(0,0,0,0.488),10px_20px_30px_rgba(0,0,0,0.096),inset_0_0_0_3px_rgba(0,0,0,0.3)]
          `}
        >
          {/* knob */}
          <span
            className={`
              absolute top-[10px] left-[10px] h-[40px] w-[40px] rounded-full
              bg-gradient-to-br from-[#757272] via-[#ffffff] to-[#726f6f]
              shadow-[0_2px_1px_rgba(0,0,0,0.3),10px_10px_10px_rgba(0,0,0,0.3)]
              transition-all duration-300
              peer-checked:left-[70px]
              peer-checked:bg-gradient-to-br peer-checked:from-black peer-checked:to-[#414141]
            `}
          />
        </label>
      </div>
    </div>
  );
};
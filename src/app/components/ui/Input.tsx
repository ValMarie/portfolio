"use client";
import * as React from "react";
import { cn } from "@/app/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import type { InputProps } from "../assets/types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    const radius = 100;
    // use a motion value for the radius so hover enter/leave doesn't re-render
    const radiusMotion = useMotionValue(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({
      currentTarget,
      clientX,
      clientY,
    }: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    return (
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => radiusMotion.set(radius)}
        onMouseLeave={() => radiusMotion.set(0)}
        className="relative rounded-lg p-[2px]"
      >
        {/* animated background layer - doesn't receive pointer events */}
        <motion.div
          aria-hidden
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${radiusMotion}px circle at ${mouseX}px ${mouseY}px,
                #3b82f6,
                transparent 80%
              )
            `,
          }}
          className="pointer-events-none absolute inset-0 rounded-lg"
        />

        {/* actual input above the animated background */}
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            `relative z-10 shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-transparent dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
            className
          )}
          style={{ pointerEvents: "auto" }}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

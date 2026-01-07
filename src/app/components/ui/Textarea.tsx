"use client";
import * as React from "react";
import { cn } from "@/app/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import type { TextareaProps } from "../assets/types";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 5, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

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
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="relative rounded-lg p-[2px]"
      >
        <motion.div
          aria-hidden
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${
                  visible ? `${radius}px` : "0px"
                } circle at ${mouseX}px ${mouseY}px,
                #3b82f6,
                transparent 80%
              )
            `,
          }}
          className="pointer-events-none absolute inset-0 rounded-lg"
        />

        <textarea
          ref={ref}
          rows={rows}
          {...props}
          className={cn(
            "relative z-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black shadow-input transition duration-400 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-transparent dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600",
            className
          )}
          style={{ pointerEvents: "auto" }}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };

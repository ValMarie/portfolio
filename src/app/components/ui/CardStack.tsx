"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../assets/types";

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  onActiveIndexChange,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  onActiveIndexChange?: (index: number) => void;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.04;
  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCards(items); // Reset cards if items change

    const startFlipping = () => {
      intervalRef.current = setInterval(() => {
        setCards((prevCards: Card[]) => {
          const newArray = [...prevCards];
          newArray.unshift(newArray.pop()!);
          if (onActiveIndexChange) {
            onActiveIndexChange(0); // Always the first card is active after flip
          }
          return newArray;
        });
      }, 5000);
    };

    startFlipping();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items, onActiveIndexChange]);

  return (
    <div className="relative h-80 w-80 md:h-[28rem] md:w-[36rem] mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-white h-full w-full md:h-[28rem] md:w-[36rem] rounded-3xl p-3 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.08] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="h-full w-full  mb-10">{card.content}</div>
          <div>
            <p className="text-neutral-500 dark:text-white text-center font-semibold">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.detail}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

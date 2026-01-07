"use-client";
import { Card } from "../assets/types";

export const CardGrid = ({
  cards,
}: {
  cards: Card[];
  onActiveIndexChange?: (index: number) => void;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
      {cards.map((card) => (
        <div key={card.id} className="rounded-lg shadow-lg overflow-hidden">
          {card.content}
          <div className="p-4">
            <p className="text-neutral-500 dark:text-white text-center font-semibold">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

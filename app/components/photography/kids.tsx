"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

export function Kids() {
  const [isMounted, setIsMounted] = useState(false);
  const [shuffled, setShuffled] = useState<any[]>([]);

  useEffect(() => {
    const cards = [
      // 4:5 verticals
      ...Array.from({ length: 32 }, (_, i) => ({
        id: i + 1,
        image: `/images/portfolio/newphotos/kids/v${i + 1}.jpg`,
        ratio: "aspect-[4/5]",
        type: "v",
      })),
      // 5:4 horizontals
      ...Array.from({ length: 3 }, (_, i) => ({
        id: 33 + i,
        image: `/images/portfolio/newphotos/kids/h${i + 1}.jpg`,
        ratio: "aspect-[5/4]",
        type: "h",
      })),
      // 5:4 horizontals (kidh)
      ...Array.from({ length: 9 }, (_, i) => ({
        id: 36 + i,
        image: `/images/portfolio/newphotos/kids/kidh${i + 1}.jpeg`,
        ratio: "aspect-[5/4]",
        type: "h",
      })),
      // 4:5 verticals (kidn)
      ...Array.from({ length: 16 }, (_, i) => ({
        id: 45 + i,
        image: `/images/portfolio/newphotos/kids/kidn${i + 1}.jpeg`,
        ratio: "aspect-[4/5]",
        type: "v",
      })),
      // 4:3 horizontals (kidm)
      ...Array.from({ length: 3 }, (_, i) => ({
        id: 61 + i,
        image: `/images/portfolio/newphotos/kids/kidm${i + 1}.jpeg`,
        ratio: "aspect-[4/3]",
        type: "m",
      })),
    ];

    const shuffledWithStyles = cards
      .sort(() => Math.random() - 0.5)
      .map(card => ({
        ...card,
        randomRotate: 0,
        randomTranslateY: 0,
        randomScale: 1
      }));

    setShuffled(shuffledWithStyles);
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="min-h-screen"></div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
        {shuffled.map((card) => {
          return (
            <div
              key={card.id}
              className="break-inside-avoid mb-5"
              style={{
                transform: `translateY(${card.randomTranslateY}px)`,
              }}
            >
              <div
                className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer`}
                style={{
                  transform: `rotate(${card.randomRotate}deg) scale(${card.randomScale})`,
                  transformOrigin: "center",
                }}
              >
                <Image
                  src={card.image}
                  alt={`Poster ${card.id}`}
                  width={card.type === 'v' ? 800 : 1000}
                  height={card.type === 'v' ? 1000 : (card.type === 'm' ? 750 : 800)}
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

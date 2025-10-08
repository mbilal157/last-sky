"use client";

import Image from "next/image";

export function Wedding() {
  const cards = [
    // 4:5 verticals
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      image: `/images/portfolio/newphotos/wed/v${i + 1}.jpg`,
      ratio: "aspect-[4/5]",
      type: "v",
    })),
    // 5:4 horizontals
    ...Array.from({ length: 3 }, (_, i) => ({
      id: 33 + i,
      image: `/images/portfolio/newphotos/wed/h${i + 1}.jpg`,
      ratio: "aspect-[5/4]",
      type: "h",
    })),
  ];

  // shuffle for randomness
  const shuffled = cards.sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {shuffled.map((card) => {
          // random variations
          const randomRotate = Math.random() * 1 - 1; // -3° to +3°
          const randomTranslateY = Math.random() * 1 - 1; // -6px to +6px
          const randomScale = 0.95 + Math.random() * 0.1; // 0.95x–1.05x

          return (
            <div
              key={card.id}
              className="break-inside-avoid"
              style={{
                transform: `translateY(${randomTranslateY}px)`,
              }}
            >
              <div
                className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${card.ratio}`}
                style={{
                  transform: `rotate(${randomRotate}deg) scale(${randomScale})`,
                  transformOrigin: "center",
                }}
              >
                <Image
                  src={card.image}
                  alt={`Poster ${card.id}`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

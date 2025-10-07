"use client";

import Image from "next/image";

export function Cinematic() {
  const cards = [
    { id: 1, image: "/images/portfolio/photos/v1.jpg", height: "h-80" },
    { id: 2, image: "/images/portfolio/photos/v2.jpg", height: "h-80" },
    { id: 3, image: "/images/portfolio/photos/v3.jpg", height: "h-80" },
    { id: 4, image: "/images/portfolio/photos/v4.jpg", height: "h-80" },
    { id: 5, image: "/images/portfolio/photos/v5.jpg", height: "h-80" },
    { id: 6, image: "/images/portfolio/photos/v6.jpg", height: "h-80" },
    { id: 7, image: "/images/portfolio/photos/v7.jpg", height: "h-80" },
    { id: 8, image: "/images/portfolio/photos/v8.jpg", height: "h-80" },
    { id: 9, image: "/images/portfolio/photos/v9.jpg", height: "h-80" },
    { id: 10, image: "/images/portfolio/photos/v10.jpg", height: "h-80" },
    { id: 11, image: "/images/portfolio/photos/v11.jpg", height: "h-80" },
    { id: 12, image: "/images/portfolio/photos/v12.jpg", height: "h-80" },
    { id: 13, image: "/images/portfolio/photos/v13.jpg", height: "h-80" },
    { id: 14, image: "/images/portfolio/photos/v14.jpg", height: "h-80" },
    { id: 15, image: "/images/portfolio/photos/v15.jpg", height: "h-80" },
    { id: 16, image: "/images/portfolio/photos/v16.jpg", height: "h-80" },
    { id: 17, image: "/images/portfolio/photos/v17.jpg", height: "h-80" },
    { id: 18, image: "/images/portfolio/photos/v18.jpg", height: "h-80" },
    { id: 19, image: "/images/portfolio/photos/v19.jpg", height: "h-80" },
    { id: 20, image: "/images/portfolio/photos/v20.jpg", height: "h-80" },
    { id: 21, image: "/images/portfolio/photos/v21.jpg", height: "h-80" },
    { id: 22, image: "/images/portfolio/photos/v22.jpg", height: "h-80" },
    { id: 23, image: "/images/portfolio/photos/v23.jpg", height: "h-80" },
    { id: 24, image: "/images/portfolio/photos/v24.jpg", height: "h-80" },
    { id: 25, image: "/images/portfolio/photos/v25.jpg", height: "h-80" },
    { id: 26, image: "/images/portfolio/photos/v26.jpg", height: "h-80" },
    { id: 27, image: "/images/portfolio/photos/v27.jpg", height: "h-80" },
    { id: 28, image: "/images/portfolio/photos/v28.jpg", height: "h-80" },
    { id: 29, image: "/images/portfolio/photos/v29.jpg", height: "h-80" },
    { id: 30, image: "/images/portfolio/photos/v30.jpg", height: "h-80" },
    { id: 31, image: "/images/portfolio/photos/v31.jpg", height: "h-80" },
    { id: 32, image: "/images/portfolio/photos/v32.jpg", height: "h-80" },
    { id: 33, image: "/images/portfolio/photos/h1.jpg", height: "h-60 w-80" },
    { id: 34, image: "/images/portfolio/photos/h2.jpg", height: "h-60 w-80" },
    { id: 35, image: "/images/portfolio/photos/h3.jpg", height: "h-60 w-80" },
    { id: 36, image: "/images/portfolio/photos/h4.jpg", height: "h-60 w-80" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer break-inside-avoid ${card.height}`}
          >
            <Image
              src={card.image}
              alt={`Poster ${card.id}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

export function Posters() {
  const cards = [
    {
      id: 1,
      image: "/images/portfolio/graphic-design/post1.jpg",
      height: "h-64",
    },
    {
      id: 2,
      image: "/images/portfolio/graphic-design/post2.jpg",
      height: "h-80",
    },
    {
      id: 3,
      image: "/images/portfolio/graphic-design/post3.jpg",
      height: "h-96",
    },
    {
      id: 4,
      image: "/images/portfolio/graphic-design/post4.jpg",
      height: "h-72",
    },
    {
      id: 5,
      image: "/images/portfolio/graphic-design/post5.jpg",
      height: "h-60",
    },
    {
      id: 6,
      image: "/images/portfolio/graphic-design/post4.jpg",
      height: "h-88",
    },
    {
      id: 7,
      image: "/images/portfolio/graphic-design/post3.jpg",
      height: "h-76",
    },
    {
      id: 8,
      image: "/images/portfolio/graphic-design/post2.jpg",
      height: "h-68",
    },
    {
      id: 9,
      image: "/images/portfolio/graphic-design/post1.jpg",
      height: "h-84",
    },
    {
      id: 10,
      image: "/images/portfolio/graphic-design/post5.jpg",
      height: "h-70",
    },
    {
      id: 11,
      image: "/images/portfolio/graphic-design/post4.jpg",
      height: "h-82",
    },
    {
      id: 12,
      image: "/images/portfolio/graphic-design/post4.jpg",
      height: "h-58",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`break-inside-avoid mb-4 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer relative ${card.height}`}
          >
            <Image
              src={card.image}
              fill
              alt={`Poster ${card.id}`}
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

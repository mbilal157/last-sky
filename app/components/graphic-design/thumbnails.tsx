"use client";

import { InfiniteMovingCards } from "../ui/lmov-cards";

export function Thumbnails() {
  // Transform the logos array to match the expected format
  const cards = logos.map((logo, index) => ({
    title: `Thumbnail ${index + 1}`,
    src: logo.image,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-white">
        Thumbnails
      </h2>
      <InfiniteMovingCards items={cards} speed="normal" rows={3} />
    </div>
  );
}

export const logos = [
  { image: "/images/portfolio/THUMBNAIL/FUNNY (1).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (2).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (3).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (4).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (5).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (6).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (7).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (8).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (9).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (10).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (11).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (12).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (13).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (14).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (15).jpg" },
  { image: "/images/portfolio/THUMBNAIL/FUNNY (16).jpg" },
  { image: "/images/portfolio/THUMBNAIL/THUMBNAIL (1).jpg" },
  { image: "/images/portfolio/THUMBNAIL/THUMBNAIL (2).jpg" },
  { image: "/images/portfolio/THUMBNAIL/THUMBNAIL (3).jpg" },
  { image: "/images/portfolio/THUMBNAIL/THUMBNAIL (4).jpg" },
  { image: "/images/portfolio/THUMBNAIL/THUMBNAIL (5).jpg" },
  { image: "/images/portfolio/THUMBNAIL/THUMBNAIL (6).jpg" },
  { image: "/images/portfolio/THUMBNAIL/THUMBNAIL (7).jpg" },
  { image: "/images/portfolio/THUMBNAIL/THUMBNAIL (8).jpg" },
  { image: "/images/portfolio/THUMBNAIL/THUMBNAIL (9).jpg" },
];

"use client";

import { InfiniteMovingCards } from "../ui/lmov-cards";

export function Thumbnails() {
  // Map thumbnails into a flat array
  const mappedThumbnails = thumbnails.map((thumb, i) => ({
    title: `Thumbnail ${i + 1}`,
    src: thumb.image,
  }));

  // Split into 3 rows automatically
  const rows = 3;
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-white">
        Thumbnails
      </h2>

      <InfiniteMovingCards
        items={mappedThumbnails}
        speed="normal"
        direction="left"
        rows={rows}
        cardSize="medium"
      />
    </div>
  );
}
export const thumbnails = [
  { image: "/images/portfolio/thumbnails/thumb1.jpg" },
  { image: "/images/portfolio/thumbnails/thumb47.jpg" },
  { image: "/images/portfolio/thumbnails/thumb48.jpg" },
  { image: "/images/portfolio/thumbnails/thumb2.jpg" },
  { image: "/images/portfolio/thumbnails/thumb3.jpg" },
  { image: "/images/portfolio/thumbnails/thumb4.jpg" },
  { image: "/images/portfolio/thumbnails/thumb5.jpg" },
  { image: "/images/portfolio/thumbnails/thumb6.jpg" },
  { image: "/images/portfolio/thumbnails/thumb7.jpg" },
  { image: "/images/portfolio/thumbnails/thumb8.jpg" },
  { image: "/images/portfolio/thumbnails/thumb41.jpg" },
  { image: "/images/portfolio/thumbnails/thumb42.jpg" },
  { image: "/images/portfolio/thumbnails/thumb9.jpg" },
  { image: "/images/portfolio/thumbnails/thumb10.jpg" },
  { image: "/images/portfolio/thumbnails/thumb11.jpg" },
  { image: "/images/portfolio/thumbnails/thumb12.jpg" },
  { image: "/images/portfolio/thumbnails/thumb13.jpg" },
  { image: "/images/portfolio/thumbnails/thumb14.jpg" },
  { image: "/images/portfolio/thumbnails/thumb15.jpg" },
  { image: "/images/portfolio/thumbnails/thumb16.jpg" },
  { image: "/images/portfolio/thumbnails/thumb17.jpg" },
  { image: "/images/portfolio/thumbnails/thumb18.jpg" },
  { image: "/images/portfolio/thumbnails/thumb43.jpg" },
  { image: "/images/portfolio/thumbnails/thumb44.jpg" },
  { image: "/images/portfolio/thumbnails/thumb19.jpg" },
  { image: "/images/portfolio/thumbnails/thumb20.jpg" },
  { image: "/images/portfolio/thumbnails/thumb21.jpg" },
  { image: "/images/portfolio/thumbnails/thumb22.jpg" },
  { image: "/images/portfolio/thumbnails/thumb23.jpg" },
  { image: "/images/portfolio/thumbnails/thumb24.jpg" },
  { image: "/images/portfolio/thumbnails/thumb45.jpg" },
  { image: "/images/portfolio/thumbnails/thumb46.jpg" },
  { image: "/images/portfolio/thumbnails/thumb25.jpg" },
  { image: "/images/portfolio/thumbnails/thumb26.jpg" },
  { image: "/images/portfolio/thumbnails/thumb27.jpg" },
  { image: "/images/portfolio/thumbnails/thumb28.jpg" },
  { image: "/images/portfolio/thumbnails/thumb29.jpg" },
  { image: "/images/portfolio/thumbnails/thumb30.jpg" },
  { image: "/images/portfolio/thumbnails/thumb31.jpg" },
  { image: "/images/portfolio/thumbnails/thumb32.jpg" },
  { image: "/images/portfolio/thumbnails/thumb33.jpg" },
  { image: "/images/portfolio/thumbnails/thumb34.jpg" },
  { image: "/images/portfolio/thumbnails/thumb35.jpg" },
  { image: "/images/portfolio/thumbnails/thumb36.jpg" },
  { image: "/images/portfolio/thumbnails/thumb49.jpg" },
  { image: "/images/portfolio/thumbnails/thumb50.jpg" },
  { image: "/images/portfolio/thumbnails/thumb37.jpg" },
  { image: "/images/portfolio/thumbnails/thumb38.jpg" },
  { image: "/images/portfolio/thumbnails/thumb39.jpg" },
  { image: "/images/portfolio/thumbnails/thumb40.jpg" },
  { image: "/images/portfolio/thumbnails/thumb51.jpg" },
];

"use client";

import { InfiniteMovingCards } from "../ui/lmov-cards";

export function Posts() {
  const rowSizes = [10, 6];

  // Slice logos into chunks
  const chunkedposts = [];
  let start = 0;
  for (const size of rowSizes) {
    chunkedposts.push(
      posts.slice(start, start + size).map((logo, index) => ({
        title: `Thumbnail ${start + index + 1}`,
        src: logo.image,
      }))
    );
    start += size;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-white">
        Social Media Posts
      </h2>

      <div className="space-y-8">
        {chunkedposts.map((row, idx) => (
          <InfiniteMovingCards
            key={idx}
            items={row}
            speed="normal"
            direction={idx % 2 === 0 ? "right" : "left"}
            rows={1}
            cardSize="large"
          />
        ))}
      </div>
    </div>
  );
}

export const posts = [
  { image: "/images/portfolio/posts/no1.jpg" },
  { image: "/images/portfolio/posts/no2.jpg" },
  { image: "/images/portfolio/posts/no3.jpg" },
  { image: "/images/portfolio/posts/no4.jpg" },
  { image: "/images/portfolio/posts/no5.jpg" },
  { image: "/images/portfolio/posts/no6.jpg" },
  { image: "/images/portfolio/posts/no7.jpg" },
  { image: "/images/portfolio/posts/no8.jpg" },
  { image: "/images/portfolio/posts/no9.jpg" },
  { image: "/images/portfolio/posts/no10.jpg" },
  { image: "/images/portfolio/posts/sha1.jpg" },
  { image: "/images/portfolio/posts/sha2.jpg" },
  { image: "/images/portfolio/posts/sha3.jpg" },
  { image: "/images/portfolio/posts/sha4.jpg" },
  { image: "/images/portfolio/posts/sha5.jpg" },
  { image: "/images/portfolio/posts/sha6.jpg" },
];

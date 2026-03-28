"use client";

import { InfiniteMovingCards } from "../ui/lmov-cards";

export function Posts() {
  // Map posts to the type InfiniteMovingCards expects
  const mappedPosts = posts.map((post, index) => ({
    title: `Post ${index + 1}`,
    src: post.image,
  }));

  return (
    <section className="w-full px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Social Media Posts
      </h2>

      {/* MOBILE: simple grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
        {mappedPosts.map((post, i) => (
          <PostCard key={i} src={post.src} />
        ))}
      </div>

      {/* TABLET: single row moving cards */}
      <div className="hidden md:block lg:hidden">
        <InfiniteMovingCards
          items={mappedPosts.slice(0, 8)}
          speed="slow"
          direction="right"
          rows={1}
          cardSize="medium"
        />
      </div>

      {/* DESKTOP: multiple moving rows */}
      <div className="hidden lg:flex flex-col gap-10">
        <InfiniteMovingCards
          items={mappedPosts.slice(0, 10)}
          speed="normal"
          direction="right"
          rows={1}
          cardSize="large"
        />
        <InfiniteMovingCards
          items={mappedPosts.slice(10)}
          speed="normal"
          direction="left"
          rows={1}
          cardSize="large"
        />
      </div>
    </section>
  );
}

// Small PostCard component for mobile grid
function PostCard({ src }: { src: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-neutral-900">
      <img src={src} alt="Post" className="w-full aspect-square object-cover" />
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

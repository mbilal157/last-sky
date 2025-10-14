"use client";

import Image from "next/image";

interface CardProps {
  src: string;
  className?: string;
}

const Card = ({ src, className }: CardProps) => (
  <div
    className={`overflow-hidden rounded-2xl shadow-md w-full h-[110vh] relative ${
      className || ""
    }`}
  >
    <Image
      src={src}
      alt="Grid Image"
      fill
      unoptimized
      className="object-cover object-center rounded-2xl"
      style={{ borderRadius: "1rem" }}
    />
  </div>
);

export default function Landing() {
  return (
    <div className="grid gap-5 p-6 pt-14 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 mt-14 text-foreground text-center">
        Landing Pages
      </h1>

      <p className="text-lg md:text-xl font-semibold text-black dark:text-white text-center mb-4">
        A curated selection of visually appealing and user-focused landing pages
        — each crafted with a deep understanding of brand identity, design
        psychology, and conversion strategy. These projects highlight how
        simplicity, interactivity, and responsiveness come together to create
        immersive user journeys that not only look stunning but also drive
        measurable engagement and performance.
      </p>

      <Card src="/images/portfolio/web/landing1.jpg" />
      <Card src="/images/portfolio/web/landing2.jpg" />
      <Card src="/images/portfolio/web/landing3.jpg" />
      <Card src="/images/portfolio/web/landing4.jpg" />
      <Card src="/images/portfolio/web/landing5.jpg" />
      <Card src="/images/portfolio/web/landing6.jpg" />
    </div>
  );
}

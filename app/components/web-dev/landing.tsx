"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  src: string;
  className?: string;
}

const Card = ({ src, className }: CardProps) => (
  <div
    className={`relative w-full overflow-hidden rounded-2xl shadow-md
      aspect-[16/9] md:aspect-auto md:h-[110vh]
      ${className || ""}`}
  >
    <Image
      src={src}
      alt="Grid Image"
      fill
      className="object-cover rounded-2xl"
      sizes="(max-width: 768px) 100vw, 1200px"
    />
  </div>
);

export default function Landing() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  return (
    <div className="grid gap-5 p-6 pt-14 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 mt-14 text-foreground text-center">
        Landing Pages
      </h1>

      <p className={cn("text-lg md:text-xl font-semibold text-center mb-4", isDark ? "text-white" : "text-black")}>
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

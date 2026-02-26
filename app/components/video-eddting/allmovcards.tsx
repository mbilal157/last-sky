"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoItem {
  title: string;
  src: string;
  description?: string;
  category?: string;
  videoUrl?: string;
  id?: number;
}

interface CardProps {
  item: VideoItem;
  onPlayVideo: (item: VideoItem) => void;
}

interface InfiniteMovingCardsProps {
  items: VideoItem[];
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  rows?: number;
  direction?: "right" | "left";
  onItemClick?: (item: VideoItem) => void;
}

export const InfiniteMovingCards = ({
  items,
  speed = "fast",
  pauseOnHover = true,
  className,
  rows = 3,
  direction = "left",
  onItemClick,
}: InfiniteMovingCardsProps) => {
  const scrollerRefs = useRef<HTMLUListElement[]>([]);

  // Split items into multiple rows
  const itemsPerRow = Math.ceil(items.length / rows);
  const rowItems = Array.from({ length: rows }, (_, i) =>
    items.slice(i * itemsPerRow, (i + 1) * itemsPerRow)
  );

  const getAnimationDuration = () => {
    if (speed === "fast") return "40s";
    if (speed === "normal") return "60s";
    return "80s";
  };

  const handlePlayVideo = (item: VideoItem) => {
    onItemClick?.(item);
  };

  // Setup CSS keyframes dynamically for smooth scrolling
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes scroll-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div
      className={cn("relative z-20 w-full overflow-hidden", className)}
    >
      {rowItems.map((row, rowIndex) => (
        <ul
          key={rowIndex}
          ref={(el) => { if (el) scrollerRefs.current[rowIndex] = el; }}
          className="flex w-max gap-2 py-4 mb-0"
          style={{
            animation: `${
              direction === "right" ? "scroll-right" : "scroll-left"
            } ${getAnimationDuration()} linear infinite`,
            animationPlayState: pauseOnHover ? "running" : "paused",
          }}
          onMouseEnter={() => {
            if (pauseOnHover) scrollerRefs.current[rowIndex]!.style.animationPlayState = "paused";
          }}
          onMouseLeave={() => {
            if (pauseOnHover) scrollerRefs.current[rowIndex]!.style.animationPlayState = "running";
          }}
        >
          {/* Original + duplicate for seamless scroll */}
          {[...row, ...row].map((item, idx) => (
            <Card key={`${item.id}-${rowIndex}-${idx}`} item={item} onPlayVideo={handlePlayVideo} />
          ))}
        </ul>
      ))}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ item, onPlayVideo }) => {
  const isVertical = item.category === "Stories" || item.category === "Shorts";

  return (
    <li
      className="relative  shrink-0 rounded-xl overflow-hidden border border-zinc-200 bg-gray-100 dark:border-zinc-700 dark:bg-neutral-900 transition-all duration-300 cursor-pointer flex flex-col hover:scale-105 hover:shadow-lg hover:z-50"
      onClick={() => onPlayVideo(item)}
      style={{ width: isVertical ? "180px" : "256px" }}
    >
      <div className={cn("relative w-full", isVertical ? "aspect-[9/16]" : "pb-[56.25%]")}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity duration-300">
          <div className="bg-white/90 rounded-full p-3 shadow-lg">
            <Play size={20} className="text-black" fill="black" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start p-3">
        {item.category && <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">{item.category}</span>}
        <h3 className="text-xl font-bold text-black dark:text-white line-clamp-2">{item.title}</h3>
      </div>
    </li>
  );
};
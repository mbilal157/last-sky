"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Play } from "lucide-react";
import { useTheme } from "next-themes";

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
  isDark: boolean;
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
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

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
            <Card key={`${item.id}-${rowIndex}-${idx}`} item={item} onPlayVideo={handlePlayVideo} isDark={isDark} />
          ))}
        </ul>
      ))}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ item, onPlayVideo, isDark }) => {
  const isVertical = item.category === "Stories" || item.category === "Shorts";

  return (
    <li
      className={cn(
        "relative shrink-0 rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col hover:scale-105 shadow-md hover:shadow-xl hover:z-50",
        isDark ? "bg-neutral-900 border-zinc-700 shadow-white/20 hover:shadow-white/30" : "bg-gray-100 border-zinc-200"
      )}
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
          <div className={cn("rounded-full p-3 shadow-lg", isDark ? "bg-black/90" : "bg-white/90")}>
            <Play size={20} className={isDark ? "text-white" : "text-black"} fill={isDark ? "white" : "black"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start p-3">
        {item.category && <span className={cn("text-lg font-semibold mb-1", isDark ? "text-blue-400" : "text-blue-600")}>{item.category}</span>}
        <h3 className={cn("text-xl font-bold line-clamp-2", isDark ? "text-white" : "text-black")}>{item.title}</h3>
      </div>
    </li>
  );
};
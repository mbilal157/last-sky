"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";

// Update the interfaces
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
  isDuplicate?: boolean;
}

interface InfiniteMovingCardsProps {
  items: VideoItem[];
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  rows?: number;
  direction?: "right" | "left" | undefined;
  onItemClick?: (item: VideoItem) => void; // Add this prop
}

export const InfiniteMovingCards = ({
  items,
  speed = "fast",
  pauseOnHover = true,
  className,
  rows = 3,
  direction,
  onItemClick, // Add this prop
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRefs = useRef<(HTMLUListElement | null)[]>([]);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimations();
  }, []);

  function addAnimations() {
    if (containerRef.current) {
      scrollerRefs.current.forEach((scrollerRef) => {
        if (scrollerRef) {
          // Clear any existing duplicated items
          const existingItems = Array.from(scrollerRef.children);
          const originalItems = existingItems.slice(
            0,
            existingItems.length / 2
          );

          // Remove duplicates if they exist
          if (existingItems.length > originalItems.length) {
            for (let i = originalItems.length; i < existingItems.length; i++) {
              scrollerRef.removeChild(existingItems[i]);
            }
          }

          // Add new duplicates
          originalItems.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            scrollerRef.appendChild(duplicatedItem);
          });
        }
      });

      setStart(true);
    }
  }

  // Split items into multiple rows
  const itemsPerRow = Math.ceil(items.length / rows);
  const rowItems = Array.from({ length: rows }, (_, i) =>
    items.slice(i * itemsPerRow, (i + 1) * itemsPerRow)
  );

  // Define animation duration based on speed
  const getAnimationDuration = () => {
    if (speed === "fast") return "40s";
    if (speed === "normal") return "60s";
    return "80s";
  };

  const handlePlayVideo = (item: VideoItem) => {
    onItemClick?.(item); // Call the parent's click handler
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative z-20 w-full overflow-hidden", className)}
    >
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }

        @keyframes scrollReverse {
          0% {
            transform: translateX(calc(-50% - 0.5rem));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll ${getAnimationDuration()} linear infinite;
        }

        .animate-scroll-reverse {
          animation: scrollReverse ${getAnimationDuration()} linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }
      `}</style>

      {rowItems.map((row, rowIndex) => (
        <ul
          key={rowIndex}
          ref={(el) => {
            scrollerRefs.current[rowIndex] = el;
          }}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-2 py-1 mb-1",
            start &&
              (direction === "right"
                ? "animate-scroll-reverse"
                : "animate-scroll")
          )}
        >
          {row.map((item, idx) => (
            <Card
              key={`${item.id}-${rowIndex}-${idx}`}
              item={item}
              onPlayVideo={handlePlayVideo}
            />
          ))}
          {row.map((item, idx) => (
            <Card
              key={`${item.id}-${rowIndex}-${idx}-dup`}
              item={item}
              onPlayVideo={handlePlayVideo}
              isDuplicate={true}
            />
          ))}
        </ul>
      ))}
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  item,
  onPlayVideo,
  isDuplicate = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isReel = item.videoUrl?.includes("shorts/");

  return (
    <li
      className={cn(
        "relative shrink-0 rounded-xl overflow-hidden border border-zinc-200 bg-gray-100 dark:border-zinc-700 dark:bg-neutral-900 transition-all duration-300 cursor-pointer flex flex-col",
        isHovered && "transform scale-105 shadow-lg z-10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlayVideo(item)}
      style={{
        visibility: isDuplicate ? "hidden" : "visible",
        width: isReel ? "180px" : "256px",
      }}
    >
      {/* 🖼️ Image at top */}
      <div
        className={cn(
          "relative w-full",
          isReel ? "pb-[177.78%]" : "pb-[56.25%]" // Aspect ratio
        )}
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* ▶️ Play overlay */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-300",
            isHovered ? "opacity-100 bg-black/40" : "opacity-0"
          )}
        >
          <div className="bg-white/90 rounded-full p-3 shadow-lg">
            <Play size={20} className="text-black pl-0.5" fill="black" />
          </div>
        </div>
      </div>

      {/* 🏷️ Category and 🧾 Title below image */}
      <div className="flex flex-col items-start p-3 text-left">
        {item.category && (
          <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
            {item.category}
          </span>
        )}
        <h3 className="text-xl font-bold text-black dark:text-white line-clamp-2">
          {item.title}
        </h3>
      </div>
    </li>
  );
};

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";
import Image from "next/image";

interface CardProps {
  item: {
    title: string;
    src: string;
  };
  onPreview: (src: string) => void;
  isDuplicate?: boolean;
}
export const InfiniteMovingCards = ({
  items,
  speed = "fast",
  pauseOnHover = true,
  className,
  rows = 3,
}: {
  items: {
    title: string;
    src: string;
  }[];
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  rows?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRefs = useRef<(HTMLUListElement | null)[]>([]);
  const [start, setStart] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const handlePreview = (src: string) => {
    setSelectedImage(src);
  };

  const closePreview = () => {
    setSelectedImage(null);
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
              (rowIndex % 2 === 0 ? "animate-scroll" : "animate-scroll-reverse")
          )}
        >
          {row.map((item, idx) => (
            <Card
              key={`${item.title}-${rowIndex}-${idx}`}
              item={item}
              onPreview={handlePreview}
            />
          ))}
          {/* Duplicate the row for seamless looping */}
          {row.map((item, idx) => (
            <Card
              key={`${item.title}-${rowIndex}-${idx}-dup`}
              item={item}
              onPreview={handlePreview}
              isDuplicate={true}
            />
          ))}
        </ul>
      ))}

      {/* Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-90 z-50 flex items-center justify-center p-2"
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 z-10 bg-black/35 bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
              onClick={closePreview}
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage}
              alt="Preview"
              width={1200}
              height={800}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  item,
  onPreview,
  isDuplicate = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={cn(
        "relative w-64 max-w-full shrink-0 rounded-xl overflow-hidden border border-zinc-200 bg-gray-100 dark:border-zinc-700 dark:bg-neutral-900 transition-all duration-300",
        isHovered && "transform scale-106 shadow-lg z-10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ visibility: isDuplicate ? "hidden" : "visible" }}
    >
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative pb-[56.25%] h-0">
        {" "}
        {/* 16:9 aspect ratio (9/16 = 0.5625) */}
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex flex-col justify-end p-3 transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPreview(item.src);
            }}
            className="w-full py-1.5 bg-[#0098ff] hover:bg-[#025b96] text-white rounded-md text-xs font-medium transition-colors flex items-center justify-center"
          >
            <Play size={14} className="mr-1" fill="white" />
            Preview
          </button>
        </div>
      </div>
    </li>
  );
};

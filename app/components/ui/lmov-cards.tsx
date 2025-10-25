"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

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
  direction,
  cardSize = "medium", // 👈 NEW PROP
}: {
  items: {
    title: string;
    src: string;
  }[];
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  rows?: number;
  direction?: "right" | "left" | undefined;
  cardSize?: "small" | "medium" | "large"; // 👈 NEW PROP TYPE
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
              (direction === "right"
                ? "animate-scroll-reverse"
                : "animate-scroll")
          )}
        >
          {row.map((item, idx) => (
            <Card
              key={`${item.title}-${rowIndex}-${idx}`}
              item={item}
              onPreview={handlePreview}
              isDuplicate={false}
              cardSize={cardSize}
            />
          ))}
          {row.map((item, idx) => (
            <Card
              key={`${item.title}-${rowIndex}-${idx}-dup`}
              item={item}
              onPreview={handlePreview}
              isDuplicate={true}
              cardSize={cardSize}
            />
          ))}
        </ul>
      ))}

      {selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <div
              className="relative flex items-center justify-center max-w-[95vw] max-h-[95vh] w-full h-full"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
            >
              <button
                className="absolute top-4 right-4 z-20 bg-black/50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
                onClick={closePreview}
              >
                <X size={24} />
              </button>

              {/* ✅ Responsive Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Preview"
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

const Card: React.FC<
  CardProps & { cardSize?: "small" | "medium" | "large" }
> = ({ item, onPreview, isDuplicate = false, cardSize = "medium" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<"square" | "wide">("wide");

  // Detect image ratio (1:1 or 16:9)
  useEffect(() => {
    const img = new window.Image(); // ✅ uses the browser Image constructor
    img.src = item.src;
    img.onload = () => {
      const ratio = img.width / img.height;
      setAspectRatio(ratio < 1.2 ? "square" : "wide");
    };
  }, [item.src]);

  // Width adjustment
  const sizeClasses =
    cardSize === "large" ? "w-[26rem]" : cardSize === "small" ? "w-48" : "w-64";

  // Aspect ratio adjustment
  const aspectClasses =
    aspectRatio === "square"
      ? "pb-[100%]" // 1:1 ratio
      : cardSize === "large"
      ? "pb-[60%]" // a little taller for large wides
      : "pb-[56.25%]"; // standard 16:9

  return (
    <li
      className={cn(
        `relative ${sizeClasses} max-w-full shrink-0 rounded-xl overflow-hidden border border-zinc-200 bg-gray-100 dark:border-zinc-700 dark:bg-neutral-900 transition-all duration-300`,
        isHovered && "transform scale-[1.03] shadow-lg z-10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ visibility: isDuplicate ? "hidden" : "visible" }}
    >
      <div className={cn("relative h-0", aspectClasses)}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-contain rounded-md"
          sizes="(max-width: 500px) 100vw, 15vw"
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

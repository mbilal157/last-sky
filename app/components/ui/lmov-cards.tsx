"use client";

import { useEffect, useRef, useState ,useCallback} from "react";
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
  cardSize?: "small" | "medium" | "large";
}
export const InfiniteMovingCards = ({
  items,
  speed = "fast",
  pauseOnHover = true,
  className,
  rows = 1,
  direction="left",
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
  direction?: "right" | "left";
  cardSize?: "small" | "medium" | "large";
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
     setStart(true);
  }, []);


  const rowItems = Array.from({ length: rows }, (_, i) => {
    const itemsPerRow = Math.ceil(items.length / rows);
    return items.slice(i * itemsPerRow, (i + 1) * itemsPerRow);
  });
   const getSpeed = useCallback(() => {
    if (speed === "fast") return "50s";
    if (speed === "normal") return "50s";
    return "50s";
     }, [speed]);
  const handlePreview = (src: string) => setSelectedImage(src);
  const closePreview = () => setSelectedImage(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden",
        className
      )}
    >
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;

        .pause-on-hover:hover .animate-scroll {
          animation-play-state: paused;
      `}</style>

     <div className="flex flex-col gap-4">
        {rowItems.map((row, rowIndex) => (
          <ul
            key={rowIndex}
            className={cn(
              "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll",
              start && "start-animation",
              pauseOnHover && "pause-on-hover"
            )}
            style={
              {
                "--animation-duration": getSpeed(),
                "--animation-direction": direction === "left" ? "forwards" : "reverse",
              } as React.CSSProperties
            }
          >
            {/* Original Items */}
            {row.map((item, idx) => (
              <Card
                key={`${item.title}-${rowIndex}-${idx}`}
                item={item}
                onPreview={handlePreview}
                cardSize={cardSize}
              />
            ))}
            {/* Duplicated Items for Seamless Loop */}
            {row.map((item, idx) => (
              <Card
                key={`${item.title}-${rowIndex}-${idx}-dup`}
                item={item}
                onPreview={handlePreview}
                cardSize={cardSize}
              />
            ))}
          </ul>
        ))}
      </div>

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

const Card: React.FC<CardProps> = ({ item, onPreview, cardSize = "medium" }) => {
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
  const sizeClasses = {
    small: "w-48",
    medium: "w-64",
    large: "w-[26rem]",
  }[cardSize];

  const aspectClasses =
    cardSize === "large"
      ? "pb-[108%]" // 🔹 Force 3:3 ratio for large cards
      : aspectRatio === "square"
      ? "pb-[100%]" // normal square
      : "pb-[56.25%]"; // widescreen for smaller cards
  return (
    <li
      className={cn(
        "relative shrink-0 rounded-xl overflow-hidden border border-zinc-200 bg-gray-100 dark:border-zinc-700 dark:bg-neutral-900 transition-all duration-300",
        sizeClasses,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("relative h-0", aspectClasses)}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          quality={100}
          className="object-cover rounded-md"
          sizes="(max-width: 500px) 100vw, 33vw"
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

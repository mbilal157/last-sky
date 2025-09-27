"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "next-themes";

const items = [
  {
    name: "Sarah Johnson",
    title: "Homeowner",
    quote:
      "The solar panel installation has cut my electricity bills by nearly 70%. I couldn’t be happier with the results!",
    image: "/images/reviews/cl5.jpg",
  },
  {
    name: "Michael Chen",
    title: "Factory Owner",
    quote:
      "Extremely professional team. Our factory now runs on clean solar energy and the savings are remarkable.",
    image: "/images/reviews/cl1.jpg",
  },
  {
    name: "Emily Rodriguez",
    title: "Small Business Owner",
    quote:
      "Switching to solar was the best investment. Reliable power, reduced costs, and a greener footprint.",
    image: "/images/reviews/cl4.jpg",
  },
  {
    name: "Robert Williams",
    title: "School Principal",
    quote:
      "Our school’s solar system has drastically reduced expenses and serves as a great example of sustainability for students.",
    image: "/images/reviews/cl2.jpg",
  },
  {
    name: "Lisa Thompson",
    title: "Restaurant Owner",
    quote:
      "Thanks to the solar panels, our energy bills are under control and we never worry about power outages anymore.",
    image: "/images/reviews/cl3.jpg",
  },
];

const InfiniteMovingCards = ({
  items,
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      containerRef.current.style.setProperty("--animation-duration", "40s");

      setStart(true);
    }
  }, [direction]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-12",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className={cn(
              "relative w-[350px] max-w-full shrink-0 rounded-2xl border px-8 pt-16 pb-8 md:w-[450px]",
              theme === "dark"
                ? "bg-bg3 border-gray-700 text-white"
                : "bg-white border-zinc-200 text-black"
            )}
          >
            {/* Profile Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <Image
                width={96}
                height={96}
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            <blockquote className="flex flex-col items-center text-center mt-2">
              <h3
                className={cn(
                  "text-lg font-bold mb-1",
                  theme === "dark" ? "text-white" : "text-gray-900"
                )}
              >
                {item.name}
              </h3>
              <p
                className={cn(
                  "text-sm font-medium mb-4",
                  theme === "dark" ? "text-gray-300" : "text-gray-800"
                )}
              >
                {item.title}
              </p>
              <FaQuoteLeft className="text-2xl text-[#0098ff] mb-4 opacity-70" />
              <span
                className={cn(
                  "relative z-20 text-sm leading-[1.6] font-normal italic",
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                )}
              >
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ReviewsSection() {
  const { theme } = useTheme();

  return (
    <section
      className={cn("py-20", theme === "dark" ? "bg-black" : "bg-white")}
    >
      <h2
        className={cn(
          "text-3xl font-bold text-center mb-16",
          theme === "dark" ? "text-white" : "text-black"
        )}
      >
        Reviews of Production House
      </h2>
      <InfiniteMovingCards items={items} />
    </section>
  );
}

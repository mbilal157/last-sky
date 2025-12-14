"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { HiStar } from "react-icons/hi";

const items = [
  {
    name: "philtep",
    title: "Germany",
    quote: "Everything perfectly",
    image: "/images/fivreviews/1a.jpg",
  },
  {
    name: "decwat",
    title: "Ireland",
    quote: "super result",
    image: "/images/fivreviews/7a.jpg",
  },
  {
    name: "shandeye",
    title: "United Kingdom",
    quote: "5* provided advice as well as quick turnaround & good quality work",
    image: "/images/fivreviews/2a.jpg",
  },
  {
    name: "myiang03",
    title: "Cyprus",
    quote: "Great work! Thank you so much",
    image: "/images/fivreviews/3a.jpg",
  },
  {
    name: "darius1255",
    title: "United States",
    quote:
      "Went above and beyond for me!!! He checked with me before delivering the final project to make sure everything looked good. I'll definitely looked back!!!",
    image: "/images/fivreviews/4a.jpg",
  },
  {
    name: "brandondonne672",
    title: "United States",
    quote:
      "I will be back to Zohaib for more work if I need Youtube thumbnails, and I will be checking out this other services as well. He was very professional.",
    image: "/images/fivreviews/5a.jpg",
  },
  {
    name: "rhyzordie",
    title: "United States",
    quote: "Great Job, took a little back and forth but got it right",
    image: "/images/fivreviews/6a.jpg",
  },
];

const InfiniteMovingCards = ({
  items,
  direction = "right",
  pauseOnHover = true,
  className,
  speed,
}: {
  items: {
    quote: string;
    name: string;
    title: string | React.ReactNode;
    image: string;
  }[];
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  speed?: number;
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

      containerRef.current.style.setProperty(
        "--animation-duration",
        `${speed}s`
      );

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
    >
      {/* Left Gradient */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-[2%] z-30 pointer-events-none bg-gradient-to-r from-[#032607] to-transparent"
        )}
      />

      {/* Right Gradient */}
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-[2%] z-30 pointer-events-none bg-gradient-to-l from-[#2C7710] to-transparent"
        )}
      />
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-6 py-12",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className={cn(
              "relative w-[280px] h-[200px] shrink-0 rounded-2xl border px-6 py-6 md:w-[360px] lg:w-[400px] transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl",
              theme === "dark"
                ? "bg-bg3 border-gray-700 text-white"
                : "bg-white border-zinc-200 text-black"
            )}
          >
            <div className="absolute -top-8 right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-md">
              <Image
                src={item.image}
                alt={item.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <blockquote className="relative z-10 flex flex-col text-left">
              <h3
                className={cn(
                  "text-xl font-extrabold",
                  theme === "dark" ? "text-white" : "text-gray-900"
                )}
              >
                {item.name}
              </h3>

              <p
                className={cn(
                  "text-lg font-semibold mb-1",
                  theme === "dark" ? "text-gray-300" : "text-gray-800"
                )}
              >
                {item.title}
              </p>
              <div className="flex items-center gap-1 text-[#1dbf73] mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} />
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <p
                  className={cn(
                    "text-sm leading-relaxed font-normal",
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  {item.quote}
                </p>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function FiverrSection() {
  const { theme } = useTheme();

  return (
    <section
      className="w-full py-16 bg-[url('/images/fivbg.jpg')] bg-cover border-t border-gray-200 dark:border-gray-700"
      id="fiverr"
    >
      {/* Centered heading */}
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Also Trusted by Clients on{" "}
          <span className="text-[#1dbf73]">Fiverr</span>
        </h2>

        <p className="mt-3 text-gray-300 text-lg">
          Explore our Fiverr profile to see more verified reviews and completed
          projects.
        </p>
      </div>

      {/* FULL WIDTH testimonials */}
      <div className="relative w-full overflow-hidden mt-10">
        <InfiniteMovingCards items={items} speed={150} />
      </div>

      {/* CTA */}
      <div className="text-center mt-3">
        <a
          href="https://www.fiverr.com/your_profile_here"
          target="_blank"
          rel="noopener noreferrer"
          className="
      inline-flex items-center gap-2
      px-8 py-3 rounded-xl font-semibold text-white
      bg-[#1dbf73]
      shadow-md
      transition-all duration-300 ease-out
      hover:bg-[#08bd69]
      hover:-translate-y-1
      hover:shadow-[0_10px_30px_rgba(29,191,115,0.35)]
      active:translate-y-0
      active:shadow-md
    "
        >
          Visit Fiverr Profile
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}

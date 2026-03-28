"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "next-themes";

const items = [
  {
    name: "Aun Ali",
    title: "Youtuber",
    quote:
      "Skyline Production has managed my thumbnails and visuals for months. Their creativity and consistency make my content stand out. Highly recommended!",
    image: "/images/reviews/aun.jpg",
  },
  {
    name: "Shaukat Bhatti",
    title: "Politician",
    quote:
      "Skyline Production covered our political activities with professionalism and quality visuals. Their creative approach effectively highlighted our message. Much appreciated!",
    image: "/images/reviews/bhatti.jpg",
  },
  {
    name: "Enigma Path",
    title: "YouTube Automation",
    quote:
      "Partnering with Skyline Production changed our workflow. From branding to editing, they deliver fast, creative results that make our content look professional.",
    image: "/images/reviews/enigma.jpg",
  },
  {
    name: "Faisal Kiyani",
    title: "Multinational Business Owner.",
    quote:
      "Working with Skyline Production was remarkable. Their branding and content meet international standards with professionalism, creativity, and timely delivery.",
    image: "/images/reviews/faisal.jpg",
  },
  {
    name: "Fauji Foundation",
    title: "Military Schooling Network",
    quote:
      "Skyline Production has been a great creative partner. From posters to event coverage, their work always reflects quality and connects well with students and parents.",
    image: "/images/reviews/fauji.jpg",
  },
  {
    name: "Imtinan Ahmed",
    title: "Youtuber",
    quote:
      "Skyline Production added real cinematic quality to my documentaries. Their edits, shots, and professionalism make them a top choice for creators like me.",
    image: "/images/reviews/imtinan.jpg",
  },
  {
    name: "M.Umar Afzal Kiani",
    title: (
      <>
        Member Executive <br />
        Pakistan Gakhar Federation
      </>
    ),
    quote:
      "Skyline Production covered my business gathering with impressive photography. Every moment was captured with clarity and detail, showing true professionalism.",
    image: "/images/reviews/lehri.jpg",
  },
  {
    name: "Mufti Saleem Rabani",
    title: "Islamic Scholar / Youtuber",
    quote:
      "Skyline Production records and edits our lectures with respect and clarity. Their quality work helps audiences focus and benefit from the message.",
    image: "/images/reviews/mufti.jpg",
  },
  {
    name: "NoBills Tech",
    title: "Tech Services Company",
    quote:
      "Skyline Production designed our materials with creativity and precision. The visuals strengthened our brand identity and enhanced our marketing presence.",
    image: "/images/reviews/nobills.jpg",
  },
  {
    name: "Shangrilla Billing",
    title: "Medical Billing Company",
    quote:
      "Skyline Production built our corporate visuals with professionalism. Their designs gave our brand a modern, trustworthy image and ensured smooth delivery.",
    image: "/images/reviews/shangrilla.jpg",
  },
  {
    name: "Faizan",
    title: "Wedding Client",
    quote:
      "Our wedding slideshow was breathtaking. Skyline Production captured our memories beautifully, with music and editing that touched everyone's heart.",
    image: "/images/reviews/faizan.jpg",
  },
];

const InfiniteMovingCards = ({
  items,
  direction = "left",
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
      className={cn(
        "scroller relative z-20 overflow-x-hidden",
        className
      )}
    >
      {/* Left Gradient */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-[5%] z-30 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent",
        )}
      />

      {/* Right Gradient */}
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-[5%] z-30 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent",
        )}
      />

      <ul
  ref={scrollerRef}
  className={cn(
    "flex w-max flex-nowrap gap-6 py-12", // change min-w-full → w-max
    start && "animate-scroll",
    pauseOnHover && "hover:[animation-play-state:paused]"
  )}
>
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className={cn(
              "relative w-[280px] h-[270px] shrink-0 rounded-2xl border px-6 py-6 md:w-[360px] lg:w-[440px] transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl",
              "bg-white border-zinc-200 text-black dark:bg-[#1a1a1a] dark:border-gray-700 dark:text-white"
            )}
          >
            <div className="absolute -top-10 right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-md">
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
                  "text-xl font-extrabold text-gray-900 dark:text-white"
                )}
              >
                {item.name}
              </h3>

              <p
                className={cn(
                  "text-lg font-semibold mb-1 text-gray-800 dark:text-gray-300"
                )}
              >
                {item.title}
              </p>

              {/* Quote icon on the left, text on the right */}
              <div className="flex flex-col gap-3">
                <FaQuoteLeft className="text-4xl text-[#00c8ff] flex-shrink-0" />
                <p
                  className={cn(
                    "text-sm leading-relaxed font-normal text-gray-700 dark:text-gray-300"
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

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <h2 className="text-3xl font-bold text-center mb-16 text-black dark:text-white">
        Reviews of Production House
      </h2>
      <InfiniteMovingCards items={items} speed={150} />
    </section>
  );
}
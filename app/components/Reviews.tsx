"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "next-themes";

const items = [
  {
    name: "Aun ALi",
    title: "Youtuber",
    quote:
      "The solar panel installation has cut my electricity bills by nearly 70%. I couldn’t be happier with the results!",
    image: "/images/reviews/aun.jpg",
  },
  {
    name: "Shaukat Bhatti",
    title: "Politician",
    quote:
      "Extremely professional team. Our factory now runs on clean solar energy and the savings are remarkable.",
    image: "/images/reviews/bhatti.jpg",
  },
  {
    name: "Enigma Path",
    title: "Youtube Automation",
    quote:
      "Switching to solar was the best investment. Reliable power, reduced costs, and a greener footprint.",
    image: "/images/reviews/enigma.jpg",
  },
  {
    name: "Faisal Kiyani",
    title: "Businessman",
    quote:
      "Our school’s solar system has drastically reduced expenses and serves as a great example of sustainability for students.",
    image: "/images/reviews/faisal.jpg",
  },
  {
    name: "Fauji Foundation",
    title: "Military Schooling network",
    quote:
      "Thanks to the solar panels, our energy bills are under control and we never worry about power outages anymore.",
    image: "/images/reviews/fauji.jpg",
  },
  {
    name: "Imtinan Ahmed",
    title: "Youtuber",
    quote:
      "Thanks to the solar panels, our energy bills are under control and we never worry about power outages anymore.",
    image: "/images/reviews/imtinan.jpg",
  },
  {
    name: "Umer Afzal Kiyani",
    title: "Businessman",
    quote:
      "Thanks to the solar panels, our energy bills are under control and we never worry about power outages anymore.",
    image: "/images/reviews/lehri.jpg",
  },
  {
    name: "Mufti Saleem Rabani",
    title: "Islamic Scholar/Youtuber",
    quote:
      "Thanks to the solar panels, our energy bills are under control and we never worry about power outages anymore.",
    image: "/images/reviews/mufti.jpg",
  },
  {
    name: "NoBills Tech",
    title: "Solar Services Company",
    quote:
      "Thanks to the solar panels, our energy bills are under control and we never worry about power outages anymore.",
    image: "/images/reviews/nobills.jpg",
  },
  {
    name: "Shangrilla Billing",
    title: "Medical Billing Company",
    quote:
      "Thanks to the solar panels, our energy bills are under control and we never worry about power outages anymore.",
    image: "/images/reviews/shangrilla.jpg",
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
    title: string;
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

      // use speed prop instead of hardcoding
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
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
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
              // corrected sizes: narrower width, taller height
              "relative w-[280px] h-[270px] shrink-0 rounded-2xl border px-6 py-6 md:w-[360px] lg:w-[440px] transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl",
              theme === "dark"
                ? "bg-bg3 border-gray-700 text-white"
                : "bg-white border-zinc-200 text-black"
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
                  "text-xl font-extrabold mb-1", // bigger heading
                  theme === "dark" ? "text-white" : "text-gray-900"
                )}
              >
                {item.name}
              </h3>

              <p
                className={cn(
                  "text-lg font-semibold mb-4", // bigger subheading
                  theme === "dark" ? "text-gray-300" : "text-gray-800"
                )}
              >
                {item.title}
              </p>

              {/* Quote icon on the left, text on the right */}
              <div className="flex flex-col gap-3">
                <FaQuoteLeft className="text-4xl text-[#00c8ff] flex-shrink-0" />
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
      <InfiniteMovingCards items={items} speed={100} />
    </section>
  );
}

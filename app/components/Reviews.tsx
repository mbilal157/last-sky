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
      "Their editing team took my raw footage and turned it into high-quality YouTube content. My channel looks more professional than ever.",
    image: "/images/reviews/aun.jpg",
  },
  {
    name: "Shaukat Bhatti",
    title: "Politician",
    quote:
      "The graphics and campaign videos they produced were impactful and helped me connect with my audience more effectively.",
    image: "/images/reviews/bhatti.jpg",
  },
  {
    name: "Enigma Path",
    title: "YouTube Automation",
    quote:
      "From thumbnails to seamless edits, their creative team boosted the quality of my automated channels and increased engagement.",
    image: "/images/reviews/enigma.jpg",
  },
  {
    name: "Faisal Kiyani",
    title: "Businessman",
    quote:
      "They designed our company website and branding materials with precision. The professional look has impressed our clients.",
    image: "/images/reviews/faisal.jpg",
  },
  {
    name: "Fauji Foundation",
    title: "Military Schooling Network",
    quote:
      "The photography and promotional videos they created for our institutions were outstanding and perfectly captured our values.",
    image: "/images/reviews/fauji.jpg",
  },
  {
    name: "Imtinan Ahmed",
    title: "Youtuber",
    quote:
      "With their editing and motion graphics, my videos now stand out in a crowded niche. My content looks next-level.",
    image: "/images/reviews/imtinan.jpg",
  },
  {
    name: "Umer Afzal Kiyani",
    title: "Businessman",
    quote:
      "They handled everything from web design to promo shoots for our brand. A one-stop solution for creative needs.",
    image: "/images/reviews/lehri.jpg",
  },
  {
    name: "Mufti Saleem Rabani",
    title: "Islamic Scholar / Youtuber",
    quote:
      "Their team edits my lectures beautifully with professional graphics, making the content clearer and more engaging for viewers.",
    image: "/images/reviews/mufti.jpg",
  },
  {
    name: "NoBills Tech",
    title: "Tech Services Company",
    quote:
      "We got a complete corporate profile designed along with a sleek website. Their creative direction exceeded expectations.",
    image: "/images/reviews/nobills.jpg",
  },
  {
    name: "Shangrilla Billing",
    title: "Medical Billing Company",
    quote:
      "They produced a stunning brand video and redesigned our website, which has improved our online presence significantly.",
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

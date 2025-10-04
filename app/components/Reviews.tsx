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
      "Skyline Production has been handling my thumbnails and social media visuals for months now. The creativity and consistency they bring really make my content stand out. Highly recommended!.",
    image: "/images/reviews/aun.jpg",
  },
  {
    name: "Shaukat Bhatti",
    title: "Politician",
    quote:
      "Skyline Production provided excellent media coverage for our political activities. Their team worked with professionalism and delivered high-quality visuals that highlighted our message effectively. I appreciate their commitment and creative approach.”.",
    image: "/images/reviews/bhatti.jpg",
  },
  {
    name: "Enigma Path",
    title: "YouTube Automation",
    quote:
      "Partnering with Skyline Production for our YouTube automation projects has been a game-changer. From channel branding to editing support, they’ve consistently delivered with speed and creativity. Their work makes our workflow smooth and our content look professional.",
    image: "/images/reviews/enigma.jpg",
  },
  {
    name: "Faisal Kiyani",
    title: "Multinational Business Owner.",
    quote:
      "Working with Skyline Production has been a remarkable experience. Their team delivered branding and creative content that matched international standards. The professionalism, timely delivery, and innovative ideas make them a reliable choice for any business seeking impactful visuals.",
    image: "/images/reviews/faisal.jpg",
  },
  {
    name: "Fauji Foundation",
    title: "Military Schooling Network",
    quote:
      "Skyline Production has been a wonderful creative partner for our school system. From designing educational posters to covering events, their work has always reflected quality and creativity. They understand how to present ideas in a way that connects with students and parents alike.",
    image: "/images/reviews/fauji.jpg",
  },
  {
    name: "Imtinan Ahmed",
    title: "Youtuber",
    quote:
      "Skyline Production has been an essential part of my documentary journey. From creative video edits to detailed hand-shot work, their team added real cinematic quality to my content. Their professionalism and creative input make them a top choice for creators like me.",
    image: "/images/reviews/imtinan.jpg",
  },
  {
    name: "Umer Afzal Kiyani",
    title: "Member Executive(PGF)",
    quote:
      "Skyline Production covered one of my important business gatherings, and the photography was truly impressive. The pictures captured the essence of the event with clarity and style. Their professionalism and attention to detail make them a trusted name in our region.",
    image: "/images/reviews/lehri.jpg",
  },
  {
    name: "Mufti Saleem Rabani",
    title: "Islamic Scholar / Youtuber",
    quote:
      "Skyline Production has helped us record and edit lectures with professionalism and respect for our message. Their team ensures high-quality video and clear sound, allowing our audience to benefit from teachings without distraction. We appreciate their dedication to preserving Islamic content in the best way.",
    image: "/images/reviews/mufti.jpg",
  },
  {
    name: "NoBills Tech",
    title: "Tech Services Company",
    quote:
      "Skyline Production designed our promotional materials with precision and creativity. The visuals captured our brand identity perfectly and gave a professional touch to our marketing campaigns. We’re very satisfied with their work and look forward to more collaborations.",
    image: "/images/reviews/nobills.jpg",
  },
  {
    name: "Shangrilla Billing",
    title: "Medical Billing Company",
    quote:
      "Skyline Production created our corporate designs and visuals with outstanding professionalism. Their work gave our brand a modern, trustworthy image that resonates with our clients. Timely delivery and excellent communication made the entire process smooth.",
    image: "/images/reviews/shangrilla.jpg",
  },
  {
    name: "Faizan",
    title: "Wedding Client",
    quote:
      "Our wedding slideshow created by Skyline Production was breathtaking. They captured our memories so beautifully, with music and editing that touched everyone’s heart. Truly grateful!",
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
                  "text-xl font-extrabold", // bigger heading
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

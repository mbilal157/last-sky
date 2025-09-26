"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const portfolioItems = [
  {
    id: 1,
    category: "Graphic Design",
    title: "Logos",
    subtitle: "Unique and memorable logo designs for brands",
    image: "/images/portfolio/logocard.png",
    href: "/portfolio/graphic-design",
  },
  {
    id: 2,
    category: "Graphic Design",
    title: "Posters and Banners",
    subtitle: "Eye-catching posters and banners for promotions",
    image: "/images/whyus.jpg",
    href: "/portfolio/graphic-design",
  },
  {
    id: 3,
    category: "Video Editing",
    title: "Instagram Post",
    subtitle: "Engaging edits tailored for Instagram posts",
    video: "/videos/reels.mp4",
    href: "/portfolio/video-editing",
  },
  {
    id: 4,
    category: "Video Editing",
    title: "Stories and Highlights",
    subtitle: "Dynamic video stories and highlight reels",
    image: "/images/whyus.jpg",
    href: "/portfolio/video-editing",
  },
  {
    id: 5,
    category: "Video Editing",
    title: "Reels and Shorts",
    subtitle: "Trendy reels and shorts with creative cuts",
    image: "/images/whyus.jpg",
    href: "/portfolio/video-editing",
  },
  {
    id: 6,
    category: "Social Media Design",
    title: "Social Media Campaign",
    subtitle: "Complete design sets for impactful campaigns",
    image: "/images/portfolio/smc.jpg",
    href: "/portfolio/social-media-design",
  },
  {
    id: 7,
    category: "Social Media Design",
    title: "YouTube Thumbnails",
    subtitle: "Attention-grabbing thumbnails to boost clicks",
    image: "/images/portfolio/thumbnail.jpg",
    href: "/portfolio/social-media-design",
  },
  {
    id: 8,
    category: "Social Media Design",
    title: "Facebook and LinkedIn Banners",
    subtitle: "Professional banners for social media branding",
    image: "/images/portfolio/sm.jpg",
    href: "/portfolio/social-media-design",
  },
  {
    id: 9,
    category: "Graphic Design",
    title: "Carousel",
    subtitle: "Modern and professional Carousel designs",
    image: "/images/portfolio/carosaul.jpg",
    href: "/portfolio/graphic-design",
  },
];

const categories = [
  "All",
  "Graphic Design",
  "Social Media Design",
  "Video Editing",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const resolvedTheme = mounted
    ? theme === "system"
      ? systemTheme ?? "light"
      : theme ?? "light"
    : "light";

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  if (!mounted) {
    return (
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-6 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-56 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-20 px-6 transition-colors duration-300 ${
        resolvedTheme === "dark"
          ? "bg-[url('/images/bg3.jpg')] bg-cover bg-center text-gray-100"
          : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">Our Portfolio</h2>

        {/* Paragraph */}
        <p
          className={`text-center max-w-2xl mx-auto mb-12 ${
            resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Explore our creative work across various domains. Each project
          represents our dedication to quality and innovation.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full border border-[#0098ff] transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#0098ff] text-white"
                  : resolvedTheme === "dark"
                  ? "bg-transparent text-white hover:bg-[#0098ff]/20"
                  : "bg-white text-black hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {filteredItems.map((item) => (
            <CardContainer key={item.id} className="inter-var">
              <CardBody
                onClick={() => router.push(item.href ?? "#")}
                className="cursor-pointer bg-gray-50 dark:bg-[#1e1d1d] border dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 hover:shadow-lg transition"
              >
                {/* Category */}
                <CardItem
                  translateZ="50"
                  className="text-sm font-semibold text-gray-500 dark:text-gray-400"
                >
                  {item.category}
                </CardItem>

                {/* Title */}
                <CardItem
                  translateZ="80"
                  className="text-xl font-bold mt-2 text-gray-800 dark:text-gray-100 group-hover/card:text-[#0098ff]"
                >
                  {item.title}
                </CardItem>

                {/* Subtitle */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm mt-1 text-gray-600 dark:text-gray-400"
                >
                  {item.subtitle}
                </CardItem>

                {/* Media */}
                <CardItem translateZ="100" className="mt-4">
                  {item.video ? (
                    <video
                      src={item.video}
                      controls
                      loop
                      muted
                      autoPlay
                      className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  ) : (
                    <Image
                      src={item.image as string}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  )}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

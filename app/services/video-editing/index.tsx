"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function VideoEditing() {
  const { theme } = useTheme();

  const services = [
    {
      title: "Reels & Shorts (15–60 sec)",
      description:
        "Quick, engaging edits for Instagram, TikTok, and YouTube Shorts that grab attention instantly.",
      image: "/images/services/reels.jpg",
      link: "/portfolio/video-editing/reels",
    },
    {
      title: "Corporate / Promo Videos",
      description:
        "Professional corporate and promotional video edits that showcase your brand in style.",
      image: "/images/services/corporate.jpg",
      link: "/portfolio/video-editing/corporate",
    },
    {
      title: "Event Highlights",
      description:
        "Memorable highlight videos for weddings, parties, and events that tell a story worth sharing.",
      image: "/images/services/events.jpg",
      link: "/portfolio/video-editing/events",
    },
    {
      title: "Motion Graphics",
      description:
        "Dynamic motion graphics and animated typography videos that bring ideas to life.",
      image: "/images/services/motion.jpg",
      link: "/portfolio/video-editing/motion-graphics",
    },
    {
      title: "Typography Videos",
      description:
        "Stylish text-based videos with smooth transitions and bold animations for maximum impact.",
      image: "/images/services/typography.jpg",
      link: "/portfolio/video-editing/typography",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/vd-bg.jpg"
          alt="Video Editing Hero"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#0098ff]">
            Video Editing Services
          </h1>
          <p className="text-lg md:text-xl">
            From fast-paced reels to corporate promos, we edit videos that
            captivate, inspire, and engage your audience.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12 lg:px-24 text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Why Choose Our Video Editing?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          At{" "}
          <span className="text-[#0098ff] font-semibold">
            SkyLine Production
          </span>
          , editing is more than cutting clips — it’s about telling a story.
          Whether it’s reels, event highlights, or corporate videos, we bring
          creativity and precision to every frame.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 md:px-12 lg:px-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 bg-gray-100 dark:bg-gray-900 flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-[#0098ff]">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 flex-1">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-[#0098ff] rounded-lg hover:bg-blue-700 transition self-start"
              >
                View Work →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Call To Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 text-center bg-[#0098ff] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Edit Your Story
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          From Instagram reels to full-scale promos, we’ll turn your raw footage
          into polished, professional videos.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-white text-[#0098ff] rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Explore Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

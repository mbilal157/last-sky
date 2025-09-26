"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Paintbrush, Share2, Clapperboard } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Graphic Design",
    subtitle: "Creative & Professional Designs",
    features: [
      "Logos & Branding",
      "Posters & Flyers",
      "Business Cards & Stationery",
      "Custom Illustrations / Vector Work",
    ],
    href: "/services/graphic-design",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    subtitle: "Engaging Visual Content",
    features: [
      "Instagram Posts",
      "Stories & Highlights",
      "Facebook & LinkedIn Banners",
      "YouTube Thumbnails & Channel Art",
    ],
    href: "/services/social-media-design",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    subtitle: "Professional Visual Storytelling",
    features: [
      "Reels & Shorts (15–60 sec)",
      "Corporate / Promo Videos",
      "Event Highlights",
      "Motion Graphics / Typography Videos",
    ],
    href: "/services/video-editing",
  },
];

export default function CreativeServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { theme, systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    setResolvedTheme(
      theme === "system" ? systemTheme || "light" : theme || "light"
    );
  }, [theme, systemTheme]);

  return (
    <section
      className={`py-20 px-6 transition-colors duration-300 ${
        resolvedTheme === "dark" ? "bg-[#131313]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold text-center mb-4 ${
            resolvedTheme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Our Creative Services
        </h2>

        {/* Paragraph */}
        <p
          className={`text-center max-w-2xl mx-auto mb-16 ${
            resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          We offer a comprehensive suite of digital services to help your
          business thrive in the modern landscape. Our team of experts delivers
          innovative solutions tailored to your specific needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className={`group block border rounded-xl p-6 transition-all duration-300 ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                    : "bg-blue-50 border-[#b9dff6] hover:bg-[#cbe6f7]"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon Box */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:rotate-12 ${
                    hoveredCard === index
                      ? "bg-white"
                      : resolvedTheme === "dark"
                      ? "bg-gray-200"
                      : "bg-[#0098ff]"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      hoveredCard === index
                        ? "text-[#0098ff]"
                        : resolvedTheme === "dark"
                        ? "text-black"
                        : "text-white"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    resolvedTheme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p
                  className={`mb-4 ${
                    resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.subtitle}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start ${
                        resolvedTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="text-lg mr-2 text-[#0098ff]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                {hoveredCard === index && (
                  <div className="flex items-center text-[#0098ff] font-medium mt-4">
                    <span>Learn more</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

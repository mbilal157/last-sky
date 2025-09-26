"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function GraphicDesign() {
  const { theme } = useTheme();

  const services = [
    {
      title: "Logos & Branding",
      description:
        "Crafting timeless logos and complete brand identity systems that make your business unforgettable.",
      image: "/images/services/branding.jpg",
      link: "/portfolio/graphic-design/branding",
    },
    {
      title: "Posters & Flyers",
      description:
        "Eye-catching posters and flyers designed to engage and convert your audience effectively.",
      image: "/images/services/posters.jpg",
      link: "/portfolio/graphic-design/print",
    },
    {
      title: "Business Cards & Stationery",
      description:
        "Professional stationery designs that leave a lasting impression in every meeting.",
      image: "/images/services/stationery.jpg",
      link: "/portfolio/graphic-design/stationery",
    },
    {
      title: "Custom Illustrations",
      description:
        "Unique hand-crafted illustrations and vector graphics tailored for your brand and campaigns.",
      image: "/images/services/illustrations.jpg",
      link: "/portfolio/graphic-design/illustrations",
    },
    {
      title: "Social Media Graphics",
      description:
        "Instagram posts, stories, banners, and YouTube thumbnails that amplify your online presence.",
      image: "/images/services/social-media.jpg",
      link: "/portfolio/graphic-design/social-media",
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
          src="/images/gs-bg.jpg"
          alt="Graphic Design Hero"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#0098ff]">
            Graphic Design Services
          </h1>
          <p className="text-lg md:text-xl">
            We design visuals that don’t just look good, but tell your story,
            elevate your brand, and connect with your audience.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12 lg:px-24 text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Why Choose Our Graphic Design?
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-300">
          At{" "}
          <span className="text-[#0098ff] font-semibold">
            SkyLine Production
          </span>
          , design is more than aesthetics — it’s about creating a visual
          language for your brand. From logos to social media, we craft designs
          that inspire, engage, and convert.
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
          Ready to Transform Your Brand?
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Let’s craft a visual identity that truly represents your vision.
          Explore our portfolio or contact us today.
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

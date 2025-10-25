"use client";

import { useEffect, useState } from "react";
import { StickyScrollRevealDemo } from "../components/about/buttom";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    document.documentElement.classList.add("light");
    document.documentElement.classList.add("dark");
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="px-6 md:px-12 lg:px-24 bg-[url('/images/aboutt.jpg')] text-white transition-colors duration-300">
        <div className="text-center max-w-3xl mt-20 mx-auto pb-12 pt-10 h-80 text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-6">
            About <span className="text-[#0098ff]">Skyline Production</span>
          </h1>
          <p className="text-lg text-white">
            At Skyline Production, we transform ideas into powerful visuals that
            inspire and engage. From graphic design to cinematic editing, we
            bring creativity and precision together to deliver content that
            makes your brand shine in today&apos;s digital-first world.
          </p>
        </div>
      </div>

      <StickyScrollRevealDemo />
      <Footer />
    </>
  );
};

export default AboutPage;

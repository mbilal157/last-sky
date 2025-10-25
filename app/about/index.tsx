"use client";

import { useEffect, useState } from "react";
import { StickyScrollRevealDemo } from "../components/about/buttom";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force light theme
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="px-6 md:px-12 lg:px-24 bg-white text-black dark:text-white dark:bg-blacktransition-colors duration-300">
        <div className="text-center max-w-3xl mt-20 mx-auto pb-12 pt-10 bg-white text-black">
          <h1 className="text-4xl md:text-5xl font-bold text-black mt-8 mb-6">
            About <span className="text-[#0098ff]">Skyline Production</span>
          </h1>
          <p className="text-lg text-black">
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

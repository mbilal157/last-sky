"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const resolvedTheme = mounted
    ? theme === "system"
      ? systemTheme ?? "light"
      : theme ?? "light"
    : "light";

  const isDark = resolvedTheme === "dark";

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans overflow-hidden ${isDark ? 'bg-neutral-950' : 'bg-[#f5efe6]'}`}>
      
      {/* Main Two-Column Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
          {/* LEFT: Grid of 4 Images & Geometric Shapes */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            {/* Image Container */}
            <div className="relative z-10 w-full max-w-[28rem] mx-auto">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src="/images/about/about-page.png" alt="About Image" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left z-10">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              From sketch to <br className="hidden sm:block lg:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">real life</span>
            </h2>
            <p className={`text-base sm:text-lg mb-6 leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              We believe in the power of visual storytelling. At Skyline Production, our mission is to transform raw ideas and fleeting sketches into immersive, tangible experiences. We combine artistry with technical precision to bring your vision to life.
            </p>
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              Whether it&apos;s shaping a brand&apos;s core identity, capturing cinematic moments, or designing seamless digital interfaces, our team is dedicated to crafting results that resonate deeply with audiences and consistently outshine expectations.
            </p>
          </div>
          
        </div>
      </div>

      {/* BOTTOM: Horizontal Stats Section */}
      <div className={`relative w-full py-16 px-6 mt-10 ${isDark ? 'bg-neutral-900' : 'bg-blue-100'}`}>
        {/* Subtle top border/separator */}
        <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent ${isDark ? 'via-neutral-700' : 'via-blue-300'}`}></div>
        
        <div className={`max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x ${isDark ? 'divide-neutral-700' : 'divide-blue-200'}`}>
          
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <h3 className={`text-4xl sm:text-5xl font-bold mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>10+</h3>
            <span className={`font-semibold uppercase tracking-wider text-sm mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Years</span>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <h3 className={`text-4xl sm:text-5xl font-bold mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>300+</h3>
            <span className={`font-semibold uppercase tracking-wider text-sm mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Clients</span>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <h3 className={`text-4xl sm:text-5xl font-bold mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>15+</h3>
            <span className={`font-semibold uppercase tracking-wider text-sm mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Awards</span>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <h3 className={`text-4xl sm:text-5xl font-bold mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>1500</h3>
            <span className={`font-semibold uppercase tracking-wider text-sm mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Projects</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;

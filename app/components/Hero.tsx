"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MaskContainer } from "./ui/svg-mask-effect";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showHeroCursor, setShowHeroCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Listen for boundary events from the MaskContainer
    const handleHeroBoundaryEnter = () => {
      setShowHeroCursor(true);
    };

    const handleHeroBoundaryLeave = () => {
      setShowHeroCursor(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener(
      "heroBoundaryEnter",
      handleHeroBoundaryEnter as EventListener
    );
    window.addEventListener(
      "heroBoundaryLeave",
      handleHeroBoundaryLeave as EventListener
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener(
        "heroBoundaryEnter",
        handleHeroBoundaryEnter as EventListener
      );
      window.removeEventListener(
        "heroBoundaryLeave",
        handleHeroBoundaryLeave as EventListener
      );
    };
  }, []);

  return (
    <section className="hero-background flex flex-col items-center justify-center min-h-screen text-center transition-colors duration-300 relative">
      {/* Hero Section specific cursor ball - appears at boundary */}
      {showHeroCursor && (
        <div
          className="fixed rounded-full bg-[#0098ff] dark:bg-white shadow-lg pointer-events-none z-50"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            width: 16,
            height: 16,
          }}
        />
      )}

      {/* Logo */}
      <div className="w-30 h-25">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={80}
          height={80}
          className={`w-full h-full object-contain transition-transform duration-300 hover:scale-110 ${
            resolvedTheme === "light" ? "block" : "hidden"
          }`}
        />
        <Image
          src="/images/logo1.png"
          alt="logo"
          width={80}
          height={80}
          className={`w-full h-full object-contain  transition-transform duration-300 hover:scale-110 ${
            resolvedTheme === "dark" ? "block" : "hidden"
          }`}
        />
      </div>

      <div className="flex h-[8rem] w-[100%] items-center justify-center">
        <MaskContainer
          size={75}
          revealSize={200}
          revealText={
            <p className="mx-auto max-w-4xl text-center w-[85%] mb-2 text-4xl font-bold">
              Beyond <span className="text-blue-500">Limits</span>, Above The
              Skyline Of <span className="text-blue-500">Creativity</span>
            </p>
          }
          className="h-[15rem] rounded-md"
        >
          <p className="mx-auto text-center text-3xl font-extrabold tracking-wide">
            Where Ideas Turns Into Visual Masterpieces
          </p>
        </MaskContainer>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 ">
        <button className="px-6 py-2 rounded-2xl bg-[#0098ff] text-white hover:bg-[#068be3] transform hover:scale-105 transition-transform duration-200 flex items-center gap-2">
          Our Portfolio
          <span>→</span>
        </button>
        <button className="px-6 py-2 rounded-2xl border border-[#0098ff] text-[#0098ff] hover:bg-blue-50 dark:hover:bg-blue-900/30 transform hover:scale-105 transition-transform duration-200">
          Contact us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function CursorCircle() {
  const [innerPos, setInnerPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [isInsideHeroMask, setIsInsideHeroMask] = useState(false);
  const { theme } = useTheme();

  const color = theme === "dark" ? "white" : "black";

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setInnerPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    // Listen for custom events from the HeroSection MaskContainer
    const handleHeroMaskEnter = () => {
      setIsInsideHeroMask(true);
    };

    const handleHeroMaskLeave = () => {
      setIsInsideHeroMask(false);
    };

    window.addEventListener(
      "heroMaskEnter",
      handleHeroMaskEnter as EventListener
    );
    window.addEventListener(
      "heroMaskLeave",
      handleHeroMaskLeave as EventListener
    );

    document.body.style.cursor = "none";

    let animationFrame: number;
    const animateOuter = () => {
      setOuterPos((prev) => {
        const dx = innerPos.x - prev.x;
        const dy = innerPos.y - prev.y;
        const speed = 0.08; // tweak delay
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });
      animationFrame = requestAnimationFrame(animateOuter);
    };
    animationFrame = requestAnimationFrame(animateOuter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener(
        "heroMaskEnter",
        handleHeroMaskEnter as EventListener
      );
      window.removeEventListener(
        "heroMaskLeave",
        handleHeroMaskLeave as EventListener
      );
      document.body.style.cursor = "default";
      cancelAnimationFrame(animationFrame);
    };
  }, [innerPos]);

  return (
    <>
      {/* Outer circle - hidden when inside hero mask */}
      <div
        className="fixed pointer-events-none z-[99999] w-[30px] h-[30px] rounded-full transition-opacity duration-200"
        style={{
          border: `2px solid ${color}`,
          left: outerPos.x - 15,
          top: outerPos.y - 15,
          opacity: isInsideHeroMask ? 0 : 1,
        }}
      />

      {/* Inner circle - hidden when inside hero mask */}
      <div
        className="fixed pointer-events-none z-[99999] w-[15px] h-[15px] rounded-full transition-opacity duration-200"
        style={{
          backgroundColor: color,
          left: innerPos.x - 7.5,
          top: innerPos.y - 7.5,
          opacity: isInsideHeroMask ? 0 : 1,
        }}
      />
    </>
  );
}

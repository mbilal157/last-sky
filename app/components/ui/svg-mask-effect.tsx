"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";
import { useTheme } from "next-themes";

export const MaskContainer = ({
  children,
  revealText,
  size = 100,
  revealSize = 200,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  const [isHovered, setIsHovered] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [wasInsideMask, setWasInsideMask] = useState(false);
  const [showHeroCursor, setShowHeroCursor] = useState(false);
  const [edgeProximity, setEdgeProximity] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });

      const boundaryOffset = 50;
      const distanceToLeft = x;
      const distanceToRight = rect.width - x;
      const distanceToTop = y;
      const distanceToBottom = rect.height - y;

      const minDistance = Math.min(
        distanceToLeft,
        distanceToRight,
        distanceToTop,
        distanceToBottom
      );

      const proximity = Math.min(1, minDistance / boundaryOffset);
      setEdgeProximity(proximity);

      const isTouching = minDistance < 10;
      if (isTouching && !showHeroCursor) {
        window.dispatchEvent(new CustomEvent("heroBoundaryEnter"));
        setShowHeroCursor(true);
      } else if (!isTouching && showHeroCursor) {
        window.dispatchEvent(new CustomEvent("heroBoundaryLeave"));
        setShowHeroCursor(false);
      }

      const currentMaskSize = isHovered ? revealSize : size;
      const maskX = Math.max(
        0,
        Math.min(x - currentMaskSize / 2, containerSize.width - currentMaskSize)
      );
      const maskY = Math.max(
        0,
        Math.min(
          y - currentMaskSize / 2,
          containerSize.height - currentMaskSize
        )
      );

      const isInsideMaskArea =
        x >= maskX &&
        x <= maskX + currentMaskSize &&
        y >= maskY &&
        y <= maskY + currentMaskSize;

      if (isInsideMaskArea && !wasInsideMask) {
        window.dispatchEvent(new CustomEvent("heroMaskEnter"));
        setWasInsideMask(true);
      } else if (!isInsideMaskArea && wasInsideMask) {
        window.dispatchEvent(new CustomEvent("heroMaskLeave"));
        setWasInsideMask(false);
      }
    },
    [containerSize, isHovered, revealSize, size, showHeroCursor, wasInsideMask]
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    node.addEventListener("mousemove", updateMousePosition);
    return () => node.removeEventListener("mousemove", updateMousePosition);
  }, [updateMousePosition]);

  useEffect(() => {
    return () => {
      if (wasInsideMask) {
        window.dispatchEvent(new CustomEvent("heroMaskLeave"));
      }
      if (showHeroCursor) {
        window.dispatchEvent(new CustomEvent("heroBoundaryLeave"));
      }
    };
  }, [wasInsideMask, showHeroCursor]);

  const baseMaskSize = isHovered ? revealSize : size;
  const smoothMaskSize = baseMaskSize * edgeProximity;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen w-screen overflow-hidden", className)}
    >
      {/* Masked Area */}
      <motion.div
        className="absolute flex h-full w-screen items-center justify-center [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] bg-[#0098ff] dark:bg-white"
        animate={{
          maskPosition: `${Math.max(
            0,
            Math.min(
              mousePosition.x - smoothMaskSize / 2,
              containerSize.width - smoothMaskSize
            )
          )}px ${Math.max(
            0,
            Math.min(
              mousePosition.y - smoothMaskSize / 2,
              containerSize.height - smoothMaskSize
            )
          )}px`,
          maskSize: `${smoothMaskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeOut" },
          maskPosition: { duration: 0.1, ease: "linear" },
        }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold",
            resolvedTheme === "dark" ? "text-neutral-800" : "text-white"
          )}
        >
          {children}
        </div>
      </motion.div>

      {/* Reveal Text */}
      <div className="flex h-full w-screen items-center justify-center">
        <div
          className={cn(
            "mx-auto w-screen text-center text-4xl font-bold transition-colors duration-300",
            resolvedTheme === "dark" ? "text-white" : "text-neutral-800"
          )}
        >
          {revealText}
        </div>
      </div>
    </motion.div>
  );
};

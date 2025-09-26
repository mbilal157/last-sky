"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";

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
  const [isHovered, setIsHovered] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [wasInsideMask, setWasInsideMask] = useState(false);
  const [showHeroCursor, setShowHeroCursor] = useState(false);
  const [edgeProximity, setEdgeProximity] = useState(1); // 1 = not near edge, 0 = at edge

  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });

      // Calculate distance to edges
      const boundaryOffset = 50; // Increase this for smoother transition
      const distanceToLeft = x;
      const distanceToRight = rect.width - x;
      const distanceToTop = y;
      const distanceToBottom = rect.height - y;

      // Find the closest edge distance
      const minDistance = Math.min(
        distanceToLeft,
        distanceToRight,
        distanceToTop,
        distanceToBottom
      );

      // Calculate proximity (1 = not near edge, 0 = at edge)
      const proximity = Math.min(1, minDistance / boundaryOffset);
      setEdgeProximity(proximity);

      // Detect if touching boundary (with some threshold)
      const isTouching = minDistance < 10;

      // Add the boundary detection for hero cursor here
      if (isTouching && !showHeroCursor) {
        window.dispatchEvent(new CustomEvent("heroBoundaryEnter"));
        setShowHeroCursor(true);
      } else if (!isTouching && showHeroCursor) {
        window.dispatchEvent(new CustomEvent("heroBoundaryLeave"));
        setShowHeroCursor(false);
      }

      // Check if cursor is inside the mask area
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

      // Emit custom events when entering/leaving mask area
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

  // Clean up event listeners on unmount
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

  // Smoothly reduce mask size as it approaches the edge
  const baseMaskSize = isHovered ? revealSize : size;
  const smoothMaskSize = baseMaskSize * edgeProximity;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen overflow-hidden", className)}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
      transition={{ backgroundColor: { duration: 0.5 } }}
    >
      {/* Mask Ball */}
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-[#0098FF] text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] dark:bg-white"
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
        <div className="absolute inset-0 z-0 h-full w-full bg-[#0098ff] opacity-50 dark:bg-white" />

        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold"
        >
          {children}
        </div>
      </motion.div>

      {/* Always reveal text below */}
      <div className="flex h-full w-full items-center justify-center">
        {revealText}
      </div>
    </motion.div>
  );
};

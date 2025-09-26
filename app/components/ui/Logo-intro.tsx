"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// ✅ Component that creates the cut-out resume icon
function ResumeIconBox({ theme }: { theme: string }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`w-32 h-20 rounded-2xl flex items-center justify-center ${
        isDark ? "bg-white" : "bg-black"
      }`}
      style={{
        WebkitMask: `url('/resume-icon.svg') center / 50% no-repeat`,
        mask: `url('/resume-icon.svg') center / 50% no-repeat`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "50%",
        maskSize: "50%",
        backgroundColor: isDark ? "white" : "black",
      }}
    />
  );
}

export default function LogoIntro({ onFinish }: { onFinish: () => void }) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => setMounted(true), []);

  const resolvedTheme = mounted
    ? theme === "system"
      ? systemTheme ?? "light"
      : theme ?? "light"
    : "light";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 2900);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!mounted) return null;

  const bgClass = resolvedTheme === "dark" ? "bg-black" : "bg-white";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`fixed inset-0 flex items-center justify-center z-[9999] ${bgClass}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 50 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: 2.9, delay: 0.9, ease: "easeOut" },
            }}
            className="relative origin-center flex items-center justify-center"
            style={{ willChange: "transform, opacity" }}
          >
            {/* ✅ Instead of <Image />, we use ResumeIconBox */}
            <ResumeIconBox theme={resolvedTheme} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

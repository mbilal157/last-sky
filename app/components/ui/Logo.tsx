"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ResumeIconBox() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const resolvedTheme =
    theme === "system" ? systemTheme ?? "light" : theme ?? "light";

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`w-32 h-20 rounded-2xl flex items-center justify-center ${
          isDark ? "bg-white" : "bg-black"
        }`}
        style={{
          // mask = resume icon shape
          WebkitMask: `url('/resume-icon.svg') center / 50% no-repeat`,
          mask: `url('/resume-icon.svg') center / 50% no-repeat`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "50%",
          maskSize: "50%",
          backgroundColor: isDark ? "white" : "black", // box color
        }}
      />
    </div>
  );
}

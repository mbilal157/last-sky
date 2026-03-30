"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState ,useEffect} from "react";



export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button 
        className="w-10 h-10 rounded-full border border-border/50 bg-background/50 backdrop-blur-md opacity-50 cursor-not-allowed" 
        aria-hidden="true" 
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    document.documentElement.classList.add("theme-transitioning");

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.finished.finally(() => {
      document.documentElement.classList.remove("theme-transitioning");
    });
  };

  return (
    <button
      onClick={handleToggle}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-border/50 bg-background/50 backdrop-blur-md transition-all duration-500 hover:bg-accent hover:scale-110 active:scale-95 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle theme"
    >
      <Sun 
        strokeWidth={2.5}
        className={`absolute h-[1.2rem] w-[1.2rem] text-yellow-500 transition-all duration-500 ${
          isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`} 
      />
      <Moon 
        strokeWidth={2.5}
        className={`absolute h-[1.2rem] w-[1.2rem] text-blue-400 transition-all duration-500 ${
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
        }`} 
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

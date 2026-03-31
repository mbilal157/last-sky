"use client";

import React, { useState, Suspense, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {HiOutlineSparkles} from "react-icons/hi";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlayCircle, Move3d } from "lucide-react";
import { VideoCategory } from "./ContentMap.tsx";

function SidebarDemoContent() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  const links = [
    { label: "Logo Animation", href: "#", icon: <PlayCircle size={24} /> },
    { label: "Motion Graphics", href: "#", icon: <Move3d size={24} /> },
  ];

  const contentMap: Record<string, React.ReactNode> = {
    "Logo Animation": <VideoCategory category="Logo" />,
    "Motion Graphics": <VideoCategory category="Motion" />,
  };

  const [open, setOpen] = useState(false);

  // Needed for reading "?item=..."
  const searchParams = useSearchParams();
  const selectedItem = searchParams.get("item");

  // Needed for writing "?item=..."
  const router = useRouter();
  const pathname = usePathname();

  const updateURL = (label: string) => {
    router.push(`${pathname}?item=${encodeURIComponent(label)}`, {
      scroll: false,
    });
  };

  const [activeLink, setActiveLink] = useState<string>(() => {
    if (!selectedItem) return "Logo Animation";

    if (selectedItem.includes("Logo")) return "Logo Animation";
    if (selectedItem.includes("Motion")) return "Motion Graphics";

    return "Logo Animation";
  });
  const headerContent = (
    <div className="flex items-center gap-3 bg-transparent">
      <HiOutlineSparkles className="text-sky-400 w-5 h-5" />
      <span className="text-xl font-medium whitespace-nowrap text-sky-400">
        Animations
      </span>
    </div>
  );
  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody
          header={headerContent}
          className="justify-between mt-20 gap-10 "
        >
          <div className="flex flex-1 flex-col overflow-x-hidden bg-transparent overflow-y-auto">
            {/* Sidebar Header */}
            <div
              className={cn(
                "flex items-center gap-3 px-1 py-2 mt-3 mb-4 w-full transition-all duration-300 bg-transparent text-sky-400",
                open ? "justify-start" : "justify-center"
              )}
            >
              <Image
                src="/images/portfolio/animation.jpg"
                alt="Animation Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              {open && (
                <span className="text-xl font-medium whitespace-pre text-sky-400">
                  Animations
                </span>
              )}
            </div>

            {/* Sidebar Links */}
            <div className="mt-2 ml-1 w-full flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  onClick={() => {
                    setActiveLink(link.label);
                    updateURL(link.label);
                  }}
                  className={cn(
                    "transition-all duration-300",
                    activeLink === link.label
                      ? (isDark 
                          ? "!border-l-[3px] !border-l-sky-400 rounded-none border-blue-100 bg-sky-400/15 text-white tracking-wide shadow-[4px_0_24px_rgba(56,189,248,0.15),-2px_0_12px_rgba(56,189,248,0.4)] [&_svg]:text-sky-400" 
                          : "!border-l-[3px] !border-l-sky-400 rounded-none border-blue-100 bg-sky-400/10 text-neutral-900 tracking-wide shadow-[4px_0_24px_rgba(56,189,248,0.15),-2px_0_12px_rgba(56,189,248,0.4)] [&_svg]:text-sky-400")
                      : (isDark 
                          ? "rounded-md text-neutral-400 tracking-wide hover:bg-white/5 hover:text-neutral-200 [&_svg]:text-neutral-500 [&_svg]:hover:text-[#38BDF8]" 
                          : "rounded-md text-neutral-600 tracking-wide hover:bg-black/5 hover:text-neutral-900 [&_svg]:text-neutral-400 [&_svg]:hover:text-[#38BDF8]")
                  )}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Content Area */}
      <motion.main
        animate={{
          marginLeft: open ? "272px" : "96px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 overflow-y-auto p-6"
      >
        <AnimatePresence mode="wait">
          {contentMap[activeLink] || <Dashboard isDark={isDark} />}
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

// ✅ Wrap in Suspense here
export function AnimationSideBarDemo() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SidebarDemoContent />
    </Suspense>
  );
}

const Dashboard = ({ isDark }: { isDark: boolean }) => (
  <div className="space-y-6 mt-44">
    {[...new Array(12)].map((_, idx) => (
      <div
        key={idx}
        className={cn("h-32 animate-pulse rounded-lg", isDark ? "bg-neutral-800" : "bg-gray-200")}
      />
    ))}
  </div>
);

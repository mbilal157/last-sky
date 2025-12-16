"use client";

import React, { useState, Suspense } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlayCircle, Move3d } from "lucide-react";
import { VideoCategory } from "./ContentMap.tsx";

function SidebarDemoContent() {
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
    <div className="flex items-center gap-3">
      <Image
        src="/images/portfolio/animation.jpg"
        alt="Graphic Design Logo"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
      <span className="text-sm font-medium whitespace-nowrap text-black dark:text-white">
        Animations
      </span>
    </div>
  );
  return (
    <div className="flex h-screen w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody
          header={headerContent}
          className="justify-between mt-20 gap-10 border-r border-neutral-200 dark:border-neutral-700"
        >
          <div className="flex flex-1 flex-col overflow-x-hidden bg-white dark:bg-black overflow-y-auto">
            {/* Sidebar Header */}
            <div
              className={cn(
                "flex items-center gap-3 px-1 py-2 mt-3 mb-4 w-full rounded-md transition-all duration-300",
                "bg-neutral-200 dark:bg-black text-black dark:text-white",
                open ? "justify-start" : "justify-center"
              )}
            >
              {open && (
                <span className="text-sm font-medium whitespace-pre text-black dark:text-white">
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
                    activeLink === link.label
                      ? "bg-neutral-300 dark:bg-neutral-500 text-black dark:text-white"
                      : "text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800"
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
          marginLeft: open ? "240px" : "64px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 overflow-y-auto p-6"
      >
        <AnimatePresence mode="wait">
          {contentMap[activeLink] || <Dashboard />}
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

const Dashboard = () => (
  <div className="space-y-6 mt-44">
    {[...new Array(12)].map((_, idx) => (
      <div
        key={idx}
        className="h-32 animate-pulse rounded-lg bg-gray-200 dark:bg-neutral-800"
      />
    ))}
  </div>
);

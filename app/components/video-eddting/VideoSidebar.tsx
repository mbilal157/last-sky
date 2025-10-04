"use client";

import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { VideoCategory } from "../video-eddting/ContentMap.tsx";
import { cn } from "@/lib/utils";
import {
  Film,
  Heart,
  Clapperboard,
  Building2,
  Dumbbell,
  Shirt,
  Type,
} from "lucide-react";

type ContentKey =
  | "Promo"
  | "Typography"
  | "Wedding"
  | "RealEstate"
  | "Sports"
  | "Fashion"
  | "Stories";

const contentMap: Record<ContentKey, React.ReactNode> = {
  Promo: <VideoCategory category="Promo" />,
  Wedding: <VideoCategory category="Wedding" />,
  Typography: <VideoCategory category="Typography" />,
  RealEstate: <VideoCategory category="RealEstate" />,
  Sports: <VideoCategory category="Sports" />,
  Fashion: <VideoCategory category="Fashion" />,
  Stories: <VideoCategory category="Stories" />,
};

export function VideoSidebarDemo() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<ContentKey>("Promo");

  const links: { label: ContentKey; href: string; icon: React.ReactNode }[] = [
    { label: "Promo", href: "#", icon: <Film /> },
    { label: "Typography", href: "#", icon: <Type /> },
    { label: "Wedding", href: "#", icon: <Heart /> },
    { label: "RealEstate", href: "#", icon: <Building2 /> },
    { label: "Sports", href: "#", icon: <Dumbbell /> },
    { label: "Fashion", href: "#", icon: <Shirt /> },
    { label: "Stories", href: "#", icon: <Clapperboard /> },
  ];

  return (
    <div className="flex h-screen w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
      {" "}
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between mt-20 gap-10 border-r border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-1 flex-col overflow-x-hidden bg-white dark:bg-black overflow-y-auto">
            {/* ✅ "Video Editing" top section */}
            <div
              className={cn(
                "flex items-center gap-3 px-3 py-2 mt-3 mb-4 w-full rounded-md transition-all duration-300",
                "bg-neutral-200 dark:bg-black text-black dark:text-white",
                open ? "justify-start" : "justify-center"
              )}
            >
              <Image
                src="/images/portfolio/video-editing/vedico.jpg"
                alt="Video Logo"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />{" "}
              {open && (
                <span className="text-sm font-medium whitespace-pre text-black dark:text-white">
                  Video Editing
                </span>
              )}
            </div>

            {/* ✅ Sidebar Links */}
            <div className="mt-2 ml-1 w-full flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  onClick={() => setActiveLink(link.label)}
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
      {/* ✅ Main content */}
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

const Dashboard = () => (
  <div className="space-y-6">
    {[...new Array(12)].map((_, idx) => (
      <div
        key={idx}
        className="h-32 animate-pulse rounded-lg bg-gray-200 dark:bg-neutral-800"
      />
    ))}
  </div>
);

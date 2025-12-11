"use client";

import React, { useState, Suspense, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Camera, Heart, Film, Baby } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Cinematic from "./cinematicData";
import { Kids } from "./kids";
import { Wedding } from "./weddata";
import { Documentary } from "./documentry";

type ContentKey =
  | "Cinematic Photography"
  | "Wedding Photography"
  | "Documentry Photography"
  | "Kids Photography";

const contentMap: Record<ContentKey, React.ReactNode> = {
  "Cinematic Photography": <Cinematic />,
  "Wedding Photography": <Wedding />,
  "Documentry Photography": <Documentary />,
  "Kids Photography": <Kids />,
};

export function PhotoSideBarDemo() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SidebarDemoContent />
    </Suspense>
  );
}

function SidebarDemoContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedItem = searchParams.get("item");

  const updateURL = (label: ContentKey) => {
    router.push(`${pathname}?item=${encodeURIComponent(label)}`, {
      scroll: false,
    });
  };

  const getCategoryFromItem = (item: string | null): ContentKey => {
    if (!item) return "Cinematic Photography";
    const lower = item.toLowerCase();

    if (lower.includes("cinematic")) return "Cinematic Photography";
    if (lower.includes("wedding")) return "Wedding Photography";
    if (lower.includes("documentry")) return "Documentry Photography";
    if (lower.includes("kids")) return "Kids Photography";

    return "Cinematic Photography";
  };

  const [activeLink, setActiveLink] = useState<ContentKey>(
    getCategoryFromItem(selectedItem)
  );

  useEffect(() => {
    setActiveLink(getCategoryFromItem(selectedItem));
  }, [selectedItem]);

  const [open, setOpen] = useState(false);

  const links: { label: ContentKey; href: string; icon: React.ReactNode }[] = [
    { label: "Cinematic Photography", href: "#", icon: <Camera size={24} /> },
    { label: "Wedding Photography", href: "#", icon: <Heart size={24} /> },
    { label: "Documentry Photography", href: "#", icon: <Film size={24} /> },
    { label: "Kids Photography", href: "#", icon: <Baby size={24} /> },
  ];

  const headerContent = (
    <div className="flex items-center gap-3">
      <Image
        src="/images/portfolio/photo.jpg"
        alt="Photography Logo"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
      <span className="text-sm font-medium whitespace-nowrap text-black dark:text-white">
        Photography
      </span>
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody
          className="justify-between mt-20 gap-10 border-r border-neutral-200 dark:border-neutral-700"
          header={headerContent}
        >
          <div className="flex flex-1 flex-col overflow-x-hidden bg-white dark:bg-black overflow-y-auto">
            {/* Desktop Header */}
            <div
              className={cn(
                "hidden sm:flex items-center gap-3 px-1 py-2 mt-3 mb-4 w-full rounded-md transition-all duration-300",
                "bg-neutral-200 dark:bg-black text-black dark:text-white",
                open ? "justify-start" : "justify-center"
              )}
            >
              <Image
                src="/images/portfolio/photo.jpg"
                alt="Photography Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              {open && (
                <span className="text-sm font-medium whitespace-pre text-black dark:text-white">
                  Photography
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

      {/* Desktop Main Content */}
      <motion.main
        animate={{ marginLeft: open ? "240px" : "64px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden sm:flex flex-1 overflow-y-auto p-6"
      >
        <AnimatePresence mode="wait">
          {contentMap[activeLink] || <Dashboard />}
        </AnimatePresence>
      </motion.main>

      {/* Mobile Main Content */}
      <motion.main className="sm:hidden flex-1 overflow-y-auto p-4 mt-32 w-full">
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

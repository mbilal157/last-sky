"use client";

import React, { useState, Suspense } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Camera, Heart, Film, Baby } from "lucide-react";
import { Cinematic } from "./cinematicData";
import { Kids } from "./kids";
import { Wedding } from "./weddata";

const Documentary = () => (
  <div className="p-4 text-lg font-semibold">Custom Illustrations Content</div>
);

// ✅ Wrap this part separately so Suspense can handle searchParams
function SidebarDemoContent() {
  const links = [
    { label: "Cinematic Photography", href: "#", icon: <Camera size={24} /> },
    { label: "Wedding Photography", href: "#", icon: <Heart size={24} /> },
    { label: "Documentry Photography", href: "#", icon: <Film size={24} /> },
    { label: "Kids Photography", href: "#", icon: <Baby size={24} /> },
  ];

  const contentMap: Record<string, React.ReactNode> = {
    "Cinematic Photography": <Cinematic />,
    "Wedding Photography": <Wedding />,
    "Documentry Photography": <Documentary />,
    "Kids Photography": <Kids />,
  };

  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const selectedItem = searchParams.get("item");

  const [activeLink, setActiveLink] = useState<string>(() => {
    if (!selectedItem) return "Cinematic Photography";

    if (selectedItem.includes("Cinematic Photography"))
      return "Cinematic Photography";
    if (selectedItem.includes("Wedding Photography"))
      return "Wedding Photography";
    if (selectedItem.includes("Documentry Photography"))
      return "Documentry Photography";
    if (selectedItem.includes("Kids Photography")) return "Kids Photography";

    return "Cinematic Photography";
  });

  return (
    <div className="flex h-screen w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between mt-20 gap-10 border-r border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-1 flex-col overflow-x-hidden bg-white dark:bg-black overflow-y-auto">
            <div
              className={cn(
                "flex items-center gap-3 px-1 py-2 mt-3 mb-4 w-full rounded-md transition-all duration-300",
                "bg-neutral-200 dark:bg-black text-black dark:text-white",
                open ? "justify-start" : "justify-center"
              )}
            >
              <Image
                src="/images/portfolio/photo.jpg"
                alt="Graphics Logo"
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
export function PhotoSideBarDemo() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SidebarDemoContent />
    </Suspense>
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

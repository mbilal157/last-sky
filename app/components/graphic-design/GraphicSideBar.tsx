"use client";

import React, { useState, Suspense } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  ImageIcon,
  FileText,
  Youtube,
  Briefcase,
  Megaphone,
  PenTool,
  Package,
} from "lucide-react";
import { Thumbnails } from "./thumbnails";
import Logos from "./logos";
import { Posters } from "./posters";
import { BCards } from "./bcards";
import { Illustrations } from "./illus";
import { Posts } from "./posts";
import { Products } from "./products";

// ✅ Wrap this part separately so Suspense can handle searchParams
function SidebarDemoContent() {
  const links = [
    { label: "Logos and Branding", href: "#", icon: <ImageIcon size={24} /> },
    { label: "Social Media Posts", href: "#", icon: <Megaphone size={24} /> },
    { label: "Image Manipulation", href: "#", icon: <FileText size={24} /> },
    { label: "Thumbnails", href: "#", icon: <Youtube size={24} /> },
    {
      label: "Products Packaging & Design",
      href: "#",
      icon: <Package size={24} />,
    },
    {
      label: "Business cards and stationary",
      href: "#",
      icon: <Briefcase size={24} />,
    },
    {
      label: "Custom Illustrations",
      href: "#",
      icon: <PenTool size={24} />,
    },
  ];

  const contentMap: Record<string, React.ReactNode> = {
    "Logos and Branding": <Logos />,
    "Social Media Posts": <Posts />,
    "Image Manipulation": <Posters />,
    Thumbnails: <Thumbnails />,
    "Products Packaging & Design": <Products />,
    "Business cards and stationary": <BCards />,
    "Custom Illustrations": <Illustrations />,
  };

  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const selectedItem = searchParams.get("item");

  const [activeLink, setActiveLink] = useState<string>(() => {
    if (!selectedItem) return "Logos and Branding";

    if (selectedItem.includes("Thumbnail")) return "Thumbnails";
    if (selectedItem.includes("Products Packaging & Design"))
      return "Products Packaging & Design";
    if (selectedItem.includes("Social Media Posts"))
      return "Social Media Posts";
    if (selectedItem.includes("Logo")) return "Logos and Branding";
    if (selectedItem.includes("Poster")) return "Image Manipulation";
    if (selectedItem.includes("Business"))
      return "Business cards and stationary";
    if (selectedItem.includes("Illustration")) return "Custom Illustrations";

    return "Logos and Branding";
  });

  return (
    <div className="flex h-screen w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="hidden sm:flex justify-between mt-20 gap-10 border-r border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-1 flex-col overflow-x-hidden bg-white dark:bg-black overflow-y-auto">
            <div
              className={cn(
                "flex items-center gap-3 px-1 py-2 mt-3 mb-4 w-full rounded-md transition-all duration-300",
                "bg-neutral-200 dark:bg-black text-black dark:text-white",
                open ? "justify-start" : "justify-center"
              )}
            >
              <Image
                src="/images/portfolio/grapdes.jpg"
                alt="Graphics Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              {open && (
                <span className="text-sm font-medium whitespace-pre text-black dark:text-white">
                  Graphic Design
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
        className="flex-1 overflow-y-auto p-6 pt-16 sm:pt-6"
      >
        <AnimatePresence mode="wait">
          {contentMap[activeLink] || <Dashboard />}
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

// ✅ Wrap in Suspense here
export function SidebarDemo() {
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

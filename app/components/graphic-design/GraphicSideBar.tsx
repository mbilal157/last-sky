"use client";

import React, { useState, Suspense, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { useSearchParams, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
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

// ---------------------------------------------------------------------------
//  MAIN SIDEBAR COMPONENT
// ---------------------------------------------------------------------------

function SidebarDemoContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedItem = searchParams.get("item");

  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  const links = [
    { label: "Logos and Branding", icon: <ImageIcon size={24} /> },
    { label: "Social Media Posts", icon: <Megaphone size={24} /> },
    { label: "Image Manipulation", icon: <FileText size={24} /> },
    { label: "Thumbnails", icon: <Youtube size={24} /> },
    { label: "Products Packaging & Design", icon: <Package size={24} /> },
    { label: "Business cards and stationary", icon: <Briefcase size={24} /> },
    { label: "Custom Illustrations", icon: <PenTool size={24} /> },
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

  // -----------------------------------------------------------------------
  //  Set Active Link Based on URL
  // -----------------------------------------------------------------------
  const [activeLink, setActiveLink] = useState("Logos and Branding");

  useEffect(() => {
    if (selectedItem) {
      setActiveLink(selectedItem);
    }
  }, [selectedItem]);

  // -----------------------------------------------------------------------
  //  Update URL When Clicking Sidebar Link
  // -----------------------------------------------------------------------
  function updateURL(label: string) {
    const encoded = encodeURIComponent(label);
    router.push(`/portfolio/graphic-design?item=${encoded}`);
  }

  const [open, setOpen] = useState(false);

  const headerContent = (
    <div className={cn("flex items-center gap-3", isDark ? "bg-zinc-900" : "bg-white")}>
      <Image
        src="/images/portfolio/grapdes.jpg"
        alt="Graphic Design Logo"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
      <span className={cn("text-sm font-medium whitespace-nowrap", isDark ? "text-white" : "text-black")}>
        Graphics Design
      </span>
    </div>
  );

  // -----------------------------------------------------------------------

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody
          className={cn("hidden sm:flex justify-between mt-20 gap-10 border-r", isDark ? "border-neutral-700" : "border-neutral-200")}
          header={headerContent}
        >
          <div className="flex flex-1 flex-col overflow-x-hidden bg-background text-foreground overflow-y-auto">
            {/* Logo */}
            <div
              className={cn(
                "flex items-center gap-3 px-1 py-2 mt-3 mb-4 w-full rounded-md transition-all duration-300",
                isDark ? "bg-neutral-800 text-white" : "bg-neutral-200 text-black",
                open ? "justify-start" : "justify-center"
              )}
            >
              {open && (
                <span className={cn("text-sm font-medium whitespace-pre", isDark ? "text-white" : "text-black")}>
                  Graphic Design
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
                      ? (isDark ? "bg-neutral-700 text-white" : "bg-neutral-300 text-black")
                      : (isDark ? "text-white hover:bg-neutral-800" : "text-black hover:bg-neutral-200")
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
        className="hidden sm:flex flex-1 overflow-y-auto p-6 pt-16 sm:pt-6"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLink}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full"
          >
            {contentMap[activeLink] || <Dashboard isDark={isDark} />}
          </motion.div>
        </AnimatePresence>
      </motion.main>

      {/* Mobile Main Content */}
      <motion.main className="sm:hidden flex-1 overflow-y-auto p-4 mt-32 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLink}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full"
          >
            {contentMap[activeLink] || <Dashboard isDark={isDark} />}
          </motion.div>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

// ---------------------------------------------------------------------------

export function SidebarDemo() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SidebarDemoContent />
    </Suspense>
  );
}

// ---------------------------------------------------------------------------

const Dashboard = ({ isDark }: { isDark: boolean }) => (
  <div className="space-y-6">
    {[...new Array(12)].map((_, idx) => (
      <div
        key={idx}
        className={cn("h-32 animate-pulse rounded-lg", isDark ? "bg-neutral-800" : "bg-gray-200")}
      />
    ))}
  </div>
);

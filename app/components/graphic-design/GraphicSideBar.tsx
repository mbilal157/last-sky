"use client";

import React, { useState, Suspense, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { useSearchParams, useRouter } from "next/navigation";
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

  // -----------------------------------------------------------------------

  return (
    <div className="flex h-screen w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="hidden sm:flex justify-between mt-20 gap-10 border-r border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-1 flex-col overflow-x-hidden bg-white dark:bg-black overflow-y-auto">
            {/* Logo */}
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
                <span className="text-sm font-medium whitespace-pre">
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
                      ? "bg-neutral-300 dark:bg-neutral-500 text-black dark:text-white"
                      : "text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800"
                  )}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* MAIN CONTENT */}
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

// ---------------------------------------------------------------------------

export function SidebarDemo() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SidebarDemoContent />
    </Suspense>
  );
}

// ---------------------------------------------------------------------------

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

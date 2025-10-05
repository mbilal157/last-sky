"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageIcon, FileText, Youtube, Briefcase, PenTool } from "lucide-react";
import { motion } from "motion/react";
import { Thumbnails } from "./thumbnails";
import { Logos } from "./logos";
import { Posters } from "./posters";

const BusinessCards = () => (
  <div className="p-4 text-lg font-semibold">Business Cards Content</div>
);
const CustomIllustrations = () => (
  <div className="p-4 text-lg font-semibold">Custom Illustrations Content</div>
);

export function SidebarDemo() {
  const links = [
    { label: "Logos and Branding", href: "#", icon: <ImageIcon size={16} /> },
    { label: "Posters and Flyers", href: "#", icon: <FileText size={16} /> },
    { label: "Thumbnails", href: "#", icon: <Youtube size={16} /> },
    {
      label: "Business cards and stationary",
      href: "#",
      icon: <Briefcase size={16} />,
    },
    {
      label: "custom illustrations / vector work",
      href: "#",
      icon: <PenTool size={16} />,
    },
  ];

  const contentMap: Record<string, React.ReactNode> = {
    "Logos and Branding": <Logos />,
    "Posters and Flyers": <Posters />,
    Thumbnails: <Thumbnails />,
    "Business cards and stationary": <BusinessCards />,
    "custom illustrations / vector work": <CustomIllustrations />,
  };

  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const selectedItem = searchParams.get("item");

  const [activeLink, setActiveLink] = useState<string>(() => {
    if (!selectedItem) return "Logos and Branding";

    // Match item titles to sidebar labels
    if (selectedItem.includes("Thumbnail")) return "Thumbnails";
    if (selectedItem.includes("Logo")) return "Logos and Branding";
    if (selectedItem.includes("Poster")) return "Posters and Flyers";
    if (selectedItem.includes("Business"))
      return "Business cards and stationary";
    if (selectedItem.includes("Illustration"))
      return "custom illustrations / vector work";

    return "Logos and Branding";
  });

  return (
    <div className="flex h-screen w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
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
              />
              {open && (
                <span className="text-sm font-medium whitespace-pre text-black dark:text-white">
                  Graphic Design
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

export const Logo = () => (
  <a
    href="#"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
  >
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium whitespace-pre text-black dark:text-white"
    >
      Graphic Design
    </motion.span>
  </a>
);

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

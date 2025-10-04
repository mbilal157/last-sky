"use client";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { VideoCategory } from "../video-eddting/ContentMap.tsx";
import { motion } from "framer-motion";
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
  const links: { label: ContentKey; href: string; icon: React.ReactNode }[] = [
    { label: "Promo", href: "#", icon: <Film className="text-black" /> },
    { label: "Typography", href: "#", icon: <Type className="text-black" /> },
    { label: "Wedding", href: "#", icon: <Heart className="text-black" /> },
    {
      label: "RealEstate",
      href: "#",
      icon: <Building2 className="text-black" />,
    },
    { label: "Sports", href: "#", icon: <Dumbbell className="text-black" /> },
    { label: "Fashion", href: "#", icon: <Shirt className="text-black" /> },
    {
      label: "Stories",
      href: "#",
      icon: <Clapperboard className="text-black" />,
    },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<ContentKey>("Promo");

  return (
    <div className="flex h-screen w-full bg-white dark:bg-neutral-900">
      {/* Sidebar (fixed & collapsible on hover) */}
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between mt-20 gap-10 border-r border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <Logo />
            <div className="mt-8 ml-4 w-full flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  onClick={() => setActiveLink(link.label)}
                  className={`rounded-md ${
                    activeLink === link.label
                      ? "bg-neutral-200 w-full dark:bg-neutral-700"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main content (auto-adjusts width) */}
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

const Logo = () => (
  <a
    href="#"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
  >
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium whitespace-pre"
    >
      Video Editing
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

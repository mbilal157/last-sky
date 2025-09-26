"use client";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { VideoCategory } from "../video-eddting/ContentMap.tsx";
import { motion } from "framer-motion";
import { Film, Star, Home, Type } from "lucide-react";

type ContentKey =
  | "Motion Graphics"
  | "Fashion Promo"
  | "Real Estate Promo"
  | "Typography";
// Update your contentMap with the new component
const contentMap: Record<ContentKey, React.ReactNode> = {
  "Motion Graphics": <VideoCategory category="Motion Graphics" />,
  "Fashion Promo": <VideoCategory category="Fashion Promo" />,
  "Real Estate Promo": <VideoCategory category="Real Estate Promo" />,
  Typography: <VideoCategory category="Typography" />,
};

export function VideoSidebarDemo() {
  const links: { label: ContentKey; href: string; icon: React.ReactNode }[] = [
    { label: "Motion Graphics", href: "#", icon: <Film /> },
    { label: "Fashion Promo", href: "#", icon: <Star /> },
    { label: "Real Estate Promo", href: "#", icon: <Home /> },
    { label: "Typography", href: "#", icon: <Type /> },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<ContentKey>("Motion Graphics");
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar (fixed) */}
      <div className="fixed top-20 left-0 h-screen w-[20%] border-r border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800">
        <Sidebar open={open} setOpen={setOpen} animate={false}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              <Logo />
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink
                    key={idx}
                    link={link}
                    onClick={() => setActiveLink(link.label)}
                    className={
                      activeLink === link.label
                        ? "bg-neutral-200 dark:bg-neutral-700 rounded-md"
                        : ""
                    }
                  />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Main content (scrollable) */}
      <div className="ml-[22%] flex-1  overflow-y-auto p-6 bg-white dark:bg-neutral-900">
        <AnimatePresence mode="wait">
          {contentMap[activeLink] || <Dashboard />}
        </AnimatePresence>
      </div>
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
      className="font-medium whitespace-pre text-black dark:text-white"
    >
      Video Editing
    </motion.span>
  </a>
);

// Dummy dashboard component
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

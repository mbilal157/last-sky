"use client";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { VideoCategory } from "../video-eddting/ContentMap.tsx";
import { motion } from "framer-motion";
import { Film, Heart, Building2, Dumbbell, Shirt, Type } from "lucide-react";

type ContentKey =
  | "Promo"
  | "Typography"
  | "Wedding"
  | "RealEstate"
  | "Sports"
  | "Fashion"
  | "Stories";
// Update your contentMap with the new component
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
    {
      label: "Promo",
      href: "#",
      icon: <Film className="text-black" />,
    },
    {
      label: "Typography",
      href: "#",
      icon: <Type className="text-black" />,
    },
    {
      label: "Wedding",
      href: "#",
      icon: <Heart className="text-black" />,
    },
    {
      label: "RealEstate",
      href: "#",
      icon: <Building2 className="text-black" />,
    },
    {
      label: "Sports",
      href: "#",
      icon: <Dumbbell className="text-black" />,
    },
    {
      label: "Fashion",
      href: "#",
      icon: <Shirt className="text-black" />,
    },
    {
      label: "Stories",
      href: "#",
      icon: <Shirt className="text-black" />,
    },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<ContentKey>("Promo");
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
      className="font-medium whitespace-pre"
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

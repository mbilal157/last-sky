"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { ImageIcon, FileText, Youtube, Briefcase, PenTool } from "lucide-react";
import { motion } from "motion/react";
import { Thumbnails } from "./thumbnails";
import { Logos } from "./logos";
import { Posters } from "./posters";

// 👉 Dummy components until you create real ones
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
  const [activeLink, setActiveLink] = useState<string>("Logos and Branding");

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar (fixed) */}
      <div className="fixed top-20 left-0 h-screen w-64 border-r border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800">
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
      <div className="ml-64 flex-1 overflow-y-auto p-6 bg-white dark:bg-neutral-900">
        {contentMap[activeLink] || <Dashboard />}
      </div>
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

export const LogoIcon = () => (
  <a
    href="#"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
  >
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
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

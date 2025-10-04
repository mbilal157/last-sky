"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  ImageIcon,
  FileText,
  Youtube,
  Briefcase,
  PenTool,
  Menu,
  X,
} from "lucide-react";
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
  const [activeLink, setActiveLink] = useState<string>("Logos and Branding");

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Top bar (mobile) */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700">
        <Logo />
        <button
          onClick={() => setOpen(!open)}
          className="text-black dark:text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown menu (mobile) */}
      {open && (
        <div className="md:hidden bg-gray-100 dark:bg-neutral-800 border-b border-gray-300 dark:border-neutral-700 p-4 space-y-2">
          {links.map((link, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveLink(link.label);
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 ${
                activeLink === link.label
                  ? "bg-neutral-200 dark:bg-neutral-700"
                  : ""
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Sidebar (desktop) */}
      <div className="hidden md:block fixed top-20 left-0 h-screen w-64 border-r border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800">
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

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-6 bg-white dark:bg-neutral-900 md:ml-64">
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

"use client";

import React, { useState, Suspense } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import WebDesign from "./webdes";
import Image from "next/image";
import CustomWebsiteDevelopment from "./custom";
import UiUx from "./UiUx";
import Landing from "./landing";
import {
  Code2,
  MonitorSmartphone,
  LayoutDashboard,
  RefreshCcw,
  FileDown,
} from "lucide-react";

const Redesign = () => (
  <div className="p-4 text-lg font-semibold">Custom Illustrations Content</div>
);

// ✅ Wrap this part separately so Suspense can handle searchParams
function SidebarDemoContent() {
  const links = [
    { label: "Custom Website Design", href: "#", icon: <Code2 size={24} /> },
    {
      label: "Responsive Wesite Design",
      href: "#",
      icon: <MonitorSmartphone size={24} />,
    },
    { label: "UI/UX Design", href: "#", icon: <LayoutDashboard size={24} /> },
    {
      label: "Website Redesign & Revamp",
      href: "#",
      icon: <RefreshCcw size={24} />,
    },
    { label: "Landing Pages", href: "#", icon: <FileDown size={24} /> },
  ];

  const contentMap: Record<string, React.ReactNode> = {
    "Custom Website Design": <CustomWebsiteDevelopment />,
    "Responsive Wesite Design": <WebDesign />,
    "UI/UX Design": <UiUx />,
    "Website Redesign & Revamp": <Redesign />,
    "Landing Pages": <Landing />,
  };

  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const selectedItem = searchParams.get("item");

  const [activeLink, setActiveLink] = useState<string>(() => {
    if (!selectedItem) return "Custom Website Design";

    if (selectedItem.includes("Responsive Wesite Design"))
      return "Responsive Wesite Design";
    if (selectedItem.includes("UI/UX Design")) return "UI/UX Design";
    if (selectedItem.includes("Website Redesign & Revamp"))
      return "Website Redesign & Revamp";
    if (selectedItem.includes("Landing Pages")) return "Landing Pages";

    return "Custom Website Design";
  });

  const headerContent = (
    <div className="flex items-center gap-3">
      <Image
        src="/images/portfolio/web.jpg"
        alt="Graphics Logo"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
      <span className="text-sm font-medium whitespace-nowrap text-white">
        Website Design and Development
      </span>
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody
          className="justify-between gap-10 border-r border-neutral-200 dark:border-neutral-700"
          header={headerContent}
        >
          <div className="flex flex-1 flex-col overflow-x-hidden bg-white dark:bg-black overflow-y-auto">
            {/* Desktop Header - Only visible on desktop */}
            <div
              className={cn(
                "hidden sm:flex items-center gap-3 px-1 py-2 mt-3 mb-4 w-full rounded-md transition-all duration-300",
                "bg-neutral-200 dark:bg-black text-black dark:text-white",
                open ? "justify-start" : "justify-center"
              )}
            >
              <Image
                src="/images/portfolio/web.jpg"
                alt="Graphics Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              {open && (
                <span className="text-sm font-medium whitespace-pre text-black dark:text-white">
                  Website Design and Development
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

      {/* Desktop Main Content */}
      <motion.main
        animate={{
          marginLeft: open ? "240px" : "64px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden sm:flex flex-1 overflow-y-auto p-6"
      >
        <AnimatePresence mode="wait">
          {contentMap[activeLink] || <Dashboard />}
        </AnimatePresence>
      </motion.main>

      {/* Mobile Main Content */}
      <motion.main
        className="sm:hidden flex-1 overflow-y-auto p-4 w-full"
        style={{ marginTop: "64px" }}
      >
        <AnimatePresence mode="wait">
          {contentMap[activeLink] || <Dashboard />}
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

// ✅ Wrap in Suspense here
export function WebDevSideBarDemo() {
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

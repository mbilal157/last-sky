"use client";

import React, { useState, Suspense, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import WebDesign from "./webdes";
import Image from "next/image";
import CustomWebsiteDevelopment from "./custom";
import UiUx from "./UiUx";
import Landing from "./landing";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Code2,
  MonitorSmartphone,
  LayoutDashboard,
  FileDown,
} from "lucide-react";

type ContentKey =
  | "Custom Website Design"
  | "Responsive Wesite Design"
  | "UI/UX Design"
  | "Landing Pages";

const contentMap: Record<ContentKey, React.ReactNode> = {
  "Custom Website Design": <CustomWebsiteDevelopment />,
  "Responsive Wesite Design": <WebDesign />,
  "UI/UX Design": <UiUx />,
  "Landing Pages": <Landing />,
};

export function WebDevSideBarDemo() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SidebarDemoContent />
    </Suspense>
  );
}

function SidebarDemoContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedItem = searchParams.get("item");

  const updateURL = (label: ContentKey) => {
    router.push(`${pathname}?item=${encodeURIComponent(label)}`, {
      scroll: false,
    });
  };

  const getCategoryFromItem = (item: string | null): ContentKey => {
    if (!item) return "Custom Website Design";
    const lower = item.toLowerCase();

    if (lower.includes("custom")) return "Custom Website Design";
    if (lower.includes("responsive")) return "Responsive Wesite Design";
    if (lower.includes("ui/ux") || lower.includes("uiux"))
      return "UI/UX Design";
    if (lower.includes("landing")) return "Landing Pages";

    return "Custom Website Design";
  };

  const [activeLink, setActiveLink] = useState<ContentKey>(
    getCategoryFromItem(selectedItem)
  );

  useEffect(() => {
    setActiveLink(getCategoryFromItem(selectedItem));
  }, [selectedItem]);

  const [open, setOpen] = useState(false);

  const links: { label: ContentKey; href: string; icon: React.ReactNode }[] = [
    { label: "Custom Website Design", href: "#", icon: <Code2 size={24} /> },
    {
      label: "Responsive Wesite Design",
      href: "#",
      icon: <MonitorSmartphone size={24} />,
    },
    { label: "UI/UX Design", href: "#", icon: <LayoutDashboard size={24} /> },
    { label: "Landing Pages", href: "#", icon: <FileDown size={24} /> },
  ];

  const headerContent = (
    <div className="flex items-center gap-3">
      <Image
        src="/images/portfolio/web.jpg"
        alt="Website Logo"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
      <span className="text-sm font-medium whitespace-nowrap text-black dark:text-white">
        Website Design & Development
      </span>
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody
          className="justify-between gap-10 border-r border-neutral-200 mt-20 "
          header={headerContent}
        >
          <div className="flex flex-1 h-full flex-col overflow-x-hidden  overflow-y-auto">
            {/* Desktop Header */}
            <div
              className={cn(
                "hidden sm:flex items-center gap-3 px-1 py-2 mt-3 mb-4 w-full rounded-md transition-all duration-300",
                "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white",
                open ? "justify-start" : "justify-center"
              )}
            >
              <Image
                src="/images/portfolio/web.jpg"
                alt="Website Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              {open && (
                <span className="text-sm font-medium whitespace-pre text-black dark:text-white">
                  Website Design & Development
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
                      ? "bg-neutral-300 dark:bg-neutral-700 text-black dark:text-white"
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
        animate={{ marginLeft: open ? "240px" : "64px" }}
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

const Dashboard = () => (
  <div className="space-y-6">
    {[...new Array(12)].map((_, idx) => (
      <div
        key={idx}
        className="h-32 animate-pulse rounded-lg bg-gray-200 "
      />
    ))}
  </div>
);

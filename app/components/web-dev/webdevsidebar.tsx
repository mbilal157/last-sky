"use client";

import React, { useState, Suspense, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import WebDesign from "./webdes";
import Image from "next/image";
import {FiCode} from "react-icons/fi";
import CustomWebsiteDevelopment from "./custom";
import UiUx from "./UiUx";
import Landing from "./landing";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
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

  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

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
    <div className="flex items-center gap-3 bg-transparent">
      <Image
        src="/images/portfolio/web.jpg"
        alt="Website Logo"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
      <span className="text-xl font-medium text-sky-400">
        Website Design &<br /> Development
      </span>
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody
          className="justify-between gap-10 mt-20"
          header={headerContent}
        >
          <div className="flex flex-1 h-full flex-col overflow-x-hidden bg-transparent overflow-y-auto">
            {/* Desktop Header */}
            <div
              className={cn(
                "hidden sm:flex items-center gap-3 px-1 py-2 mt-3 mb-4 w-full transition-all duration-300 bg-transparent text-sky-400",
                open ? "justify-start" : "justify-center"
              )}
            >
              <FiCode className="text-sky-400 w-5 h-5" />
              {open && (
                <span className="text-xl font-medium whitespace-pre text-sky-400">
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
                    "transition-all duration-300",
                    activeLink === link.label
                      ? (isDark 
                          ? "!border-l-[3px] !border-l-sky-400 rounded-none border-sky-400 bg-sky-400/15 text-white tracking-wide shadow-[4px_0_24px_rgba(56,189,248,0.15),-2px_0_12px_rgba(56,189,248,0.4)] [&_svg]:text-sky-400" 
                          : "!border-l-[3px] !border-l-sky-400 rounded-none border-sky-400 bg-sky-400/10 text-neutral-900 tracking-wide shadow-[4px_0_24px_rgba(56,189,248,0.15),-2px_0_12px_rgba(56,189,248,0.4)] [&_svg]:text-sky-400")
                      : (isDark 
                          ? "rounded-md text-neutral-400 tracking-wide hover:bg-white/5 hover:text-neutral-200 [&_svg]:text-neutral-500 [&_svg]:hover:text-[#38BDF8]" 
                          : "rounded-md text-neutral-600 tracking-wide hover:bg-black/5 hover:text-neutral-900 [&_svg]:text-neutral-400 [&_svg]:hover:text-[#38BDF8]")
                  )}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Desktop Main Content */}
      <motion.main
        animate={{ marginLeft: open ? "272px" : "96px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden sm:flex flex-1 overflow-y-auto p-6"
      >
        <AnimatePresence mode="wait">
          {contentMap[activeLink] || <Dashboard isDark={isDark} />}
        </AnimatePresence>
      </motion.main>

      {/* Mobile Main Content */}
      <motion.main
        className="sm:hidden flex-1 overflow-y-auto p-4 w-full"
        style={{ marginTop: "64px" }}
      >
        <AnimatePresence mode="wait">
          {contentMap[activeLink] || <Dashboard isDark={isDark} />}
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

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

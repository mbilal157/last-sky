"use client";

import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {FiVideo} from "react-icons/fi";
import { VideoCategory } from "../video-eddting/ContentMap.tsx";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Heart,
  Clapperboard,
  Building2,
  Shirt,
  Type,
  Video,
  Clock,
  Zap,
} from "lucide-react";

type ContentKey =
  | "All"
  | "Typography"
  | "Wedding"
  | "LongVideos"
  | "RealEstate"
  | "Shorts"
  | "Fashion"
  | "Stories";

const contentMap: Record<ContentKey, React.ReactNode> = {
  All: <VideoCategory category="All" />,
  Wedding: <VideoCategory category="Wedding" />,
  Typography: <VideoCategory category="Typography" />,
  LongVideos: <VideoCategory category="LongVideos" />,
  RealEstate: <VideoCategory category="RealEstate" />,
  Shorts: <VideoCategory category="Shorts" />,
  Fashion: <VideoCategory category="Fashion" />,
  Stories: <VideoCategory category="Stories" />,
};

export function VideoSidebarDemo() {
  const [open, setOpen] = useState(false);

  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedItem = searchParams.get("item");

  const updateURL = (label: string) => {
    router.push(`${pathname}?item=${encodeURIComponent(label)}`, {
      scroll: false,
    });
  };

  const getCategoryFromItem = (item: string | null): ContentKey => {
    if (!item) return "All";

    const lower = item.toLowerCase();

    if (lower.includes("fashion")) return "Fashion";
    if (lower.includes("realestate") || lower.includes("real estate"))
      return "RealEstate";
    if (lower.includes("typography")) return "Typography";
    if (lower.includes("wedding")) return "Wedding";
    if (lower.includes("longvideos")) return "LongVideos";
    if (lower.includes("shorts")) return "Shorts";
    if (lower.includes("stories")) return "Stories";

    return "All";
  };

  const [activeLink, setActiveLink] = useState<ContentKey>(
    getCategoryFromItem(selectedItem)
  );

  useEffect(() => {
    setActiveLink(getCategoryFromItem(selectedItem));
  }, [selectedItem]);

  const links: { label: ContentKey; href: string; icon: React.ReactNode }[] = [
    { label: "All", href: "#", icon: <Video /> },
    { label: "Typography", href: "#", icon: <Type /> },
    { label: "Wedding", href: "#", icon: <Heart /> },
    { label: "LongVideos", href: "#", icon: <Clock /> },
    { label: "Shorts", href: "#", icon: <Zap /> },
    { label: "RealEstate", href: "#", icon: <Building2 /> },
    { label: "Fashion", href: "#", icon: <Shirt /> },
    { label: "Stories", href: "#", icon: <Clapperboard /> },
  ];

  const headerContent = (
    <div className="flex items-center gap-3 bg-transparent">
      <FiVideo className="text-sky-400 w-5 h-5" />
      <span className="text-xl font-medium whitespace-nowrap text-sky-400">
        Video Editing
      </span>
    </div>
  );
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex h-screen w-full bg-background text-foreground flex-col lg:flex-row">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody
          className="justify-between mt-20 gap-10"
          header={headerContent}
        >
          <div className="flex flex-1 flex-col overflow-x-hidden bg-transparent overflow-y-auto">
            {/* Top Section */}
            <div
              className={cn(
                "flex items-center gap-3 px-3 py-2 mt-3 mb-4 w-full transition-all duration-300 bg-transparent text-sky-400",
                open ? "justify-start" : "justify-center"
              )}
            >
              <FiVideo className="text-sky-400 w-5 h-5 shrink-0" />
              {open && (
                <span className="text-xl font-medium whitespace-pre text-sky-400">
                  Video Editing
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
      ? "!border-l-[3px] !border-l-sky-400 border-sky-400 rounded-none bg-sky-400/15 text-white tracking-wide shadow-[4px_0_24px_rgba(56,189,248,0.15),-2px_0_12px_rgba(56,189,248,0.4)] [&_svg]:text-sky-400"
      : "!border-l-[3px] !border-l-sky-400 border-sky-400 rounded-none bg-sky-400/10 text-neutral-900 tracking-wide shadow-[4px_0_24px_rgba(56,189,248,0.15),-2px_0_12px_rgba(56,189,248,0.4)] [&_svg]:text-sky-400")
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

      {/* Main Content */}
      <motion.main
        animate={{
          marginLeft: isLargeScreen ? (open ? "272px" : "96px") : "0px",
          marginTop: isLargeScreen ? "0px" : "64px", // Account for mobile sidebar height if it's fixed/sticky
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 overflow-y-auto p-6 mt-16 lg:mt-0"
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

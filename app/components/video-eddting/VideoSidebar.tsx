"use client";

import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { VideoCategory } from "../video-eddting/ContentMap.tsx";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
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
    <div className="flex items-center gap-3">
      <Image
        src="/images/portfolio/video-editing/vedico.jpg"
        alt="Graphic Design Logo"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
      <span className="text-sm font-medium whitespace-nowrap text-black dark:text-white">
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
          className="justify-between mt-20 gap-10 border-r border-neutral-200 dark:border-neutral-700"
          header={headerContent}
        >
          <div className="flex flex-1 flex-col overflow-x-hidden bg-background overflow-y-auto">
            {/* Top Section */}
            <div
              className={cn(
                "flex items-center gap-3 px-3 py-2 mt-3 mb-4 w-full rounded-md transition-all duration-300",
                "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white",
                open ? "justify-start" : "justify-center"
              )}
            >
              {open && (
                <span className="text-sm font-medium whitespace-pre text-black dark:text-white">
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

      {/* Main Content */}
      <motion.main
        animate={{
          marginLeft: isLargeScreen ? (open ? "240px" : "64px") : "0px",
          marginTop: isLargeScreen ? "0px" : "64px", // Account for mobile sidebar height if it's fixed/sticky
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 overflow-y-auto p-6 mt-16 lg:mt-0"
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
        className="h-32 animate-pulse rounded-lg bg-gray-200 dark:bg-neutral-800"
      />
    ))}
  </div>
);

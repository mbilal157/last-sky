"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Navbar from "../NavBar";

interface SidebarContextProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export const Sidebar = ({
  children,
  animate = true,
  open: externalOpen,
  setOpen: externalSetOpen,
}: {
  children: React.ReactNode;
  animate?: boolean;
  open?: boolean;
  setOpen?: (val: boolean) => void;
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = externalOpen ?? internalOpen;
  const setOpen = externalSetOpen ?? setInternalOpen;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const SidebarBody = ({
  className,
  children,
  header,
  ...props
}: React.PropsWithChildren<
  HTMLMotionProps<"div"> & {
    header?: React.ReactNode;
  }
>) => {
  const { open, setOpen, animate } = useSidebar();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  return (
    <>
      {/* Mobile Navbar with Dropdown */}
      <MobileDropdown header={header}>{children}</MobileDropdown>

      {/* Desktop Sidebar - Hidden on Mobile */}
      <div className="hidden sm:block">
        <motion.div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          animate={{
            width: animate ? (open ? "240px" : "64px") : "240px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
  "flex-col fixed left-0 top-4 bottom-4 z-50 rounded-r-2xl transition-all duration-500 ease-out backdrop-blur-3xl border-none overflow-hidden",
  isDark 
    ? "bg-gray-900 shadow-[8px_0_40px_rgba(0,0,0,0.5)] text-neutral-100"
    : "bg-blue-100 bg-blend-luminosity bg-cover bg-center bg-no-repeat shadow-[8px_0_40px_rgba(0,0,0,0.08)] text-neutral-900",
  className
)}
          {...props}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

const MobileDropdown = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Header Bar */}
      <div
        className={cn(
          "sm:hidden flex items-center justify-between w-full h-16 fixed top-20 left-0 right-0 z-50 px-4 shadow-md border-b",
          isDark ? "bg-neutral-900 border-neutral-800 text-white" : "bg-neutral-100 border-neutral-200 text-black"
        )}
      >
        <Navbar />
        <div className="flex items-center justify-start">{header}</div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "rounded-md transition-all",
            isDark ? "hover:bg-neutral-800" : "hover:bg-neutral-200"
          )}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-30 sm:hidden"
              style={{ top: "80px" }}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "fixed left-0 right-0 z-40 shadow-md border-b max-h-[calc(100vh-144px)] overflow-y-auto backdrop-blur-md",
                isDark ? "bg-black/70 border-neutral-800" : "bg-white/70 border-neutral-200"
              )}
              style={{ top: "130px" }}
            >
              <div className="flex flex-col gap-1 px-0 p-2" onClick={handleLinkClick}>
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export const SidebarLink = ({
  link,
  onClick,
  className,
}: {
  link: { label: string; href?: string; icon: React.ReactNode };
  onClick?: () => void;
  className?: string;
}) => {
  const { open } = useSidebar();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  const textColor = isDark ? "text-white" : "text-black";

  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          "hidden sm:flex items-center justify-start gap-3 w-full px-3 py-3 rounded-md transition-all duration-300 overflow-hidden",
          className
        )}
      >
        <div className="shrink-0 flex items-center justify-center w-5 h-5">
          {link.icon}
        </div>

        <motion.span
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            width: open ? "auto" : 0,
          }}
          transition={{ duration: 0.2 }}
          className="text-sm whitespace-nowrap"
        >
          {link.label}
        </motion.span>
      </button>
      {/* Mobile Version */}
      <button
        onClick={onClick}
        className={cn(
          "sm:hidden flex items-center justify-start gap-3 w-full py-3 rounded-md transition-all duration-300",
          className
        )}
      >
        {/* Icon */}
        <div className="shrink-0 flex items-center justify-center w-5 h-5 text-current">
          {link.icon}
        </div>

        {/* Label */}
        <span className="text-sm whitespace-nowrap text-current">
          {link.label}
        </span>
      </button>
    </>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar provider");
  }
  return context;
};

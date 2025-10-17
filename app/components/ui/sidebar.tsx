"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-neutral-900" : "bg-neutral-100";

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
            "h-screen flex-col fixed left-0 top-0 z-50 shadow-md transition-colors duration-300",
            bgColor,
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
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-neutral-900" : "bg-neutral-100";
  const borderColor =
    theme === "dark" ? "border-neutral-800" : "border-neutral-200";

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar - Header Bar */}
      <div
        className={cn(
          "sm:hidden flex items-center justify-between w-full h-16 fixed top-0 left-0 right-0 z-50 px-4 shadow-md transition-colors duration-300 border-b",
          bgColor,
          borderColor
        )}
      >
        <div className="flex items-center justify-start">{header}</div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "p-2 rounded-md transition-all",
            theme === "dark" ? "hover:bg-neutral-800" : "hover:bg-neutral-200"
          )}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-30 sm:hidden"
              style={{ top: "64px" }}
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "fixed left-0 right-0 z-40 shadow-md border-b max-h-[calc(100vh-64px)] overflow-y-auto",
                bgColor,
                borderColor
              )}
              style={{ top: "64px" }}
            >
              <div
                className="flex flex-col gap-1 p-2"
                onClick={handleLinkClick}
              >
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
  link: { label: string; href: string; icon: React.ReactNode };
  onClick?: () => void;
  className?: string;
}) => {
  const { open } = useSidebar();
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const hoverBg =
    theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200";

  return (
    <>
      {/* Desktop Version */}
      <button
        onClick={onClick}
        className={cn(
          "hidden sm:flex items-center justify-start gap-3 w-full px-3 py-3 rounded-md transition-all duration-300 overflow-hidden",
          hoverBg,
          className
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            "shrink-0 flex items-center justify-center w-5 h-5",
            textColor
          )}
        >
          {link.icon}
        </div>

        {/* Label */}
        <motion.span
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            width: open ? "auto" : 0,
          }}
          transition={{ duration: 0.2 }}
          className={cn("text-sm whitespace-nowrap", textColor)}
        >
          {link.label}
        </motion.span>
      </button>

      {/* Mobile Version */}
      <button
        onClick={onClick}
        className={cn(
          "sm:hidden flex items-center justify-start gap-3 w-full px-4 py-3 rounded-md transition-all duration-300",
          hoverBg,
          className
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            "shrink-0 flex items-center justify-center w-5 h-5",
            textColor
          )}
        >
          {link.icon}
        </div>

        {/* Label */}
        <span className={cn("text-sm whitespace-nowrap", textColor)}>
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

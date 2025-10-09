"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
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
  ...props
}: React.PropsWithChildren<HTMLMotionProps<"div">>) => {
  const { open, setOpen, animate } = useSidebar();
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-neutral-900" : "bg-neutral-100";

  return (
    <motion.div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      animate={{
        width: animate ? (open ? "240px" : "64px") : "240px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        // Desktop Sidebar
        "hidden sm:flex h-screen flex-col fixed left-0 top-0 z-50 shadow-md transition-colors duration-300",
        bgColor,
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
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
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:items-center gap-1 sm:gap-2 w-[60px] sm:w-full px-2 py-2 rounded-md transition-all duration-300 overflow-hidden",
        hoverBg,
        className
      )}
    >
      {/* Icon (fixed size) */}
      <div
        className={cn(
          "shrink-0 flex items-center justify-center w-10 h-10 dark:text-white",
          textColor
        )}
      >
        {link.icon}
      </div>

      {/* Label animation (desktop) */}
      <motion.span
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          width: open ? "auto" : 0,
          marginLeft: open ? 8 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "hidden sm:inline-block text-sm whitespace-pre",
          textColor
        )}
      >
        {link.label}
      </motion.span>

      {/* Label for mobile (under icon when hovered) */}
      <motion.span
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          height: open ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "block sm:hidden text-xs text-center dark:text-white",
          textColor
        )}
      >
        {link.label}
      </motion.span>
    </button>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar provider");
  }
  return context;
};

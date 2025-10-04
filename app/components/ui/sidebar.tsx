// ui/sidebar.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";

/** Types */
export interface Links {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

/** Exported hook (single declaration) */
export const useSidebar = (): SidebarContextProps => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within a SidebarProvider");
  return ctx;
};

/** Provider */
export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

/** Convenience wrapper */
export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

/**
 * IMPORTANT:
 * - MotionDivProps uses HTMLMotionProps<"div"> but forces children => ReactNode
 *   so MotionValue* types cannot leak into the children type.
 */
type MotionDivProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode;
};

/** SidebarBody: pass motion props only to DesktopSidebar (motion.div).
 *  Do NOT blindly spread motion props into MobileSidebar (plain div).
 */
export const SidebarBody = (props: MotionDivProps) => {
  return (
    <>
      <DesktopSidebar {...props} />
      {/* Pass only safe props to MobileSidebar (className + children) */}
      <MobileSidebar className={props.className}>
        {props.children}
      </MobileSidebar>
    </>
  );
};

/** Desktop: motion.div -> safe to spread motion props here */
export const DesktopSidebar = ({
  className,
  children,
  ...props
}: MotionDivProps) => {
  const { open, setOpen, animate } = useSidebar();

  return (
    <motion.div
      {...props}
      className={cn(
        "h-screen px-2 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 fixed left-0 top-0 z-50 shadow-lg",
        className
      )}
      animate={{
        width: animate ? (open ? "240px" : "64px") : "240px",
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex flex-col items-start gap-4 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

/** Mobile: plain div. Do NOT spread motion-specific props here. */
export const MobileSidebar = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const { open, setOpen } = useSidebar();

  return (
    <div
      className={cn(
        "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full",
        className
      )}
    >
      <div className="flex justify-end z-20 w-full">
        <IconMenu2
          className="text-neutral-800 dark:text-neutral-200"
          onClick={() => setOpen(!open)}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className={cn(
              "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-8 z-[100] flex flex-col justify-between",
              className
            )}
          >
            <div
              className="absolute right-6 top-6 z-50 text-neutral-800 dark:text-neutral-200"
              onClick={() => setOpen(false)}
            >
              <IconX />
            </div>

            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/** Link - stays the same but children typed as ReactNode inside MotionDivProps avoids leaks */
export const SidebarLink = ({
  link,
  className,
  onClick,
}: {
  link: Links;
  className?: string;
  onClick?: () => void;
}) => {
  const { open, animate } = useSidebar();

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2 w-full text-left",
        className
      )}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre"
      >
        {link.label}
      </motion.span>
    </button>
  );
};

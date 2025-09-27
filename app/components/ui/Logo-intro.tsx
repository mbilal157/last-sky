"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function LogoIntro({ onFinish }: { onFinish: () => void }) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);

  // ensure theme is resolved on client to avoid mismatch/hiding
  useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedTheme = mounted
    ? theme === "system"
      ? systemTheme ?? "light"
      : theme ?? "light"
    : "light";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3800); // 3.8s intro (tweakable)
    return () => clearTimeout(timer);
  }, [onFinish]);

  // don't render animation until mounted (avoids SSR/client mismatch)
  if (!mounted) return null;

  const bgClass = resolvedTheme === "dark" ? "bg-black" : "bg-white";
  const logoSrc =
    resolvedTheme === "dark"
      ? "/images/LogoWhite.png"
      : "/images/LogoBlack.png";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`fixed inset-0 flex items-center justify-center z-[9999] ${bgClass}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            // zoom & fade
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 40 }} // scale increased but reasonable
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: 2.2, delay: 0.9, ease: "easeOut" },
            }}
            className="relative origin-center flex items-center justify-center"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src={logoSrc}
              alt="logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

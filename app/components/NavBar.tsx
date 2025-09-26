"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/images/logo1.png"
      : "/images/logo.png";

  // ModeToggle simplified inline
  const ModeToggle = () => {
    if (!mounted) return null;
    return (
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="p-2 rounded-lg border border-gray-300 dark:border-gray-900 hover:bg-gray-500 dark:hover:bg-gray-900 transition"
        aria-label="Toggle Theme"
      >
        {resolvedTheme === "dark" ? (
          <Moon className="w-5 h-5 text-yellow-300" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500" />
        )}
      </button>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 px-4 md:px-12 flex items-center bg-background text-foreground shadow-md z-50 transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src={logoSrc}
          alt="SLP Logo"
          width={48}
          height={40}
          className="w-12 h-10 object-contain rounded-lg transition-transform duration-200 hover:scale-105"
        />
        <h2 className="text-sm sm:text-base md:text-xl font-semibold transition-colors duration-300">
          The SkyLine Production
        </h2>
      </div>

      {/* desktop links */}
      <div className="hidden md:flex gap-6 ml-auto items-center">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium text-base py-2 group transition-colors duration-300 ${
                isActive
                  ? "text-blue-600"
                  : "text-foreground hover:text-blue-600"
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 origin-left w-0 group-hover:w-full"></span>
              <span className="absolute bottom-[-4px] right-0 h-0.5 bg-blue-500 transition-all duration-300 origin-right w-0 group-hover:w-full"></span>
            </Link>
          );
        })}
        <ModeToggle />
      </div>

      {/* mobile button */}
      <button
        className="ml-auto md:hidden text-foreground"
        onClick={() => setMenuOpen((s) => !s)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* mobile menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-background text-foreground shadow-md md:hidden flex flex-col items-start p-6 gap-4 transition-colors duration-300">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`w-full font-medium text-lg py-2 transition-colors duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-foreground hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="w-full pt-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false); // for mobile dropdown
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Portfolio",
      href: "#portfolio",
      dropdown: [
        { name: "Graphic Design", href: "/portfolio/graphic-design" },
        { name: "Video Editing", href: "/portfolio/video-editing" },
        { name: "Photography", href: "/portfolio/photography" },
        { name: "Animations", href: "/portfolio/animations" },
        {
          name: "Web Design and Development",
          href: "/portfolio/web-design-and-development",
        },
      ],
    },
    { name: "Contact", href: "#contact" },
  ];

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/images/logo1.png"
      : "/images/logo.png";

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
    <nav className="fixed top-0 left-0 w-full h-20 dark:border-white border-b-2 px-4 md:px-12 flex items-center bg-background text-foreground shadow-md z-50 transition-colors duration-300">
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

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 ml-auto items-center">
        {links.map((link) => {
          const isActive = pathname === link.href;

          if (link.dropdown) {
            return (
              <div key={link.name} className="relative group">
                <button
                  className={`flex items-center gap-1 font-medium text-base py-2 transition-colors duration-300 ${
                    isActive
                      ? "text-[#0098ff]"
                      : "text-foreground hover:text-[#068de8]"
                  }`}
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown menu on hover */}
                <div className="absolute left-0 w-48 bg-white  shadow-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-sm dark:bg-black dark:text-white hover:bg-[#0098ff] dark:hover:bg-gray-800"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium text-base py-2 group transition-colors duration-300 ${
                isActive
                  ? "text-[#0098ff]"
                  : "text-foreground hover:text-[#0692ef]"
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

      {/* Mobile button */}
      <button
        className="ml-auto md:hidden text-foreground"
        onClick={() => setMenuOpen((s) => !s)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-background text-foreground shadow-md md:hidden flex flex-col items-start p-6 gap-4 transition-colors duration-300">
          {links.map((link) => {
            const isActive = pathname === link.href;

            if (link.dropdown) {
              return (
                <div key={link.name} className="w-full">
                  <button
                    onClick={() => setPortfolioOpen((o) => !o)}
                    className={`w-full flex justify-between items-center font-medium text-lg py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-blue-600"
                        : "text-foreground hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        portfolioOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {portfolioOpen && (
                    <div className="ml-4 flex flex-col gap-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1 text-base hover:text-blue-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

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

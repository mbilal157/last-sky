"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Footer = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolvedTheme = mounted
    ? theme === "system"
      ? systemTheme ?? "light"
      : theme ?? "light"
    : "light";

  const isDark = resolvedTheme === "dark";

  return (
    <footer
      className={`py-12 text-gray-800 transition-colors duration-300 ${
        isDark ? "bg-black bg-cover bg-center text-gray-100" : "bg-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3
            className={`text-xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            Skyline Production
          </h3>
          <p className={`${isDark ? "text-gray-300" : "text-gray-800"}`}>
            Bringing creativity and technology together — Skyline Production is
            your partner for Videography, Design, Content, and Development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className={`text-xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={`${
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-500"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-500"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`${
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-500"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={`${
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-500"
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-500"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Socials */}
        <div>
          <h3
            className={`text-xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-500"
            }`}
          >
            Contact Us
          </h3>
          <p className={`${isDark ? "text-gray-300" : "text-gray-500"} mb-4`}>
            Email: info@skylineproduction.com
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className={`${
                isDark
                  ? "text-white hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Facebook />
            </a>
            <a
              href="#"
              className={`${
                isDark
                  ? "text-white hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Instagram />
            </a>
            <a
              href="#"
              className={`${
                isDark
                  ? "text-white hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Twitter />
            </a>
            <a
              href="mailto:info@skylineproduction.com"
              className={`${
                isDark
                  ? "text-white hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className={`mt-8 pt-6 text-center text-sm border-t ${
          isDark
            ? "border-gray-600 text-gray-400"
            : "border-gray-700 text-gray-500"
        }`}
      >
        © {new Date().getFullYear()} Skyline Production. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

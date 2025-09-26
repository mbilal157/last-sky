"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function ContactUs() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // avoid SSR/hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedTheme = mounted
    ? theme === "system"
      ? systemTheme ?? "light"
      : theme ?? "light"
    : "light";

  const isDark = resolvedTheme === "dark";

  return (
    <section
      className={`py-20 px-6 transition-colors duration-300 ${
        isDark ? "bg-black text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold text-center mb-4 ${
            isDark ? "text-white" : ""
          }`}
        >
          Contact Us
        </h2>

        {/* Paragraph */}
        <p
          className={`${
            isDark ? "text-gray-300" : "text-gray-600"
          } text-center max-w-2xl mx-auto mb-16`}
        >
          Get in touch with us for any inquiries or to discuss your next
          project. Our team is ready to provide you with the best creative
          solutions.
        </p>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-4 lg:mx-10">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
              <div className="p-3 bg-[#0098ff] rounded-xl w-fit">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : ""
                  }`}
                >
                  Email
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } max-w-sm`}
                >
                  skylineproduction@yahoo.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
              <div className="p-3 bg-[#0098ff] rounded-xl w-fit">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : ""
                  }`}
                >
                  Call us
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } max-w-sm`}
                >
                  +92 302 5070320
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
              <div className="p-3 bg-[#0098ff] rounded-xl w-fit">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : ""
                  }`}
                >
                  Visit us
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } max-w-sm`}
                >
                  13 Street Sector II G1 Islamabad
                </p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="mt-12">
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  isDark ? "text-white" : ""
                }`}
              >
                Follow us on
              </h3>
              <div className="flex gap-4">
                <div className="p-3 bg-[#0098ff] rounded-xl w-fit text-white transition-transform duration-300 hover:rotate-12">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="p-3 bg-[#0098ff] rounded-xl w-fit text-white transition-transform duration-300 hover:rotate-12">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="p-3 bg-[#0098ff] rounded-xl w-fit text-white transition-transform duration-300 hover:rotate-12">
                  <MessageCircle className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`${
              isDark ? "bg-gray-900" : "bg-blue-50"
            } rounded-2xl p-8`}
          >
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`block font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0098ff] transition-colors duration-150 ${
                    isDark
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`block font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0098ff] transition-colors duration-150 ${
                    isDark
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                  placeholder="Your email address"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className={`block font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Service type
                </label>
                <select
                  id="service"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0098ff] transition-colors duration-150 ${
                    isDark
                      ? "bg-gray-800 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="filmography">Filmography</option>
                  <option value="video-graphy">Video Graphy</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="creative-media">
                    Creative Media Solutions
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`block font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0098ff] transition-colors duration-150 ${
                    isDark
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                  placeholder="Tell us about your project"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#0098ff] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

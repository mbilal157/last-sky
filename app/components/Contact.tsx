"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Mail, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { Forminit } from 'forminit';

import Link from "next/link";

export default function ContactUs() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const forminit = new Forminit({ proxyUrl: '/api/forminit' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const { data, redirectUrl, error } = await forminit.submit('6nf4oz8qiab', formData);

      if (error) {
        setStatus("error");
        setErrorMsg(error.message);
        return;
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    }
  };

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
      id="contact"
      className={`py-20 px-6 transition-colors duration-300  ${
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
                  className={`text-xl text-start font-semibold ${
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
                  theskylineproduction@yahoo.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
              <div className="p-2 bg-[#0098ff] rounded-xl w-fit">
                <FaWhatsapp className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <h3
                  className={`text-xl text-start font-semibold ${
                    isDark ? "text-white" : ""
                  }`}
                >
                  Contact us
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } max-w-sm`}
                >
                  +92 308 0444057
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
                <Link
                  href="https://www.instagram.com/theskylineproduction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0098ff] rounded-xl w-fit text-white transition-transform duration-300 hover:rotate-12"
                >
                  <Instagram className="w-6 h-6" />
                </Link>

                <Link
                  href="https://www.facebook.com/TheSkylineProduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0098ff] rounded-xl w-fit text-white transition-transform duration-300 hover:rotate-12"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`${
              isDark ? "bg-gray-900" : "bg-blue-50"
            } rounded-2xl p-8`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  name="fi-sender-fullName"
                  required
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
                  name="fi-sender-email"
                  required
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
                  name="fi-select-service"
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0098ff] transition-colors duration-150 ${
                    isDark
                      ? "bg-gray-800 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="web-development">Web Development</option>
                  <option value="filmography">Photography</option>
                  <option value="video-graphy">Animations</option>
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
                  name="fi-text-message"
                  rows={4}
                  required
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
                disabled={status === "submitting" || status === "success"}
                className={`w-full text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                  status === "success" 
                    ? "bg-green-500 hover:bg-green-600" 
                    : "bg-[#0098ff] hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed"
                }`}
              >
                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  {errorMsg || "Something went wrong. Please try again."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

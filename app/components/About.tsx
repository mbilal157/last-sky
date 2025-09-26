"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Briefcase, Code, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const { theme, systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<string>("light"); // always string
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // safely resolve theme
    const currentTheme =
      theme === "system" ? systemTheme ?? "light" : theme ?? "light";

    setResolvedTheme(currentTheme);
  }, [theme, systemTheme]);

  if (!mounted) {
    return (
      <section className="relative py-16 px-6 md:px-12 bg-white text-gray-800">
        {/* Loading skeleton */}
        <div className="max-w-6xl mx-auto">
          <div className="h-12 bg-gray-200 rounded w-1/3 mb-4 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3 mb-12 mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className={`relative py-16 px-6 md:px-12 transition-colors duration-300 ${
        resolvedTheme === "dark"
          ? "bg-[url('/images/bg3.jpg')] bg-cover bg-center text-gray-100"
          : "bg-white text-gray-800"
      }`}
    >
      {/* Heading + Paragraph */}
      <h2 className="text-4xl font-bold mb-4 text-center">Why Choose Us?</h2>
      <p
        className={`max-w-2xl mb-12 text-center mx-auto ${
          resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        We deliver modern solutions with creativity, helping businesses scale
        through innovation, design, and cutting-edge development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center max-w-6xl mx-auto">
        {/* Left Column - Features */}
        <div className="space-y-6 ml-24">
          {/* Feature 1 */}
          <div className="flex flex-row items-start gap-3 text-left">
            <div className="p-4 bg-[#0098ff] rounded-2xl w-fit">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Professional Approach</h3>
              <p
                className={`max-w-sm ${
                  resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We work with structured processes ensuring smooth project
                delivery.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-row items-start gap-3 text-left">
            <div className="p-4 bg-[#0098ff] rounded-2xl w-fit">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Clean Code</h3>
              <p
                className={`max-w-sm ${
                  resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Our development follows industry best practices to keep your
                product scalable.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-row items-start gap-3 text-left">
            <div className="p-4 bg-[#0098ff] rounded-2xl w-fit">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Trusted by Clients</h3>
              <p
                className={`max-w-sm ${
                  resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Over 100+ businesses have trusted us for their digital journey.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image with Badge */}
        <div className="relative flex justify-center mr-22">
          <Image
            src="/images/whyus.jpg"
            alt="Features"
            width={600}
            height={400}
            className="rounded-2xl h-[26rem] w-[22rem] shadow-lg object-cover"
          />
          <div
            className={`absolute left-6 bottom-0 translate-y-1/2 px-6 py-4 rounded-2xl shadow-lg ${
              resolvedTheme === "dark"
                ? "bg-gray-800 text-blue-300"
                : "bg-white text-[#0098ff]"
            }`}
          >
            <span className="text-sm font-bold">
              100+ <br /> Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Our Vision",
    description:
      "We believe every brand deserves a digital presence that inspires trust and excitement. Our goal is to blend creativity with technology to craft digital experiences that matter.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/about/vision.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Our Vision"
        />
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "We help businesses grow online through modern, responsive, and user-focused web experiences — built to perform beautifully on every device.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/about/mission.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Our Mission"
        />
      </div>
    ),
  },
  {
    title: "Our Process",
    description:
      "From research and strategy to design and deployment, our process is transparent, collaborative, and results-driven.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/about/process.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Our Process"
        />
      </div>
    ),
  },
  {
    title: "Our Impact",
    description:
      "We’ve transformed ideas into digital realities — empowering startups, organizations, and creators to reach their audiences globally.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/about/impact.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Our Impact"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

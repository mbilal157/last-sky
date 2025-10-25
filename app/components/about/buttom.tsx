"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Our Vision",
    description:
      "We believe every brand deserves a digital presence that inspires trust, excitement, and lasting connections. Our vision goes beyond visuals — we aim to create digital ecosystems where design, storytelling, and technology work together seamlessly. By blending creativity with innovation, we help brands express their identity, engage audiences authentically, and build long-term digital impact that stands out in today’s competitive world.",
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
      "We help businesses grow online through modern, responsive, and user-focused web experiences that truly resonate with their audiences. Our mission is to transform every idea into a meaningful digital product — combining aesthetic design with reliable functionality. From small startups to established enterprises, we empower clients with websites that perform beautifully across all devices and strengthen their online presence with measurable results.",
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
      "Our process is built on transparency, collaboration, and strategic execution. We begin with in-depth research and discovery to understand your goals and audience, then move into thoughtful design and development stages that prioritize user experience. Every project is refined through testing and feedback to ensure top performance. From concept to launch, we keep communication open and deliver results that align perfectly with your brand vision.",
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
      "We’ve turned countless ideas into powerful digital realities — helping startups find their voice, organizations scale their reach, and creators share their vision with the world. Our work doesn’t just deliver results; it builds momentum. By leveraging creativity, innovation, and strategy, we empower our clients to engage their audiences globally and create lasting impact across industries and platforms.",
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
    <div className="w-full hero-background">
      <StickyScroll content={content} />
    </div>
  );
}

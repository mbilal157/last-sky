"use client";

import AboutPage from ".";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Skyline Production",
  description:
    "Learn more about Skyline Production — a creative team passionate about design, development, and innovation. Discover our story, mission, and the values that drive our work.",
};

export default function Video() {
  return <AboutPage />;
}

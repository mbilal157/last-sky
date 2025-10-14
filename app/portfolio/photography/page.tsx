"use client";

import VideoSidebarDemo from ".";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Photography Services",
  description:
    "Capture moments that matter with our professional photography services. We deliver stunning, high-quality images that reflect your vision and leave a lasting impression.",
};

export default function Video() {
  return <VideoSidebarDemo />;
}

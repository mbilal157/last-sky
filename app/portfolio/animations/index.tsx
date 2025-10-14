"use client";

import { Suspense } from "react";
import { AnimationSideBarDemo } from "@/app/components/animations/animationSideBar";

export default function VideoSidebarDemo() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <AnimationSideBarDemo />
    </Suspense>
  );
}

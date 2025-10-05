"use client";

import { Suspense } from "react";
import { PhotoSideBarDemo } from "@/app/components/photography/PhographySide";

export default function VideoSidebarDemo() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <PhotoSideBarDemo />
    </Suspense>
  );
}

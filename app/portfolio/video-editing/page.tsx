"use client";

import { Suspense } from "react";
import { VideoSidebarDemo as VideoSidebarDemoInner } from "../../components/video-eddting/VideoSidebar";

export default function VideoSidebarDemo() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <VideoSidebarDemoInner />
    </Suspense>
  );
}

"use client";

import { Suspense } from "react";
import { WebDevSideBarDemo } from "@/app/components/web-dev/webdevsidebar";

export default function VideoSidebarDemo() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <WebDevSideBarDemo />
    </Suspense>
  );
}

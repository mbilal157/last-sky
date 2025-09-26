"use client";

import Navbar from "@/app/components/NavBar";
import { VideoSidebarDemo } from "@/app/components/video-eddting/VideoSidebar";

const ClaimSubmissionContent = () => {
  return (
    <>
      <Navbar />

      <div className="mt-20">
        {/* 👆 pushes SidebarDemo down by 4rem (64px) so it clears Navbar */}
        <VideoSidebarDemo />
      </div>
    </>
  );
};

export default ClaimSubmissionContent;

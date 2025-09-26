"use client";

import Navbar from "@/app/components/NavBar";
import { SidebarDemo } from "@/app/components/graphic-design/GraphicSideBar";

const ClaimSubmissionContent = () => {
  return (
    <>
      <Navbar />

      <div className="mt-20">
        {/* 👆 pushes SidebarDemo down by 4rem (64px) so it clears Navbar */}
        <SidebarDemo />
      </div>
    </>
  );
};

export default ClaimSubmissionContent;

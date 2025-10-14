import VideoSidebarDemo from "./index";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Video Editing Services",
  description:
    "Enhance your visuals with our expert video editing services. We craft engaging, cinematic, and high-quality videos that tell your story and captivate your audience.",
};

export default function Video() {
  return <VideoSidebarDemo />;
}

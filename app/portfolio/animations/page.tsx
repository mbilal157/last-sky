import VideoSidebarDemo from "./index";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Animation Services",
  description:
    "Bring stories and ideas to life with our professional animation services. We design engaging 2D and 3D animations that capture attention and deliver your message with impact.",
};

export default function Video() {
  return <VideoSidebarDemo />;
}

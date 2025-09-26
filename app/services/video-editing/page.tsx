import VideoEditingContent from ".";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Editing Services | SkyLine Production",
  description:
    "Professional video editing services including reels, corporate promos, event highlights, motion graphics, and typography videos.",
};

export default function VideoEditingPage() {
  return <VideoEditingContent />;
}

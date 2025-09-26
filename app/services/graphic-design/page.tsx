import GraphicDesignContent from ".";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Design Services | SkyLine Production",
  description:
    "Creative graphic design solutions including logos & branding, posters & flyers, business cards, custom illustrations, and social media graphics.",
};

export default function GraphicDesignPage() {
  return <GraphicDesignContent />;
}

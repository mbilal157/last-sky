"use client";

import Image from "next/image";

interface CardProps {
  src: string;
  type: "h" | "v";
  className?: string;
}

const Card = ({ src, className }: CardProps) => (
  <div
    className={`overflow-hidden rounded-2xl shadow-md w-full h-full ${className}`}
  >
    <Image
      src={src}
      alt="Grid Image"
      width={800}
      height={800}
      className="w-full h-full object-cover"
    />
  </div>
);

export default function CinematicGrid() {
  return (
    <div className="grid gap-4 p-6 pt-14 max-w-7xl mx-auto">
      {/* 1️⃣ Row 1 */}
      <div className="grid grid-cols-3 gap-4 h-[65vh]">
        <Card src="/images/portfolio/photos/v1.jpg" type="v" />
        <Card src="/images/portfolio/photos/v2.jpg" type="v" />
        <div className="flex flex-col gap-4 h-full">
          <Card
            src="/images/portfolio/photos/h2.jpg"
            type="h"
            className="h-1/2"
          />
          <Card
            src="/images/portfolio/photos/h1.jpg"
            type="h"
            className="h-1/2"
          />
        </div>
      </div>

      {/* 2️⃣ Row 2 */}
      <div className="h-[60vh] mt-28">
        <Card
          src="/images/portfolio/photos/h4.jpg"
          type="h"
          className="w-full h-full"
        />
      </div>

      {/* 3️⃣ Row 3 */}
      <div className="grid grid-cols-3 gap-4 h-[70vh]">
        <Card src="/images/portfolio/photos/v3.jpg" type="v" />
        <div className="flex flex-col gap-4 h-full">
          <Card
            src="/images/portfolio/photos/h3.jpg"
            type="h"
            className="h-1/2"
          />
          <Card
            src="/images/portfolio/photos/h2.jpg"
            type="h"
            className="h-1/2"
          />
        </div>
        <Card src="/images/portfolio/photos/v4.jpg" type="v" />
      </div>

      {/* 4️⃣ Row 4 */}
      <div className="grid mt-24 grid-cols-[0.9fr_1.1fr] gap-4 h-[60vh]">
        <Card src="/images/portfolio/photos/v5.jpg" type="v" />
        <Card src="/images/portfolio/photos/v6.jpg" type="v" />
      </div>

      {/* 5️⃣ Row 5 */}
      <div className="grid grid-cols-[1.3fr_0.9fr] gap-4 h-[55vh]">
        <Card src="/images/portfolio/photos/h1.jpg" type="h" />
        <Card src="/images/portfolio/photos/h4.jpg" type="h" />
      </div>

      {/* 6️⃣ Row 6 */}
      <div className="grid grid-cols-3 gap-4 h-[70vh]">
        <Card src="/images/portfolio/photos/v7.jpg" type="v" />
        <Card src="/images/portfolio/photos/v8.jpg" type="v" />
        <div className="flex flex-col gap-4 h-full">
          <Card
            src="/images/portfolio/photos/h3.jpg"
            type="h"
            className="h-1/2"
          />
          <Card
            src="/images/portfolio/photos/h2.jpg"
            type="h"
            className="h-1/2"
          />
        </div>
      </div>

      {/* 7️⃣ Row 7 */}
      <div className="h-[65vh] mt-20">
        <Card
          src="/images/portfolio/photos/h1.jpg"
          type="h"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

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
      height={900}
      unoptimized
      className="w-full h-full object-cover"
    />
  </div>
);

export default function WebDesign() {
  return (
    <div className="grid gap-4 p-6 pt-14 max-w-7xl mx-auto">
      {/*  Row 1 */}
      <div className="h-[95vh] mt-14">
        <Card
          src="/images/portfolio/web/web1.jpg"
          type="h"
          className="w-full h-full"
        />
      </div>
      {/*  Row 2 */}
      <div className="h-[95vh] mt-12">
        <Card
          src="/images/portfolio/web/web2.jpg"
          type="h"
          className="w-full h-full"
        />
      </div>
      {/*  Row 3 */}
      <div className="h-[95vh] mt-12">
        <Card
          src="/images/portfolio/web/web3.jpg"
          type="h"
          className="w-full h-full"
        />
      </div>
      {/*  Row 4 */}
      <div className="h-[95vh] mt-12">
        <Card
          src="/images/portfolio/web/web4.jpg"
          type="h"
          className="w-full h-full"
        />
      </div>
      {/*  Row 5 */}
      <div className="h-[95vh] mt-12">
        <Card
          src="/images/portfolio/web/web5.jpg"
          type="h"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

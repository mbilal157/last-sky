"use client";

import Image from "next/image";

interface CardProps {
  src: string;
  type: "h";
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
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-foreground text-center">
        Responsive Web Design
      </h1>

      {/* Subheading (Project Title) */}
      <p className="text-lg md:text-xl font-semibold text-black dark:text-white text-center mb-4">
        Every brand has a story — we bring that story online through stunning,
        responsive web experiences. Below are some of our recent website
        projects created to match our client&apos;s unique goals and business
        needs.
      </p>
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

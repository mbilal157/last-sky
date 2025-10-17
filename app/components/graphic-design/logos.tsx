"use client";

import Image from "next/image";

interface CardProps {
  src: string;
  className?: string;
}

const Card = ({ src, className }: CardProps) => (
  <div
    className={`overflow-hidden rounded-2xl shadow-md w-full h-full ${className}`}
  >
    <Image
      src={src}
      alt="Logos Images"
      width={800}
      height={900}
      unoptimized
      className="w-full h-full object-cover"
    />
  </div>
);

export default function Logos() {
  return (
    <div className="grid gap-8 p-6 pt-14 mt-10 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-foreground text-center">
        Logos and Branding
      </h1>

      {/* -------------------- DASHBOARD SECTION -------------------- */}
      {/* -------------------- NOOR-E-ISLAM BRANDING SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Noor-e-Islam Branding
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          For Noor-e-Islam’s digital presence, we crafted a unique and
          harmonious color scheme to deliver a clean, modern, and elegant look.
          The branding emphasizes simplicity, clarity, and spiritual essence —
          ensuring a visual identity that feels both professional and deeply
          meaningful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/logos/ns.png" />
        </div>
      </section>
    </div>
  );
}

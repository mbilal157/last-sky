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
      alt="UI Template Image"
      width={800}
      height={900}
      unoptimized
      className="w-full h-full object-cover"
    />
  </div>
);

export default function UiUx() {
  return (
    <div className="grid gap-8 p-6 pt-14 mt-10 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-foreground text-center">
        UI/UX Templates
      </h1>

      {/* -------------------- DASHBOARD SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Dashboard Templates
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          Clean and data-driven dashboard designs built for analytics,
          performance tracking, and modern admin experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/web/dash3.jpg" />
          <Card src="/images/portfolio/web/dash2.jpg" />
          <Card src="/images/portfolio/web/dash1.jpg" />
        </div>
      </section>

      {/* -------------------- LOGIN SECTION -------------------- */}
      <section className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Login Templates
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          Minimal and intuitive login, signup, and authentication pages designed
          for simplicity, security, and user trust.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/web/log1.jpg" />
          <Card src="/images/portfolio/web/log5.jpg" />
          <Card src="/images/portfolio/web/log4.jpg" />
          <Card src="/images/portfolio/web/log2.jpg" />
          <Card src="/images/portfolio/web/log3.jpg" />
        </div>
      </section>

      {/* -------------------- TESTIMONIAL SECTION -------------------- */}
      <section className="mt-20 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Testimonial Templates
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          Engaging testimonial layouts that showcase user stories and feedback
          beautifully, enhancing trust and brand reputation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card src="/images/portfolio/web/test1.jpg" />
          <Card src="/images/portfolio/web/test2.jpg" />
          <Card src="/images/portfolio/web/test3.jpg" />
        </div>
      </section>
    </div>
  );
}

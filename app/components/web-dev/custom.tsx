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
      alt="Project Preview"
      width={1200}
      height={800}
      className="w-full h-full object-cover"
      priority
    />
  </div>
);

export default function CustomWebsiteDevelopment() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto text-center space-y-32">
      {/* Project 1 */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-foreground text-center">
          Project 1
        </h1>

        {/* Subheading (Project Title) */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white text-center mb-4">
          Camping Website Design
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Our client wanted a modern, responsive, and visually captivating
          website to represent their brand digitally. We took their vision and
          transformed it into a stunning, fully functional web experience —
          optimized for both performance and aesthetics.
        </p>
        <div className="h-[95vh] mt-14">
          <Card
            src="/images/portfolio/web/custom1.jpg"
            type="h"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Project 2 */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-foreground text-center">
          Project 2
        </h1>

        {/* Subheading (Project Title) */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white  text-center mb-4">
          E-Commerce Website Development & Design
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          The client requested a powerful online store with easy navigation,
          real-time product updates, and a clean user interface. Our team built
          a sleek, high-performance e-commerce platform tailored for seamless
          shopping and a delightful user experience.
        </p>
        <div className="h-[95vh] mt-14">
          <Card
            src="/images/portfolio/web/custom2.jpg"
            type="h"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Project 3 */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-foreground text-center">
          Project 3
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white text-center mb-4">
          Premium Mango Export Website Design & Development
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          The client required a professional platform to showcase and export
          fresh, high-quality mangoes worldwide. Our team developed a visually
          appealing, fast, and user-friendly website that highlights product
          quality, simplifies international orders, and builds global trust for
          smooth export operations.
        </p>
        <div className="h-[95vh] mt-14">
          <Card
            src="/images/portfolio/web/custom3.jpg"
            type="h"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

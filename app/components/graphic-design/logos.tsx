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
    <div className="grid gap-8 pt-14 mt-5 sm:mt-5 max-w-7xl mx-auto">
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

      {/* -------------------- DASHBOARD SECTION -------------------- */}
      {/* -------------------- SENI CAPTURES BRANDING SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Seni Captures Branding
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          For Seni Captures, we developed a refined and expressive visual
          identity that reflects creativity, emotion, and authenticity. The
          branding focuses on a modern yet timeless aesthetic — balancing
          minimalism with artistic warmth to highlight the brand’s dedication to
          capturing real moments with beauty and soul.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/logos/logo2.png" />
        </div>
      </section>

      {/* -------------------- DASHBOARD SECTION -------------------- */}
      {/* -------------------- SYNCOR BRANDING SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Syncor Branding
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          For Syncor, we designed a bold and cohesive branding identity that
          merges style with confidence. The visual direction emphasizes
          sophistication, versatility, and modern fashion sensibilities —
          ensuring that every outfit and product reflects a sense of quality,
          innovation, and individuality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/logos/logo3.png" />
        </div>
      </section>

      {/* -------------------- DASHBOARD SECTION -------------------- */}
      {/* -------------------- METEX TECHNOLOGY BRANDING SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Metex Technology Branding
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          For Metex, we built a forward-thinking branding identity that
          represents innovation, reliability, and technological excellence. The
          design language focuses on clean structure, modern typography, and a
          dynamic color palette — reflecting Metex’s commitment to driving
          progress, empowering businesses, and shaping the future through
          technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/logos/logo4.png" />
        </div>
      </section>

      {/* -------------------- SKYLINE PRODUCTION BRANDING SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Skyline Production Branding
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          For Skyline Production, we created a cinematic and dynamic branding
          identity that captures the spirit of creativity and visual
          storytelling. The design emphasizes bold aesthetics, smooth motion,
          and a professional tone — reflecting the brand’s dedication to
          producing high-quality visuals, engaging narratives, and impactful
          media experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/logos/logo6.png" />
        </div>
      </section>

      {/* -------------------- DASHBOARD SECTION -------------------- */}
      {/* -------------------- MISAL LIBAS BRANDING SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Misal Libas Branding
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          For Misal Libas, we developed an elegant and culturally inspired
          branding identity that blends tradition with modern fashion. The
          design highlights refined typography, graceful color tones, and
          timeless aesthetics — reflecting the brand’s dedication to quality
          craftsmanship, modest elegance, and contemporary style for every
          occasion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/logos/logo7.png" />
        </div>
      </section>

      {/* -------------------- TRXEY BRANDING SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          TRXEY Branding
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          For TRXEY, we crafted a bold and futuristic branding identity that
          unites digital precision with industrial strength. The design concept
          emphasizes sleek typography, metallic textures, and a cutting-edge
          aesthetic — symbolizing TRXEY’s expertise in blending web innovation
          with powerful, modern design and craftsmanship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/logos/logo8.png" />
        </div>
      </section>
      {/* -------------------- BARES CONSTRUCTS BRANDING SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Bares Constructs
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          For Bares Constructs, we developed a strong and modern brand identity
          that reflects reliability, precision, and craftsmanship. The design
          concept highlights bold typography, earthy tones, and structural
          visuals — representing Bares Constructs’ commitment to building
          excellence, durability, and trust in every project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/logos/logo9.png" />
        </div>
      </section>
      {/* -------------------- SIPPP DRINKS BRANDING SECTION -------------------- */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Sippp Drinks
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8">
          For Sippp Drinks, we created a refreshing and energetic brand identity
          that captures the spirit of modern beverages. The design emphasizes
          vibrant colors, playful typography, and fluid shapes — symbolizing
          freshness, creativity, and the joy of every sip.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Card src="/images/portfolio/logos/logo1.png" />
        </div>
      </section>
    </div>
  );
}

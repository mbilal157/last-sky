import { FocusCards } from "../ui/hover-card";

export function Logos() {
  // Transform the logos array to match the expected format for FocusCards
  const cards = logos.map((logo, index) => ({
    title: `Thumbnail ${index + 1}`,
    src: logo.image,
  }));

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-white">
        Logos
      </h2>
      <FocusCards cards={cards} />
    </div>
  );
}

export const logos = [
  { image: "/images/portfolio/logos/logicard.png" },
  { image: "/images/portfolio/logos/LOGO (2).png" },
  { image: "/images/portfolio/logos/LOGO (3).png" },
  { image: "/images/portfolio/logos/LOGO (4).png" },
  { image: "/images/portfolio/logos/LOGO (6).png" },
  { image: "/images/portfolio/logos/LOGO (7).png" },
  { image: "/images/portfolio/logos/LOGO (8).png" },
  { image: "/images/portfolio/logos/LOGO (9).png" },
  { image: "/images/portfolio/logos/LOGO (10).png" },
  { image: "/images/portfolio/logos/LOGOCARD.png" },
];

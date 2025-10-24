"use client";
import { StickyScrollRevealDemo } from "../components/about/buttom";
const AboutPage = () => {
  return (
    <>
      <div className=" px-6 md:px-12 lg:px-24">
        {/* Heading + Intro Section */}
        <div className="text-center max-w-3xl mt-40 mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-8 mb-6">
            About <span className="text-[#0098ff]">Skyline Production</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At Skyline Production, we transform ideas into powerful visuals that
            inspire and engage. From graphic design to cinematic editing, we
            bring creativity and precision together to deliver content that
            makes your brand shine in today’s digital-first world.
          </p>
        </div>
      </div>
      <StickyScrollRevealDemo />
    </>
  );
};

export default AboutPage;

"use client";

import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card";
import { WavyBackground } from "@/app/components/ui/wav-bg";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const instructors = [
    {
      id: 1,
      name: 'Taimoor Qaiser',
      designation: 'Founder & CEO',
      image: '/images/team/tm.jpeg',
      description: "Taimoor drives vision, strategy, and overall direction. Focused on growth, positioning, and high-value opportunities. Makes decisions that scale the business, not just maintain it. Leads with clarity and long-term thinking."
    },
    {
      id: 2,
      name: 'Muhammad Ibtisam',
      designation: 'Co-Founder & COO',
      image: '/images/team/ibtisam.jpg',
      description: "Ibtisam runs operations with strict execution focus. Manages workflows, team coordination, and delivery timelines. Ensures projects don't stall and resources are used efficiently. Keeps the company structured and moving forward."
    },
    {
      id: 3,
      name: 'Bilal Shahid',
      designation: 'Full Stack Developer',
      image: '/images/team/bilal.jpg',
      description: "Bilal specializes in building reliable and efficient full-stack systems. Skilled in both frontend UI and backend logic. Prioritizes speed, responsiveness, and clean architecture. Consistently delivers stable and maintainable solutions."
    },
    {
      id: 4,
      name: 'Muhammad Zohaib',
      designation: 'Full Stack Developer',
      image: '/images/team/zohaib.jpg',
      description: "Zohaib builds scalable web applications from front to back without breaking structure. Strong grip on modern frameworks, APIs, and database architecture. Focused on performance, clean code, and real-world usability. Handles both development and problem-solving under pressure."
    },
    {
      id: 5,
      name: 'Musab Ali',
      designation: 'Video Editor',
      image: '/images/team/musab.jpg',
      description: "Musab is a detail-obsessed video editor focused on clean cuts and strong storytelling. He understands pacing, transitions, and audience retention. Experienced with modern editing tools and fast turnaround workflows. Delivers polished, platform-ready content consistently."
    },
    {
      id: 6,
      name: 'Zayan Khan',
      designation: 'Video Editor',
      image: '/images/team/zayan.jpeg',
      description: "Zayan focuses on engaging edits with strong visual flow. Skilled in motion, cuts, and content pacing. Understands trends and platform-specific editing styles. Delivers content that holds attention."
    },
    {
      id: 7,
      name: 'Zain Ali',
      designation: 'Videographer',
      image: '/images/team/zain.jpeg',
      description: "Zain captures high-quality visuals with strong composition and lighting. Experienced in shooting professional-grade footage for multiple formats. Focuses on clarity, framing, and storytelling through camera work. Delivers raw footage that's edit-ready."
    },
    {
      id: 8,
      name: 'Anya',
      designation: 'UI/UX Designer',
      image: '/images/team/anya.jpeg',
      description: "Anya designs clean, user-focused interfaces that actually convert. Strong sense of layout, color, and usability. Focused on creating smooth user experiences, not just visuals. Turns ideas into intuitive digital products."
    },
    {
      id: 9,
      name: 'Sobia Khan',
      designation: 'Hiring Manager',
      image: '/images/team/sobia.jpeg',
      description: "Sobia handles recruitment with precision and speed. Identifies talent that fits both skill and culture. Manages hiring pipelines and onboarding efficiently. Ensures the team grows with the right people."
    },
  ];


export default function OurTeamPage() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  return (
    <section className="w-full min-h-screen bg-transparent transition-colors duration-300">
      <div className="relative h-[40rem] overflow-hidden flex items-center pb-25 justify-center">
          <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
              <h2 className={`text-2xl md:text-4xl lg:text-7xl font-bold text-center mb-8 ${isDark ? "text-white" : "text-black"}`}> Meet Our Expert Team</h2>
              <p className={`text-base md:text-lg text-center mb-4 ${isDark ? "text-white" : "text-black"}`}> A relentless team of creators, developers, and strategists obsessed with delivering unparalleled digital experiences.</p>
              <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <AnimatedTooltip items={instructors} />
              </div>
          </WavyBackground>
      </div>
      <div className="border-t border-black/10 dark:border-white/20">
        <Footer/>
      </div>
    </section>
  );
}

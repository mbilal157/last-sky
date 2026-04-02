"use client";

import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card";
import { WavyBackground } from "@/app/components/ui/wav-bg";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const team = [
  {
    name: "Taimoor Qaiser",
    role: "Founder & CEO",
    image: "/images/team/taimoor.jpg",
    description: "Taimoor drives vision, strategy, and overall direction. Focused on growth, positioning, and high-value opportunities. Makes decisions that scale the business, not just maintain it. Leads with clarity and long-term thinking."
  },
  {
    name: "Muhammad Ibtisam",
    role: "Co-Founder & COO",
    image: "/images/team/ibtisam.jpg",
    description: "Ibtisam runs operations with strict execution focus. Manages workflows, team coordination, and delivery timelines. Ensures projects don't stall and resources are used efficiently. Keeps the company structured and moving forward."
  },
  {
    name: "Bilal Shahid",
    role: "Full Stack Developer",
    image: "/images/team/bilal.jpg",
    description: "Bilal specializes in building reliable and efficient full-stack systems. Skilled in both frontend UI and backend logic. Prioritizes speed, responsiveness, and clean architecture. Consistently delivers stable and maintainable solutions."
  },
  {
    name: "Muhammad Zohaib",
    role: "Full Stack Developer",
    image: "/images/team/zohaib.jpg",
    description: "Zohaib builds scalable web applications from front to back without breaking structure. Strong grip on modern frameworks, APIs, and database architecture. Focused on performance, clean code, and real-world usability. Handles both development and problem-solving under pressure."
  },
  {
    name: "Musab Ali",
    role: "Video Editor",
    image: "/images/team/musab.jpg",
    description: "Musab is a detail-obsessed video editor focused on clean cuts and strong storytelling. He understands pacing, transitions, and audience retention. Experienced with modern editing tools and fast turnaround workflows. Delivers polished, platform-ready content consistently."
  },
  {
    name: "Zayan Khan",
    role: "Video Editor",
    image: "/images/team/zayan.jpeg",
    description: "Zayan focuses on engaging edits with strong visual flow. Skilled in motion, cuts, and content pacing. Understands trends and platform-specific editing styles. Delivers content that holds attention."
  },
  {
    name: "Zain Ali",
    role: "Videographer",
    image: "/images/team/zain.jpeg",
    description: "Zain captures high-quality visuals with strong composition and lighting. Experienced in shooting professional-grade footage for multiple formats. Focuses on clarity, framing, and storytelling through camera work. Delivers raw footage that's edit-ready."
  },
  {
    name: "Anya ",
    role: "UI/UX Designer",
    image: "/images/team/anya.jpeg",
    description: "Anya designs clean, user-focused interfaces that actually convert. Strong sense of layout, color, and usability. Focused on creating smooth user experiences, not just visuals. Turns ideas into intuitive digital products."
  },
  {
    name: "Sobia Khan",
    role: "Hiring Manager",
    image: "/images/team/sobia.jpeg",
    description: "Sobia handles recruitment with precision and speed. Identifies talent that fits both skill and culture. Manages hiring pipelines and onboarding efficiently. Ensures the team grows with the right people."
  }
];
const instructors = [
    {
      id: 1,
      name: 'Taimoor Qaiser',
      designation: 'Founder & CEO',
      image:
        '/images/team/tm.jpeg',
    },
    {
      id: 2,
      name: 'Muhammad Ibtisam',
      designation: 'Co-Founder & COO',
      image:
      '/images/team/ibtisam.jpg',
    },
    {
      id: 3,
      name: 'Bilal Shahid',
      designation: 'Full Stack Developer',
      image:
        '/images/team/bilal.jpg',
    },
    {
      id: 4,
      name: 'Muhammad Zohaib',
      designation: 'Full Stack Developer',
      image:
        '/images/team/zohaib.jpg',
    },
    {
      id: 5,
      name: 'Musab Ali',
      designation: 'Video Editor',
      image:
        '/images/team/musab.jpg',
    },
    {
      id: 6,
      name: 'Zayan Khan',
      designation: 'Video Editor',
      image:
        '/images/team/zayan.jpeg',
    },
    {
      id: 7,
      name: 'Zain Ali',
      designation: 'Videographer',
      image:
        '/images/team/zain.jpeg',
    },
    {
      id: 8,
      name: 'Anya',
      designation: 'UI/UX Designer',
      image:
        '/images/team/anya.jpeg',
    },
    {
      id: 9,
      name: 'Sobia Khan',
      designation: 'Hiring Manager',
      image:
        '/images/team/sobia.jpeg',
    },
  ];


export default function OurTeamPage() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"));

  return (
    <section className="w-full pt-32 pb-20 px-4 min-h-screen bg-transparent transition-colors duration-300">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10 space-y-4">
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-neutral-900"}`}>
          Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Visionaries</span>
        </h1>
        <p className={`max-w-3xl mx-auto text-lg md:text-xl pb-8 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
          A relentless team of creators, developers, and strategists obsessed with delivering unparalleled digital experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {team.map((member, index) => (
          <CardContainer key={index} className="inter-var w-full">
            <CardBody className="bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl relative group/card hover:shadow-2xl hover:shadow-sky-500/[0.1] border border-black/[0.05] dark:border-white/[0.1] w-full h-full rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between !h-auto">
              
              <div>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-neutral-800 dark:text-white"
                >
                  {member.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sky-500 font-semibold text-sm mt-1 uppercase tracking-wider"
                >
                  {member.role}
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mt-6 mb-6">
                  <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden group-hover/card:shadow-xl transition-all bg-neutral-100 dark:bg-neutral-800/20">
                    {member.image.startsWith("/") ? (
                      <Image
                        src={member.image}
                        height={600}
                        width={600}
                        className="h-full w-full object-cover object-top group-hover/card:scale-105 transition-transform duration-700 ease-out"
                        alt={member.name}
                      />
                    ) : (
                      <img
                        src={member.image}
                        className="h-full w-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-out"
                        alt={member.name}
                      />
                    )}
                    {/* Subtle Gradient overlay element inside the image box */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  </div>
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-neutral-600 dark:text-neutral-300 text-sm leading-loose"
                >
                  {member.description}
                </CardItem>
              </div>

            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
          <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
              <h2 className={`text-2xl md:text-4xl lg:text-7xl font-bold text-center mb-8 ${isDark ? "text-white" : "text-black"}`}> Meet Our Expert Team</h2>
              <p className={`text-base md:text-lg text-center mb-4 ${isDark ? "text-white" : "text-black"}`}> Our team of skilled mentors brings real-world experience and guidance to elevate your journey.</p>
              <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <AnimatedTooltip items={instructors} />
              </div>
          </WavyBackground>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import HeroSection from "./components/Hero";
import AboutUs from "./components/AboutUs";
import FeaturesSection from "./components/About";
import CreativeServices from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import CursorCircle from "./components/ui/cusor";
import LogoIntro from "./components/ui/Logo-intro";
import ReviewsSection from "./components/Reviews";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  // ✅ Check if intro was already shown (persisted in localStorage)
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("introDone");
    if (hasSeenIntro) {
      setIntroDone(true);
    }
  }, []);

  const handleIntroFinish = () => {
    setIntroDone(true);
    localStorage.setItem("introDone", "true");
  };

  return (
    <>
      <Head>
        <title>
          The Skyline Production | Web Design, Photography & Video Editing
        </title>
        <meta
          name="description"
          content="The Skyline Production offers creative web design, photography, animation, and video editing services that bring your brand to life."
        />
        <meta
          name="keywords"
          content="Skyline Production, Web Design, Video Editing, Photography, Animations, Branding, Creative Agency"
        />
        <link rel="canonical" href="https://www.theskylineproduction.com/" />
      </Head>
      {/* Intro animation (runs only once per site load) */}
      {!introDone && <LogoIntro onFinish={handleIntroFinish} />}

      <AnimatePresence>
        {introDone && (
          <motion.div
            key="homepage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <HeroSection />
            <CursorCircle />
            <AboutUs />
            <FeaturesSection />
            <CreativeServices />
            <Portfolio />
            <ReviewsSection />
            <ContactUs />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

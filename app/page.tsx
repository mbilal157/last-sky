"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

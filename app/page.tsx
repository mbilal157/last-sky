"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "./components/Hero";
import AboutUs from "./components/AboutUs";
import FeaturesSection from "./components/About";
import CreativeServices from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import CursorCircle from "./components/ui/cusor";

// ✅ Updated LogoIntro now uses ResumeIconBox (cut-out resume icon)
import LogoIntro from "./components/ui/Logo-intro";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {/* Intro animation (runs once) */}
      {!introDone && <LogoIntro onFinish={() => setIntroDone(true)} />}

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
            <ContactUs />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

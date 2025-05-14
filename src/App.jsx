import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Hero, Work, Connect } from "./sections";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProjectDetailsScroll from "./pages/ProjectDetailsScroll";
import { motion, useIsPresent, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { SmitLogo } from "./assets/logos";
import { useGoogleAnalytics } from "./components";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  useGoogleAnalytics();

  const location = useLocation();

  const isPresent = useIsPresent();

  useEffect(() => {
    // Set scroll position to the top without animation
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Disable automatic scroll restoration using history.replaceState
    history.replaceState(null, null, location.pathname);
  }, [location.pathname, history]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="flex flex-col items-center w-full h-full bg-primary ">
      <Nav scrollToSection={scrollToSection} />

      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />

            <Route
              path="/"
              element={<Home scrollToSection={scrollToSection} />}
            />

            <Route path="/projects/:id" element={<ProjectDetailsScroll />} />
          </Routes>
        </AnimatePresence>
      </div>

      <div id="connect" className="w-full  bg-[#1f1f1f] lg:mt-40 mt-20">
        <Connect />
      </div>

      <Analytics />
    </main>
  );
}

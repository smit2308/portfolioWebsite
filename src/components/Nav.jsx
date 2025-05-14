import React from "react";
// import {headerLogo} from '../assets/images'
// import {hamburger} from '../assets/icons'
import { navLinks } from "../constants";
import Button from "./Button";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { Routes, Route } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useIsPresent,
  useAnimation,
} from "framer-motion";

const Nav = ({ scrollToSection }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    let direction = current - scrollYProgress.getPrevious();

    if (scrollYProgress.get() == 0) {
      setVisible(false);
    } else {
      // if (direction > 0) {
      //   setVisible(true);
      // } else {
      //   setVisible(false);
      // }
      setVisible(true);
    }
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuAnimation = useAnimation();

  // Trigger animations based on isMenuOpen
  const animateMenu = async () => {
    if (isMenuOpen) {
      await menuAnimation.start({
        scaleX: "100%",
        transition: { duration: 0.4, ease: "circOut", delay: 0 },
      });
    } else {
      await menuAnimation.start({
        scaleX: "0%",
        transition: { duration: 0.2, ease: "circIn", delay: 0 },
      });
    }
  };

  // Call animateMenu whenever isMenuOpen changes
  useEffect(() => {
    animateMenu();
  }, [isMenuOpen]);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isPresent = useIsPresent();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div // Desktop Navbar
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.1,
          }}
          className="max-md:hidden fixed backdrop-blur-xl py-4 rounded-xl shadow-lg flex    max-md:w-full max-md:max-container  lg:px-16 md:px-10 px-6 z-30"
        >
          <ul className="max-md:hidden flex flex-row   gap-10 text-gray-400 text-lg font-montserrat font-medium  ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={`/`}
                  className="hover:text-black transition-all ease-in-out "
                  onClick={() => scrollToSection(item.href.slice(1))}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Collapsible Mobile Links */}
        </motion.div>

        <button //Button to Toggle Mobile Navbar
          className="hover:scale-110 md:hidden fixed  right-6 top-6  p-2 rounded-lg z-30  bg-primary border shadow-lg"
          onClick={toggleMenu}
        >
          <HiBars3 size={28} color="#1f1f1f" />
        </button>

        {isMenuOpen && ( //Dark background when mobile overlay is open
          <div className="fixed top-0 left-0 z-20 w-screen h-screen backdrop-blur-sm  ">
            <div className="w-full h-full  bg-black opacity-40" />
          </div>
        )}

        <motion.div // Mobile Navbar
          ref={menuRef}
          initial={{ scaleX: "0%" }}
          animate={menuAnimation}
          style={{ originX: isPresent ? 1 : 0 }}
          className="fixed h-screen w-[220px] text-secondary bg-primary shadow-image1 right-0 top-0 pt-24 px-8 flex flex-col gap-10 rounded-b-lg lg:hidden shadow-nav -mt-1 z-30 rounded-l-lg "
        >
          <button
            className="hover:scale-110 md:hidden fixed right-6 top-6 p-2 z-30"
            onClick={toggleMenu}
          >
            <HiOutlineX size={28} color="#b7404b" />
          </button>
          <ul className="flex flex-col gap-4">
            {navLinks.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: "circOut",
                    delay: index * 0.2,
                  },
                }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="w-full text-right text-secondary font-montserrat text-xl"
              >
                <Link
                  to={`/`}
                  onClick={() => {
                    toggleMenu();
                    scrollToSection(item.href.slice(1));
                  }}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Nav;

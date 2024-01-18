"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import Card from "./Card";

import { useEffect, useState } from "react";

const DetailsScroll = ({
  message,
  users,
  titleComponent,
  section,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const originalPosition = 40;
  const rotate = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [originalPosition, -200]);

  

  return (
    <div
      className="pt-60 lg:h-[1100px] flex items-center justify-center relative p-20"
      ref={containerRef}
    >
      <div
        className=" w-full relative"
        style={{
          perspective: "800px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        
        <Card
        message={message}
          rotate={rotate}
          translate={translate}
          scale={scale}
          users={users}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div

      style={{
        translateY: translate,
      }}
      initial={{  translateY:800}}
      animate={{  translateY: 40}}
     
      
       transition={{duration:2, ease: [0.22, 1, 0.36, 1], delay:1}}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};






export default DetailsScroll;
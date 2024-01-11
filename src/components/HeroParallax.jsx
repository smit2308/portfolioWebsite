"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { PinContainer } from "./ThreedPin";
import { Link } from "react-router-dom";
 import { useRef } from "react";

const HeroParallax = ({
  projects,
}) => {
  const firstRow = projects['codingProjects'];
  const secondRow = projects['uiProjects'];
  const thirdRow = projects['videoProjects'];
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const translateXFirstrow = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, windowSize.current[0]*1.8]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -windowSize.current[0]*1.1]),
    springConfig
  );

  const translateXThirdrow = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, windowSize.current[0]*0.6]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.08, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, windowSize.current[1]*0.6]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[1940px]  pt-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
     
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className=" flex  space-x-20 mb-20  ">
        <Category text='Coding Projects' translate={translateXFirstrow} />
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXFirstrow}
              key={product.description}
            />
          ))}
        </motion.div>
        <motion.div className="flex  flex-row-reverse space-x-reverse  mb-20 space-x-20 ">
        <Category text='UI Projects' translate={translateXReverse} />
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.description}
            />
            
          ))}
          
        </motion.div>
        <motion.div className="flex flex-row  space-x-20">
          <Category text='Video Projects' translate={translateXThirdrow} />
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXThirdrow}
              key={product.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
 
export const Header = () => {
  return (
    <div className="lg:px-16 md:px-10 px-6 max-container">
      <h1 className="font-display italic text-[64px] lg:text-[120px]   text-secondary">
      Work
      </h1>
      <p className="h-fit font-montserrat font-light leadinng-normal sm:text-sm lg:text-lg sm:text-right text-center lg:pr-20 pr-6 text-secondary  sm:border-r-2  sm:border-secondary">
        We build beautiful projects with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing projects.
      </p>
    </div>
  );
};
 
export const ProductCard = ({
  product,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      // whileHover={{
      //   y: -20,
      // }}
      key={product.description}
      className="group/product h-96 w-96 relative flex-shrink-0"
    >
      <Link
        to={product.demoLink}
        target="_blank"
        // className=" group-hover/product:shadow-2xl "
      >
        {/* <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        /> */}
          <PinContainer
            title={product.demoLink}
            href={product.demoLink}
            
          >

            <motion.div
              //   animate={{
              //     background: linearGradients[activeCard % linearGradients.length],
              //   }}
              className="flex  w-max h-full sticky  rounded-3xl">
              <motion.img
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className='h-[220px] md:h-[300px] xl:h-[400px] xl:w-[400px] rounded-xl md:shadow-image1 shadow-image2 object-cover'
                src={product.thumbnail}
              />
            </motion.div>
          </PinContainer>
      </Link>
      {/* <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80  pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2> */}
    </motion.div>
  );
};

export const Category = ({
  text,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}

      key={text}
      className="flex justify-center items-center h-96 w-60 "
    >
      <h1 className="text-primary font-light font-montserrat  text-4xl w-max">
        {text}
      </h1>
    </motion.div>
  );
}
export default HeroParallax;
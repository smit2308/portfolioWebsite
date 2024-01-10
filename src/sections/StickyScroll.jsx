"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { workFeatured } from "../constants";
import { Button } from "../components";
import { PinContainer } from "../components/ThreedPin";
import { HiArrowSmallDown } from "react-icons/hi2";

const StickyScroll = () => {

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
  ];

  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });


  });

  const backgroundColors = [
    "#F1F1F1",
    "#00A896",
    "#EAE6E5",
  ];
  const linearGradients = [
    "#333333",
    "#333333",
    "#333333",
  ];
  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className='w-full  flex flex-col max-sm:gap-10  lg:px-16 md:px-10 px-6 max-container h-max '>
      <div className='w-full flex sm:flex-row flex-col sm:gap-10 md:gap-20 lg:gap-40 sm:justify-between  items-center   '>

        <h1 className='font-display italic text-[80px] lg:text-[120px]   text-secondary'>
          Work
        </h1>

        <h1 className='  h-fit font-montserrat font-light leadinng-normal sm:text-sm lg:text-lg sm:text-right text-center lg:pr-10 pr-6 text-secondary  sm:border-r-2  sm:border-secondary '>
          Crafting unique digital experiences as a Web Designer and Developer,
          I also excel in videography and video editing.
          Let's create something extraordinary together
        </h1>

      </div>


      <motion.div
        animate={{
          // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[640px]  w-full  overflow-y-scroll hide-scrollbar flex flex-row-reverse justify-center gap-20     xl:px-16  rounded-2xl"
        ref={ref}
      >

        {/* <div className=' sticky top-20  sm:w-max  h-max sm:mt-20 max-sm:items-center text-secondary  flex sm:flex-col flex-wrap font-montserrat text-sm sm:text-lg lg:text-xl  italic gap-8 border-l-2 sm:border-secondary xl:px-10 sm:px-8 mb-6 '>
          
      <h2 id='coding' className={activeCard===0? "text-accent": "text-secondary"}>Coding</h2>
      <h2 id="ui" className={activeCard===1? "text-accent": "text-secondary"}>UI/UX</h2>
      <h2 id='video' className={activeCard===2? "text-accent": "text-secondary"}>Video Editing</h2>

      <div className='max-sm:hidden'>
      <Button 
        label='More'
        bgColor={'bg-primary'}
        textColor={'text-secondary'}
        logoTilt={' -rotate-90'}

      />
      </div>

    </div> */}




        {/* <motion.div
        //   animate={{
        //     background: linearGradients[activeCard % linearGradients.length],
        //   }}
          className="flex  w-max h-max sticky top-16 rounded-3xl">
                 <motion.img 
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                 className='h-[320px] md:h-[400px] xl:h-[500px] xl:w-[500px] rounded-xl md:shadow-image1 shadow-image2 object-cover'
                src={workFeatured[activeCard].thumbnail} 
                 />
        </motion.div> */}


        <a href={activeCard <= 3 ? workFeatured[activeCard].demoLink : "/home"} target="_blank" className=" flex   sticky top-0 items-center justify-center mr-10">
          <PinContainer
            title={activeCard <= 3 ? workFeatured[activeCard].demoLink : "/home"}
            href={activeCard <= 3 ? workFeatured[activeCard].demoLink : "/home"}
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
                className='h-[320px] md:h-[400px] xl:h-[500px] xl:w-[500px] rounded-xl md:shadow-image1 shadow-image2 object-cover'
                src={activeCard <= 3 ? workFeatured[activeCard].thumbnail : ""}
              />
            </motion.div>
          </PinContainer>
        </a>

        <div className=" div relative flex items-start   ">

          <div className="max-w-xl">
            {workFeatured.map((item, index) => (
              <div key={item.title + index} className="my-20 ">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.2,
                    color: linearGradients[activeCard % linearGradients.length],
                  }}
                  className="lg:text-2xl sm:text-xl font-bold "
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.2,
                    color: linearGradients[activeCard % linearGradients.length],
                  }}
                  className="font-montserrat text-xs sm:text-sm lg:text-lg font-light leading-normal mt-10"
                >
                  {item.shortDescription}
                </motion.p>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg text-slate-300 max-w-sm mt-10 flex gap-2 ">

                  {item.skills.map(skill => (
                    <img className='sm:w-[48px] w-[24px]'
                      src={skill.logo}
                      alt={skill.name} />
                  ))}
                </motion.div>
              </div>
            ))}
            <div className="h-40" >
              <Button
                label='More'
                bgColor={'bg-primary'}
                textColor={'text-secondary'}
                logoTilt={' -rotate-90'}
                iconReact={<HiArrowSmallDown size={24} />}

              />
            </div>
          </div>
        </div>

      </motion.div>

    </motion.div>
  );
};

export default StickyScroll;
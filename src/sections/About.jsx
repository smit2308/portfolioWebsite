import React from "react";
import { useState, useEffect } from "react";
import { About_image } from "../assets/images";
import { Collapsible } from "../components";

const About = () => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  // useEffect(() => {
  //   // Create a script element
  //   const script = document.createElement('script');

  //   // Set the source and defer attribute
  //   script.src = 'https://static.elfsight.com/platform/platform.js';
  //   script.defer = true;

  //   // Append the script to the body
  //   document.body.appendChild(script);

  //   // Cleanup: Remove the script when the component is unmounted
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []); // The empty dependency a

  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.charset = "UTF-8";
    script.src =
      "https://cdn.curator.io/published/fec2a2ec-bd2c-478a-bd0a-204837af6f89.js";

    // Append the script to the end of the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="h-full  max-container w-full flex flex-col items-center max-container lg:px-16 md:px-10 px-6 gap-10  sm:gap-20">
      <div className="w-full flex md:flex-row flex-col-reverse gap-6 sm:gap-10  xl:gap-40  sm:justify-between  md:items-end items-center  ">
        <h1 className=" h-fit font-montserrat font-normal leadinng-normal sm:text-sm lg:text-lg md:text-left text-center xl:pl-20 md:pl-6 text-secondary  md:border-l-2  md:border-secondary">
          Whether you're looking for information about me, what I can do, or
          general inquiries, this section is designed to provide clear and
          helpful responses. Save time and find the information you need
        </h1>
        <h1 className="font-display text-[64px] sm:text-[100px] lg:text-[140px] leading-none  text-secondary">
          About
        </h1>
      </div>

      <div className=" w-full flex lg:flex-row flex-col-reverse md:justify-center  gap-20 max-xl:gap-10 max-lg:gap-20 items-center">
        <div className=" max-w-2xl lg:max-w-3xl  w-full  flex h-full overflow-hidden  justify-center  rounded-lg ">
          <div className="absolute self-end   w-full h-10 rounded-full  z-100 justify-center items-center text-center text-primary">
            {" "}
          </div>

          <div id="curator-feed-default-feed-layout">
            <a
              href="https://curator.io"
              target="_blank"
              rel="noopener noreferrer"
              className="crt-logo text-white"
            >
              Powered by Curator.io
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 w-full  flex flex-col justify-start  gap-8 bg-red-200f">
          <Collapsible
            title="What can I create?"
            children="I can create a wide range of digital products, from websites to mobile apps. "
          />

          <Collapsible
            title="What is my Education"
            children="I am currently completing Masters in Computer Science
                from University of Southern California. I have a Bachelors in Computer Science 
                from University of Mumbai"
          />

          <Collapsible
            title="What is my Experience?"
            children="2 Software Engineering Internships,
                            2 UI/UX Design Internships,
                            1 Video Editor Internship,
                            and I have beeen currently working as a part-time
                            Videographer/Editor for USC Viterbi School of Engineering"
          />

          <Collapsible
            title="What are my Hobbies?"
            children="Making content for Instagram, Formula-1, Travelling, Exercise, Film-making"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

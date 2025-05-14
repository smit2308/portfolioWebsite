"use client";
import React from "react";
import { ProjectsData } from "../constants";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DetailsScroll,
  Button,
  Loader,
  TextGenerateEffect,
} from "../components";
import { LoadingMessages } from "../constants";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";
import { UxResearch } from "../sections";

const ProjectDetailsScroll = (props) => {
  const { id } = useParams();
  const [proj, setproj] = useState();
  const isPresent = useIsPresent();

  useEffect(() => {
    //This is the function that gets the project data from the list of projects by searchign the title passed in URL
    const findProjectInArray = (array, title) =>
      array.find((proj) => proj.title === title);

    const project =
      findProjectInArray(ProjectsData["codingProjects"], id) ||
      findProjectInArray(ProjectsData["uiProjects"], id) ||
      findProjectInArray(ProjectsData["videoProjects"], id);

    setproj(project);
  }, [id]);

  // const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <>
      {proj != null ? (
        <motion.div
          // initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5, ease: [0.22, 1, 0.36, 1]}}
          initial={{ translateY: "100%" }}
          animate={{ translateY: "0%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          className="flex flex-col  w-full overflow-hidden max-container "
        >
          <>
            <DetailsScroll //This displays the contetnt of the projects, Demo, Description and links
              message={
                //Random loading message
                LoadingMessages[
                  Math.floor(Math.random() * LoadingMessages.length)
                ]
              }
              users={proj} //project data
              titleComponent={
                //This is the title of the project
                <div className="flex flex-col gap-10 max-md:gap-6">
                  <h1 className="md:text-3xl text-2xl font-display font-semibold text-secondary  -mt-6  ">
                    Project <br />
                  </h1>
                  <h2 className="font-display  text-secondary  md:text-[6rem] sm:text-[4rem] text-[12vw] font-bold  leading-none mb-20">
                    {proj.title}
                  </h2>
                </div>
              }
            />

            {proj.section === "ux" && ( //IF the project is a UX project we add this section after the common Template
              <UxResearch
                imageBefore={proj.imageBefore}
                imageAfter={proj.imageAfter}
                results={proj.results}
                highlights={proj.highlights}
                methods={proj.methods}
                image={proj.images}
                videoBefore={proj.videoBefore}
                videoAfter={proj.videoAfter}
              />
            )}
          </>
        </motion.div>
      ) : (
        <div>Loading</div>
      )}

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-accent z-50 text-4xl font-display  text-center text-primary flex justify-center items-center"
      ></motion.div>
    </>
  );
};

export default ProjectDetailsScroll;

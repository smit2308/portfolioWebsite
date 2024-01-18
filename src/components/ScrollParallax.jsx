// Photos from https://citizenofnowhe.re/lines-of-the-city
import './ScrollParallax.css'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

// import { HiArrowTopRightOnSquare } from "react-icons/hi";
import { Button, ImagesSlider } from "../components";
import { ProjectsData } from "../constants";


function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image( {projects}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    projects.map((proj) => (
    <section  className="h-[100vh] flex flex-row gap-20 justify-center items-center relative snap-center perspective-5 " >
      <div className="w-max h-max relative max-h-[90vh] overflow-hidden m-5 rounded-xl " ref={ref}>
        <img className=' xl:w-[340px] sm:w-[270px] xs:w-[200px] w-[140px]   inset-0 object-cover' src={proj.thumbnail} alt={proj.title} />
      </div>
            <motion.h2 >{`#00${proj.id}`}</motion.h2>
    

    </section>
    ))
  );
}

export default function ScrollParallax({ projects}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full bg-black  text-white ">
      {
            
            <Image projects={projects} />
            
      }
      <motion.div className="fixed h-[5px] bottom-[100px] inset-x-0 bg-white" style={{ scaleX }} />
    </div>
  );
}

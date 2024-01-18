"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";
import { LoadingMessages } from "../constants";

const TextGenerateEffect = ({
  words,
  className,
  
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words ? words.split(" ") : [];

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.5),
      }
    );
  }, [scope.current]);



  const renderWords = () => {
    return (
      <motion.div ref={scope} >
        {wordsArray.map((word, idx) => {
                if (word == "/n") {
                  
                } else {
                    return (
                        <motion.span  key={word + idx} className="opacity-0">
                          {word}{" "}
                        </motion.span>
                      );
                    }
        })}
      </motion.div>
    );
  };

  return (
    <div className={` ${className}`}>
      <div className="">
        <div className="leading-snug tracking-wide">
            {renderWords()}</div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;

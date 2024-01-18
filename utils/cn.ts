import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const stagger = (delay = 0.1) => {
  return {
    hidden: { opacity: 0, transition: { delay, duration: 0.5 } },
    visible: { opacity: 1, transition: { delay, duration: 0.5 } },
  };
};
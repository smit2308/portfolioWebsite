import { CS_resume, Video_resume, UI_resume } from "../assets/resume";

import {
  cSharpLogo,
  cLogo,
  cssLogo,
  firebaseLogo,
  flutterLogo,
  htmlLogo,
  javaLogo,
  javascriptLogo,
  pythonLogo,
  reactLogo,
  sqlLogo,
  unityLogo,
  figmalogo,
  tailwindLogo,
  premiereLogo,
  capcutLogo,
} from "../assets/logos";

import {
  AtmThumbnail,
  CafeThumbnail,
  EyelabsThumbnail,
  EyespaceThumbnail,
  GameThumbnail,
  RayThumbnail,
  Ray1Thumbnail,
  RctneThumbnail,
  SkateboardThumbnail,
  SocialThumbnail,
  Kenko_thumbnail,
  TvishAd_thumbnail,
  MuskhaveWeb_thumbnail,
  EventCoverage_thumbnail,
  MuskhaveProduct_thumbnail,
  VNN1_thumbnail,
  VNN2_thumbnail,
  VNN3_thumbnail,
  Dora_thumbnail,
  MyViterbiThumbnail,
  MyViterbiMain,
  MyViterbiCourseSelection,
  MyViterbiCourseSelectionAfter,
  MyViterbiMainAfter,
  MyUSC,
  D_Before,
  D_After,
  ViewD_Before,
  ViewD_After,
} from "../assets/images";

import { Instagram, Linkedin, Github, Behance, Vimeo } from "../assets/icons";

import {
  Skateboard_1,
  Skateboard_2,
  Game_1,
  Game_2,
  Ray1_1,
  Ray_1,
  Social_1,
  Eyespace_1,
  Eyelabs_1,
} from "../assets/images";

import {
  Skateboard_gif,
  Game_gif,
  Eyespace_gif,
  Social_gif,
  Eyelabs_gif,
  Ray_gif,
  Rctne_gif,
  Dora_gif,
  MyViterbi_Gif,
} from "../assets/images";
import { Video } from "lucide-react";

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#connect", label: "Connect" },
];

export const socialLinks = [
  {
    link: "https://www.instagram.com/smitzlean/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    link: "https://www.linkedin.com/in/smit-shewale/",
    label: "Linkedin",
    icon: Linkedin,
  },
  { link: "https://github.com/smit2308/", label: "Github", icon: Github },
  {
    link: "https://www.behance.net/smitzzzy2308/",
    label: "Behance",
    icon: Behance,
  },
  { link: "https://vimeo.com/user139028362/", label: "Vimeo", icon: Vimeo },
];

export const resumeLinks = [
  { link: CS_resume, label: "Developer" },
  { link: UI_resume, label: "UI/UX Design" },
  //   { link: Video_resume, label: "Videographer "  },
];

export const workFeatured = [
  {
    id: "Coding",
    thumbnail: SkateboardThumbnail,
    title: "Skateboard Retail Website",
    shortDescription:
      "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
    description:
      "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
    demoLink: "https://skateboard-tailwind.vercel.app/",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React", logo: reactLogo },
    ],
  },

  {
    id: "UI/UX",
    thumbnail: SocialThumbnail,
    title: "Social Media App",
    shortDescription:
      "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
    description:
      "A social media app, designed in Figma which has all the features of all the social media apps combined into one",
    demoLink: "https://www.behance.net/gallery/166093555/Social-Media-App",
    skills: [{ name: "Figma", logo: htmlLogo }],
  },

  {
    id: "Video Editing",
    thumbnail: Kenko_thumbnail,
    title: "Kenko interview",
    shortDescription:
      "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
    description:
      "Filmed and Edited an interview for the USC Startup Garage using iphone and Sony fs5 mii and editing using Adobe Premiere Pro",
    demoLink: "https://vimeo.com/manage/videos/897082575",
    skills: [{ name: "Adobe Premiere Pro", logo: htmlLogo }],
  },
];

export const ProjectsData = {
  codingProjects: [
    {
      id: 1,
      section: "coding",
      gif: Dora_gif,
      thumbnail: Dora_thumbnail,
      images: [],
      bg: "#FC66A5",
      title: "Dora AI Image Generation App",
      demoLink: "https://dora-ai.vercel.app/",
      repoLink: "https://github.com/smit2308/Dora",
      shortDescription:
        "Dora is a full-stack AI image generation application built using React, the OpenAI DALL-E API, and MongoDB. This user-friendly application allows users to create and manage unique images based on text prompts. The DALL-E API is seamlessly integrated with the React frontend, while MongoDB provides reliable storage for generated images and user data. This combination ensures a smooth user experience with functionalities such as creating, managing, and retrieving images.",
      description:
        "Dora is a full-stack AI image generation application built using React, the OpenAI DALL-E API, and MongoDB. This user-friendly application allows users to create and manage unique images based on text prompts. The DALL-E API is seamlessly integrated with the React frontend, while MongoDB provides reliable storage for generated images and user data. This combination ensures a smooth user experience with functionalities such as creating, managing, and retrieving images.",
      skills: [
        { name: "HTML", logo: htmlLogo },
        { name: "Tailwind", logo: tailwindLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "React", logo: reactLogo },
        { name: "Figma", logo: figmalogo },
      ],
    },
    {
      id: 2,
      section: "coding",
      gif: Skateboard_gif,
      thumbnail: SkateboardThumbnail,
      images: [],
      bg: "#FC66A5",
      title: "Skateboard Retail Website",
      demoLink: "https://skateboard-tailwind.vercel.app/",
      repoLink: "https://github.com/smit2308/skateboard-tailwind",
      shortDescription:
        "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
      description:
        "Discover my revamped skateboard website, inspired by Zumiez. It includes user-friendly Home, Products, About, and Contact pages. Sign up or log in to connect with the skate community. Currently front-end only, with an interactive back-end coming soon!",
      skills: [
        { name: "HTML", logo: htmlLogo },
        { name: "Tailwind", logo: tailwindLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "React", logo: reactLogo },
        { name: "Figma", logo: figmalogo },
      ],
    },

    {
      id: 3,
      section: "coding",
      thumbnail: GameThumbnail,
      gif: Game_gif,
      images: [],
      bg: "#FC66A5",
      title: "Little Timmy’s Spooky Mansion Game",
      demoLink: "https://agormley3424.github.io/stealth_game/",
      repoLink: "https://github.com/akashram98/littleTimmy",
      shortDescription:
        "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
      description:
        "A stealth adventure game, where you play as Timmy, a clever kid. His home has been invaded by monsters, and each level requires you to use stealth to navigate through, utilize traps cleverly placed around the house to kill these monstrous intruders",
      skills: [
        { name: "C#", logo: cSharpLogo },
        { name: "Unity", logo: unityLogo },
      ],
    },

    {
      id: 4,
      section: "coding",
      thumbnail: Ray1Thumbnail,
      gif: Ray_gif,
      images: [Ray1_1],
      bg: "#FC66A5",
      title: "RAY Events Management App",
      demoLink:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEz6Hwr0dsV7UFxpaUXMumk%2FRAY%3Fembed_host%3Dshare%26kind%3Dproto%26node-id%3D116-659%26page-id%3D116%253A372%26scaling%3Dscale-down%26starting-point-node-id%3D116%253A659%26t%3D4PVxERlo1GIXQILC-1%26type%3Ddesign%26mode%3Ddesign",
      repoLink: "https://github.com/AtharvTam/RCTNE",
      shortDescription:
        "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
      description:
        " *Ray is not Live on Playstore and Appstore anymore*. RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
      skills: [
        { name: "Flutter", logo: flutterLogo },
        { name: "Firebase", logo: firebaseLogo },
      ],
    },

    // {
    //     id: 4,
    // section: "coding",
    //     thumbnail: AtmThumbnail,
    //     images: [],
    //     bg: "#FC66A5",
    //     title: "ATM System",
    //     demoLink: "Unavailable",
    //     repoLink: "https://github.com/AtharvTam/RCTNE",
    //     shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
    //     description: "The ATM Management System is a Python-based project designed to streamline banking operations through a user-friendly graphical interface. Leveraging the power of SQL as its database, the system allows users to perform essential banking transactions effortlessly. With features such as deposit and withdrawal functionalities, users can easily manage their funds securely. The graphical user interface, developed using Tkinter, enhances the overall user experience, making the ATM Management System a reliable and efficient tool for seamless financial transactions",
    //     skills: [
    //         { name: "Python", logo: pythonLogo },
    //         { name: "SQL", logo: sqlLogo },
    //     ]
    // },

    // {
    //     id: 5,
    //      section: "coding",
    //     thumbnail: CafeThumbnail,
    //     images: [],
    //     bg: "#FC66A5",
    //     title: "Cyber Cafe Management System",
    //     demoLink: "Unavailable",
    //     repoLink: "https://github.com/AtharvTam/RCTNE",
    //     shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
    //     description: "The Cyber Cafe Management System, developed in C for an Operating Systems course, employs the FCFS scheduling algorithm to efficiently assign users to available desktops in a fair first-come-first-serve manner. This system optimizes the utilization of cyber cafe resources, providing a seamless experience for both users and administrators.",
    //     skills: [
    //         { name: "C", logo: cLogo },

    //     ]
    // }
  ],

  uiProjects: [
    {
      id: 1,
      section: "ux",
      thumbnail: MyViterbiThumbnail,
      images: MyUSC,
      bg: "#FC66A5",
      gif: MyViterbi_Gif,
      title: "MyViterbi Redesign",
      demoLink:
        "https://embed.figma.com/proto/UW2o7l0Fx3xZfme9EQgnc7/MyViterbi?page-id=1%3A4&node-id=25-786&p=f&viewport=642%2C334%2C0.05&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=249%3A3795&embed-host=share",
      repoLink:
        "https://1drv.ms/w/c/1d4459fca6928190/ERkxvvNwUsFFtDwl493vzG8B6zHmLOZQ_7YbJ2j3ktsNRg?e=bujeEB",
      shortDescription:
        "Revamped design for Eyespace.ai, the medical startup at the University of Southern California, which I personally crafted using Figma. In this redesign, I focused on infusing a modern aesthetic to elevate the overall user experience",
      description:
        "A UX-focused redesign of the portal for USC Viterbi students, aimed at improving homepage usability and the D-Clearance process (Engineering student's system for requesting course enrollment permission). By addressing layout clutter, confusing flows, and poor mobile support, and aligning with the USC universal portal’s design, the result is a responsive, task-driven interface that enhances clarity and efficiency across devices.",
      skills: [{ name: "Figma", logo: figmalogo }],
      imageBefore: MyViterbiMain,
      imageAfter: MyViterbiMainAfter,
      videoBefore: [D_Before, ViewD_Before],
      videoAfter: [D_After, ViewD_After],

      results: [
        "Reduced navigation time by 43%",
        "User satisfaction increased from 62% to 88%",
        "Information findability improved by 51%",
      ],
      highlights: [
        "Reorganized links into clear categories",
        "Introduced a responsive, accessible layout",
        "Integrated event previews on the dashboard",
      ],
      methods: [
        {
          name: "Usability Testing",
          outcome: "Identified key friction points in navigation",
        },
        {
          name: "Card Sorting",
          outcome: "Validated new categorization of features",
        },
        {
          name: "A/B Testing",
          outcome: "Confirmed the new design led to 30% faster task completion",
        },
      ],
    },

    {
      id: 2,
      section: "ui",
      thumbnail: EyespaceThumbnail,
      images: [Eyespace_1],
      bg: "#FC66A5",
      gif: Eyespace_gif,
      title: "Eyespace Opthalmology Website",
      demoLink:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWccFv0n0b0fEoml0JR3UMe%2FEyespace%3Fpage-id%3D33%253A2%26node-id%3D33-186%26starting-point-node-id%3D33%253A186%26scaling%3Dscale-down-width%26mode%3Ddesign%26t%3DjBpmLrPPa034SlUx-1",
      repoLink:
        "https://www.behance.net/gallery/166388085/EYESPACE-Website-Revamp",
      shortDescription:
        "Revamped design for Eyespace.ai, the medical startup at the University of Southern California, which I personally crafted using Figma. In this redesign, I focused on infusing a modern aesthetic to elevate the overall user experience",
      description:
        "Revamped design for Eyespace.ai, the medical startup at the University of Southern California, which I personally crafted using Figma. In this redesign, I focused on infusing a modern aesthetic to elevate the overall user experience",
      skills: [{ name: "Figma", logo: figmalogo }],
    },

    {
      id: 3,
      section: "mobile",
      thumbnail: SocialThumbnail,
      bg: "#FC66A5",
      gif: Social_gif,
      images: [Social_1],
      title: "All In One Social Media App",
      demoLink:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0ZO98SB1s19B2kp1VOQ2Uf%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D4-1971%26viewport%3D-5552%252C2709%252C0.86%26t%3DXDTF03uSbtlogwiI-1%26scaling%3Dscale-down%26starting-point-node-id%3D51%253A8023%26mode%3Ddesign",
      repoLink: "https://www.behance.net/gallery/166093555/Social-Media-App",
      shortDescription:
        "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
      description:
        "Presenting a new social media app that brings together the best features from various platforms. Designed to simplify your social experience, it includes broadcast messages (tweets), status updates (stories), and traditional posts all in one place. It's a user-friendly app that combines the best of social media for a seamless and enjoyable experience.",
      skills: [{ name: "Figma", logo: figmalogo }],
    },

    {
      id: 4,
      section: "mobile",
      thumbnail: RayThumbnail,
      bg: "#EEE9F2",
      gif: Ray_gif,
      images: [Ray1_1],
      title: "Event Prototype App",
      demoLink:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEz6Hwr0dsV7UFxpaUXMumk%2FRAY%3Fembed_host%3Dshare%26kind%3Dproto%26node-id%3D116-659%26page-id%3D116%253A372%26scaling%3Dscale-down%26starting-point-node-id%3D116%253A659%26t%3D4PVxERlo1GIXQILC-1%26type%3Ddesign%26mode%3Ddesign",
      repoLink:
        "https://www.behance.net/gallery/187225649/Ray-Events-Management-App",
      shortDescription:
        "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
      description:
        "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
      skills: [{ name: "Figma", logo: figmalogo }],
    },

    {
      id: 5,
      section: "ui",
      thumbnail: EyelabsThumbnail,
      images: [Eyelabs_1],
      bg: "#FC66A5",
      gif: Eyelabs_gif,
      title: "Eyelabs Website Front Page",
      demoLink:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fdg2DlqaAtfZnN9degywlAv%2FEyelabs%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-196%26viewport%3D-414%252C901%252C0.32%26t%3Dr3tMWGylMyoAIcsl-1%26scaling%3Dscale-down-width%26mode%3Ddesign",
      repoLink: "https://github.com/AtharvTam/RCTNE",
      shortDescription:
        "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
      description:
        "A captivating white and dark cinematic landing page designed for Eyespace.ai, the medical startup at the University of Southern California, which I personally crafted using Figma. In this redesign, I focused on infusing a modern aesthetic to elevate the overall user experience ",
      skills: [{ name: "Figma", logo: figmalogo }],
    },

    {
      id: 6,
      section: "ui",
      thumbnail: RctneThumbnail,
      images: [],
      bg: "#FC66A5",
      gif: Rctne_gif,
      title: "Rotaract Club of Thane North End Website",
      demoLink:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEz6Hwr0dsV7UFxpaUXMumk%2FRAY%3Fpage-id%3D0%253A1%26node-id%3D2080-230%26scaling%3Dscale-down-width%26starting-point-node-id%3D2080%253A230%26mode%3Ddesign%26t%3DpfHoc8Z83sqaxlRK-1",
      repoLink: "https://rctne.wordpress.com/",
      shortDescription:
        "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
      description:
        "Check out the new static website design for the Rotaract Club of Thane North End! I've incorporated the club's theme colors for a visually appealing and engaging experience. It's a clean, simple, and vibrant platform that perfectly captures the spirit of the club. Explore and connect with the Rotaract Club in style!",
      skills: [{ name: "Figma", logo: figmalogo }],
    },
  ],

  // videoProjects: [
  //   {
  //     id: 1,
  //     section: "video",
  //     thumbnail: Kenko_thumbnail,
  //     images: [],
  //     title: "Interview -Kenko Startup",
  //     demoLink: "https://player.vimeo.com/video/897082575?h=dc6ae2d29a",
  //     repoLink: "https://www.kenkopt.com/",
  //     shortDescription:
  //       "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
  //     description:
  //       "Uncover the narrative of Kenko, a University of Southern California-based physical therapy startup, through an insightful interview I shot and edited using the Sony FS5 Mark II. Gain a firsthand look at their innovative approach to physical therapy and the individuals behind this transformative initiative.",
  //     skills: [{ name: "PremierePro", logo: premiereLogo }],
  //   },

  //   {
  //     id: 2,
  //     section: "video",
  //     thumbnail: MuskhaveWeb_thumbnail,
  //     images: [],
  //     title: "Muskhave Brand Campaign",
  //     demoLink:
  //       "https://player.vimeo.com/video/897086895?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  //     repoLink: "https://muskhaveshop.com/",
  //     shortDescription:
  //       "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
  //     description:
  //       "Explore the latest video edit for muskhaveshop.com, edited in Premiere Pro with added color grading for a polished and professional aesthetic. Dive into the world of fashion and discover the brand's offerings in this visually enhanced video.",
  //     skills: [{ name: "PremierePro", logo: premiereLogo }],
  //   },

  //   {
  //     id: 3,
  //     section: "video",
  //     thumbnail: MuskhaveProduct_thumbnail,
  //     images: [],
  //     title: "Muskhave Product Showcase",
  //     demoLink:
  //       "https://player.vimeo.com/video/897086726?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  //     repoLink: "https://www.instagram.com/reel/CwNb3I5NheA/",
  //     shortDescription:
  //       "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
  //     description:
  //       "Take a peek at Muskhave's newest styles on Instagram! I put together a short video to show off their latest products. ",
  //     skills: [{ name: "PremierePro", logo: premiereLogo }],
  //   },

  //   {
  //     id: 4,
  //     section: "video",
  //     thumbnail: TvishAd_thumbnail,
  //     images: [],
  //     title: "Tvish AR App Advertisement",
  //     demoLink:
  //       "https://player.vimeo.com/video/817028335?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  //     repoLink: "https://tvish.co.in/",
  //     shortDescription:
  //       "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
  //     description:
  //       "Check out the ad I created for Tvish, the AR/VR clothing shopping app. I'm featured in the ad, demonstrating how the app works. It's not just a promo but also a pitch for funding. Experience a new way of clothes shopping with Tvish!",
  //     skills: [{ name: "PremierePro", logo: premiereLogo }],
  //   },

  //   {
  //     id: 5,
  //     section: "video",
  //     thumbnail: EventCoverage_thumbnail,
  //     images: [],
  //     title: "USC Welcome Experience Coverage",
  //     demoLink:
  //       "https://player.vimeo.com/video/902471896?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  //     repoLink: "https://www.instagram.com/uscviterbi/",
  //     shortDescription:
  //       "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
  //     description:
  //       "Step into the lively USC New Student Welcome through my lens – the event coverage video shot on the Sony FS5. Immerse yourself in the vibrant atmosphere as new students kick off their USC journey. ",
  //     skills: [{ name: "PremierePro", logo: premiereLogo }],
  //   },

  //   {
  //     id: 6,
  //     section: "video",
  //     thumbnail: VNN1_thumbnail,
  //     images: [],
  //     title: "Short Form Content Veterans Day",
  //     demoLink:
  //       "https://player.vimeo.com/video/897106789?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  //     repoLink: "https://www.instagram.com/uscviterbi/",
  //     shortDescription:
  //       "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
  //     description:
  //       "Crafting dynamic short-form content for USC Viterbi's News Network, my videos are a fusion of storytelling and creativity. Packed with trending motion graphics, backgrounds, sound effects, moving captions and more. These concise videos provide an engaging snapshot of groundbreaking stories within the engineering realm",
  //     skills: [{ name: "Capcut", logo: capcutLogo }],
  //   },

  //   {
  //     id: 7,
  //     section: "video",
  //     thumbnail: VNN2_thumbnail,
  //     images: [],
  //     title: "Short Form Content Neil Seigel",
  //     demoLink:
  //       "https://player.vimeo.com/video/897106858?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  //     repoLink: "https://www.instagram.com/uscviterbi/",
  //     shortDescription:
  //       "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
  //     description:
  //       "Crafting dynamic short-form content for USC Viterbi's News Network, my videos are a fusion of storytelling and creativity. Packed with trending motion graphics, backgrounds, sound effects, moving captions and more. These concise videos provide an engaging snapshot of groundbreaking stories within the engineering realm",
  //     skills: [{ name: "Capcut", logo: capcutLogo }],
  //   },

  // {
  //     id: 8,
  //     section: "video",
  //     thumbnail: VNN3_thumbnail,
  //     images: [],
  //     title: "Short Form Content With Captions",
  //     demoLink: "https://player.vimeo.com/video/897096199?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" ,
  //     repoLink: "https://www.instagram.com/uscviterbi/",
  //     shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
  //     description: "Crafting dynamic short-form content for USC Viterbi's News Network, my videos are a fusion of storytelling and creativity. Packed with trending motion graphics, backgrounds, sound effects, moving captions and more. These concise videos provide an engaging snapshot of groundbreaking stories within the engineering realm",
  //     skills: [
  //         { name: "Capcut", logo: capcutLogo },
  //     ]
  // },
  // ],
};

export const LoadingMessages = [
  "This Website was made by an amateur",
  "Generating witty dialog...",
  "Finding the switch...",
  "You can hire me while you wait...",
  "Tokenizing nothing...",
  "Sit back and relax....",
  "This website is running on my prayers...",
  "Don't think of closing...",
  "Upgrading Windows, your PC will restart several times. ",
  "This will load before GTA6..",
  "The bits are sleeping",
  "You can 50 situps while this loads...",
  "Don't forget to get your protein",
  "The server is powered by a potato",
  "Hello IT, have you tried turning it off and on again?",
  "Should have used a compiled language...",
  "May the forks be with you",
  "My premium plan is faster",
];

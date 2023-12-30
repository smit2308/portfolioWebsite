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
  } from '../assets/logos';

import {  AtmThumbnail,
    CafeThumbnail,
    EyelabsThumbnail,
    EyespaceThumbnail,
    GameThumbnail,
    RayThumbnail,
    Ray1Thumbnail,
    RctneThumbnail,
    SkateboardThumbnail,
    SocialThumbnail,
    Kenko_thumbnail } from '../assets/images';


export const navLinks = [

    { href: "#home", label: "Home", path: "/" },
    { href: "#about-us", label: "Projects & Skills", path: "/projects" },
    { href: "#products", label: "Connect", path: "/connect" },

]

export const workFeatured = [

    {
        id: "Coding",
        thumbnail: SkateboardThumbnail,
        title: "Skateboard Retail Website",
        description: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        skills: [
            { name: "HTML", logo: htmlLogo },
            { name: "CSS", logo: cssLogo },
            { name: "JavaScript", logo: javascriptLogo },
            { name: "React", logo: reactLogo },
        ]
    },

    {
        id: "UI/UX",
        thumbnail: SocialThumbnail,
        title: "Social Media App",
        description: "A social media app, designed in Figma which has all the features of all the social media apps combined into one",
        skills: [
            { name: "Figma", logo: htmlLogo },
        ]
    },

    {
        id: "Video Editing",
        thumbnail: Kenko_thumbnail,
        title: "Kenko interview",
        description : 'Filmed and Edited an interview for the USC Startup Garage using iphone and Sony fs5 mii and editing using Adobe Premiere Pro',
        skills: [
            { name: "Adobe Premiere Pro", logo: htmlLogo },
        ]
    }
]

export const codingProjects = [
    {
        id: 1,
        thumbnail: SkateboardThumbnail,
        images: [],
        title: "Skateboard Retail Website",
        demoLink: "https://skateboard-tailwind.vercel.app/",
        repoLink: "https://github.com/smit2308/skateboard-tailwind",
        description: "Discover my revamped skateboard website, inspired by Zumiez. It includes user-friendly Home, Products, About, and Contact pages. Sign up or log in to connect with the skate community. Currently front-end only, with an interactive back-end coming soon!",
        skills: [
            { name: "HTML", logo: htmlLogo },
            { name: "CSS", logo: cssLogo },
            { name: "JavaScript", logo: javascriptLogo },
            { name: "React", logo: reactLogo },
        ]
        
    },

    {
        id: 2,
        thumbnail: GameThumbnail,
        images: [],
        title: "Little Timmy’s Spooky Mansion Game",
        demoLink: "https://agormley3424.github.io/stealth_game/",
        repoLink: "https://github.com/akashram98/littleTimmy",
        description: "A stealth adventure game, where you play as Timmy, a clever kid. His home has been invaded by monsters, and each level requires you to use stealth to navigate through, utilize traps cleverly placed around the house to kill these monstrous intruders",
        skills: [
            { name: "C#", logo: cSharpLogo },
            { name: "Unity", logo: unityLogo },
        ]
    },

    {
        id: 3,
        thumbnail: RayThumbnail,
        images: [],
        title: "RAY Events management app",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    }


]
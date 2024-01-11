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
    Kenko_thumbnail,

    } from '../assets/images';

import { 
    Skateboard_1,
    Skateboard_2,
    Game_1,
    Game_2
}
from '../assets/images';


export const navLinks = [

    { href: "#home", label: "Home", path: "/" },
    { href: "#about-us", label: "Projects & Skills", path: "/projects" },
    { href: "#products", label: "Connect", path: "/#connect" },

]

export const workFeatured = [

    {
        id: "Coding",
        thumbnail: SkateboardThumbnail,
        title: "Skateboard Retail Website",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        demoLink: "https://skateboard-tailwind.vercel.app/",
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
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "A social media app, designed in Figma which has all the features of all the social media apps combined into one",
        demoLink: "https://www.behance.net/gallery/166093555/Social-Media-App",
        skills: [
            { name: "Figma", logo: htmlLogo },
        ]
    },

    {
        id: "Video Editing",
        thumbnail: Kenko_thumbnail,
        title: "Kenko interview",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description : 'Filmed and Edited an interview for the USC Startup Garage using iphone and Sony fs5 mii and editing using Adobe Premiere Pro',
        demoLink: "https://vimeo.com/manage/videos/897082575",
        skills: [
            { name: "Adobe Premiere Pro", logo: htmlLogo },
        ]
    }
]

    
export const ProjectsData = {

'codingProjects' : [
    {
        id: 1,
        thumbnail: SkateboardThumbnail,
        images: [Skateboard_1, Skateboard_2],
        title: "Skateboard Retail Website",
        demoLink: "https://skateboard-tailwind.vercel.app/",
        repoLink: "https://github.com/smit2308/skateboard-tailwind",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "Discover my revamped skateboard website, inspired by Zumiez. It includes user-friendly Home, Products, About, and Contact pages. Sign up or log in to connect with the skate community. Currently front-end only, with an interactive back-end coming soon!",
        skills: [
            { name: "HTML", logo: htmlLogo },
            { name: "Tailwind", logo: tailwindLogo },
            { name: "CSS", logo: cssLogo },
            { name: "JavaScript", logo: javascriptLogo },
            { name: "React", logo: reactLogo },
            { name: "Figma", logo: figmalogo },
        ]
        
    },

    {
        id: 2,
        thumbnail: GameThumbnail,
        images: [Game_1, Game_2],
        title: "Little Timmy’s Spooky Mansion Game",
        demoLink: "https://agormley3424.github.io/stealth_game/",
        repoLink: "https://github.com/akashram98/littleTimmy",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "A stealth adventure game, where you play as Timmy, a clever kid. His home has been invaded by monsters, and each level requires you to use stealth to navigate through, utilize traps cleverly placed around the house to kill these monstrous intruders",
        skills: [
            { name: "C#", logo: cSharpLogo },
            { name: "Unity", logo: unityLogo },
        ]
    },

    {
        id: 3,
        thumbnail: Ray1Thumbnail,
        images: [],
        title: "RAY Events management app",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },

    {
        id: 4,
        thumbnail: AtmThumbnail,
        images: [],
        title: "RAY Events management app",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },

    {
        id: 3,
        thumbnail: CafeThumbnail,
        images: [],
        title: "RAY Events management app",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    }


],

'uiProjects' : [


    
    {
        id: 1,
        thumbnail: EyespaceThumbnail,
        images: [],
        title: "Eyespace Opthalmology Website",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },

    {
        id: 2,
        thumbnail: SocialThumbnail,
        images: [],
        title: "All in one Social Media App",
        demoLink: "https://www.behance.net/gallery/166093555/Social-Media-App",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },


    {
        id: 3,
        thumbnail: RayThumbnail,
        images: [],
        title: "RAY Events management app",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },

    {
        id: 4,
        thumbnail: EyelabsThumbnail,
        images: [],
        title: "Eyelabs Website Front Page",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },

    {
        id: 5,
        thumbnail: RctneThumbnail,
        images: [],
        title: "Rotaract Club of Thane North End Website",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },





],

'videoProjects' : [

    {
        id: 1,
        thumbnail: Kenko_thumbnail,
        images: [],
        title: "Kenko Startup Garage Interview",
        demoLink: "https://vimeo.com/manage/videos/897082575",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },


    {
        id: 2,
        thumbnail: SocialThumbnail,
        images: [],
        title: "All in one Social Media App",
        demoLink: "https://www.behance.net/gallery/166093555/Social-Media-App",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },


    {
        id: 3,
        thumbnail: RayThumbnail,
        images: [],
        title: "RAY Events management app",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },

    {
        id: 4,
        thumbnail: EyelabsThumbnail,
        images: [],
        title: "Eyelabs Website Front Page",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },

    {
        id: 5,
        thumbnail: RctneThumbnail,
        images: [],
        title: "Rotaract Club of Thane North End Website",
        demoLink: "Unavailable",
        repoLink: "https://github.com/AtharvTam/RCTNE",
        shortDescription: "React Skateboard Retail website, inspired by Zumiez. Currently front-end only, with an interactive back-end coming soon!",
        description: "RAY is an Events Management App, tailored for the Rotaract Club of Thane North End. It streamlines event organization and participation, offers an event calendar, easy registration, and volunteer management, fostering active member engagement and connectivity in club activities",
        skills: [
            { name: "Flutter", logo: flutterLogo },
            { name: "Firebase", logo: firebaseLogo },
        ]
    },

  


]}
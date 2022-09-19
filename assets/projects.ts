import okultableti from "./projects/okultableti.png"
import arcades from "./projects/arcades.png"
import portfolio from "./projects/portfolio.png"

// import tailwindcss from "./tech/tailwindcss.svg"
import openZeppelin from "./tech/OpenZeppelin.png"

import { StaticImageData } from "next/image"


export type Project = {
    title: string,
    desc: string,
    link: string,
    image: string | StaticImageData,
    techStack: Record<string, string[]>,
    flags: string[],
    links: Record<string, string>,
}

export const projects: Project[] = [
    {
        title: "Okultableti",
        desc: "Online live teaching platform.",
        link: "https://okultableti.com",
        flags: ["Production"],
        image: okultableti,
        techStack: {
            backend: ["Laravel"],
            frontend: ["HTML", "Vue.js"]
        },
        links: {},
    },
    {
        title: "Arcades",
        desc: "Customizable and recyclable NFT's.",
        link: "https://arcades.netlify.app",
        image: arcades,
        flags: ["Open Source"],
        techStack: {
            backend: ["Express.js"],
            frontend: ["React", "MUI"],
            web3: ["OpenZeppelin"]
        },
        links: { repo: "https://github.com/lifecodeof/arcades" },
    },
    {
        title: "My Portfolio",
        desc: "This website.",
        link: "http://lifecodeof.github.io",
        image: portfolio,
        flags: ["Open Source"],
        techStack: {
            frontend: ["React", "Tailwind CSS"],
        },
        links: { repo: "https://github.com/lifecodeof/arcades" },
    }
]

export const icons: Record<string, string> = {
    // Techs
    "Express.js": "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
    "HTML": "https://user-images.githubusercontent.com/25181517/117447535-f00a3a00-af3d-11eb-89bf-45aaf56dbaf1.png",
    "React": "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
    "Vue.js": "https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png",
    "MUI": "https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png",
    "Node.js": "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
    "Laravel": "https://laravel.com/img/logomark.min.svg",
    "OpenZeppelin": openZeppelin.src,
    "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",

    // Flags
    "Open Source": "https://github.githubassets.com/favicons/favicon-dark.svg",
    "Production": "public",
}

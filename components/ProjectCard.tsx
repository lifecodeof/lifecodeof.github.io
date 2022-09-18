import Image from "next/image"
import React, { FC } from "react"
import { Project, techIcons } from "../assets/projects"

type techParam = { tech: string }
const Tech: FC<techParam> = ({ tech }: techParam) => (
    <div className="inline mr-2">
        {tech in techIcons ? <img className="inline h-4" src={techIcons[tech]} alt="icon" /> : ""} {tech}
    </div>
)

export const ProjectCard: FC<Project> = ({ title, desc, link, image, techStack }: Project) => {
    return (
        <article className="group relative border border-gray-500 dark:border-gray-400 w-full">
            <Image layout="responsive" src={image} alt={title} />
            <div className="absolute inset-0 z-10 bg-white dark:bg-black
            !bg-opacity-0 group-hover:!bg-opacity-80 touch:!bg-opacity-80
            group-hover:backdrop-blur touch:backdrop-blur
            transition-all duration-500
            " />
            <a className="absolute inset-0 ml-4 mt-3 z-20
                transition-all duration-500
                opacity-0 touch:opacity-100 group-hover:opacity-100"
                href={link} target="_blank" rel="noreferrer">
                <h2>{title} &#10230;</h2>
                <p className="text-gray-500 dark:text-gray-400">{desc}</p>
                <div className="border border-dashed mr-4 mb-4 mt-2 hidden sm:block">
                    <ul className="ml-4 my-3">
                        {Object.keys(techStack).sort().map((k, key1) =>
                            <li key={key1} className="">{k}:&nbsp;
                                {techStack[k].map((t, key2) => <Tech tech={t} key={key2} />)}
                            </li>
                        )}
                    </ul>
                </div>
            </a>
        </article>
    )
}

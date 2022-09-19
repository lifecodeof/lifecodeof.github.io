import Image from "next/image"
import React, { FC } from "react"
import { Project } from "../assets/projects"
import { iconize } from "./WIcon"


export const ProjectCard: FC<Project> = ({ title, desc, link, image, techStack, flags, links }) => {
    return (
        <article className="group relative my-border w-full">
            <div className="absolute hidden sm:flex flex-col gap-3  top-4 left-full
                            -translate-x-full group-hover:translate-x-0 transition-all duration-500">
                {Object.keys(links).sort().map((k, key) =>
                    <a key={key} href={links[k]} className="px-2 bg-body my-border !border-l-0">{k}</a>
                )}
            </div>
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
                <div className="flex justify-between flex-wrap">
                    <h2>{title} &#10230;</h2>
                    <span>{iconize(flags)}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">{desc}</p>
                <div className="my-border border-dashed mr-4 mb-4 mt-2 hidden sm:block">
                    <ul className="ml-4 my-3">
                        {Object.keys(techStack).sort().map((k, key) =>
                            <li key={key} className="">{k}:&nbsp;
                                {iconize(techStack[k])}
                            </li>
                        )}
                    </ul>
                </div>
            </a>
        </article>
    )
}

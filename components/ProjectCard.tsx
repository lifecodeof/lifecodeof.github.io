import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"

export type Project = { title: string, desc: string, link: string, image: string | StaticImageData }
export const ProjectCard: FC<Project> = ({ title, desc, link, image }: Project) => {
    return (
        <article className="group relative border border-gray-500 dark:border-gray-400">
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
                <p className="text-gray-500 dark:text-gray-400 mt-4">{desc}</p>
            </a>
        </article>
    )
}

import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"

export type Project = { title: string, desc: string, link: string, image: string | StaticImageData }
export const ProjectCard: FC<Project> = ({ title, desc, link, image }: Project) => {
    return (
        <a className="p-2 rounded-md
        border border-gray-400 hover:border-blue-600
        [&_h2]:hover:text-blue-600" href={link} target="_blank">
                <Image className="mb-3 rounded-md" src={image} alt={title} />
                <h2>{title} &#10230;</h2>
                <p className="text-gray-400">{desc}</p>
        </a>
    )
}

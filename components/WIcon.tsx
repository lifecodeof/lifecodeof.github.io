import React, { FC } from "react"
import { icons } from "../assets/projects"


export const WIcon: FC<{ children: string }> = ({ children: c }) => {
    const icon = c in icons ?
        (
            icons[c].startsWith("http") || icons[c].startsWith("/") ?
                <img className="inline h-4" src={icons[c]} alt="icon" /> :
                <span className="!inline h-4 material-symbols-sharp align-middle !text-base">{icons[c]}</span>
        ) : ""

    return (
        <div className="inline mr-2">
            {icon} {c}
        </div>
    )
}

export const iconize = (array: string[]) => array.map((str, key) => <WIcon key={key}>{str}</WIcon>)

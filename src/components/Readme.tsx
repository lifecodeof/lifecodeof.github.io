'use client'

import Markdown from "marked-react"
import { useEffect, useState } from "react"
import styles from '@/styles/Readme.module.css'


export const Readme = () => {
    const [content, setContent] = useState(
        <h1>Loading...</h1>
    )

    useEffect(() => {
        typeof window == "undefined" ||
            fetch("https://raw.githubusercontent.com/lifecodeof/lifecodeof/main/README.md")
                .then(r => r.text())
                .then(s => setContent(<Markdown>{s}</Markdown>))
    }, [])

    return <div className={`${styles.readme} my-border p-4 rounded-md`}>
        {content}
    </div>
}

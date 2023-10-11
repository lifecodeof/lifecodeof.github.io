import { Metadata } from 'next'
import { ProjectCard } from '../components/ProjectCard'
import { Readme } from '../components/Readme'
import { projects } from "../lib/projects"
import styles from '../styles/Home.module.css'

const github = "/assets/social/github.svg"
const linkedin = "/assets/social/linkedin.svg"


export const metadata: Metadata = {
    title: 'Semih Koyuncu',
}

export default function Index() {
    return <>
        <nav className='text-sm [&>a]:mx-2
                flex justify-center fixed w-full p-2 z-50
                backdrop-blur border-b border-gray-400'>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
        </nav>

        <main className={styles.main}>
            <section id="home" className="justify-center">
                <h1 className='text-xl'>Semih Koyuncu</h1>
                <p className='text-sm text-gray-400'>Full Stack Developer</p>
            </section>
            <section id="projects">
                <h1>Projects</h1>
                <div className="mt-3 px-3 flex flex-col gap-3 w-full">
                    {projects.map(p => <ProjectCard {...p} key={p.title} />)}
                </div>
            </section>
            <section id="about">
                <h1>About me</h1>
                <Readme />
            </section>
        </main>

        <footer className='p-4  flex justify-between max-w-lg mx-auto'>
            <p>Semih Koyuncu</p>
            <div className='flex [&>*]:mx-1'>
                <a href="https://github.com/lifecodeof"><img src={github} alt="github" width={32} height={32} /></a>
                <a href="https://linkedin.com/in/lifecodeof"><img src={linkedin} alt="linkedin" width={32} height={32} /></a>
            </div>
        </footer>
    </>
}

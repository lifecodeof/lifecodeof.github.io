import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectCard } from '../components/ProjectCard'
import styles from '../styles/Home.module.css'
import { projects } from "../assets/projects";

import github from "../assets/social/github.svg"
import linkedin from "../assets/social/linkedin.svg"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Semih Koyuncu</title>
      </Head>

      <nav className='text-sm [&>a]:mx-2
        flex justify-center fixed w-full p-2 z-50
        backdrop-blur border-b border-gray-400
        '>
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
      </main>

      <footer className='p-4  flex justify-between max-w-lg mx-auto'>
        <p>Semih Koyuncu</p>
        <div className='flex [&>*]:mx-1'>
          <a href="https://github.com/lifecodeof"><Image src={github} alt="github" width={32} height={32} /></a>
          <a href="https://linkedin.com/in/lifecodeof"><Image src={linkedin} alt="linkedin" width={32} height={32} /></a>
        </div>
      </footer>
    </>
  )
}

export default Home

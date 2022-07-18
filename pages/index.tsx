import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectCard, Project } from '../components/ProjectCard'
import styles from '../styles/Home.module.css'

import okultableti from "../assets/projects/okultableti.png"
import github from "../assets/social/github.svg"
import linkedin from "../assets/social/linkedin.svg"

const projects: Project[] = [
  {
    title: "Okultableti",
    desc: "eders",
    link: "https://okultableti.com",
    image: okultableti
  }
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Semih Koyuncu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='
        flex justify-center fixed w-full p-2
        backdrop-filter backdrop-blur border-b border-gray-400
        '>
            <a href="#projects">Projects</a>
      </nav>

      <main className={styles.main}>
        <section className="justify-center">
          <h1 className='text-xl'>Semih Koyuncu</h1>
          <p className='text-sm text-gray-400'>Jack of all trades master of none</p>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <div className="flex items-center justify-center flex-wrap">
            {projects.map(p => <ProjectCard {...p} />)}
          </div>
        </section>
      </main>

      <footer className='m-4 flex justify-around items-center'>
        <p>Semih Koyuncu</p>
        <div className='flex [&>*]:mx-1'>
          <a href="https://github.com/lifecodeof"><Image src={github} width={32} height={32}/></a>
          <a href="https://linkedin.com"><Image src={linkedin} width={32} height={32}/></a>
        </div>
      </footer>
    </>
  )
}

export default Home

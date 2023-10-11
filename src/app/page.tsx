import { Metadata } from 'next'
import { Readme } from '@/components/Readme'
import styles from '@/styles/Home.module.css'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/sections/Footer'


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
            <Projects />
            <section id="about">
                <h1>About me</h1>
                <Readme />
            </section>
        </main>

        <Footer />
    </>
}

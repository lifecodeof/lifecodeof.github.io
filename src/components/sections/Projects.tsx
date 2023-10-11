import { ProjectCard } from '@/components/ProjectCard'
import { projects } from "@/data/projects"

export default function Projects() {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="mt-3 px-3 flex flex-col gap-3 w-full">
                {projects.map(p => <ProjectCard {...p} key={p.title} />)}
            </div>
        </section>
    )
}
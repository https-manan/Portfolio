import { projects } from "@/lib/projects";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="mb-5 font-display text-4xl text-ink md:text-5xl">Work</h2>
        <p className="mb-12 max-w-[56ch] font-body text-base text-muted">
          Five projects, each built around a different real-world technical challenge. Two are real-time systems, three
          are machine learning built from the ground up.
        </p>
        <div>
          {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

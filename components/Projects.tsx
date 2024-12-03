import ProjectCard from "./ProjectCard";
import { projects } from "@/dataBase/projects";

export default function Projects() {
  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

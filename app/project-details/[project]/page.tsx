"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Github,
  ExternalLink,
  Clock,
  Code,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { projects } from "@/dataBase/projects";
import { usePathname } from "next/navigation";

const ProjectDetails = () => {
  const pathname = usePathname(); // Get the current path
  const slug = pathname.split("/").pop(); // Extract the slug from the path

  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return <div>Project not found!</div>;
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold text-gray-600">
          Project Not Found
        </h1>
        {/* <button
          onClick={() => router.push("/")}
          className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600"
        >
          Back to Projects
        </button> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.category}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Repository
                </Link>
              )}
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Key Features
                </h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Code className="w-6 h-6 mr-2" />
                    My Role
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.role}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Lightbulb className="w-6 h-6 mr-2" />
                    Challenges
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.challenges}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Rocket className="w-6 h-6 mr-2" />
                    Future Scope
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.futureScope}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    Project Duration
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.duration}
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Lessons Learned
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Throughout the development of {project.title}, I gained
                  valuable insights into {project.category} development. Working
                  with {project.technologies.join(", ")} enhanced my technical
                  skills and problem-solving abilities. The challenges faced,
                  particularly in {project.challenges.toLowerCase()}, pushed me
                  to find innovative solutions and improved my overall approach
                  to project development.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Conclusion
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.title} was a significant milestone in my portfolio,
                  showcasing my abilities in {project.category} development. The
                  project not only met its initial goals but also laid the
                  groundwork for future improvements, such as{" "}
                  {project.futureScope.toLowerCase()}. Imm proud of the results
                  and excited about the potential impact of this project.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;

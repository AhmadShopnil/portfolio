"use client";

import { projects } from "@/dataBase/projects";
import { usePathname } from "next/navigation";

const ProjectDetails = () => {
  const pathname = usePathname(); // Get the current path
  const slug = pathname.split("/").pop(); // Extract the slug from the path

  console.log(slug);

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
    <div className="p-6 sm:p-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
          <div className="p-6">
            <h1 className="text-white text-3xl font-bold">{project.title}</h1>
            <p className="text-teal-300 text-sm">{project.category}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          About the Project
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {project?.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Technologies Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Technologies Used
          </h3>
          <ul className="mt-4 space-y-2">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="flex items-center text-gray-600 text-sm gap-2"
              >
                <span className="inline-block w-2 h-2 bg-teal-500 rounded-full"></span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
          <ul className="mt-4 space-y-2">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-gray-600 text-sm gap-2"
              >
                <span className="inline-block w-2 h-2 bg-teal-500 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Your Role</h3>
          <p className="mt-4 text-gray-600">{project.role}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Challenges</h3>
          <p className="mt-4 text-gray-600">{project.challenges}</p>
        </div>
      </div>

      {/* Future Scope */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Future Scope</h3>
        <p className="mt-4 text-gray-600">{project.futureScope}</p>
      </div>

      {/* Duration */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Duration</h3>
        <p className="mt-4 text-gray-600">{project.duration}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600"
          >
            View Live Project
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-900"
          >
            View GitHub Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;

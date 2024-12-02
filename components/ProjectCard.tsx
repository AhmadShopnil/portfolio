import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { TProject } from "./Projects";

export default function ProjectCard({ project }: { project: TProject }) {
  const { title, category, image, live, githubLink } = project;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 truncate">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {category}
        </p>
        <div className="flex justify-between">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Link>
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { TProject } from "@/interface";
import { generateSlug } from "@/utils/generateSlug";

export default function ProjectCard({ project }: { project: TProject }) {
  const { title, category, image, live, githubLink } = project;
  const slug = generateSlug(title);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-300"
              aria-label="View GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-300"
              aria-label="View Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 truncate">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {category}
        </p>
        <Link
          href={`/project-details/${slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline transition-all duration-300 group"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

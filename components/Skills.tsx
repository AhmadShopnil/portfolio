import { CheckCircle } from "lucide-react";

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma",
    "Mongoose",
    "Redux",
    "Tailwind CSS",
    "Shadcn/ui",
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4 ">
          <span className=" ">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow"
            >
              <CheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-800 dark:text-gray-200">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

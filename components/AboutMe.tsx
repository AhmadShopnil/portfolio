"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Briefcase, GraduationCap, Award } from "lucide-react";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<
    "skills" | "education" | "certifications"
  >("skills");

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
  ];

  const education = [
    {
      degree: "Bachelor of Business Administration",
      institution: "Govt Sadat College",
      year: "2024",
    },
  ];

  const certifications = [
    "Mern Stack Web Development",
    "Next Level Web Development",
    "Redux ",
  ];

  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-800  bg-gradient-to-br 
       dark:from-gray-900 dark:to-indigo-900 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white dark:bg-gray-800 rounded-md shadow-2xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3 relative h-80 md:h-auto">
              <Image
                src="/images/me-2.jpg"
                alt="Abu Shaleh Ahamad Shopnil"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h2 className="text-3xl font-bold text-white">
                  Abu Shaleh Ahamad Shopnil
                </h2>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                As a passionate full-stack developer, I thrive on building
                innovative web solutions. With a strong foundation in both
                front-end and back-end technologies, I create seamless,
                user-friendly applications that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full"
                >
                  <Code className="w-5 h-5 text-blue-500" />
                  <span className="text-blue-700 dark:text-blue-300 font-medium">
                    2+ Years Coding
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full"
                >
                  <Briefcase className="w-5 h-5 text-green-500" />
                  <span className="text-green-700 dark:text-green-300 font-medium">
                    10+ Projects
                  </span>
                </motion.div>
              </div>
              <div className="space-y-4">
                <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
                  {(["skills", "education", "certifications"] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 px-1 font-medium transition-colors duration-200 ${
                          activeTab === tab
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    )
                  )}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === "skills" && (
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    )}
                    {activeTab === "education" && (
                      <ul className="space-y-4">
                        {education.map((edu, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <GraduationCap className="w-6 h-6 text-blue-500 mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                                {edu.degree}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                {edu.institution}, {edu.year}
                              </p>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                    {activeTab === "certifications" && (
                      <ul className="space-y-2">
                        {certifications.map((cert, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <Award className="w-5 h-5 text-yellow-500" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {cert}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

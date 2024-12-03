import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r dark:bg-gray-800  dark:text-white"
    >
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold">About Me</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          I’m a passionate Full-Stack Developer with expertise in creating
          scalable web applications. With hands-on experience in modern
          technologies such as React, Next.js, Node.js, TypeScript, and MongoDB,
          I enjoy building robust, performance-driven solutions. I am also
          dedicated to improving user experiences and applying the best
          development practices.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/profile.jpg"
              alt="Profile Picture"
              className="rounded-full w-40 h-40 object-cover border-4 border-white"
            />
            <h3 className="mt-4 text-2xl font-semibold">Ahmad Shopnil</h3>
            <p className="mt-2 text-lg">Full-Stack Developer</p>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-semibold">What I Do</h3>
            <p className="mt-4 text-lg">
              As a web developer, I’m driven by creating intuitive, accessible,
              and high-performance web applications. I focus on both frontend
              and backend development, utilizing technologies like React,
              Next.js, and Node.js. I love solving complex problems with elegant
              solutions and constantly learning new technologies to enhance my
              skills.
            </p>
            <p className="mt-4 text-lg">
              I believe in the importance of continuous improvement, whether
              it’s writing clean, maintainable code or optimizing user
              interfaces for the best user experience. I enjoy collaborating
              with teams to bring ideas to life and strive to make the
              development process as efficient and smooth as possible.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-teal-600 hover:bg-teal-200 rounded-md shadow-md transition duration-300"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

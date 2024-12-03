import AboutMe from "@/components/AboutMe";

import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TopHero from "@/components/TopHero";
// import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main> */}

      <main>
        <TopHero />
        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-gray-100  dark:bg-gray-900  text-center text-gray-600 dark:text-gray-400">
        <div className="container mx-auto px-4 py-6 ">
          <span> © 2023 Abu Shaleh Ahamad Shopnil. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        © 2023 Abu Shaleh Ahamad Shopnil. All rights reserved.
      </footer>
    </div>
  );
}

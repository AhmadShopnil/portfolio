"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TopHero = () => {
  return (
    <section
      className="relative h-96 flex items-center justify-center overflow-hidden
     bg-gray-900 text-white"
    >
      {/* Background image */}
      {/* <Image
        src="/images/hero-background.jpg"
        alt="Hero background"
        fill
        className="object-cover opacity-30"
        priority
      /> */}

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Crafting Digital Experiences
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-3 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, Im Abu Shaleh Ahamad Shopnil. Im a full-stack developer
            passionate about building innovative web solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white
               font-semibold rounded-full hover:bg-blue-700 transition duration-300"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated shapes */}
      <motion.div
        className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default TopHero;

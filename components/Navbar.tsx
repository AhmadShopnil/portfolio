"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-3 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <h1 className=" text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
            Abu Shaleh Ahamad Shopnil
          </h1>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`md:flex ${
              isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto
             bg-gray-100 dark:bg-gray-800 md:bg-transparent`}
          >
            {menuItems.map((item) => (
              <li key={item.name} className="md:ml-6 mt-2 md:mt-0">
                <Link
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-600 md:dark:hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

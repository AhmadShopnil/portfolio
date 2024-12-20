import Image from "next/image";

export default function Hero() {
  return (
    <section className="">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* left side */}
        <div className="md:w-1/2 mb-8 md:mb-0 py-22">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Full Stack Web Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
            Crafting robust and scalable web solutions with modern technologies.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-3 py-2 md:px-6  text-sm font-medium text-white bg-blue-600
             rounded-md hover:bg-blue-700
             dark:bg-blue-500 dark:hover:bg-blue-600 
             transition duration-300"
          >
            Get in Touch
          </a>
        </div>
        {/* right side */}
        <div className="md:w-1/2">
          <Image
            src="/images/2.jpg"
            alt="Abu Shaleh Ahamad Shopnil"
            width={500}
            height={500}
            className=" mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

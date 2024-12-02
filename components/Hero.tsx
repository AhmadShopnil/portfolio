import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* left side */}
        <div className="md:w-1/2 mb-8 md:mb-0 py-22">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Full Stack Web Developer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Crafting robust and scalable web solutions with modern technologies.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 
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

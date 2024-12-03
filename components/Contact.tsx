import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className=" dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4 ">
          Contact Me
        </h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="mr-2" />
                  <span>ahmadshopnil75@gmail.com</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="mr-2" />
                  <span>01857454516</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="mr-2" />
                  <span>Tangail, Bangladesh</span>
                </li>
              </ul>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

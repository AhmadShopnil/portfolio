import ProjectCard from "./ProjectCard";

export type TProject = {
  title: string;
  category: string;
  image: string;
  live: string;
  githubLink: string;
};

export default function Projects() {
  const projects: TProject[] = [
    {
      title: "Share Space",
      category: "FullStack",
      image: "/images/projects/share-space-1.png",
      live: "https://share-space-tangail.vercel.app/",
      githubLink: "https://github.com/AhmadShopnil/ShareSpace-client__Prod",
    },
    {
      title: "Bike Rental ",
      category: "FullStack",
      image: "/images/projects/bike-rent-1.png",
      live: "https://bike-rent-reactjs.netlify.app/",
      githubLink: "https://github.com/AhmadShopnil/bikeRent-frontEnd-reactJs",
    },
    {
      title: "OneBitPay",
      category: "FullStack",
      image: "/images/projects/onebitpay-1.png",
      live: "https://onebitpay.netlify.app/",
      githubLink: "",
    },
    {
      title: "E-Bazar",
      category: "FrontEnd",
      image: "/images/projects/e-bazar-1.png",
      live: "https://e-bazar2.netlify.app/",
      githubLink: "https://github.com/AhmadShopnil/e-bazar",
    },
    {
      title: "E-Learning",
      category: "FullStack",
      image: "/images/projects/e-learning-1.png",
      live: "https://e-learning2.netlify.app/",
      githubLink: "https://github.com/AhmadShopnil/e-learning",
    },
    {
      title: "Agency",
      category: "FrontEnd",
      image: "/images/projects/agency-1.png",
      live: "https://agency-template-1.netlify.app/",
      githubLink: "",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

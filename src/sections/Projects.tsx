import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImg from "@/assets/images/grain.jpg";
import Image from "next/image";

import dashbaordImg from "@/assets/images/admin-dashbaord.png"
import restruntImg from "@/assets/images/mehrad.png"
import frontEndMentorImg from "@/assets/images/mentor.png"

const portfolioProjects = [
  {
    dev: "Zalvex tech",
    year: "2025",
    title: "school management system",
    results: [
    { title: "Includes 4 modes: Student, Teacher, Admin, and Parent" },
    { title: "Centralized dashboard for managing academic records and attendance" },
    { title: "Streamlined communication between parents and teachers" },
    ],
    github:"https://github.com/zallaqa/Salaxudiin-schoo",
    image:dashbaordImg ,
  },
  {
    dev: "Zalvex Tech",
    year: "2023",
    title: "Restaurant Ordering System",
    results: [
      { title: "Supports dine-in, takeaway, and delivery modes" },
      { title: "Real-time order tracking and kitchen display integration" },
      { title: "Improved customer satisfaction and reduced wait time" },
    ],
    github:"https://github.com/zallaqa/zelvch_food",
    image:restruntImg,
  },
  {
    dev: "Zalvex Tech",
    year: "2020",
    title: "Frontend Mentor Dropdown Navigation",
    results: [
      { title: "Built responsive multi-level dropdown menus" },
      { title: "Achieved pixel-perfect UI from design challenge" },
      { title: "Improved accessibility and keyboard navigation" },
    ],
    github:"https://github.com/zallaqa/frontend_mentor_dropdown_navigation",
    image: frontEndMentorImg,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 bg-clip-text text-transparent to-sky-400 text-center">
            Real - World Projects
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Project
        </h2>
        <p className="text-center md:text-lg lg:text-lg text-white/60 mt-4 max-w-md mx-auto">
          See how i transformed concepts into engaging digital experience
        </p>

        <div className="flex flex-col md:mt-20 mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImg.src})`,
                }}
              ></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.dev}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.github}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View on GitHub</span>
                      <ArrowUpIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

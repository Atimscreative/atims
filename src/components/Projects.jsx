import Heading from "./Heading";
import { Link } from "react-router-dom";
import Porker from "../assets/porker.png";
import Morero from "../assets/morero.png";
import Magenta from "../assets/magenta.png";
import Quickpay from "../assets/quickpay.png";
import Bankify from "../assets/bankify.png";
import Getlinked from "../assets/getlinked.png";

const myProjects = [
  {
    prototype: Quickpay,
    tools: ["HTML", "CSS", "JavaScript"],
    title: "QuickPay",
    link: "https://atimscreative.github.io/quickpay/",
    description: "Send money to your Family and Friends efficiently.",
    active: true,
  },
  {
    prototype: Getlinked,
    tools: ["React", "JavaScript", "Tailwind CSS"],
    title: "Getlinked",
    link: "https://atimscreative.github.io/getlinked/",
    description: "A Web Application built during a 3days UI challenge",
    active: true,
  },
  {
    prototype: Magenta,
    tools: ["HTML", "CSS/SCSS", "JavaScript"],
    title: "Magenta City",
    link: "https://atimscreative.github.io/magentacity/",
    description: "Nutrient-Rich Plant-Based Meal and Snack Recipes",
    active: true,
  },
  {
    prototype: Morero,
    tools: ["CodeIgniter(PHP)", "Bootstrap", "Web App"],
    title: "Morero.co.uk",
    link: "https://morero.co.uk/",
    description: "Digital Construction Project Management Software",
    active: false,
  },
  {
    prototype: Porker,
    tools: ["React", "TypeScript", "E-commerce"],
    title: "Porker Hut",
    link: "https://pokerhut-dev.vercel.app/",
    description: "Agro Commerce – Livestock, Feeds, and Pig Carcasses",
    active: false,
  },
  {
    prototype: Bankify,
    tools: ["React", "JavaScript", "Tailwind CSS"],
    title: "Bankify",
    link: "https://bankify-peach.vercel.app/",
    description: "Online Banking, Instant Transfer, Swift Account Closing",
    active: false,
  },
];

const Projects = () => {
  return (
    <section className="py-16">
      <div className="wrapper">
        <Heading
          text=" Discover some of the products i've got the opportunity to work and learn about my process."
          title="What i recently worked on"
        />
        <div className="flex flex-wrap items-center justify-between gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {myProjects.map((project, index) => (
            <Link
              to={project.active ? project.link : "#"}
              target={project.active ? "_blank" : "_self"}
              key={index}
              className="group w-full cursor-pointer overflow-hidden rounded-lg bg-neutral-900 p-5"
            >
              <div className="w-full">
                <span
                  className={`mb-2 rounded-md bg-main-200 bg-opacity-10 p-2 text-xs text-main-200 ${
                    !project.active ? "inline-block" : "hidden"
                  }`}
                >
                  Coming Soon
                </span>
                <p className="text-sm uppercase tracking-widest">
                  {project.title}
                </p>

                <h3 className="mb-3 text-balance text-xl font-semibold">
                  {project.description}
                </h3>
              </div>
              <div className="flex gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-neutral-800 px-3 py-2 text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <img
                src={project?.prototype}
                alt="project"
                // className="mt-12 w-full duration-500 group-hover:translate-y-4 group-hover:scale-[1.2]"
                className="mt-8 w-full duration-500 group-hover:-translate-y-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

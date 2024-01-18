import Temp from "../assets/temp.png";
import Temp2 from "../assets/temp2.png";
import Temp3 from "../assets/temp3.png";
import Heading from "./Heading";

const myProjects = [
  {
    prototype: Temp2,
    tools: ["HTML", "CSS", "JavaScript"],
    title: "QuickPay",
    description: "Send money to your Family & Friends efficiently.",
    active: true,
  },
  {
    prototype: Temp2,
    tools: ["React", "JavaScript", "Tailwind CSS"],
    title: "Getlinked",
    description: "A Webapp built during a 3 day UI challenge",
    active: true,
  },
  {
    prototype: Temp2,
    tools: ["HTML", "CSS/SCSS", "JavaScript"],
    title: "Magenta City",
    description: "Nutrient-Rich Plant-Based Meal and Snack Recipes",
    active: true,
  },
  {
    prototype: Temp3,
    tools: ["CodeIgniter(PHP)", "Bootstrap", "Web App"],
    title: "Morero.co.uk",
    description: "Digital Construction Project Management Software",
    active: false,
  },
  {
    prototype: Temp3,
    tools: ["React", "TypeScript", "E-commerce"],
    title: "Porker Hut",
    description: "Agro Commerce – Livestock, Feeds, and Pig Carcasses",
    active: false,
  },
  {
    prototype: Temp,
    tools: ["React", "JavaScript", "Tailwind CSS"],
    title: "Bankify",
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
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg bg-neutral-900 p-6 md:p-8 lg:h-[400px]"
            >
              <div className="w-full">
                <p className="text-sm uppercase tracking-widest">
                  {project.title}
                </p>
                <h3 className="mb-2 text-xl font-semibold">
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
                src={project.prototype}
                alt="project"
                className="mt-20 scale-[1.18] lg:scale-150"
              />
              <span
                className={`absolute bottom-6 right-8  animate-bounce rounded-md border border-neutral-700 bg-neutral-300 bg-opacity-10 px-4 py-2 text-neutral-50 shadow-2xl backdrop-blur-lg ${
                  !project.active ? "inline-block" : "hidden"
                }`}
              >
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

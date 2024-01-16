import Project1 from "../assets/bankify.jpg";
import Heading from "./Heading";

const Projects = () => {
  return (
    <section className="py-16">
      <div className="wrapper">
        <Heading
          text=" Discover some of the products i've got the opportunity to work and learn about my process."
          title="What i recently worked on"
        />
        <div className="flex flex-wrap items-center justify-between gap-8 md:grid md:grid-cols-2">
          <div className="w-full bg-primary-300 p-8">
            <figure className="">
              <img
                src={Project1}
                className="h-[300px] w-full object-cover"
                alt=""
              />
            </figure>
            <div className="mt-6">
              <h3 className="mb-2 text-xl font-semibold">
                Bankify - Online Banking Solution
              </h3>
              <p className="">
                Bankify is a modern and customer-centric financial institution
                that aim to be your trusted partner in achieving your financial
                goals.
              </p>
            </div>
          </div>
          <div className="w-full bg-primary-300 p-8">
            <figure className="">
              <img
                src={Project1}
                className="h-[300px] w-full object-cover"
                alt=""
              />
            </figure>
            <div className="mt-6">
              <h3 className="mb-2 text-xl font-semibold">
                Bankify - Online Banking Solution
              </h3>
              <p className="">
                Bankify is a modern and customer-centric financial institution
                that aim to be your trusted partner in achieving your financial
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

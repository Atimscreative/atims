import { Link } from "react-router-dom";
import ProfilePic from "../assets/profile-pic.png";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[30vh] w-full overflow-clip bg-[url(./assets/line.png)] bg-cover bg-center pb-10 lg:pb-16 lg:pt-20  xl:h-screen xl:p-0"
    >
      <div className="wrapper z-20 flex h-full items-center justify-center">
        <div className="flex flex-col-reverse items-center justify-center pt-24 lg:flex-row-reverse lg:justify-center lg:gap-x-14">
          <div className="mb-8 text-center sm:mx-auto sm:w-10/12 md:w-[37.5rem] lg:mx-0 lg:w-[50%] lg:text-left">
            <p className="hero-intro">Hi, I&apos;m Timilehin</p>
            <h1 className="hero-title mb-4 mt-1 text-3xl font-bold leading-tight md:text-4xl md:leading-[120%] lg:text-5xl lg:leading-[125%]">
              Front-end Developer <br />& Website Designer
            </h1>
            <p className="mb-8 text-balance">
              With a talent for mixing digital creativity and development, I
              transform ideas into visually stunning and user-friendly websites.
              {/* I'm Brittany Chiang, a design-minded front-end software engineer focused on building beautiful interfaces & experiences  */}
            </p>
            <Link
              to="/"
              className="btn bg-gradient-to-tr from-main-100 to-main-200 text-white duration-500 hover:-translate-y-1 hover:shadow-btn"
            >
              Contact Me
            </Link>
            <Link
              to="/"
              className="btn group items-center gap-2 duration-300 hover:text-white"
            >
              View Portfolio
              <span className="duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <BsArrowUpRight size={20} />
              </span>
            </Link>
          </div>
          {/* PROFILE IMAGE */}
          <div className="mb-8 flex h-[200px] w-[200px] items-center justify-center rounded-full bg-neutral-900 bg-opacity-50 backdrop-blur-2xl lg:mb-0 lg:h-[400px] lg:w-[400px]">
            <img
              src={ProfilePic}
              alt="Abegunde Timilehin Photo"
              className=" h-[150px] w-[150px] rounded-full border-[6px] bg-opacity-25 bg-gradient-to-b from-neutral-800 to-neutral-900 object-cover object-top backdrop-blur-2xl lg:h-[300px] lg:w-[300px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute -top-[250px] left-1/2 h-[200px] w-[700px] -translate-x-1/2 rounded-full bg-main-100 blur-[200px]"></div>
    </section>
  );
};

export default Hero;

import { Link } from "react-router-dom";
import ProfilePic from "../assets/profile-pic.png";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[30vh] w-full bg-[url(./assets/line.png)] bg-cover bg-center pb-10 lg:h-screen"
    >
      <div className="wrapper flex h-full items-center justify-center">
        <div className="flex flex-col-reverse items-center justify-center pt-24 lg:flex-row-reverse lg:justify-center lg:gap-x-14">
          <div className="mb-8 text-center sm:mx-auto sm:w-10/12 md:w-[37.5rem] lg:mx-0 lg:w-[50%] lg:text-left">
            <p className="hero-intro">Hi, I&apos;m Timilehin</p>
            <h1 className="hero-title mb-4 mt-1 text-3xl font-bold leading-tight md:text-4xl md:leading-[120%] lg:text-5xl lg:leading-[125%]">
              Front-end Developer <br />& Website Designer
            </h1>
            <p className="mb-8 text-balance">
              With a talent for mixing digital creativity and development, I
              transform ideas into visually stunning and user-friendly websites.
            </p>
            <Link
              to="/"
              className="btn bg-gradient-to-tr from-blue-500 to-blue-700 text-white"
            >
              Contact Me
            </Link>
            <Link
              to="projects"
              className="btn items-center gap-2 hover:text-white"
            >
              View Portfolio
              <BsArrowUpRight size={20} />
            </Link>
          </div>
          {/* PROFILE IMAGE */}
          <img
            src={ProfilePic}
            alt="Abegunde Timilehin Photo"
            className="mb-8 h-[200px] w-[200px] rounded-full border-[6px] bg-primary-300 bg-opacity-25 object-cover object-top backdrop-blur-2xl lg:m-0 lg:h-[400px] lg:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

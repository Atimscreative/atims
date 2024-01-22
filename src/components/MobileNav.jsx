import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// eslint-disable-next-line
const MobileNav = ({ openMenu, resume, handleOpenMenu }) => {
  return (
    <>
      <section
        className={`fixed top-0 z-[999] flex h-screen w-full items-start justify-center  bg-neutral-950 duration-500 ${
          openMenu ? "right-0" : "-right-full"
        }`}
      >
        <div
          className={`mt-28 inline-flex flex-col items-center justify-center gap-14 p-8`}
        >
          <ScrollLink to="hero" onClick={handleOpenMenu} className="nav-link">
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            onClick={handleOpenMenu}
            className="nav-link"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="services"
            onClick={handleOpenMenu}
            className="nav-link"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            onClick={handleOpenMenu}
            className="nav-link"
          >
            Contact
          </ScrollLink>

          <div className="mt-8 border-t border-neutral-700 pt-8">
            <Link
              to={resume}
              target="_blank"
              download="abegunde-resume.pdf"
              className="group flex items-center gap-2"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-main-100 bg-opacity-20 duration-300 after:h-2 after:w-2 after:rounded-full after:bg-main-100 after:shadow-sm group-hover:scale-75"></span>
              <span className="text-2xl text-neutral-100">My Resume</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileNav;

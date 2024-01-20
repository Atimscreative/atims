import { Link } from "react-router-dom";

// eslint-disable-next-line
const MobileNav = ({ openMenu, resume }) => {
  return (
    <>
      <section
        className={`fixed top-0 z-[999] flex h-full w-full items-start justify-center  bg-neutral-950 duration-500 ${
          openMenu ? "right-0" : "-right-full"
        }`}
      >
        <div
          className={`mt-28 inline-flex flex-col items-center justify-center gap-14 p-8`}
        >
          <Link className="nav-link">About</Link>
          <Link className="nav-link">Projects</Link>
          <Link className="nav-link">Contact</Link>

          <div className="mt-8 border-t border-neutral-700 pt-8">
            <Link
              to={resume}
              target="_blank"
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

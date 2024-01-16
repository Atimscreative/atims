import { Link } from "react-router-dom";

// eslint-disable-next-line
const MobileNav = ({ openMenu }) => {
  return (
    <>
      <section
        className={`fixed right-0 top-0 z-[999] flex h-full w-full items-start justify-center  bg-primary-400 transition-opacity duration-500 ${
          openMenu ? "opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`mt-28 inline-flex flex-col items-center justify-center gap-14 p-8`}
        >
          <Link className="nav-link">About</Link>
          <Link className="nav-link">Projects</Link>
          <Link className="nav-link">Contact</Link>
        </div>
      </section>
    </>
  );
};

export default MobileNav;

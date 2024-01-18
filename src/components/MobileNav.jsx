import { Link } from "react-router-dom";

// eslint-disable-next-line
const MobileNav = ({ openMenu }) => {
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
        </div>
      </section>
    </>
  );
};

export default MobileNav;

import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Resume from "../assets/Abegunde-Resume.pdf";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu((open) => !open);
  };

  return (
    <>
      <header
        className={`left-0 top-0 z-[999] w-full py-4 ${
          window.scrollY > 300
            ? "fixed bg-primary-400 bg-opacity-70 backdrop-blur-xl"
            : "absolute"
        }`}
      >
        <nav className="wrapper flex items-center justify-between">
          <img
            src={Logo}
            className="w-[100px] sm:w-[120px]"
            alt="Abegunde Timilehin Logo"
          />

          <div className="hidden text-neutral-100 lg:inline-flex lg:gap-10">
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Services</Link>
            <Link>Contact</Link>
          </div>

          <Link
            to={Resume}
            target="_blank"
            className="group hidden items-center gap-2 lg:flex"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-main-100 bg-opacity-20 duration-300 after:h-2 after:w-2 after:rounded-full after:bg-main-100 after:shadow-sm group-hover:scale-75"></span>
            <span className="text-neutral-100">My Resume</span>
          </Link>

          <button
            className="relative z-[9999] flex h-[30px] w-[30px] cursor-pointer items-center justify-center lg:hidden"
            onClick={handleOpenMenu}
          >
            <span
              className={`absolute left-0 top-0 duration-300 ${
                openMenu ? "opacity-0" : "opacity-100"
              }`}
            >
              <HiOutlineMenuAlt4 size={32} color="#fff" />
            </span>
            <span
              className={`absolute left-0 top-0 duration-300 ${
                openMenu ? "opacity-100" : "opacity-0"
              }`}
            >
              <IoCloseOutline size={32} color="#fff" />
            </span>
          </button>
          <MobileNav openMenu={openMenu} resume={Resume} />
        </nav>
      </header>
    </>
  );
};

export default Header;

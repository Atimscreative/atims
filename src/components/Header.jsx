import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { BsWhatsapp } from "react-icons/bs";

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

          <div className="hidden lg:inline-flex lg:gap-6">
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Services</Link>
            <Link>Contact</Link>
          </div>

          <Link
            to="https://wa.me/2348089134442"
            target="_blank"
            className="hidden items-center gap-2"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-main-200 text-neutral-50">
              <BsWhatsapp size={12} />
            </span>
            <span className="tracking-wide">+2348089134442</span>
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
          <MobileNav openMenu={openMenu} />
        </nav>
      </header>
    </>
  );
};

export default Header;

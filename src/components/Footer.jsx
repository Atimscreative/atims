import { BsLinkedin } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[url(./assets/footer.svg)] bg-cover bg-center bg-no-repeat py-16"
    >
      <div className="section">
        <div className="flex flex-col items-center justify-center gap-y-8">
          <a href="#">
            <img src={Logo} alt="Abegunde Timilehin Logo" />
          </a>

          <div className="flex items-center justify-center gap-5">
            <Link to="#" aria-label="linkedin">
              <BsLinkedin
                size={20}
                className="hover:fill-main-100 fill-white duration-300"
              />
            </Link>
            <Link to="#" aria-label="behance">
              <BsBehance
                size={20}
                className="hover:fill-main-100 fill-white duration-300"
              />
            </Link>
            <Link to="#" aria-label="github">
              <BsGithub
                size={20}
                className="hover:fill-main-100 fill-white duration-300"
              />
            </Link>
            <Link to="#" aria-label="twitter-x">
              <BsTwitterX
                size={20}
                className="hover:fill-main-100 fill-white duration-300"
              />
            </Link>
            <Link to="#" aria-label="instagram">
              <BsInstagram
                size={20}
                className="hover:fill-main-100 fill-white duration-300"
              />
            </Link>
          </div>

          <p className="mt-10 text-center">
            Copyright © 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Link } from "react-scroll";
import { IconContext } from "react-icons";
import { FaTimes, FaBars } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-14 w-full left-0 right-0 bg-white transition ">
        <ul className="text-center pt-4 text-[24px]">
          <Link spy={true} smooth={true} to="Home">
            <li
              className="py-4 text-blue-600 border-b border-charcoal-800 hover:bg-charcoal-800 hover:rounded cursor-pointer"
              onClick={handleClick}
            >
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li
              className="py-4 text-blue-600 border-b border-charcoal-800 hover:bg-charcoal-800 hover:rounded cursor-pointer"
              onClick={handleClick}
            >
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Experience">
            <li
              className="py-4 text-blue-600 border-b border-charcoal-800 hover:bg-charcoal-800 hover:rounded cursor-pointer"
              onClick={handleClick}
            >
              Professional Experience
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
                <li
                  className="py-4 text-blue-600 border-b border-charcoal-800 hover:bg-charcoal-800 hover:rounded cursor-pointer"
                  onClick={handleClick}
                >
                  Projects
                </li>
              </Link>
          <Link spy={true} smooth={true} to="Education">
            <li
              className="py-4 text-blue-600 border-b border-charcoal-800 hover:bg-charcoal-800 hover:rounded cursor-pointer"
              onClick={handleClick}
            >
              Education
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Pastimes">
            <li
              className="py-4 text-blue-600 border-b border-charcoal-800 hover:bg-charcoal-800 hover:rounded cursor-pointer"
              onClick={handleClick}
            >
              Pastimes
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li
              className="py-4 text-blue-600 border-b border-charcoal-800 hover:bg-charcoal-800 hover:rounded cursor-pointer"
              onClick={handleClick}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="sticky top-0 bg-white z-[100]">
      <div className="h-10vh flex justify-between z-50 text-blue-600 px-5 py-4">
        <div className="flex items-center flex-1">
          <img className="h-9" src="/mjk_logo_cv.svg" alt="" />
        </div>
        <div className="lg:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[24px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="text-blue-600 hover:text-blue-300 border-b-2 border-white hover:border-blue-300 transition cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="text-blue-600 hover:text-blue-300 border-b-2 border-white hover:border-blue-300 transition cursor-pointer">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Experience">
                <li className="text-blue-600 hover:text-blue-300 border-b-2 border-white hover:border-blue-300 transition cursor-pointer">
                  Experience
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="text-blue-600 hover:text-blue-300 border-b-2 border-white hover:border-blue-300 transition cursor-pointer">
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Education">
                <li className="text-blue-600 hover:text-blue-300 border-b-2 border-white hover:border-blue-300 transition cursor-pointer">
                  Education
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Pastimes" onClick={handleClick}>
                <li className="text-blue-600 hover:text-blue-300 border-b-2 border-white hover:border-blue-300 transition cursor-pointer">
                  Pastimes
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact" onClick={handleClick}>
                <li className="text-blue-600 hover:text-blue-300 border-b-2 border-white hover:border-blue-300 transition cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <IconContext.Provider value={{ className: "text-blue-600 hover:text-blue-300 text-3xl" }}>
          <button className="block lg:hidden transition pr-4 " onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </IconContext.Provider>
      </div>
    </nav>
  );
};

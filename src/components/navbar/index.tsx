import { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars, FaGithubSquare, FaLinkedin, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

export const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="absolute left-0 right-0 top-14 block w-full bg-white transition lg:hidden ">
        <ul className="pt-4 text-center text-[24px]">
          <Link
            spy={true}
            smooth={true}
            to="About"
          >
            <li
              className="cursor-pointer border-b border-charcoal-800 py-4 text-blue-600 hover:rounded hover:bg-charcoal-800 hover:font-semibold hover:text-blue-300"
              onClick={handleClick}
            >
              About
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="Experience"
          >
            <li
              className="cursor-pointer border-b border-charcoal-800 py-4 text-blue-600 hover:rounded hover:bg-charcoal-800 hover:font-semibold hover:text-blue-300"
              onClick={handleClick}
            >
              Professional Experience
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="Projects"
          >
            <li
              className="cursor-pointer border-b border-charcoal-800 py-4 text-blue-600 hover:rounded hover:bg-charcoal-800 hover:font-semibold hover:text-blue-300"
              onClick={handleClick}
            >
              Projects
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="Education"
          >
            <li
              className="cursor-pointer border-b border-charcoal-800 py-4 text-blue-600 hover:rounded hover:bg-charcoal-800 hover:font-semibold hover:text-blue-300"
              onClick={handleClick}
            >
              Education
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="Pastimes"
          >
            <li
              className="cursor-pointer border-b border-charcoal-800 py-4 text-blue-600 hover:rounded hover:bg-charcoal-800 hover:font-semibold hover:text-blue-300"
              onClick={handleClick}
            >
              Pastimes
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="Contact"
          >
            <li
              className="cursor-pointer border-b border-charcoal-800 py-4 text-blue-600 hover:rounded hover:bg-charcoal-800 hover:font-semibold hover:text-blue-300"
              onClick={handleClick}
            >
              Contact
            </li>
          </Link>

          <li className="flex justify-center border-b border-charcoal-800 py-4 text-4xl  hover:rounded hover:bg-charcoal-800">
            <a
              className="mx-4 cursor-pointer text-blue-600 hover:text-blue-300"
              href="https://github.com/mjkeeble"
            >
              <FaGithubSquare />
            </a>
            <a
              className="mx-4 cursor-pointer text-blue-600 hover:text-blue-300"
              href="https://www.linkedin.com/in/markjkeeble/"
            >
              <FaLinkedin />
            </a>

            <a
              className="mx-4 cursor-pointer text-blue-600 hover:text-blue-300"
              href="mailto:mark@keeble.email"
            >
              <MdEmail />
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="sticky top-0 z-[100] bg-white">
      <div className="h-10vh z-50 flex justify-between px-5 py-4 text-blue-600">
        <div className="flex flex-1 items-center">
          <Link
            spy={true}
            smooth={true}
            to="Home"
          >
            <img
              className="h-9"
              src="/mjk_logo_cv.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden items-center justify-end font-normal lg:flex lg:flex-1">
          <div className="flex-10">
            <ul className="mr-2 flex gap-8 text-[24px]">
              <Link
                spy={true}
                smooth={true}
                to="About"
              >
                <li className="cursor-pointer border-b-2 border-white text-blue-600 transition hover:border-blue-300 hover:text-blue-300">
                  About
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="Experience"
              >
                <li className="cursor-pointer border-b-2 border-white text-blue-600 transition hover:border-blue-300 hover:text-blue-300">
                  Experience
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="Projects"
              >
                <li className="cursor-pointer border-b-2 border-white text-blue-600 transition hover:border-blue-300 hover:text-blue-300">
                  Projects
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="Education"
              >
                <li className="cursor-pointer border-b-2 border-white text-blue-600 transition hover:border-blue-300 hover:text-blue-300">
                  Education
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="Pastimes"
                onClick={handleClick}
              >
                <li className="cursor-pointer border-b-2 border-white text-blue-600 transition hover:border-blue-300 hover:text-blue-300">
                  Pastimes
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="Contact"
                onClick={handleClick}
              >
                <li className="cursor-pointer border-b-2 border-white text-blue-600 transition hover:border-blue-300 hover:text-blue-300">
                  Contact
                </li>
              </Link>
              <li className="flex">
                <a
                  className="cursor-pointer border-b-2 border-white px-1 text-3xl text-blue-600 transition hover:border-blue-300 hover:text-blue-300"
                  href="https://github.com/mjkeeble"
                >
                  <FaGithubSquare />
                </a>
                <a
                  className="cursor-pointer border-b-2 border-white px-1 text-3xl text-blue-600 transition hover:border-blue-300 hover:text-blue-300"
                  href="https://www.linkedin.com/in/markjkeeble/"
                >
                  <FaLinkedin />
                </a>

                <a
                  className="cursor-pointer border-b-2 border-white px-1 text-3xl text-blue-600 transition hover:border-blue-300 hover:text-blue-300"
                  href="mailto:mark@keeble.de"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <IconContext.Provider value={{ className: "text-blue-600 hover:text-blue-300 text-3xl" }}>
          <button
            className="block pr-4 transition lg:hidden "
            onClick={handleClick}
          >
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </IconContext.Provider>
      </div>
    </nav>
  );
};

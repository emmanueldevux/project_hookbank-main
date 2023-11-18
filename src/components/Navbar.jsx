import {useState} from "react";
import {logo, close, menu} from "../assets";
import {navLinks} from "../constants";
import { Link } from 'react-router-dom';
import Homepage from "../components/Homepage";
import Contactpage from "../components/Contactpage";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/Homepage">
        {" "}
        <img
          src={logo}
          alt="logo-img"
          className="w-[184px] h-auto"
        />{" "}
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`
              "font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1
                  ? "mr-0"
                  : "mr-10"
              } text-black "`}
          >
            <a
              href="{'#${nav.id}'}"
              className="text-text_gray"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* --------------------mobile nav------------------- */}
      <div className="sm:hidden flex flex:1 justify-end items-center">
        <Link to="/Homepage">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        </Link>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-8 bg-white absolute top-20 right-0  min-w[140px] rounded-xl sidebar w-full z-[300] mr-5 ml-5 `}
        >
          <ul className="list-none flex-col justify-end items-center ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`
              "font-michroma cursor-pointer text-[28px] ${
                index === navLinks.length - 1
                  ? "mr-0"
                  : "mb-5"
              } text-black "`}
              >
                <a href="{'#${nav.id}'}">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* --------------------mobile nav------------------- */}
      <button className="text-[10px] font-michroma px-8 py-3 bg-button text-white rounded-md font-michroma text-white hidden md:block">
        <Link to="/Contactpage">Contact us</Link>
      </button>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const showShadow = () => {
    if (window.scrollY > 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showShadow);
    return () => {
      window.removeEventListener("scroll", showShadow);
    };
  }, []);

  return (
    <div className={`sticky z-50 top-0 bg-black ${shadow ? " shadow-md shadow-slate-800" : "" }`}>

      <div className=" flex items-center justify-between max-w-[1000px] mx-auto p-5">

        <img src="./myLogo.png" className="w-16 rounded-full"/>


        <nav className={ 
          nav ? "md:relative md:bg-slate-900 md:flex-row md:justify-end absolute right-0 top-full flex flex-col gap-5 w-full items-center bg-slate-700" 
          : " hidden md:flex md:gap-5" } >
         <Link
            to="home"
            activeClass="text-gray-500"
            onClick={() => setNav(!nav)}
            className="cursor-pointer px-5 py-4 "
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Home
          </Link>
          <Link
            to="about"
            activeClass="text-gray-500"
            onClick={() => setNav(!nav)}
            className="cursor-pointer px-5 py-4"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            About
          </Link>

          <Link
            to="skill"
            activeClass="text-gray-500"
            onClick={() => setNav(!nav)}
            className="cursor-pointer px-5 py-4"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Skills
          </Link>

          <Link
            to="project"
            activeClass="text-gray-500"
            onClick={() => setNav(!nav)}
            className=" cursor-pointer px-5 py-4"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Projects
          </Link>

          <Link
            to="certification"
            activeClass="text-gray-500"
            onClick={() => setNav(!nav)}
            className=" cursor-pointer px-5 py-4"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Certification
          </Link>

          <Link
            to="contact"
            activeClass="text-gray-500"
            onClick={() => setNav(!nav)}
            className="cursor-pointer px-5 py-4"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Contact
          </Link>
        </nav>

        <div className="md:hidden cursor-pointer" onClick={() => setNav(!nav)}>
          {!nav ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </div>
      </div>
    </div>
  );
}



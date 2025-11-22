import { Link, animateScroll as scroll } from "react-scroll";

export default function About() {
  return (
    <div className="py-20 text-white bg-slate-900 justify-center items-center p-5 ">
      <div className="text-center">
        <h1 className="font-bold  text-3xl">About</h1>
        <h2 className="py-2 font-semibold text-xl">Who I Am?</h2>
      </div>

      <div className="md:grid max-w-[900px] m-auto grid-cols-2 gap-[20px] items-center">
        <div>
          <p className="tracking-wider mb-10 leading-10 md:w-[500px] mt-10">
            Detail-oriented and tech-savvy developer with a strong foundation in
            web development, cloud technologies, and data handling. Demonstrates
            excellent problem-solving skills, integrity, and a passion for
            digital transformation. Eager to contribute to innovative projects
            involving software development, product design, and AI. Committed to
            continuous learning and adapting quickly to new technologies.
          </p>
          <Link
            to="certification"
            activeClass="text-red-800"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="w-full flex justify-center md:justify-start"
          >
            <button className="bg-blue-600 text-xl uppercase tracking-widest font-semibold p-4 w-[500px] text-white rounded-md">
              projects{" "}
            </button>
          </Link>
        </div>
        <div className="px-20">
          <img
          src="../aboutImg.png"
          alt="About-Image"
          className="rounded-full max-w-[400px]- h-auto p-8 max-md:mt-20"
        />
        </div>
         
      </div>

      <div>
       
      </div>
    </div>
  );
}

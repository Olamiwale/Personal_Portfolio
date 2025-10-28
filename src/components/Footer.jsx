import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="fixed z-50 bottom-0 w-full  bg-slate-900">
      <div className="p-6 md:max-w-[1200px] flex m-auto justify-center">
        <div className="flex font-semibold space-x-10 border p-2 border-slate-600">
          <a
            href="https://www.linkedin.com/in/paul-ogunmakinju-9236b51a3/"
            className="hover:underline tracking-wider cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>

          <a
            href="https://web.facebook.com/ogunmakinju.olawale/"
            className="hover:underline tracking-wider cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a href="https://x.com/Paulolawalee" className="hover:underline tracking-wider cursor-pointer" 
          target="_blank"
          rel="noopener noreferrer"
          >
            X
          </a>
          <a href="https://www.instagram.com/_olawalee_/" className="hover:underline tracking-wider cursor-pointer"
            target="_blank"
            rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

import {useEffect, useState} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";



export default function Header() {

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false)

  const showShadow = () => {
    if (window.scrollY > 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showShadow);
    return () => {
      window.removeEventListener('scroll', showShadow);
    };
  }, []);





  return (
    <div className={`sticky z-50 top-0 bg-gray-100 ${shadow ? 'border-b-2 shadow-lg shadow-gray-400' : ''}`}>

  
    <div className='p-5 md:px-16 md:max-w-[1000px] flex m-auto justify-between items-center'>
        <div className='uppercase font-semibold'>
          <img src='./myLogo.png' className='w-16 rounded-full
          ' />
        </div>

        <div className='md:hidden cursor-pointer' onClick={()=>setNav(!nav)}>

          {!nav ? <FaChevronUp size={20} /> : <FaChevronDown size={20} /> }
        
          
        </div>

        <nav className={nav ? 'max-md:pt-4 md:flex font-semibold md:space-x-12 flex max-md:absolute max-md:flex-col right-0 top-full max-md:space-y-10 max-md:bg-slate-300 max-md:w-full max-md:justify-center max-md:items-center cursor-pointer': 'hidden md:flex md:space-x-12 font-semibold'}>

      <Link 
       to="home"
       activeClass="text-red-800"
       onClick={() => setNav(!nav)}
       className='max-md:border-b pb-5 w-full justify-center flex items-center cursor-pointer'
       smooth={true}
       duration={500}
       spy={true}
       offset={-80}>
        Home
      </Link>



      <Link 
      to="about" 
      activeClass="text-red-800"
      onClick={() => setNav(!nav)}
      className='max-md:border-b pb-5 w-full justify-center flex items-center cursor-pointer'
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}>
        About
      </Link>

      <Link to="skill" 
      activeClass="text-red-800"
      onClick={() => setNav(!nav)}
      className='max-md:border-b pb-5 w-full justify-center flex items-center cursor-pointer'
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}>
        Skills
      </Link>

      <Link to="project" activeClass="text-red-800"
       onClick={() => setNav(!nav)}
       className='max-md:border-b pb-5 w-full justify-center flex items-center cursor-pointer'
       smooth={true}
       duration={500}
       spy={true}
       offset={-80}>
        Projects
      </Link>

      <Link to="certification" activeClass="text-red-800"
       onClick={() => setNav(!nav)}
       className='max-md:border-b pb-5 w-full justify-center flex items-center cursor-pointer'
       smooth={true}
       duration={500}
       spy={true}
       offset={-80}>
        Certification
      </Link>

      <Link to="contact" activeClass="text-red-800"
       onClick={() => setNav(!nav)}
       className='max-md:border-b pb-5 w-full justify-center flex items-center cursor-pointer'
       smooth={true}
       duration={500}
       spy={true}
       offset={-80}>
        Contact
      </Link>
    </nav>
    </div>  


    </div>
  )
}




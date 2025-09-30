import { Link, animateScroll as scroll } from 'react-scroll';



export default function About() {
  return (

   <div className='md:py-60 py-20 bg-white justify-center items-center max-w-[1000px] mx-auto md:grid grid-cols-3 p-5 '>

    <div className='md:col-span-2'>
      <h1 className="font-bold  text-3xl">About</h1>
      <h2 className="py-4 font-semibold text-xl">Who I Am?</h2>
      <p className="tracking-wider mb-10 leading-10 md:w-[500px] mt-10">
        Detail-oriented and tech-savvy developer with a strong foundation in web development, cloud technologies, and data 
handling. Demonstrates excellent problem-solving skills, integrity, and a passion for digital transformation. Eager to 
contribute to innovative projects involving software development, product design, and AI. Committed to continuous 
learning and adapting quickly to new technologies.
      </p>

          <Link
          to="certification" 
            activeClass="text-red-800"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className='w-full flex justify-center md:justify-start'
          >
            <button className='bg-blue-600 text-xl uppercase tracking-widest font-semibold p-4 w-[90%] text-white rounded-md'> 
           projects </button>
          </Link>

    </div>
    
          <img
            src='../aboutImg.png'
            alt="About-Image"
            className="rounded-full w-full h-auto p-8 max-md:mt-20"
          />
    
     
   </div>

  
  )
}
 
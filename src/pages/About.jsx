import { Link, animateScroll as scroll } from 'react-scroll';



export default function About() {
  return (

   <div className='md:py-60 py-20 text-white bg-slate-900 justify-center items-center max-w-[1000px] mx-auto md:grid grid-cols-3 p-5 '>

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


/*
import { Server, Cloud, Container, GitBranch, Code2, Rocket } from 'lucide-react';

export default function About() {
 

  const handleScrollToProjects = () => {
    const element = document.getElementById('certification');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-32 relative overflow-hidden'>
      {/* Animated background elements *
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className='max-w-6xl mx-auto px-5 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          
          {/* Left Content *
          <div className='space-y-8'>
            <div>
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  DevOps Engineer
                </span>
              </div>
              <h1 className="font-bold text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                About Me
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mt-4 rounded-full"></div>
            </div>

            <div className='space-y-6'>
              <h2 className="text-2xl font-bold text-white">
                Kubernetes-Focused Developer
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Detail-oriented and tech-savvy developer with a strong foundation in web development, cloud technologies, and data handling. Specializing in <span className="text-blue-400 font-semibold">Kubernetes orchestration</span> and <span className="text-cyan-400 font-semibold">DevOps practices</span>.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Demonstrates excellent problem-solving skills, integrity, and a passion for digital transformation. Committed to continuous learning and adapting quickly to new technologies in the cloud-native ecosystem.
              </p>
            </div>

            {/* Skills Grid 
            <div className='grid grid-cols-2 gap-4 pt-4'>
              {skills.map((skill, idx) => (
                <div 
                  key={idx}
                  className='group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-all duration-300 hover:scale-105'
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                  <div className='flex items-center gap-3 relative z-10'>
                    <div className={`bg-gradient-to-br ${skill.color} p-2 rounded-lg text-white`}>
                      {skill.icon}
                    </div>
                    <span className='text-white font-semibold'>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className='block pt-4'>
              <button 
                onClick={handleScrollToProjects}
                className='group relative w-full md:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden'
              >
                <span className='relative z-10 flex items-center justify-center gap-2 text-lg tracking-wide uppercase'>
                  View Projects
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Image 
          <div className='relative group'>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className='relative bg-gradient-to-br from-slate-800 to-slate-700 p-2 rounded-3xl border border-slate-600'>
              <img
                src='../aboutImg.png'
                alt="Developer Profile"
                className="rounded-2xl w-full h-auto object-cover shadow-2xl"
              />
              {/* Decorative elements 
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-xl">
                <Code2 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

*/
 
import { logo } from '../data'

export default function Home() {
  return (
    
       <div className='flex h-screen justify-center items-center pb-32'>
          <div className='w-3/4 md:max-w-[900px]'>
         <div>
          <div className="flex flex-col justify-center items-center">
            <p className="uppercase"> let's build together</p>
            <p className="text-[25px] md:text-[40px] lg:text-[50px] flex flex-col justify-center items-center font-bold p-4">
              <span className='orange_gradient'>Hi, I'm Briitz </span>
              <span className=" orange_gradient custom-text text-center text-[2rem] lg:text-[4rem] md:text-[3rem] ">
                Web Developer
              </span>
            </p>
            <p className="md:px-8 text-xl tracking-wider text-center lg:px-20">
              I build modern, scalable web applications with clean code and reliable, production-ready delivery workflows.
            </p>
          </div>

         <div className='flex justify-center my-[50px]'>

         
           
             <button className="bg-blue-800 text-white p-4 md:w-1/2 w-full font-bold uppercase transition duration-500 hover:bg-blue-700 tracking-widest rounded-lg">
              Contact me
            </button>
          
         </div>


         <div className="flex justify-center gap-20 my-[50px]">
          {logo.map((item, id)=>(
            <div key={id} className='bg-slate-900 hover:bg-slate-800 transition duration-500 rounded-lg shadow-sm shadow-slate-400 p-2'> 
              <a href={item.link}
                  target="_blank"
                  rel="noreferrer"> 
              <img src={item.url} alt={item.id} className="w-[30px]" />
              
              </a>
            </div>
          ))}
         </div>
        </div>
      </div>
    </div>
  )
}




// import { logo } from '../data'

// export default function Home() {
//   return (
    
//        <div className='flex h-screen justify-center items-center pb-32'>
//           <div className='w-3/4 md:max-w-[900px]'>
//          <div>
//           <div className="flex flex-col justify-center items-center">
//             <p className="uppercase"> let's build together</p>
//             <p className="text-[25px] md:text-[40px] lg:text-[50px] flex flex-col justify-center items-center font-bold p-4">
//               <span className='orange_gradient'>Hi, I'm Paul </span>
//               <span className=" orange_gradient custom-text text-center text-[2rem] lg:text-[4rem] md:text-[3rem] ">
//                 Web Developer & DevOps Engineer
//               </span>
//             </p>
//             <p className="md:px-8 text-xl tracking-wider text-center lg:px-20">
//               I build modern applications and implement Kubernetes-driven DevOps workflows for scalable, reliable, and efficient delivery.
//             </p>
//           </div>

//          <div className='flex justify-center my-[50px]'>

         
           
//              <button className="bg-blue-800 text-white p-4 md:w-1/2 w-full font-bold uppercase transition duration-500 hover:bg-blue-700 tracking-widest rounded-lg">
//               Contact me
//             </button>
          
//          </div>


//          <div className="flex justify-center gap-20 my-[50px]">
//           {logo.map((item, id)=>(
//             <div key={id} className='bg-slate-900 hover:bg-slate-800 transition duration-500 rounded-lg shadow-sm shadow-slate-400 p-2'> 
//               <a href={item.link}
//                   target="_blank"
//                   rel="noreferrer"> 
//               <img src={item.url} alt={item.id} className="w-[30px]" />
              
//               </a>
//             </div>
//           ))}
//          </div>
//         </div>
//       </div>
//     </div>
//   )
// }




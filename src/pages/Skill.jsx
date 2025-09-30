import  {skillLogo}  from '../data'



export default function Skill() {


  console.log(skillLogo)
  return (
  <div className=' md:py-60 py-20 bg-slate-100 max-w-[1000px] mx-auto p-5'>
     <div className='flex flex-col'>       
        <p className='font-bold text-3xl pb-5'>Skills</p>
        <p className='font-semibold text-xl pb-10'>Technical Expertise & Core Skills</p>
         </div>

          <div className='mt-5 grid grid-cols-5 '>
          {skillLogo.map((item, id)=>(
            <div key={id} className='flex flex-col items-center justify-center p-5 shadow-sm bg-slate-200 shadow-slate-500 m-4'>
            <img src={item.url} className='w-20' alt={item.name} /> 
            <p className='py-2 font-semibold text-[8px]'>{item.name}</p> 
            </div>
          ))}
         </div>
  </div>
  )
}

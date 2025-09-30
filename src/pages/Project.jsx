import { projectData } from '../data'

export default function Project() {
  return (
    <div className='md:py-60 py-20 bg-white items-center max-w-[1000px] mx-auto px-10 justify-center'>
     
        <p className='font-bold text-3xl mb-20 flex'>Project</p>

        <div className='grid gap-10 md:grid-cols-2 justify-center items-center'>


          
        {projectData.map((item, id) => (
  <div key={id} className='flex flex-col p-2 items-center shadow-lg shadow-gray-900 group'>
  
    <img
      src={item.img}
      className='relative group-hover:opacity-50 h-64 w-full transition-opacity duration-300'
      alt={item.name}
    />

  
    <div className='flex items-center justify-between opacity-0 group-hover:opacity-100 bg-slate-200 py-5 px-2 w-full transition-opacity duration-300'>
      <p className='py-2 font-semibold'>{item.name}</p> 

      <div className='flex space-x-5'>
        <a href={item.preview} className='flex justify-center items-center uppercase text-[10px] hover:underline font-semibold rounded-md' target='_blank'>
          Preview
        </a> 
        <a href={item.github} className='flex justify-center items-center uppercase text-[10px] hover:underline font-semibold' target='_blank'>
          GitHub
        </a> 
      </div>
    </div> 
  </div>
))}

          

         
        </div>
   
    </div>
  )
}

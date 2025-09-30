import { certifications, projectData } from "../data";

export default function Project() {
  return (
    <div className="md:py-60 py-20 px-10 bg-gray items-center justify-center">
      <p className="font-bold text-3xl mb-10 pb-5 flex">Certifications</p>

      <div className=" gap-20 grid lg:grid-cols-3 md:grid-cols-2  justify-center items-center">

        {certifications.map((item, id) => (
          <div
            key={id}
            className="p-2 bg-gray-100 items-center w-[350px]">
             
            <img
              src={item.img}
              className="h-[200px] w-full shadow-md shadow-gray-900"
              alt={item.name} />

              <div className="flex flex-col mt-6 gap-5 justify-center items-center ">
                <p className=" text-center w-full font-bold">{item.name}</p>

                <button>
                   <a className="w-full text-center" href={item.link} > Source </a>
                </button>
                </div>   
          </div>

          
        ))}
      </div>
    </div>
  );
}

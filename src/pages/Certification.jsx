import { certifications, projectData } from "../data";
import Breaker from "../components/Breaker";

export default function Project() {
  return (
    <> 
    <div className="py-20 pb-60 bg-gray mx-auto max-w-[900px] items-center justify-center">
      <div className="flex justify-center">
        <p className="font-bold text-2xl text-center mb-10 pb-5 flex">
          Certifications
        </p>
      </div>

      <div className="gap-5 items-start flex flex-col">
        {certifications.map((item, id) => (
          <div
            key={id}
            className="flex shadow-sm shadow-gray-900 p-2 w-full justify-between items-center"
          >
            <a className="w-full text-start hover:underline" href={item.link}>
              <p className=" w-full text-sm font-bold">{item.name}</p>
            </a>

            <img
              src={item.img}
              className="h-[50px] w-[60px] shadow-md shadow-gray-900"
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
    <Breaker />
    </>
  );
}

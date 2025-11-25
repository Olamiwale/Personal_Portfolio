import { useState } from "react";
import { projectData } from "../data";
import Preview from "../components/Preview";
import { Eye, Github, ExternalLink, ArrowRight } from "lucide-react";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className=" mt-16 bg-slate-900 items-center px-10 justify-center">
      <div className="mx-auto mb-16 max-w-[900px] text-center">
        <div className="inline-block mb-4"></div>
        <h2 className="font-bold text-3xl">Featured Projects</h2>
        <p className="text-gray-400 text-lg py-3 mx-auto">
          Explore my latest work showcasing full-stack development, mobile apps,
          and DevOps solutions
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:w-full w-3/4 mx-auto">
          {projectData.map((item, id) => (
            <div
              key={id}
              className="flex flex-col items-center bg-slate-800 rounded-xl"
            >
              <img
                src={item.images[0]}
                className="h-64 w-full rounded-tl-xl rounded-tr-xl"
                alt={item.name}
              />
              <div className="flex items-center justify-between py-5 px-2 w-full">
                <p className="py-2 font-semibold">{item.name}</p>
                <div>
                  {selectedProject && (
                    <Preview
                      project={selectedProject}
                      onClose={() => setSelectedProject(null)}
                    />
                  )}
                </div>
                <p className="bg-blue-600/90 backdrop-blur-sm text-white font-semibold px-3 py-1.5 text-sm rounded-full">
                  {item.category}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(item)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600/90 font-semibold p-4 rounded-xl transition-all duration-300"
              >
                <Eye size={18} />
                <span>View Details</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { projectData } from "../data";

export default function Preview({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      
      <div className="bg-slate-900 text-white overflow-hidden md:w-[800px] w-[500px]">

        <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{project.name}</h2>

          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-3 gap-1 p-2">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt={project.name} className='w-full h-[180px]' />
          ))}
        </div>

        <div className="py-4 px-4 space-y-5">

          {/* Tech stack */}
          <div className="flex gap-2 items-center">
            <Tag size={15} />
            <p>Tech stack:</p>
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <p className="font-semibold">Project Description</p>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg"
            >
              <Github size={20} />
              Source Code
            </a>

            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-600/35 px-6 py-3 rounded-lg"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}



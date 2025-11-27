import { useState } from "react";
import { Code, Database, Cloud, Cpu, Globe, Layers } from "lucide-react";
import { skillLogo } from "../skillData";

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind", level: 88 },
      ],
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 78 },
      ],
    },
    {
      title: "DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "Github Actions", level: 80 },
        { name: "AWS", level: 82 },
      ],
    },
  ];

  return (
    <div className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase bg-purple-400/10 px-4 py-2 rounded-full">
              What I Do
            </span>
          </div>
          <h2 className="font-bold text-xl md:text-5xl mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

       {/* <div className="grid grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50" >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>*/}

        <div className="rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {skillLogo.map((item, id) => (
              <div
                key={id}
                className="group relative flex flex-col items-center justify-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={item.url}
                    className="w-14 h-14 transition-transform duration-300"
                    alt={item.name}
                  />
                </div>

                <p className="mt-3 text-xs font-semibold text-gray-400 group-hover:text-white transition-colors text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            {
              label: "Technologies",
              value: "15+",
              icon: <Layers className="w-5 h-5" />,
            },
            {
              label: "Projects",
              value: "20+",
              icon: <Code className="w-5 h-5" />,
            },
            {
              label: "Deployments",
              value: "50+",
              icon: <Globe className="w-5 h-5" />,
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className=" rounded-xl p-6 border border-slate-700/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex p-2 rounded-lg bg-purple-500/10 text-purple-400 mb-2">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

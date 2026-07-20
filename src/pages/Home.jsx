import { logo } from "../data";
import Breaker from "../components/Breaker";

export default function Home() {
  return (
    <> 
    <div className="flex min-h-screen justify-center items-center px-6">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col items-center text-center">
          
          <p className="uppercase tracking-[0.35em] py-4 text-sm text-gray-400">
            Available for Freelance Projects
          </p>

          {/* Heading */}
          <div className="mt-6 space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hi, I'm
            </h1>

            <h1 className="text-5xl md:text-6xl font-extrabold py-4 orange_gradient font-merienda">
              Briitz
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Full Stack Web Developer
            </h2>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-gray-300 text-sm md:text-sm tracking-wider leading-wider">
            I design and develop modern websites and web applications that are
            fast, responsive, scalable, and built with clean code. From elegant
            user interfaces to reliable backend systems, I create digital
            experiences that perform exceptionally across every device.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-5 mt-12 w-full justify-center">
            {/* <button
              className="bg-gradient-to-r from-blue-700 to-blue-600
              hover:scale-105 hover:shadow-xl transition-all duration-300 px-10 py-4 rounded-lg font-semibold uppercase tracking-wider md:w-auto
              w-full"
            >
              View Projects
            </button> */}

            {/* <button
              className="
              border border-gray-500
              hover:border-white hover:bg-white hover:text-black transition-all duration-300 px-10 py-4 rounded-lg font-semibold uppercase  tracking-wider  md:w-auto  w-full"
            >
              Contact Me
            </button> */}
          </div>

        

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 w-full max-w-3xl">
            <div className="bg-slate-900 rounded-xl py-4 border border-slate-700 hover:border-blue-500 transition">
              ⚡ Fast
            </div>

            <div className="bg-slate-900 rounded-xl py-4 border border-slate-700 hover:border-blue-500 transition">
              📱 Responsive
            </div>

            <div className="bg-slate-900 rounded-xl py-4 border border-slate-700 hover:border-blue-500 transition">
              🚀 SEO Ready
            </div>

            <div className="bg-slate-900 rounded-xl py-4 border border-slate-700 hover:border-blue-500 transition">
              🔒 Secure
            </div>
          </div>

          {/* Tech Stack */}

          <div className="flex flex-wrap justify-center gap-4 mt-10 text-gray-400 text-sm uppercase tracking-widest">
            <span>React</span>
            <span>•</span>

            <span>Node.js</span>
            <span>•</span>

            <span>Express</span>
            <span>•</span>

            <span>TypeScript</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>

            <span>C-sharp</span>
            <span>•</span>

            <span>PostgreSQL</span>
          </div>

          {/* Social */}

          {/* <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mt-16">
            Connect With Me
          </p> */}

          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            {logo.map((item, id) => (
              <div
                key={id}
                className="bg-slate-900 hover:bg-slate-800 hover:scale-110 transition-all duration-300 rounded-xl shadow-md shadow-slate-700/40 border border-slate-700 p-3"
              >
                <a href={item.link} target="_blank" rel="noreferrer"> 
                  <img src={item.url} alt={item.id} className="w-8" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
 <Breaker />
    </>
  );
}

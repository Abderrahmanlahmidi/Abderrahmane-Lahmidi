import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import profile from "../../src/assets/images/abderrahmane.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-5rem)] bg-[#0A192F] text-[#E6F1FF] flex items-center py-16 md:py-20"
      style={{ scrollMarginTop: "5rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center">
              <span className="text-[#64FFDA] mr-4">02.</span>
              About Me
              <span className="hidden md:block h-px bg-[#233554] flex-grow ml-6"></span>
            </h2>

            <p className="text-[#8892B0] mb-4">
              Hello! I'm Abderrahmane, a front-end developer passionate about
              creating exceptional digital experiences. My journey in web
              development began in 2022 when I built my first website — and I've
              been hooked ever since.
            </p>

            <p className="text-[#8892B0] mb-4">
              I specialize in building responsive, accessible, and performant
              web applications using modern technologies. My focus is on
              creating intuitive interfaces that solve real problems while
              providing delightful user experiences.
            </p>

            <p className="text-[#8892B0] mb-8">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities to recharge my creative energy.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                "JavaScript (ES6+)",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Framer Motion",
                "Git & GitHub",
              ].map((skill) => (
                <div key={skill} className="flex items-center">
                  <FiChevronRight className="text-[#64FFDA] mr-2 min-w-[16px]" />
                  <span className="text-[#8892B0] text-sm sm:text-base">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>


          <div className="order-1 md:order-2 relative group mx-auto w-full max-w-[400px] md:max-w-[500px]">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                src={profile}
                alt="Abderrahmane Lahmidi"
                loading="lazy"
              />

              <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#64FFDA] rounded-tl-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#64FFDA] rounded-tr-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#64FFDA] rounded-bl-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#64FFDA] rounded-br-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

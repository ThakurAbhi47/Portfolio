import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/abhi.jpg";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
const container = (delay) => ({
  hidden:{ x:-100,opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition:{ duration:0.5, delay:delay}
  }
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-16"> {/* Adjusted margin-bottom */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:pr-8"> {/* Added padding-right for spacing */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-8 text-4xl font-thin tracking-tight lg:pb-16 lg:text-6xl"> {/* Adjusted padding and text size */}
              Abhijeet Singh Rathore
            </motion.h2>
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-4xl">
              FrontEnd Developer and UI/UX Designer
            </motion.span>
            <motion.p 
             variants={container(1)}
             initial="hidden"
             animate="visible"
            className="mt-4 lg:mt-8"> {/* Added margin-top */}
              {HERO_CONTENT}
            </motion.p>
             <motion.a
              href="https://drive.google.com/file/d/1i00S8ly4UVhUCoNhNWvEpizL903Tb8fA/view?usp=sharing"
              download="Abhijeet_Singh_Rathore_CV.pdf"
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <FaDownload className="text-xl" />
              Download CV
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:pl-8"> {/* Added padding-left */}
          <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover" 
            src={profilePic} 
            alt="Abhijeet Singh Rathore"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

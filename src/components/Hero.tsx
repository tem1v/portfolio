import {ChevronDown} from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  profileImage: string;
}

export function Hero({ profileImage }: HeroProps) {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-dvh flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial = {{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="mb-4 md:mb-8"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full object-cover mx-auto border-2 sm:border-4 border-white  shadow-2xl hover:scale-105 transition-all duration-500 hover:border-white"
          />
        </motion.div>

        <motion.div
          initial = {{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-4'>
            Артём Ляхов
          </h1>
          <h2 className='text-xl md:text-4xl font-bold text-white mb-2'>
            Frontend Разработчик
          </h2>
          <p className='text-lg md:text-2xl text-gray-400 mb-8'>
            Создаю современные и отзывчивые веб-приложения
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <button
            onClick={scrollToProjects}
            className='px-5 md:px-8 py-3 bg-white rounded-full transition-all duration-500 hover:bg-white/80 cursor-pointer'
          >
            Мои проекты
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 md:px-8 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-200 cursor-pointer"
          >
            Связаться
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatType:'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer hover:scale-110 transition-transform"
        onClick={scrollToProjects}
      >
        <ChevronDown className="text-white" size={32} />
      </motion.div>
    </section>
  );
}


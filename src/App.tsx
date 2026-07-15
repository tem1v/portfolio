import {Hero} from "./components/Hero.tsx";
import { Contact } from "./components/Contact.tsx";
import {Skills} from "./components/Skills.tsx";
import {About} from "./components/About.tsx";
import {Projects} from "./components/Projects.tsx";
import { Navigation} from "./components/Navigation.tsx";
import {useEffect, useState} from "react";
import { motion } from "motion/react";
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element){
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  const profileImage = `${import.meta.env.BASE_URL}/photo.webp`

  return (
    <>
      <ReactLenis root options={{lerp: 0.08, wheelMultiplier:1}}>
        <div className="w-full overflow-x-hidden relative ">
          <div className='relative z-10 sm:bg-[linear-gradient(to_right,var(--color-bg)_0%,transparent_10%,transparent_90%,var(--color-bg)_100%)]'>
            <Navigation activeSection={activeSection}/>
            <Hero profileImage={profileImage}/>
            <Projects/>
            <About/>
            <Skills/>
            <Contact/>
          </div>

          <div className='fixed inset-0 -z-0 overflow-hidden pointer-events-none'>

            <motion.div
              initial={{ rotate:45, background:'#00f2ff4d', width:'30%', height:'20%'}}
              animate={{ rotate:405, background:'#9d03fc4d', width:'60%', height:'50%'}}
              transition={{
                rotate:{
                  duration: 70,
                  repeat: Infinity,
                  repeatDelay: 2,
                  repeatType:'reverse',
                  ease:"easeInOut"
                },
                background:{
                  duration: 11,
                  repeat: Infinity,
                  repeatType:'reverse',
                  ease:"easeInOut",
                },
                width:{
                  duration: 18,
                  repeat: Infinity,
                  repeatType:'reverse',
                  ease:"easeInOut",
                },
                height:{
                  duration: 13,
                  repeat: Infinity,
                  repeatType:'reverse',
                  ease:"easeInOut",
                }
              }}
              className='bg-radial  to-bg  fixed rounded-[50%] inset-0 m-auto blur-xl sm:blur-3xl'
            />
            <motion.div
              initial={{ rotate:-45, background:'#9d03fc4d', width:'30%', height:'20%' }}
              animate={{ rotate:-405, background:'#00f2ff4d', width:'60%', height:'50%'}}
              transition={{
                rotate:{
                  duration: 80,
                  repeat: Infinity,
                  repeatDelay: 2,
                  repeatType:'reverse',
                  ease:"easeInOut"
                },
                background:{
                  duration: 10,
                  repeat: Infinity,
                  repeatType:'reverse',
                  ease:"easeInOut",
                },
                width:{
                  duration: 15,
                  repeat: Infinity,
                  repeatType:'reverse',
                  ease:"easeInOut",
                },
                height:{
                  duration: 17,
                  repeat: Infinity,
                  repeatType:'reverse',
                  ease:"easeInOut",
                }
              }}
              className='bg-radial to-bg  fixed rounded-[50%] inset-0 m-auto blur-xl sm:blur-3xl'
            />
          </div>
        </div>
      </ReactLenis>
    </>
  )
}

export default App

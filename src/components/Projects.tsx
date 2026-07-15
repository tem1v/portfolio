import {Code2, ExternalLink,} from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Помощник садовода с ИИ',
      description:
        'Веб-приложение для учета растений, садовых участков, задач, инвентаря и урожая. Включает ИИ-модуль для определения заболеваний растений по фотографии. Модель обучена на датасете PlantVillage с использованием архитектуры ResNet-18.',
      technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Zustand', 'Hero UI', 'FastAPI', 'Figma', 'PostgreSQL'],
      image: `${import.meta.env.BASE_URL}/projects/gryadka.webp`,
      tags: [],
      link: 'https://github.com/tem1v/Gryadka/tree/dev',
      demonstration:'https://drive.google.com/file/d/1ZRMakx_YQwtl1MTtBSyaP8we2YC8odYm/view?usp=sharing',
    },
    {
      id: 2,
      title: 'Музыкальная площадка',
      description:
        'Музыкальный сервис, вдохновленный Яндекс Музыкой и Spotify. Поддерживает прослушивание музыки, создание плейлистов, избранное и режим караоке. Архитектура приложения ориентирована на масштабирование и добавление новых функций.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'MobX'],
      image: `${import.meta.env.BASE_URL}/projects/music.webp`,
      tags: ['В разработке'],
      link: 'https://github.com/tem1v/music-streaming-service',
      demonstration:'',
    },
    {
      id: 3,
      title: 'Платформа для оценки компетенций сотрудников',
      description:
        'Командный проект (7 frontend- и 3 backend-разработчика), созданный во время стажировки. Платформа предназначена для проведения тестов и практических заданий с целью оценки компетенций сотрудников. Принимал участие на всех этапах разработки: от анализа требований до тестирования. Разработал страницу уведомлений, конструктор тестов и задач, а также матрицу компетенций.',
      technologies: ['React', 'Zustand', 'Tailwind CSS', 'Laravel', 'Shadcn UI', 'Zod', 'Figma'],
      image: `${import.meta.env.BASE_URL}/projects/levelUp.webp`,
      tags: [],
      link: '',
      demonstration:'https://drive.google.com/file/d/1Nms40GLjxXiDfLebr27wGTuGH3SZpVUM/view?usp=sharing',
    },
    {
      id: 4,
      title: 'Интернет-магазин киберспортивной техники',
      description:
        'Интернет-магазин с каталогом товаров, системой фильтрации и рекомендациями на основе избранных товаров пользователя. Есть возможность оценивать приобретенные товары и писать комментарии.',
      technologies: ['HTML/CSS', 'JS', 'PHP', 'MySQL', 'Open Server Panel', 'Figma'],
      image: `${import.meta.env.BASE_URL}/projects/cyberzone.webp`,
      tags: [],
      link: 'https://github.com/tem1v/CYBERZONE',
      demonstration:'https://drive.google.com/file/d/1mZHmvsF7WhYbJpZwEtnTjLppb4pO8rpZ/view?usp=sharing',
    },

    {
      id: 5,
      title: 'Мессенджер',
      description:
        'Командный проект, разрабатываемый командой из 5 человек. Поддерживает поиск пользователей, обмен сообщениями и управление чатами. Отвечал за разработку фронтенд-части приложения.',
      technologies: ['Vue.js', 'Pinia', 'Tailwind CSS', 'FastAPI', 'Figma', 'Docker'],
      image: `${import.meta.env.BASE_URL}/projects/messanger.webp`,
      tags: [],
      link: 'https://github.com/MrDombrist/Messanger/tree/dev',
      demonstration:'',
    },
  ]
  return (
    <section id='projects' className='min-h-screen py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Мои проекты
          </h2>
          <p className="text-xl text-gray-400">
            Некоторые из моих последних работ
          </p>
        </motion.div>

        <div className='grid gap-20'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 justify-between items-center gap-8"
            >
              <img
                src={project.image}
                alt={project.title}
                className="max-w-150 w-full object-cover rounded-lg hover:scale-101 transition-all duration-500"
              />
              <div className="">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (<button className="flex items-center gap-2 text-white transition-all hover:underline underline-offset-2 decoration-2">
                    <Code2 size={20}/>
                    <a href={project.link} target="_blank">Код</a>
                  </button>)}
                  {project.demonstration && (<button className="flex items-center gap-2 text-white transition-all hover:underline underline-offset-2 decoration-2">
                    <ExternalLink size={20}/>
                    <a href={project.demonstration} target="_blank">Демонстрация</a>
                  </button>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
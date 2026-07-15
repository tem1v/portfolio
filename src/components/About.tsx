import {Code, Laptop, ToolCase, Users} from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const stats = [
    { icon: Code, label: 'Проектов', value: '10+' },
    { icon: ToolCase, label: 'Технологий', value: '15+' },
    { icon: Laptop, label: 'Год опыта', value: '1+' },
    { icon: Users, label: 'Командных проекта', value: '3' },
  ]

  return (
    <section id="about" className='min-h-screen py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>Обо мне</h2>
          <p className="text-xl text-gray-400">Junior Frontend Developer, открытый к новым возможностям</p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 text-lg mb-4">
              Привет! Я Junior Frontend Developer. Разрабатываю современные веб-приложения с использованием React, TypeScript и других технологий экосистемы JavaScript. Люблю превращать идеи в удобные и понятные интерфейсы.
            </p>
            <p className="text-gray-300 text-lg mb-4">
              За время обучения и работы над проектами я получил опыт разработки SPA-приложений, интеграции с REST API, создания адаптивных интерфейсов и работы в команде. Стараюсь писать понятный и поддерживаемый код, уделяя внимание качеству пользовательского интерфейса.
            </p>
            <p className="text-gray-300 text-lg">
              Сейчас продолжаю изучать современные технологии frontend-разработки, создаю pet-проекты и совершенствую навыки. Интересуюсь архитектурой приложений, производительностью и UX. В свободное время люблю прогулки и активный отдых.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='grid grid-cols-2 gap-6'
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={stat.label}
                  className='bg-primary p-6 rounded-lg text-center'
                >
                  <Icon className='mx-auto mb-3 text-white' size={32} />
                  <div className='text-3xl font-bold text-white mb-1'>{stat.value}</div>
                  <div className='text-gray-400 text-sm'>{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
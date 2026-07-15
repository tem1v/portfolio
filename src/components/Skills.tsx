import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 2 },
        { name: 'TypeScript', level: 2 },
        { name: 'JavaScript', level: 3 },
        { name: 'HTML/CSS', level: 3 },
        { name: 'Tailwind CSS', level: 3 },
        { name: 'Vue.js', level: 1 },
      ],
    },
    {
      title: 'Инструменты',
      skills: [
        { name: 'Git', level: 2 },
        { name: 'Webpack/Vite', level: 2 },
        { name: 'REST API', level: 3 },
        { name: 'Zustand', level: 2 },
        { name: 'Figma', level: 2 },
        { name: 'MobX', level: 2 },
      ],
    },
    {
      title: 'Дополнительно',
      skills: [
        { name: 'Node.js', level: 1 },
        { name: 'SQL', level: 2 },
        { name: 'Python', level: 1 },
        { name: 'Английский B1', level: 2 },
        { name: 'Адаптивный дизайн', level: 2 },
        { name: 'Postman', level: 2 },
      ],
    },
  ];
  return (
    <section id="skills" className='min-h-screen  py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Навыки</h2>
          <p className="text-xl text-gray-400">Технологии, с которыми я работаю</p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className='bg-primary p-6 rounded-lg'
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className='flex justify-between mb-2'>
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level === 1 ? 'Базовый' : skill.level === 2 ? 'Уверенный' : 'Продвинутый'}</span>
                    </div>
                    <div className='w-full bg-gray-700 rounded-full h-2'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level === 3 ? 100 : skill.level*33}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className=' bg-white h-2 rounded-full'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
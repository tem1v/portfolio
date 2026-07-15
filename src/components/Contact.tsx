import {Mail, MapPin, Phone, Send} from "lucide-react";
import { motion } from "motion/react";
import {GitHubIcon} from "./icons/GitHubIcon.tsx";


export function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'alyahov49@gmail.com' },
    { icon: Phone, label: 'Телефон', value: '+7 (986) 903-46-83' },
    { icon: MapPin, label: 'Локация', value: 'Казань, Россия' },
  ];

  const socialLinks = [
    { icon: GitHubIcon, label: 'GitHub', url: 'https://github.com/tem1v' },
    { icon: Send, label: 'Телеграм', url: 'https://t.me/temLv' },
    { icon: Mail, label: 'Сетка', url: 'https://setka.ru/users/019d0906-8c09-76f0-8871-0a6678c040fc' },
  ];


  return (
    <section id='contact' className='min-h-screen pt-40 pb-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Контакты</h2>
          <p className="text-xl text-gray-400">Буду рад обсудить сотрудничество</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    initial={{opacity: 0, x:20}}
                    whileInView={{opacity: 1, x:0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: index*0.1}}

                  >
                    <a
                      key={info.label}
                      href={index === 0
                        ? `mailto:${info.value}`
                        : index === 1
                          ? `tel:${info.value}`
                          : undefined} rel="noopener noreferrer"
                      className={`flex items-center gap-4 bg-primary p-3 md:p-6 rounded-lg ${(index === 0 || index === 1) && `cursor-pointer hover:scale-105 transition-all duration-500`}`}
                    >
                      <div className="bg-white  p-3 rounded-lg">
                        <Icon className="" size={24}/>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.label}</div>
                        <div className={`text-white text-lg ${(index === 0 || index === 1) && `underline`}`}>{info.value}</div>
                      </div>
                    </a>
                  </motion.div>
                )
              })}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Социальные сети</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-lg flex justify-center"
            >

              <div className="flex gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary p-3 md:p-6 flex justify-center items-center rounded-lg hover:scale-105 transition-all duration-500"
                    >
                      {social.label === 'Сетка' ? (
                        <span className="text-white">{social.label}</span>
                      ) : (
                        <Icon className="text-white" size={30} />
                      )}

                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16 pt-16 border-t border-white/30"
        >
          <p className="text-gray-400">
            © 2026 Артём Ляхов. Все права защищены.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
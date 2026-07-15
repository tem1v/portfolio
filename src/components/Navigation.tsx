import {useState} from "react";
import {BicepsFlexed, FolderCode, Home, IdCard, Mail} from "lucide-react";

interface Props {
  activeSection: string;
}

export function Navigation({ activeSection }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  }

  const navItems = [
    { id: 'home', label: 'Главная', icon: Home },
    { id: 'projects', label: 'Проекты', icon: FolderCode },
    { id: 'about', label: 'Обо мне', icon: IdCard },
    { id: 'skills', label: 'Навыки', icon: BicepsFlexed },
    { id: 'contact', label: 'Контакты', icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b-white/20 border-1 bg-black/70 backdrop-blur-xl rounded-b-3xl sm:rounded-none`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-12 sm:h-16 gap-5'>
          <div className='text-white sm:text-xl font-bold'>
            <span className='whitespace-nowrap'>&lt;temLv /&gt;</span>
          </div>

          <div className='block w-full sm:w-fit'>
            <div className='space-x-8 hidden sm:block'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={` hover:underline decoration-2 underline-offset-2 text-white transition-all duration-200 cursor-pointer ${
                    activeSection === item.id ? 'underline decoration-2 underline-offset-2' : ''
                  }`}
                >
                  {item.label}
                </button>
                ))}
            </div>
            <div className='flex justify-between sm:hidden w-full'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={` text-white transition-all duration-500`}
                >
                  <item.icon size={25} strokeWidth={activeSection === item.id ? 2 : 1}/>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='md:hidden '>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-white hover:underline ${
                  activeSection === item.id ? 'underline underline-offset-3' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
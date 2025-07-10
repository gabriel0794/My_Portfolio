import { motion } from "framer-motion";

export default function Navbar({ activeSection }) {
    const navItems = ['home', 'about', 'techstack', 'resume', 'project', 'contact'];

    return (
        <nav className="fixed top-0 inset-x-0 shadow z-50">
          <ul className="flex gap-8 justify-center py-4 relative">
            {navItems.map((item) => {
              const isActive = activeSection === item;
    
              return (
                <li key={item} className="relative">
                  <a
                    href={`#${item}`}
                    className={`capitalize text-white px-2 transition-colors duration-200 ${
                      isActive ? 'text-blue-400' : 'hover:text-[#DDE6ED]'
                    }`}
                  >
                    {item}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-500 rounded"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      );
    }
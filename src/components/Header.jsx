import { Sun, Moon } from "@boxicons/react";
import { motion } from "motion/react"


function Header({ menuSelected, setMenuSelected, setModeSelected, modeSelected }) {
  const isActive = (menu) => {
    const base =
      "px-4 md:px-5 py-2 rounded-full font-medium capitalize transition-all duration-300 ease-in-out cursor-pointer text-sm md:text-base";

    if (menuSelected === menu) {
      return `${base} bg-purple-900 text-white shadow-md`;
    }

    return `${base} ${modeSelected === "dark"
      ? "text-white/50 hover:text-white hover:bg-zinc-700"
      : "text-gray-500 hover:text-black hover:bg-zinc-200"
      }`;
  };

  const themeClass =
    modeSelected === "light" ? "bg-white" : "bg-zinc-800";

  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }, }}
      className={`fixed top-4 left-1/2 -translate-x-1/2
      flex items-center justify-between gap-2 md:gap-4
      px-3 md:px-4 py-2
      rounded-full shadow-lg
      transition-colors
      ${themeClass}
      w-[95%] max-w-125`}
    >
      {/* Menu */}
      <div className="flex items-center gap-1 md:gap-2">
        {["home", "about", "projects", "contact"].map((item) => (
          <button
            key={item}
            
            onClick={() =>{ setMenuSelected(item); document.getElementById(item)?.scrollIntoView({behavior: "smooth"}); }}
            className={isActive(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* PC VIEW MODE BUTTON */}
      <button
        className={`hidden md:flex cursor-pointer p-2 rounded-full transition-colors  
          ${modeSelected === 'light' ? "text-gray-500 hover:bg-zinc-200 " : "text-white/50 hover:bg-zinc-700"} `}
        onClick={() =>
          setModeSelected(modeSelected === "light" ? "dark" : "light")
        }
      >
        {modeSelected === "light" ? <Sun /> : <Moon />}
      </button>


      {/* MOBILE VIEW MODE BUTTON */}
      <button
        className="md:hidden fixed top-147 animate-bounce right-5 cursor-pointer p-2 rounded-full transition-colors "
        onClick={() =>
          setModeSelected(modeSelected === "light" ? "dark" : "light")
        }
      >
        {modeSelected === "light" ? <Sun /> : <Moon />}
      </button>
    </motion.div>
  );
}

export default Header;
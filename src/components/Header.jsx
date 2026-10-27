import { Sun, Moon } from "@boxicons/react";
import { motion } from "motion/react"

const pillDark = { home: "#a3236f", about: "#8a6a10", projects: "#11805f", contact: "#1d6c9e" }
const pillColors = {
    home: "#ff8fd0",
    about: "#ffe066",
    projects: "#7ee8c7",
    contact: "#8fd3ff",
}

function Header({ menuSelected, setMenuSelected, setModeSelected, modeSelected }) {
    const isDark = modeSelected === "dark"
    const textColor = isDark ? "text-[#fdf4ff]" : "text-[#1a1033]"
    const hoverBg = isDark ? "hover:bg-white/15" : "hover:bg-[#1a1033]/10"

    return (
        <motion.div
            data-mode={modeSelected}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed z-50 top-4 left-1/2 font-comic -translate-x-1/2 w-auto"
        >
            <nav className="comic-panel flex items-center gap-1  border-2 md:gap-2 px-2 py-1.5 !rounded-full !shadow-[4px_4px_0_#1a1033]">
                

                {["home", "about", "projects", "contact"].map((item) => (
                    <button
                        key={item}
                        onClick={() => {
                            setMenuSelected(item)
                            document.getElementById(item)?.scrollIntoView({ behavior: "smooth" })
                        }}
                        className={`relative capitalize text-xs md:text-sm font-bold ${textColor} ${hoverBg} px-2.5 md:px-4 py-1 cursor-pointer rounded-full transition-colors duration-300`}
                    >
                        {menuSelected === item && (
                            <motion.span
                                layoutId="nav-pill"
                                className="absolute inset-0 rounded-full border-[3px] border-[#1a1033] shadow-[2px_2px_0_#1a1033]"
                                initial={false}
                                animate={{ backgroundColor: (isDark ? pillDark : pillColors)[item] }}
                                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                            />
                        )}
                        <span className="relative z-10">{item}</span>
                    </button>
                ))}

                <button
                    aria-label="Toggle theme"
                    className={`comic-btn hidden md:flex cursor-pointer p-1.5 rounded-full ml-1 ${textColor} `}
                    onClick={() => setModeSelected(modeSelected === "light" ? "dark" : "light")}
                >
                    <motion.div
                        key={modeSelected}
                        initial={{ rotate: -30, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {modeSelected === "light" ? <Sun /> : <Moon />}
                    </motion.div>
                </button>
            </nav>
        </motion.div>
    )
}

export default Header;

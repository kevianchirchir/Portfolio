import { Sun, Moon } from "@boxicons/react";
import { motion } from "motion/react"

function Header({ themeClass, menuSelected, setMenuSelected, setModeSelected, modeSelected }) {
    const isActive = (menu) => {
        const base = "px-3 md:px-5 py-1.5 rounded-full font-medium capitalize transition-all duration-300 ease-in-out cursor-pointer text-sm";

        if (menuSelected === menu) {
            return `${base} bg-fuchsia-600 text-white shadow-md shadow-fuchsia-900/50`;
        }

        return `${base} ${modeSelected === "dark"
            ? "text-white/40 hover:text-white hover:bg-white/10"
            : "text-gray-400 hover:text-black hover:bg-black/10"
        }`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed z-50 top-4 left-1/2 -translate-x-1/2 w-auto"
        >
            {/* Gradient border wrapper */}
            <div
                className="rounded-full p-px"
                style={{ background: "linear-gradient(135deg, #a21caf55, #6b21a8aa, #a21caf55)" }}
            >
                <div className={`flex items-center justify-evenly gap-3 md:gap-1 px-2 py-1.5 rounded-full backdrop-blur-md transition-colors
                    ${modeSelected === "dark"
                        ? "bg-zinc-900/80 shadow-lg shadow-fuchsia-950/40"
                        : "bg-white/80 shadow-lg shadow-fuchsia-200/40"
                    }`}
                >
                    {/* Logo dot */}
                    <div className="hidden md:flex items-center gap-2 pl-2 pr-3 border-r border-fuchsia-800/40">
                        <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_6px_rgba(217,70,239,0.8)]" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-fuchsia-400">KC</span>
                    </div>

                    {/* Nav items */}
                    <div className="flex items-center gap-1">
                        {["home", "about", "projects", "contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    setMenuSelected(item)
                                    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" })
                                }}
                                className={isActive(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Theme toggle */}
                    <button
                        className={`hidden md:flex cursor-pointer p-2 rounded-full transition-colors ml-1
                            ${modeSelected === "dark"
                                ? "text-white/40 hover:text-white hover:bg-white/10"
                                : "text-gray-400 hover:text-black hover:bg-black/10"
                            }`}
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
                </div>
            </div>
        </motion.div>
    )
}

export default Header;
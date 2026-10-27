import { Typewriter } from "react-simple-typewriter";
import { motion, useMotionValue, MotionConfig } from "motion/react"
import StackIcon from "tech-stack-icons";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "@boxicons/react";
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Background from "./Background"
import linkedin from "/linkedin.svg"
import github from "/github.svg"

const icons = [
    "tailwindcss", "react", "java", "azure", "css3",
    "electron", "python", "html5", "git",
    "github", "supabase", "sqlite", "js",
    "mysql", "typescript", "powershell", "reactrouter"
];

const iconLinks = {
    tailwindcss: "https://tailwindcss.com",
    react: "https://react.dev",
    java: "https://www.java.com",
    azure: "https://azure.microsoft.com",
    css3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    electron: "https://www.electronjs.org",
    python: "https://www.python.org",
    html5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    git: "https://git-scm.com",
    github: "https://github.com",
    supabase: "https://supabase.com",
    sqlite: "https://sqlite.org",
    js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    mysql: "https://www.mysql.com",
    typescript: "https://www.typescriptlang.org",
    powershell: "https://learn.microsoft.com/en-us/powershell/",
    reactrouter: "https://reactrouter.com/"
};

const tileColors = ["bg-[#ffd1ec]", "bg-[#fff0a8]", "bg-[#c4f5e6]", "bg-[#cfeaff]", "bg-[#e5d4ff]"]

function Content({ modeSelected, setMenuSelected, setModeSelected }) {
    const x = useMotionValue(0)
    // Section backgrounds are set here (not from themeClass) so both modes always have good contrast.
    const bg = modeSelected === "dark"
        ? "bg-[#1a0b33] text-white duration-500"
        : "bg-[#ffe9f6] text-[#1a1033] duration-500"
    const containerRef = useRef(null)
    const innerRef = useRef(null)
    const [limit, setLimit] = useState(-1050)

    useEffect(() => {
        const calculate = () => {
            if (containerRef.current && innerRef.current) {
                setLimit(-(innerRef.current.scrollWidth - containerRef.current.offsetWidth))
            }
        }
        const t = setTimeout(calculate, 100)
        window.addEventListener("resize", calculate)
        return () => { clearTimeout(t); window.removeEventListener("resize", calculate) }
    }, [])

    return (
        <MotionConfig reducedMotion="user">
        <div data-mode={modeSelected} className="hide-scrollbar font-comic overscroll-behavior-y-contain w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

            {/* HOME */}
            <motion.section
                onViewportEnter={() => setMenuSelected("home")}
                viewport={{ amount: 0.6 }}
                id="home"
                className={`${bg} relative w-full min-h-svh flex flex-col items-center justify-center snap-start px-4 pt-20 pb-6 overflow-hidden transition-colors`}
            >
                <Background />

                <button
                    aria-label="Toggle theme"
                    className="comic-btn md:hidden z-[600] fixed bottom-5 right-5 cursor-pointer p-2 bg-[#c9a7ff]"
                    onClick={() => setModeSelected(modeSelected === "light" ? "dark" : "light")}
                >
                    {modeSelected === "light" ? <Sun /> : <Moon />}
                </button>

                {/* Hero: speech bubble */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ scale: 0.6, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.3 }}
                    >
                        {/* float loop */}
                        <motion.div
                            animate={{ y: [0, -14, 0], rotate: [-1.5, 1, -1.5] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="comic-panel relative px-6 sm:px-10 py-5 sm:py-7"
                        >
                            <h1 className="text-3xl font-['Comic_Sans_MS',_'Comic_Sans',_cursive] sm:text-5xl font-bold min-h-[1.3em]">
                                <Typewriter
                                    words={["Hi, I'm Kevian!"]}
                                    loop={1}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={50}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 bg-[#fff7e6] border-r-[3px] border-b-[3px] border-[#1a1033]" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        className="flex flex-col items-center gap-3 mt-8"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-center">
                            <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }} className="comic-btn text-black bg-[#ffe066] px-3 py-1 -rotate-2">Computer Programming @ Fanshawe</motion.span>
                            <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.6 }} className="comic-btn text-black bg-[#7ee8c7] px-3 py-1 rotate-1">Front-End Developer · React · UI Building</motion.span>
                        </div>

                        <div className="flex items-center gap-4 mt-1">
                            <motion.a
                                href="https://www.linkedin.com/in/kevian-chirchir-06a583300/"
                                target="_blank" rel="noreferrer"
                                aria-label="LinkedIn"
                                whileHover={{ rotate: -8, scale: 1.1 }}
                                className="comic-btn social w-11 h-11 bg-white flex items-center justify-center overflow-hidden"
                            >
                                <img src={linkedin} alt="" className="w-full h-full" />
                            </motion.a>
                            <motion.a
                                href="https://github.com/kevianchirchir"
                                target="_blank" rel="noreferrer"
                                aria-label="GitHub"
                                whileHover={{ rotate: 8, scale: 1.1 }}
                                className="comic-btn social w-11 h-11 bg-white flex items-center justify-center overflow-hidden"
                            >
                                <img src={github} alt="" className="w-full h-full" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Tech stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                        className="flex flex-col items-center gap-2 mt-8 w-full"
                    >
                        <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }} className="comic-btn text-black bg-[#ff8fd0] px-3 py-0.5 text-sm rotate-1">My tech stack</motion.span>

                        <div ref={containerRef} className="comic-panel w-full max-w-xl overflow-hidden p-3 border-3 rounded-2xl !shadow-[4px_4px_0_#1a1033]">
                            <motion.div
                                ref={innerRef}
                                className="flex gap-4 w-max cursor-grab active:cursor-grabbing"
                                drag="x"
                                dragConstraints={{ left: limit, right: 0 }}
                                style={{ x }}
                            >
                                {icons.map((icon, i) => (
                                    <motion.a
                                        key={icon}
                                        href={iconLinks[icon]}
                                        target="_blank" rel="noreferrer"
                                        aria-label={icon}
                                        className={`comic-btn w-13 h-13 shrink-0 flex items-center justify-center !rounded-xl ${tileColors[i % tileColors.length]}`}
                                        whileHover={{ scale: 1.18, rotate: i % 2 ? 8 : -8, y: -4 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 14 }}
                                    >
                                        <StackIcon name={icon} className="w-7 h-7" />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                        <p className="solid-bg text-xs font-bold text-black bg-white/80 p-1 rounded-full">← drag to explore →</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* ABOUT */}
            <About themeClass={bg} setMenuSelected={setMenuSelected} />

            {/* PROJECTS */}
            <motion.section
                onViewportEnter={() => setMenuSelected("projects")}
                viewport={{ amount: 0.6 }}
                id="projects"
                className={`relative overflow-hidden flex-col transition-colors w-full min-h-svh flex items-center justify-center snap-start ${bg} px-4 pt-16`}
            >
                <Background />
                <div className="relative z-10 w-full flex justify-center"><Projects /></div>
            </motion.section>

            {/* CONTACT */}
            <motion.section
                onViewportEnter={() => setMenuSelected("contact")}
                viewport={{ amount: 0.6 }}
                id="contact"
                className={`relative transition-colors w-full min-h-svh flex items-center justify-center snap-start ${bg} px-4 py-10 pt-16`}
            >
                <Background />
                <div className="relative z-10 w-full"><Contact /></div>
            </motion.section>
        </div>
        </MotionConfig>
    );
}

export default Content;

import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react"
import StackIcon from "tech-stack-icons";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "@boxicons/react";
import { useMotionValue } from "motion/react";
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import linkedin from "/linkedin.svg"
import github from "/github.svg"

function Content({ themeClass, modeSelected, menuSelected, setMenuSelected, setModeSelected }) {
    const x = useMotionValue(0)
    const containerRef = useRef(null)


    const innerRef = useRef(null)
    const [limit, setLimit] = useState(-1050)

    useEffect(() => {
        const calculate = () => {
            if (containerRef.current && innerRef.current) {
                setLimit(-(innerRef.current.scrollWidth - containerRef.current.offsetWidth))
            }
        }

        setTimeout(calculate, 100)
        window.addEventListener("resize", calculate)
        return () => window.removeEventListener("resize", calculate)
    }, [])

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
        reactrouter: "http://reactrouter.com/"
    };



    return (
        <div className="hide-scrollbar overscroll-behavior-y-contain w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

            {/* HOME */}
            <motion.section
                onViewportEnter={() => setMenuSelected("home")}
                viewport={{ amount: 0.6 }}
                id="home"
                className={`
        ${themeClass}
        relative
        w-full
        min-h-svh
        flex flex-col items-center justify-center
        snap-start
        px-4 pt-16
        overflow-hidden
        transition-colors
    `}
            >
                {/* Background glow orbs */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-fuchsia-700/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
<div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-purple-700/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

                {/* Mobile theme toggle */}
                <button
                    className="md:hidden z-600 fixed bottom-5 right-5 cursor-pointer p-2 rounded-full border border-fuchsia-700/40 backdrop-blur-sm transition-colors"
                    onClick={() => setModeSelected(modeSelected === "light" ? "dark" : "light")}
                >
                    {modeSelected === "light" ? <Sun /> : <Moon />}
                </button>

                {/* Hero text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center gap-2 text-center"
                >
                    <h1 className="text-3xl sm:text-5xl font-bold">
                        <Typewriter
                            words={["Hi, I'm Kevian"]}
                            loop={1}
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </h1>

                    <div className={`flex flex-col items-center gap-0.5 text-sm sm:text-base mt-1 ${modeSelected === "dark" ? "text-white/60" : "text-gray-500"}`}>
                        <p>Computer Programming @ Fanshawe</p>
                        <p>Front-End Developer • React • UI Building</p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4 mt-3">
                        <motion.a
                            href="https://www.linkedin.com/in/kevian-chirchir-06a583300/"
                            whileHover={{ scale: 1.1 }}
                            className="w-11 h-11 bg-white rounded-full shadow-lg shadow-fuchsia-900/30 ring-1 ring-fuchsia-500/20 flex items-center justify-center overflow-hidden"
                        >
                            <img src={linkedin} alt="LinkedIn" className="w-full h-full" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/kevianchirchir"
                            whileHover={{ scale: 1.1 }}
                            className="w-11 h-11 bg-white rounded-full shadow-lg shadow-fuchsia-900/30 ring-1 ring-fuchsia-500/20 flex items-center justify-center overflow-hidden"
                        >
                            <img src={github} alt="GitHub" className="w-full h-full" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Tech stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="flex flex-col items-center gap-2 mt-6 w-full"
                >
                    <p className="text-fuchsia-400 text-xs tracking-widest uppercase font-semibold">my tech stack</p>

                    <div
                        ref={containerRef}
                        className="w-full max-w-xl overflow-hidden rounded-2xl border border-fuchsia-800/30 p-3"
                        style={{ background: "linear-gradient(135deg, #a21caf11, #6b21a822)" }}
                    >
                        <motion.div
                            className="flex w-500 gap-5 cursor-grab active:cursor-grabbing"
                            drag="x"
                            dragConstraints={{ left: limit, right: 0 }}
                            style={{ x }}
                        >
                            {icons.map((icon, i) => (
                                <motion.a
                                    key={i}
                                    href={iconLinks[icon]}
                                    target="_blank"
                                    className="min-w-13 h-13 flex items-center justify-center rounded-xl bg-fuchsia-900/30 border border-fuchsia-700/20 hover:border-fuchsia-500/50 transition-colors"
                                    whileHover={{ scale: 1.15, y: -2 }}
                                >
                                    <StackIcon name={icon} className="w-7 h-7" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                    <p className="text-xs text-fuchsia-400/40 tracking-wide">drag to explore</p>
                </motion.div>
            </motion.section>

            {/* ABOUT */}
            <About themeClass={themeClass} setMenuSelected={setMenuSelected} />

            {/* PROJECTS */}
            <motion.section
                onViewportEnter={() => setMenuSelected("projects")}
                viewport={{ amount: 0.6 }}
                id="projects"
                className={`flex-col transition-colors w-full h-screen flex items-center justify-center snap-start ${themeClass} px-4 pt-16`}
            >
                <Projects />
            </motion.section>

            {/* CONTACT */}
            <motion.section
                onViewportEnter={() => setMenuSelected("contact")}
                viewport={{ amount: 0.6 }}
                id="contact"
                className={`transition-colors w-full h-screen flex items-center justify-center snap-start ${themeClass} px-4 py-10 overflow-y-auto pt-16`}
            >
                <Contact />
            </motion.section>
        </div>
    );
}

export default Content;
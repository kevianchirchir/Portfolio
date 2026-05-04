import { Typewriter } from "react-simple-typewriter";
import { motion, spring } from "motion/react"
import StackIcon from "tech-stack-icons";

function Content({ themeClass, modeSelected, menuSelected, setMenuSelected }) {
    const icons = [
        "tailwindcss", "react", "java", "azure", "css3",
        "electron", "python", "html5", "git",
        "github", "supabase", "sqlite", "js",
        "mysql", "typescript", "powershell"
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
        powershell: "https://learn.microsoft.com/en-us/powershell/"
    };

    
    return (
        <div className="overscroll-behavior-y-contain w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ">

            {/* HOME */}

            <motion.section whileInView={() => setMenuSelected("home")} viewport={{ amount: 0.6 }} id="home" className={`${themeClass} transition-colors w-full h-screen flex flex-col items-center justify-center snap-start px-4`}>

                <motion.h1 initial={{ y: 150}} animate={{ y: 0 }} transition={{ duration: 0.35, delay: 2 }} className="text-3xl text-center sm:text-5xl font-bold">
                    <Typewriter
                        words={["Hi, I'm Kevian"]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </motion.h1>
                <motion.div initial={{ opacity: 0, scale: 0, y: 0 }} animate={{ opacity: 1, scale: 1, type: spring, y: 20 }} transition={{ delay: 2, duration: 0.4 }}
                    className="flex flex-col items-center justify-center" >
                    <h1 >Computer Programming @ Fanshawe</h1>
                    <h1>Front-End Developer • React • UI Building</h1>
                    <div className="flex items-center justify-center gap-5 m-2">
                        
                        <motion.a className="cursor-pointer sm:w-15 sm:h-15 h-12 w-12 bg-white rounded-full" href="https://www.linkedin.com/in/kevian-chirchir-06a583300/" whileHover={{scale: 1.2}}><img src="../src/assets/linkedin.svg" alt="Linkedin"  /></motion.a>
                        <motion.a className="cursor-pointer sm:w-15 sm:h-15 h-12 w-12 bg-white rounded-full" href="https://github.com/kevianchirchir" whileHover={{scale: 1.2}}><img src="../src/assets/github.svg" alt="Github"  /></motion.a>
                    </div>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, scale: 0, y: 30 }} animate={{ opacity: 1, scale: 1, type: spring }} transition={{ delay: 2.5, duration: 0.4 }} >
                    my tech stack😵‍💫
                </motion.h1>
                <motion.div initial={{ opacity: 0, scale: 0, y: 30 }} animate={{ opacity: 1, scale: 1, type: spring }} transition={{ delay: 2.5, duration: 0.4 }}
                    className="w-full max-w-xl overflow-hidden  rounded-xl shadow-lg p-4">
                    <motion.div
                        className=" mx-auto w-500 cursor-grab flex gap-6 "
                        drag="x"
                        dragConstraints={{ left: -900, right: 0 }} // adjust based on width
                    >

                        {icons.map((icon, i) => (
                            <motion.a
                                key={i}
                                href={iconLinks[icon]}
                                className="icon  shadow-lg min-w-17.5 flex justify-center items-center cursor-pointer"
                                whileHover={{ scale: 1.2 }}

                            >
                                <StackIcon name={icon} />
                            </motion.a>
                        ))}

                    </motion.div>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, scale: 0, y: 30 }} animate={{ opacity: 1, scale: 1, type: spring }} transition={{ delay: 2.5, duration: 0.4 }} className="text-gray-400 mt-3">(Drag to scroll)</motion.h1>

            </motion.section>


            {/* NEXT SECTION */}
            <motion.section whileInView={() => setMenuSelected("about")} viewport={{ amount: 0.6 }} id="about" className={`transition-colors w-full h-screen flex items-center justify-center snap-start ${themeClass}  px-4`}>  
                <motion.h2 initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, bounce: spring }} className="text-2xl sm:text-4xl">About Me</motion.h2>
            </motion.section>


            {/* NEXT SECTION */}
            <motion.section whileInView={() => setMenuSelected("projects")} viewport={{ amount: 0.6 }} id="projects" className={`transition-colors w-full h-screen flex items-center justify-center snap-start ${themeClass}  px-4`}>
                <h2 className="text-4xl">Projects</h2>
            </motion.section>

            {/* NEXT SECTION */}
            <motion.section whileInView={() => setMenuSelected("contact")} viewport={{ amount: 0.6 }} id="contact" className={`transition-colors w-full h-screen flex items-center justify-center snap-start ${themeClass}  px-4`}>
                <h2 className="text-4xl">Contact</h2>
            </motion.section>
        </div>
    );
}
export default Content;
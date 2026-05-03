import { Typewriter } from "react-simple-typewriter";
import { motion, spring } from "motion/react"
import StackIcon from "tech-stack-icons";

function Content({menuSelected, setMenuSelected}) {
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
        <div className="overscroll-behavior-y-contain w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

            {/* HOME */}

            <motion.section whileInView={() => setMenuSelected("home")} id="home" className="w-full h-screen flex flex-col items-center justify-center snap-start">

                <motion.h1 initial={{ y: 50 }} animate={{ y: -50 }} transition={{ duration: 0.4, delay: 2 }} className="text-5xl font-bold">
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
                <motion.div initial={{ opacity: 0, scale: 0, y: 0}} animate={{ opacity: 1, scale: 1, type: spring, y: -30 }} transition={{ delay: 2, duration: 0.4 }}
                className="text-center" >
                    <h1 >Computer Programming @ Fanshawe</h1>
                    <h1>Front-End Developer • React • UI Building</h1>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, type: spring }} transition={{ delay: 2.5, duration: 0.4 }} >my tech stack😵‍💫</motion.h1>
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, type: spring }} transition={{ delay: 2.5, duration: 0.4 }}
                    className="w-[420px] overflow-hidden  rounded-xl shadow-lg p-4">
                    <motion.div
                        className="mx-auto w-500 cursor-grab flex gap-6 "
                        drag="x"
                        dragConstraints={{ left: -900, right: 0 }} // adjust based on width
                    >

                        {icons.map((icon, i) => (
                            <motion.a
                                key={i}
                                href={iconLinks[icon]}
                                className="icon shadow-lg min-w-[60px] flex justify-center items-center cursor-pointer"
                                whileHover={{ scale: 1.2 }}
                            >
                                <StackIcon name={icon} />
                            </motion.a>
                        ))}

                    </motion.div>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, type: spring }} transition={{ delay: 2.5, duration: 0.4 }} className="text-gray-400 mt-3">(Drag to scroll)</motion.h1>

            </motion.section>


            {/* NEXT SECTION */}
            <motion.section whileInView={() => setMenuSelected("about")} id="about" className="w-full h-screen flex items-center justify-center snap-start bg-zinc-900 text-white">
                <motion.h2 initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, bounce: spring }} className="text-4xl">About Me</motion.h2>
            </motion.section>


            {/* NEXT SECTION */}
            <section id="projects" className="w-full h-screen flex items-center justify-center snap-start bg-zinc-900 text-white">
                <h2 className="text-4xl">Projects</h2>
            </section>

            {/* NEXT SECTION */}
            <section id="contact" className="w-full h-screen flex items-center justify-center snap-start bg-zinc-900 text-white">
                <h2 className="text-4xl">Contact</h2>
            </section>
        </div>
    );
}
export default Content;
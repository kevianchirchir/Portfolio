const images = import.meta.glob("../assets/projects/*", { eager: true })
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../index.css"
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

const projects = [
    {
        name: "My Portfolio",
        tag: "React • TailwindCSS • Motion • React Router • EmailJS API • SwiperJS",
        img: images["../assets/projects/portfolio.png"].default,
        description: "An animated and responsive portfolio built with React and TailwindCSS.",
        github: "https://github.com/kevianchirchir/Portfolio",
        demo: null,
        color: "bg-[#b700ff]"
    },
    {
        name: "Blob AI Chatbot 🤖",
        tag: "React • AI API (puter.js)",
        img: images["../assets/projects/blob.png"].default,
        description: "An AI-powered chatbot built with React, integrating API-based responses.",
        github: "https://github.com/kevianchirchir/Blob-Ai-Chatbot",
        demo: "https://kevianchirchir.github.io/Blob-Ai-Chatbot/",
        color: "bg-[#0072f5]"
    },
    {
        name: "Bible Reader",
        tag: "React • UI Design • API",
        img: images["../assets/projects/bible.png"].default,
        description: "A clean and responsive Bible reading interface built with React.",
        github: "https://github.com/kevianchirchir/Bible-Reader",
        demo: "unavailable",
        color: "bg-[#d6b600]"
    }
]

function Projects() {
    const navigate = useNavigate()

    const handleDemo = (demo) => {
        if (!demo) return
        if (demo === "unavailable") navigate("/unavailable")
        else window.open(demo, "_blank", "noreferrer")
    }

    return (
                <motion.div
                    className="
                        w-full flex flex-col items-center gap-5 px-1
                        pt-[calc(env(safe-area-inset-top)+1rem)]
                        pb-[calc(env(safe-area-inset-bottom)+1rem)] 
                    "
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        >
            <motion.h2
                initial={{ opacity: 0, y: -20, rotate: -8, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 10 }}
                whileHover={{ rotate: [-1, 3, -3, 1], scale: 1.05, transition: { duration: 0.4 } }}
                className="comic-btn transition-none border-2 rounded px-5 py-1.5 text-lg sm:text-2xl lg:text-3xl"
            >
                What I've been building
            </motion.h2>
        </motion.div>

            <Swiper
                spaceBetween={8}
                slidesPerView={1}
                grabCursor={true}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="w-full max-w-4xl !pb-10"
                style={{
                    "--swiper-pagination-color": "#ff4fb8",
                    "--swiper-pagination-bullet-inactive-color": "#1a1033",
                    "--swiper-pagination-bullet-inactive-opacity": "0.35"
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.name} className="!h-auto p-2 pr-3 pb-3">
                        <div className="comic-panel flex flex-col md:flex-row w-full overflow-hidden">

                            <div className={`solid-bg w-full md:w-2/5 h-44 sm:h-52 md:h-80 overflow-hidden ${project.color} border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#1a1033]`}>
                                <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex flex-col gap-3 p-5 sm:p-6 md:p-8 flex-1">
                                <div>
                                    <span className={`solid-bg ${project.color} text-white border-2 border-[#1a1033] rounded-full px-2.5 py-0.5 text-xs inline-block`}>
                                        {project.tag}
                                    </span>
                                    <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mt-2">
                                        {project.name}
                                    </h3>
                                </div>

                                <p className="text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                                    <a
                                        href={project.github}
                                        target="_blank" rel="noreferrer"
                                        className="comic-btn bg-white text-black px-4 py-1.5 text-xs sm:text-sm"
                                    >
                                        GitHub ↗
                                    </a>

                                    <button
                                        onClick={() => handleDemo(project.demo)}
                                        disabled={!project.demo}
                                        className={`comic-btn px-4 py-1.5 text-xs sm:text-sm cursor-pointer
                                            ${project.demo ? "bg-[#c9a7ff]" : "bg-[#e9e2f0] opacity-70 !cursor-not-allowed"}`}
                                    >
                                        {project.demo ? "Live demo ↗" : "You are here 😄"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    )
}

export default Projects

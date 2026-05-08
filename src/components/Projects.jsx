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
        tag: "React • TailwindCSS • Motion • React Router",
        img: images["../assets/projects/portfolio.png"].default,
        description: "An animated and responsive portfolio built with React and TailwindCSS. ",
        github: "https://github.com/kevianchirchir/Portfolio",
        demo: null
    },
    {
        name: "Blob AI Chatbot 🤖",
        tag: "React • AI API (puter.js)",
        img: images["../assets/projects/blob.png"].default,
        description: "An AI-powered chatbot built with React, integrating API-based responses to simulate real-time conversations with a clean, animated UI.",
        github: "https://github.com/kevianchirchir/Blob-Ai-Chatbot",
        demo: "https://kevianchirchir.github.io/Blob-Ai-Chatbot/"
    },
    {
        name: "Bible Reader",
        tag: "React • UI Design • API",
        img: images["../assets/projects/bible.png"].default,
        description: "A clean and responsive Bible reading interface built with React, focused on readability and simple navigation between chapters.",
        github: "https://github.com/kevianchirchir/Bible-Reader",
        demo: "unavailable"
    }
]

function Cards() {
    const navigate = useNavigate()

    const handleDemo = (demo) => {
        if (!demo) return
        if (demo === "unavailable") {
            navigate("/unavailable")
        } else {
            window.open(demo, "_blank")
        }
    }

    return (
        <motion.div
            className="w-full flex flex-col items-center gap-6 px-4"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 0.8, opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="text-center">
                <p className="text-fuchsia-400 text-xs tracking-widest uppercase font-semibold mb-1">my work</p>
                <h2 className="text-3xl sm:text-2xl font-bold">What I've Been Building</h2>
            </div>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
                simulateTouch={true}
                allowTouchMove={true}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="w-full  rounded-2xl overflow-hidden "
                style={{ "--swiper-pagination-color": "#d946ef", "--swiper-pagination-bullet-inactive-color": "#6b21a8" }}
            >
                {projects.map((project, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative bg-fuchsia-950 flex flex-col md:flex-row items-center gap-0 w-full overflow-hidden">

                            {/* Glow blob */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-fuchsia-700/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

                            {/* Image side */}
                            <div className="w-full md:w-2/5 h-48 md:h-80  overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>

                            {/* Content side */}
                            <div className="flex flex-col gap-4 p-6 sm:p-8 flex-1 text-white ">
                                <div>
                                    <span className="text-fuchsia-400 text-xs tracking-widest uppercase font-medium">{project.tag}</span>
                                    <h1 className="font-bold text-xl sm:text-2xl mt-1">{project.name}</h1>
                                </div>

                                <p className="text-fuchsia-200/70 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex gap-3 mt-auto pt-2 ">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="mb-5 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-fuchsia-700/50 hover:border-fuchsia-500 hover:bg-fuchsia-900/50 transition-all"
                                    >
                                        GitHub ↗
                                    </a>
                                    <button
                                        onClick={() => handleDemo(project.demo)}
                                        disabled={!project.demo}
                                        className={`flex items-center mb-5 gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
                                            ${project.demo
                                                ? "bg-fuchsia-600 hover:bg-fuchsia-500 active:scale-95"
                                                : "bg-fuchsia-900/30 text-fuchsia-400/50 cursor-not-allowed"
                                            }`}
                                    >
                                        {project.demo ? "Live Demo ↗" : "You are here 😄"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </motion.div >
    )
}

export default Cards
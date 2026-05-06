

const images = import.meta.glob("../assets/projects/*", { eager: true })
const imageList = Object.values(images).map(img => img.default)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../index.css"
import { motion, spring } from 'motion/react'
const projects = [
    {
        name: "My Portfolio!",
        img: images["../assets/projects/portfolio.png"].default,
        description: "An animated and responsive portfolio built with React and TailwindCSS.  Focused on clean UI design, smooth interactions, and modern frontend development practices."
    },

    {
        name: "Blob AI Chatbot🤖",
        img: images["../assets/projects/blob.png"].default,
        description: "An AI-powered chatbot built with React, integrating API-based responses to simulate real-time conversations with a clean, animated UI."
    },

    {
        name: "Bible Reader",
        img: images["../assets/projects/bible.png"].default,
        description: "A clean and responsive Bible reading interface built with React, focused on readability and simple navigation between chapters."

    }

]

function Cards() {
    return (
        <div className='w-full justify-center items-center flex flex-col  '>
            <h2 className="text-4xl mb-7 text-center">What I've Been Working On</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                grabCursor={true}
                simulateTouch={true}
                allowTouchMove={true}

                className="w-full max-w-5xl   mx-auto px-4  rounded-xl bg-fuchsia-950"
            >
                {projects.map((project, i) => (
                    <SwiperSlide key={i} className="flex items-center justify-center">

                        <div className="cursor-grabbing flex flex-col md:flex-row items-center gap-6 w-full">

                            {/* Image */}
                            <motion.img
                                src={project.img}
                                alt={project.name}
                                className="w-40 text-white p-4 sm:w-52 md:w-64 rounded-lg object-cover drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                            />

                            {/* Text */}
                            <div className="flex flex-col text-center md:text-left">
                                <h1 className="font-bold text-white text-lg md:text-xl mb-2">
                                    {project.name}
                                </h1>

                                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                                    {project.description}
                                </p>
                            </div>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
            <motion.h1 initial={{ opacity: 0, scale: 0, y: 30 }} animate={{ opacity: 1, scale: 1, type: spring }} transition={{ delay: 2.5, duration: 0.4 }} className="text-gray-400 mt-3">(Drag to scroll)</motion.h1>
        </div>
    )
}

export default Cards
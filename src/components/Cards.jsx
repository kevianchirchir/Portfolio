

const images = import.meta.glob("../assets/projects/*", { eager: true })
const imageList = Object.values(images).map(img => img.default)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../index.css"
const projects = [
    {
        name: "My Portfolio!",
        img: images["../assets/projects/portfolio.png"].default,
        description: "An animated and responsive portfolio built with React and TailwindCSS.  Focused on clean UI design, smooth interactions, and modern frontend development practices."
    },

    {
        name: "Blob AI Chatbot🤖",
        img: images["../assets/projects/blob.png"].default,
description: "An AI-powered chatbot built with React, integrating API-based responses to simulate real-time conversations with a clean, animated UI."    },

    {
        name: "Bible Reader",
        img: images["../assets/projects/bible.png"].default,
        description: "A clean and responsive Bible reading interface built with React, focused on readability and simple navigation between chapters."

    }

]

function Cards() {
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                className='w-120  shadow-lg flex items-center justify-center'
                scrollbar={{ draggable: true }}
            >
                {projects.map((project) => (
                    <SwiperSlide className='flex items-center justify-center '>
                        <div>
                            <img src={project.img} alt={project.name} className='w-100 border mx-auto rounded-lg ' />
                            <h1 className='text-center font-extrabold'>{project.name}</h1>
                            <p className='text-center text-gray-400'>{project.description}</p>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Cards
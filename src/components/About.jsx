import { motion } from "motion/react";
import { Keyframe } from '@boxicons/react'
import selfie from "/selfie.png"
import Background from "./Background"

const interests = [
    { label: "Exploring new technologies", color: "bg-[#c9a7ff]" },
    { label: "Playing badminton  >:)", color: "bg-[#c9a7ff]" },
    { label: "Improving programming skills & building projects", color: "bg-[#c9a7ff]" },
    { label: "Connecting with people who share similar interests", color: "bg-[#c9a7ff]" },
]

function About({ themeClass, setMenuSelected }) {
    return (
        <motion.section
            onViewportEnter={() => setMenuSelected("about")}
            viewport={{ amount: 0.5 }}
            id="about"
            className={`
                relative overflow-hidden transition-colors w-full min-h-svh
                flex items-center justify-center snap-start
                ${themeClass} px-4
                pt-[calc(env(safe-area-inset-top)+4rem)]
                pb-[calc(env(safe-area-inset-bottom)+1rem)]
            `}
        >
            <Background />

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="comic-panel relative z-10 w-full max-w-4xl flex flex-col lg:flex-row p-3 border rounded-3xl overflow-hidden"
            >
                {/* Image panel */}
                <div className="solid-bg lg:w-60 shrink-0 flex items-center justify-center p-5 lg:p-6 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-white">
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0, rotate: -6 }}
                        whileInView={{ scale: 1, opacity: 1, rotate: -3 }}
                        transition={{ type: "spring", stiffness: 200, damping: 14 }}
                        src={selfie}
                        alt="Kevian's selfie"
                        className="rounded-full w-24 sm:w-32 lg:w-40 border-[3px] border-[#1a1033] shadow-[4px_4px_0_#1a1033]"
                    />
                </div>

                {/* Text panel */}
                <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">
                    <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                        About me :)
                    </h2>

                    <p className="text-sm sm:text-base leading-relaxed">
                        I <span className="solid-bg bg-[#c9a7ff] text-white px-1 rounded font-bold">love</span> coding and exploring new technologies. I’d say one of my strengths is my ability to learn quickly, adapt to new challenges, and apply what I learn to achieve my goals. 
                    </p>

                    <motion.span className="comic-btn bg-[#c9a7ff] text-black px-3 py-0.5 text-sm self-start -rotate-1 mt-1 rounded">Things I like</motion.span>

                    <div className="flex flex-col gap-2">
                        {interests.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.08 }}
                                className={`solid-bg text-black flex items-center gap-2 ${item.color} border-[3px] border-[#1a1033] rounded-xl px-3 py-1.5 text-xs sm:text-sm shadow-[3px_3px_0_#1a1033] ${i % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"}`}
                            >
                                <Keyframe className="shrink-0" />
                                <span>{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default About

import { motion } from "motion/react";
import { Keyframe } from '@boxicons/react'
import selfie from "/selfie.png"

const interests = [
    { label: "Exploring new technologies" },
    { label: "Playing badminton 😄" },
    { label: "Improving React skills & building projects" },
    { label: "Connecting with people who share similar interests" },
]

function About({ themeClass, setMenuSelected }) {
    return (
        <motion.section
            onViewportEnter={() => setMenuSelected("about")}
            viewport={{ amount: 0.5 }}
            id="about"
            className={`
                transition-colors
                w-full
                min-h-svh
                flex items-center justify-center
                snap-start
                ${themeClass}
                px-4
                pt-[calc(env(safe-area-inset-top)+4rem)]
                pb-[calc(env(safe-area-inset-bottom)+1rem)]
            `}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.04 }}
                className="relative w-full max-w-4xl rounded-2xl overflow-hidden p-[1px]"
                style={{ background: "linear-gradient(135deg, #a21caf, #6b21a8, #701a75)" }}
            >
                <div className="bg-fuchsia-950 rounded-2xl flex flex-col lg:flex-row overflow-hidden">

                    {/* Image panel */}
                    <div className="relative lg:w-56 flex-shrink-0 flex items-center justify-center p-5 lg:p-6">
                        <div className="absolute inset-0 bg-fuchsia-700/10 pointer-events-none" />
                        <div className="absolute w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />

                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            src={selfie}
                            alt="Selfie"
                            className="relative z-10 rounded-full 
                                w-24 sm:w-32 lg:w-40 
                                shadow-2xl ring-2 ring-fuchsia-500/40"
                        />
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-px bg-fuchsia-800/60 my-5" />
                    <div className="lg:hidden h-px bg-fuchsia-800/60 mx-5" />

                    {/* Text panel */}
                    <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1 text-white">

                        <div>
                            <p className="text-fuchsia-400 text-xs tracking-widest uppercase font-semibold mb-0.5">
                                who i am
                            </p>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="font-bold text-xl sm:text-2xl lg:text-3xl"
                            >
                                About Me
                            </motion.h2>
                        </div>

                        <p className="text-fuchsia-200/70 text-xs sm:text-sm leading-relaxed">
                            I <span className="text-white font-semibold">love</span> building web apps that feel alive.
                            Currently focused on React and UI design, experimenting with animations, interactions,
                            and layouts that push what the web can feel like.
                        </p>

                        <div>
                            <p className="text-fuchsia-400 text-xs tracking-widest uppercase font-semibold mb-2">
                                interests
                            </p>

                            <div className="flex flex-col gap-1.5">
                                {interests.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.08 }}
                                        className="flex items-center gap-2 
                                            bg-fuchsia-900/40 
                                            border border-fuchsia-700/30 
                                            rounded-xl px-3 py-1.5 text-xs"
                                    >
                                        <Keyframe className="text-fuchsia-400 shrink-0" />
                                        <span className="text-fuchsia-100/80">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default About
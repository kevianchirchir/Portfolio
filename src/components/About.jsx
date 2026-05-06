import { motion } from "motion/react";
import { Keyframe } from '@boxicons/react'

function About({ themeClass, setMenuSelected }) {
        return (
            <motion.section
                onViewportEnter={() => setMenuSelected("about")}
                viewport={{ amount: 0.6 }}
                id="about"
                className={`transition-colors w-full min-h-screen flex items-center justify-center snap-start ${themeClass} px-4 py-10`}
            >
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl shadow-xl bg-fuchsia-950 rounded p-6 sm:p-10"
                >
                    {/* Text Section */}
                    <div className="flex flex-col gap-4 text-white flex-1 text-center md:text-left">
                        <motion.h2
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="font-bold text-2xl sm:text-4xl drop-shadow-[0_0_2px_rgba(236,72,153,0.6)]"
                        >
                            About Me
                        </motion.h2>

                        <p className="text-sm sm:text-base">
                            I <span className="font-bold">LOVE</span> building web apps that feel
                            alive. Currently focused on React and UI design, experimenting with
                            animations, interactions, and layouts.
                        </p>

                        <h1 className="text-sm sm:text-base font-semibold">
                            A bit of interests I have!
                        </h1>

                        <div className="flex flex-col gap-3 text-sm sm:text-base">
                            <p className="flex gap-3 items-center">
                                <Keyframe className="drop-shadow-[0_0_2px_rgba(236,72,153,0.6)]" />
                                Exploring new technologies
                            </p>

                            <p className="flex gap-3 items-center">
                                <Keyframe className="drop-shadow-[0_0_2px_rgba(236,72,153,0.6)]" />
                                Playing badminton 😄
                            </p>

                            <p className="flex gap-3 items-center">
                                <Keyframe className="drop-shadow-[0_0_2px_rgba(236,72,153,0.6)]" />
                                Improving React skills & building projects
                            </p>

                            <p className="flex gap-3 items-center">
                                <Keyframe className="drop-shadow-[0_0_2px_rgba(236,72,153,0.6)]" />
                                Connecting with people who share similar interests
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <motion.img
                        initial={{ x: "1vw" }}
                        src="../src/assets/selfie.png"
                        alt="Selfie"
                        className="rounded-full w-40 sm:w-56 lg:w-72 mx-auto shadow-2xl drop-shadow-[0_0_2px_rgba(236,72,153,0.6)]"
                    />
                </motion.div>
            </motion.section>
        )
    }


export default About
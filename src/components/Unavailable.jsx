import { Confused } from "@boxicons/react"
import { motion } from "motion/react"
import Background from "./Background"

function Unavailable() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#ffd1ec] overflow-hidden relative px-4">
            <Background />

            <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -6 }}
                animate={{ scale: 1, opacity: 1, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200, damping: 13 }}
                className="comic-panel relative z-10 w-full max-w-md flex flex-col items-center gap-4 px-8 py-10 text-center"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, -8, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                    <Confused size="4xl" />
                </motion.div>

                <h1 className="text-3xl font-bold">
                    <span className="bg-[#ffe066] px-3 rounded-lg border-[3px] border-[#1a1033] inline-block rotate-2">Uh oh!</span>
                </h1>

                <p className="text-sm leading-relaxed max-w-xs">
                    This page isn't ready yet 😪<br />but Kevian is working on it! 😁<br />
                    Check back soon.
                </p>

                <motion.a
                    href="/"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="comic-btn w-full py-2.5 text-sm bg-[#ff8fd0]"
                >
                    ← Go back home
                </motion.a>
            </motion.div>
        </div>
    )
}

export default Unavailable

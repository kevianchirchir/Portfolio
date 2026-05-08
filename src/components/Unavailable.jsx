import { Confused } from "@boxicons/react"
import { motion } from "motion/react"

function Unavailable() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-zinc-900 overflow-hidden relative px-4">

            {/* Background glow orbs */}
            <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-fuchsia-700/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ scale: 0.0, opacity: 0 }}
                animate={{ scale: 0.8, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-md rounded-2xl overflow-hidden p-[1px] z-10"
                style={{ background: "linear-gradient(135deg, #a21caf, #6b21a8, #701a75)" }}
            >
                <div className="bg-fuchsia-950 rounded-2xl flex flex-col items-center gap-4 px-8 py-10 text-white text-center">

                    {/* Animated icon */}
                    <motion.div
                        animate={{ scale: [1, 1.15, 1], y: [0, -8, 0], rotate: [0, -8, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, repeatType: "mirror", ease: "easeInOut" }}
                        className="text-fuchsia-400 text-6xl"
                    >
                        <Confused size="4xl" />
                    </motion.div>

                    {/* Text */}
                    <div className="flex flex-col gap-1">
                        <p className="text-fuchsia-400 text-xs tracking-widest uppercase font-semibold">page unavailable</p>
                        <h1 className="text-3xl font-bold">Uh Oh!</h1>
                    </div>

                    <p className="text-fuchsia-200/60 text-sm leading-relaxed max-w-xs">
                        This page isn't ready yet 😪<br/> but Kevian is working on it! 😁<br />
                        Check back soon.
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-fuchsia-800/50" />

                    {/* Back button */}
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-2.5 rounded-xl text-sm font-semibold bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors text-white"
                    >
                        ← Go back home
                    </motion.a>
                </div>
            </motion.div>
        </div>
    )
}

export default Unavailable
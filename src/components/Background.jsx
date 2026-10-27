import { motion } from "motion/react"

// Halftone dots + a few doodles. Drop inside any `relative` section.
const bits = [
    { c: "✦", top: "12%", left: "7%", size: "text-3xl", color: "text-[#ffe066]" },
    { c: "♥", top: "20%", left: "90%", size: "text-2xl hidden sm:block", color: "text-[#ff8fd0]" },
    { c: "★", top: "78%", left: "5%", size: "text-2xl", color: "text-[#8fd3ff]" },
    { c: "✿", top: "85%", left: "88%", size: "text-3xl", color: "text-[#7ee8c7]" },
]

function Background() {
    return (
        <div aria-hidden className="halftone absolute inset-0 overflow-hidden pointer-events-none">
            {bits.map((b, i) => (
                <motion.span
                    key={i}
                    className={`absolute ${b.size} ${b.color} drop-shadow-[2px_2px_0_#1a1033]`}
                    style={{ top: b.top, left: b.left }}
                    animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }}
                >
                    {b.c}
                </motion.span>
            ))}
        </div>
    )
}

export default Background

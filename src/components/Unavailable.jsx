
import { Confused } from "@boxicons/react"
import { motion } from "motion/react"
function Unavailable() {
    return (
        <>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-screen flex-col flex items-center justify-center" >
                <motion.div animate={{scale: [1, 1.2, 1, 1.2, 1], y: [0, 10, 0, 10], x: [0, 10, 0, 10]}} transition={{repeat: Infinity, duration: 2, }}>  <Confused size="3xl" /></motion.div>
                <h1 className="mt-10 text-3xl font-bold">Uh Oh!</h1>
                <p>Something went wrong, but rest assured!</p>
                <p>Kevian is working on it 😁</p>
                <a href="/" className="bg-fuchsia-700 p-2 rounded text-white hover:bg-fuchsia-500 transition-colors mt-5">Press here to go back </a>
            </motion.div>
        </>
    )
}

export default Unavailable
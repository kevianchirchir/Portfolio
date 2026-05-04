
import { motion } from "motion/react"
function ScrollIndicator() {
    return (
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.4, delay: 2.5}}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 pointer-events-none">
            <motion.div className="animate-bounce">
                ↓ Scroll to explore
            </motion.div>
        </motion.div>
    );
}

export default ScrollIndicator
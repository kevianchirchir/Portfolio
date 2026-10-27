import emailjs from "@emailjs/browser"
import { useState } from "react"
import { HappyBeaming } from "@boxicons/react"
import { motion } from "motion/react"

const empty = { name: "", email: "", message: "" }

const messages = {
    sending: { text: "Sending… ", style: "bg-[#fff0a8]" },
    sent: { text: "Message sent! Thanks! ", style: "bg-[#c4f5e6]" },
    error: { text: "Oops, that didn't send. Please try again.", style: "bg-[#ffc9c9]" },
    missing: { text: "Please fill in all three boxes.", style: "bg-[#ffc9c9]" },
}

function Contact() {
    const [form, setForm] = useState(empty)
    const [status, setStatus] = useState("")

    const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

    const handleSubmit = (e) => {
        e?.preventDefault()
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus("missing")
            return
        }
        setStatus("sending")
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            { from_name: form.name, from_email: form.email, message: form.message },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => { setStatus("sent"); setForm(empty) })
            .catch((error) => {
                console.log("EmailJS error:", error)
                setStatus("error")
            })
    }

    return (
        <div className="w-full flex items-center justify-center py-2">
            <div className="comic-panel w-full max-w-3xl p-5 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8">

                <form
                    onSubmit={handleSubmit}
                    className="keep-colors relative flex flex-col gap-3 text-black flex-1 p-4 sm:p-5
                        bg-[#ffd1ec] border-[3px] border-[#1a1033] rounded-2xl
                        shadow-[4px_4px_0_#1a1033]"
                >
                    

                    <h2 className="text-xl text-black sm:text-2xl lg:text-3xl font-bold leading-tight">
                        Let's work <span className="bg-[#d4bff5] px-2 rounded-lg border-2 border-[#1a1033] inline-block -rotate-2">together!</span>
                    </h2>

                    <input value={form.name} onChange={update("name")} placeholder="Your name" aria-label="Your name" className="comic-input" />
                    <input value={form.email} onChange={update("email")} type="email" placeholder="Your email" aria-label="Your email" className="comic-input" />
                    <textarea value={form.message} onChange={update("message")} placeholder="Say hi…" aria-label="Your message" rows={4} className="comic-input resize-none" />

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="comic-btn w-full py-2 text-lg bg-[#7ee8c7] cursor-pointer"
                    >
                        Send message 
                    </button>

                    {status && (
                        <p role="status" className={`text-xs text-center border-2 border-[#1a1033] rounded-full py-1 ${messages[status].style}`}>
                            {messages[status].text}
                        </p>
                    )}
                </form>

                {/* INFO */}
                <motion.div
                    animate={{ y: [0, -14, 0], rotate: [-1.5, 1, -1.5] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="flex flex-row md:flex-col justify-between md:justify-center gap-3 md:gap-4 md:w-52 text-sm"
                >
                    <div className="solid-bg text-black bg-[#cfeaff] border-[3px] border-[#1a1033] rounded-xl p-2.5 shadow-[3px_3px_0_#1a1033] -rotate-1">
                        <p className="text-xs">Reply time</p>
                        <p className="font-bold flex items-center gap-1">
                            Within 24 hours <HappyBeaming className="inline" />
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact

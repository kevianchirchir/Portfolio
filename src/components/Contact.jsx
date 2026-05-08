import emailjs from "@emailjs/browser"
import { useState } from "react"
import { HappyBeaming } from "@boxicons/react"

function Contact() {

    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [status, setStatus] = useState("")

    const handleSubmit = () => {
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => setStatus("Message sent!"))
            .catch((error) => {
                console.log("EmailJS error:", error)
                setStatus("Something went wrong.")
            })
    }

    return (
        <div className="
            w-full
            min-h-[100svh]
            flex items-center justify-center
            px-4
            py-[calc(env(safe-area-inset-top)+2rem)]
        ">
            <div
                className="relative w-full max-w-3xl rounded-2xl overflow-hidden p-[1px]"
                style={{ background: "linear-gradient(135deg, #a21caf, #6b21a8, #701a75)" }}
            >

                <div className="
                    bg-fuchsia-950
                    rounded-2xl
                    p-5 sm:p-8
                    flex flex-col md:flex-row
                    gap-6 md:gap-8
                ">

                    {/* LEFT — FORM */}
                    <div className="flex flex-col gap-3 flex-1">

                        <p className="text-fuchsia-400 text-xs tracking-widest uppercase font-semibold">
                            Get in touch
                        </p>

                        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                            Let's work<br />
                            <span className="text-fuchsia-400">together.</span>
                        </h2>

                        <div className="flex flex-col gap-2 mt-1">

                            <input
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                placeholder="Your name"
                                className="
                                    bg-fuchsia-900/50
                                    border border-fuchsia-700/40
                                    text-white placeholder-fuchsia-400/50
                                    px-4 py-2
                                    rounded-xl text-sm
                                    focus:outline-none focus:border-fuchsia-500
                                "
                            />

                            <input
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                placeholder="Your email"
                                className="
                                    bg-fuchsia-900/50
                                    border border-fuchsia-700/40
                                    text-white placeholder-fuchsia-400/50
                                    px-4 py-2
                                    rounded-xl text-sm
                                    focus:outline-none focus:border-fuchsia-500
                                "
                            />

                            <textarea
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                placeholder="Your message..."
                                rows={4}
                                className="
                                    bg-fuchsia-900/50
                                    border border-fuchsia-700/40
                                    text-white placeholder-fuchsia-400/50
                                    px-4 py-2
                                    rounded-xl text-sm
                                    focus:outline-none focus:border-fuchsia-500
                                    resize-none
                                "
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="
                                w-full
                                py-2
                                rounded-xl text-sm font-semibold text-white
                                bg-fuchsia-600 hover:bg-fuchsia-500
                                active:scale-95 transition-all
                            "
                        >
                            Send message →
                        </button>

                        {status && (
                            <p className={`
                                text-xs text-center
                                ${status === "Message sent!" ? "text-green-400" : "text-red-400"}
                            `}>
                                {status}
                            </p>
                        )}
                    </div>

                    {/* RIGHT — INFO */}
                    <div className="
                        flex flex-row md:flex-col
                        justify-between md:justify-center
                        gap-4 md:gap-6
                        md:w-52
                        border-t md:border-t-0 md:border-l
                        border-fuchsia-800
                        pt-4 md:pt-0 md:pl-8
                    ">

                        <div>
                            <p className="text-fuchsia-400 text-xs tracking-widest uppercase mb-1">
                                Based in
                            </p>
                            <p className="text-white text-sm font-medium">
                                London, Ontario 🍁
                            </p>
                        </div>

                        <div>
                            <p className="text-fuchsia-400 text-xs tracking-widest uppercase mb-1">
                                Open to
                            </p>
                            <p className="text-white text-sm font-medium">
                                Internships & Freelance
                            </p>
                        </div>

                        <div>
                            <p className="text-fuchsia-400 text-xs tracking-widest uppercase mb-1">
                                Response time
                            </p>
                            <p className="text-white text-sm font-medium flex items-center gap-1">
                                Within 24 hours <HappyBeaming className="inline" />
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
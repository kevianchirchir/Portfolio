import { Typewriter } from "react-simple-typewriter";
function Content() {
    return (
        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

            {/* HERO */}
            <section className="w-full h-screen flex items-center justify-center snap-start">
                <h1 className="text-5xl font-bold">
                    <Typewriter
                        words={["Hi, I'm Kevian"]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </h1>
            </section>

            {/* NEXT SECTION */}
            <section className="w-full h-screen flex items-center justify-center snap-start bg-zinc-900 text-white">
                <h2 className="text-4xl">About Me</h2>
            </section>


            {/* NEXT SECTION */}
            <section className="w-full h-screen flex items-center justify-center snap-start bg-zinc-900 text-white">
                <h2 className="text-4xl">Projects</h2>
            </section>

              {/* NEXT SECTION */}
            <section className="w-full h-screen flex items-center justify-center snap-start bg-zinc-900 text-white">
                <h2 className="text-4xl">Contact</h2>
            </section>
        </div>
    );
}
export default Content;
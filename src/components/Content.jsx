import { Typewriter } from "react-simple-typewriter";

function Content({modeSelected, setModeSelected, setMenuSelected, menuSelected}) {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      
     

      {/* Center text */}
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
    </div>
  );
}

export default Content;
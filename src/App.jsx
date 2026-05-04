import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'

function App() {
    const [menuSelected, setMenuSelected] = useState("home")

    const [modeSelected, setModeSelected] = useState(() => {
        return localStorage.getItem("theme") || "dark"
    })

    useEffect(() => {
    localStorage.setItem("theme", modeSelected)
}, [modeSelected])

    const themeClass = modeSelected === "light" ? "bg-white text-black" : "bg-zinc-800 text-white"

    return (
        <div className=' w-full h-screen flex items-center justify-center'>
            <Header themeClass={themeClass} menuSelected={menuSelected} setMenuSelected={setMenuSelected} setModeSelected={setModeSelected} modeSelected={modeSelected} />
            <Content themeClass={themeClass} menuSelected={menuSelected} setMenuSelected={setMenuSelected} setModeSelected={setModeSelected} modeSelected={modeSelected} />
        </div>
    )
}



export default App

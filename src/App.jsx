import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Content from './components/Content'
import Unavailable from './components/Unavailable'
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
        <Routes>
            <Route path="/unavailable" element={<Unavailable />}/>
            <Route path="*" element={
                <div className=' w-full h-screen flex items-center justify-center'>
                    <Header themeClass={themeClass} menuSelected={menuSelected} setMenuSelected={setMenuSelected} setModeSelected={setModeSelected} modeSelected={modeSelected} />
                    <Content themeClass={themeClass} menuSelected={menuSelected} setMenuSelected={setMenuSelected} setModeSelected={setModeSelected} modeSelected={modeSelected} />
                </div>
            }/>


            
        </Routes>
    )
}



export default App

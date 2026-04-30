import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
function App() {
  const [menuSelected, setMenuSelected] = useState("home")

  const [modeSelected, setModeSelected] = useState("light")
  return (
    <div className=' w-full h-screen flex items-center justify-center'>
      <Header menuSelected={menuSelected} setMenuSelected={setMenuSelected} setModeSelected={setModeSelected} modeSelected={modeSelected} />
      <Content menuSelected={menuSelected} setMenuSelected={setMenuSelected} setModeSelected={setModeSelected} modeSelected={modeSelected} />
    </div>
  )
}



export default App

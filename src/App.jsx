
import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import { DarkThemeContext } from './context/DarkThemeContext.js'
import { Routes, Route } from 'react-router-dom'
import NotAvailable from './components/NotAvailable'

function App() {
 
  const [isDark,setIsDark] = useState("dark")

  return (
    <DarkThemeContext value={{isDark,setIsDark}}>
    <div className={`bg-gray-500/20 dark:bg-black/90 min-h-screen ${isDark}`}>
       <Routes>
           // Main page
          <Route path="/" element={<Landing />} />
          // not available page
          <Route path="/not-available" element={<NotAvailable />} />
        </Routes>
    </div>
    </DarkThemeContext>
  )
}

export default App

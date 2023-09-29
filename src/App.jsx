import React, { useState, useEffect } from "react"
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"

const App = () => {

  return (
    <div className="font-body overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App

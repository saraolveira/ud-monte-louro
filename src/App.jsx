import React, { useState, useEffect } from "react"
import Papa from "papaparse"
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"

const App = () => {
    const partidosUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdGooOnPBQuZVyeGk0Cg1k33OlrlZgjkUivz8-hwvMahoFKUjszK2z1GESX5zsGfddYRqunbIn69bw/pub?gid=0&single=true&output=csv"
    const [data, setData] = useState({})

    useEffect(() => {
        getPartidos()
    }, [])

    const getPartidos = async () => {
        Papa.parse(partidosUrl, {
            download: true,
            header: true,
            complete: (results) => {
                setData(results.data)
            },
        })
    }
    const partidos = Array.from(data)

    return (
        <div className="font-body overflow-hidden">
            <Navbar />
            <Hero partidos={partidos} />
        </div>
    )
}

export default App

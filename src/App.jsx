import React, { useState, useEffect } from "react"
import Papa from "papaparse"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import UltimosResultados from "./components/UltimosResultados.jsx"
import Footer from "./components/Footer.jsx"

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
        <div className="font-body overflow-x-hidden cursor-default">
            <Navbar />
            <Hero partidos={partidos} />
            <UltimosResultados partidos={partidos} />
            <Footer />
        </div>
    )
}

export default App

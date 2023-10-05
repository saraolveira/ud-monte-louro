import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Papa from "papaparse"
import Home from "./pages/Home.jsx"

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
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home partidos={partidos} />} />
                    <Route
                        path="/inicio"
                        element={<Home partidos={partidos} />}
                    />
                </Routes>
            </BrowserRouter>
            {/* <Navbar />
            <Hero partidos={partidos} />
            <UltimosResultados partidos={partidos} />
            <Footer /> */}
        </div>
    )
}

export default App

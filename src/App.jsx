import React from "react"
import { useState, useEffect } from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Papa from "papaparse"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Clasificacion from "./pages/Clasificacion.jsx"

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

    const element = useRoutes([
        {
            path: "/",
            element: <Home partidos={partidos} />,
        },
        {
            path: "/clasificacion",
            element: <Clasificacion />,
        },
    ])

    const location = useLocation()

    if (!element) return null

    return (
        <div className="font-body overflow-x-hidden cursor-default">
            <Navbar />
            <AnimatePresence mode="wait" initial={false}>
                {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
            <Footer />
            {/* <BrowserRouter>
                <Routes>
                    <Route index element={<Home partidos={partidos} />} />
                    <Route path="/clasificacion" element={<Clasificacion />} />
                </Routes>
            </BrowserRouter> */}
        </div>
    )
}

export default App

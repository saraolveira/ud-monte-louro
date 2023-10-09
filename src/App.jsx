import React from "react"
import { useState, useEffect } from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Papa from "papaparse"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Calendario from "./pages/Calendario.jsx"
import Resultados from "./pages/Resultados.jsx"
import Clasificacion from "./pages/Clasificacion.jsx"

const App = () => {
    const partidosUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdGooOnPBQuZVyeGk0Cg1k33OlrlZgjkUivz8-hwvMahoFKUjszK2z1GESX5zsGfddYRqunbIn69bw/pub?gid=0&single=true&output=csv"
    const clasificacionUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIOAMkYx6XyqObShL_kNEQu6vjkWWBd_cXKFEkKLwRCCuc2IU8wamillJ97Fu7YeslBGnDvCeeUz5F/pub?output=csv"
    const [data, setData] = useState({})
    const [dataCalendario, setDataCalendario] = useState({})

    useEffect(() => {
        getPartidos()
        getClasificacion()
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

    const getClasificacion = async () => {
        Papa.parse(clasificacionUrl, {
            download: true,
            header: true,
            complete: (results) => {
                setDataCalendario(results.data)
            },
        })
    }

    const partidos = Array.from(data)
    const clasificacion = Array.from(dataCalendario)

    const element = useRoutes([
        {
            path: "/",
            element: <Home partidos={partidos} />,
        },
        {
            path: "/calendario",
            element: <Calendario partidos={partidos} />,
        },
        {
            path: "/resultados",
            element: <Resultados partidos={partidos} />,
        },
        {
            path: "/clasificacion",
            element: <Clasificacion clasificacion={clasificacion} />,
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
        </div>
    )
}

export default App

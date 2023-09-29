import { useState, useEffect } from "react"
import Papa from "papaparse"
import Partidos from "./Partidos.jsx"

const Hero = () => {
  const partidosUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdGooOnPBQuZVyeGk0Cg1k33OlrlZgjkUivz8-hwvMahoFKUjszK2z1GESX5zsGfddYRqunbIn69bw/pub?gid=0&single=true&output=csv"
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getPartidos()
  }, [])

  const getPartidos = async () => {
    setLoading(true)
    Papa.parse(partidosUrl, {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data)
      },
    })
    setLoading(false)
  }

  const partidos = Array.from(data)
  return (
    <div id="hero" className="w-full h-screen bg-big-stone-950 font-body text-big-stone-50">
      {!loading && <Partidos partidos={partidos}/>}
    </div>
  )
}

export default Hero

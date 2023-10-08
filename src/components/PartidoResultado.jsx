import { useState, useRef } from "react"

import { motion } from "framer-motion"
import Partido from "./Partido.jsx"

const PartidoResultado = ({
    local,
    visitante,
    logoLocal,
    logoVisitante,
    golesLocal,
    golesVisitante,
    resultado,
    index,
}) => {
    const borderRef = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)
    const del = index * 0.15

    const handleMouseMove = (e) => {
        if (!borderRef.current) return

        const div = borderRef.current
        const rect = div.getBoundingClientRect()

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <div
            className="relative w-full h-48 px-2 py-6 flex flex-col justify-center items-center bg-big-stone-950 border border-big-stone-900 font-display font-black text-5xl md:py-2 lg:rounded-2xl "
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Partido
                local={local}
                visitante={visitante}
                logoLocal={logoLocal}
                logoVisitante={logoVisitante}
                golesLocal={golesLocal}
                golesVisitante={golesVisitante}
                resultado={resultado}
            />
            <motion.div
                className="absolute w-full h-full bg-gradient-to-r from-fountain-blue-500 via-fountain-blue-400 to-fountain-blue-300 top-0 left-0 origin-left lg:rounded-2xl"
                initial={{ transform: "scaleX(1)" }}
                animate={{ transform: "scaleX(0)" }}
                transition={{ duration: 0.5, delay: del }}
            ></motion.div>
            <div
                ref={borderRef}
                style={{
                    border: "2px solid #88d3d8",
                    opacity,
                    WebkitMaskImage: `radial-gradient(30% 90px at ${position.x}px ${position.y}px, black 45%, transparent)`,
                }}
                className="absolute w-full h-full top-0 left-0 bg-transparent pointer-events-none border-2 border-fountain-blue-300 rounded-2xl opacity-0 transition-opacity duration-500 "
                aria-hidden="true"
            ></div>
        </div>
    )
}

export default PartidoResultado

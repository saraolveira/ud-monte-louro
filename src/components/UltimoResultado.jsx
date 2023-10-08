import { useState, useRef } from "react"
import Partido from "./Partido.jsx"

const UltimoResultado = ({
    local,
    visitante,
    logoLocal,
    logoVisitante,
    golesLocal,
    golesVisitante,
    resultado,
}) => {
    const borderRef = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

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
        <div className="relative w-full">
            <div
                className={`w-full h-48 px-2 py-6 flex flex-col justify-center items-center border border-fountain-blue-300   bg-big-stone-900 font-display font-black text-5xl cursor-pointer lg:rounded-2xl lg:border-2 lg:border-big-stone-800`}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Partido
                    className="font-display font-black text-5xl text-big-stone-50"
                    local={local}
                    visitante={visitante}
                    logoLocal={logoLocal}
                    logoVisitante={logoVisitante}
                    golesLocal={golesLocal}
                    golesVisitante={golesVisitante}
                    resultado={resultado}
                />
            </div>
            <div
                ref={borderRef}
                style={{
                    border: "2px solid #88d3d8",
                    opacity,
                    WebkitMaskImage: `radial-gradient(30% 90px at ${position.x}px ${position.y}px, black 45%, transparent)`,
                }}
                className="absolute w-full h-48 top-0 left-0 bg-transparent pointer-events-none border-2 border-fountain-blue-300 rounded-2xl opacity-0 transition-opacity duration-500 "
                aria-hidden="true"
            ></div>
        </div>
    )
}

export default UltimoResultado

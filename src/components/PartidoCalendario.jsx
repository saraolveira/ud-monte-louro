import { motion } from "framer-motion"
import Partido from "./Partido.jsx"

const PartidoCalendario = ({
    local,
    visitante,
    campo,
    data,
    hora,
    logoLocal,
    logoVisitante,
    index,
}) => {
    const del = index * 0.15
    return (
        <div className="relative w-full h-48 px-2 py-6 flex flex-col justify-center items-center bg-big-stone-950 border border-fountain-blue-300 font-display font-black text-5xl md:py-2 lg:rounded-2xl lg:shadow-md lg:shadow-fountain-blue-500 ">
            <Partido
                local={local}
                visitante={visitante}
                campo={campo}
                data={data}
                hora={hora}
                logoLocal={logoLocal}
                logoVisitante={logoVisitante}
            />
            <motion.div
                className="absolute w-full h-full bg-gradient-to-r from-fountain-blue-500 via-fountain-blue-400 to-fountain-blue-300 top-0 left-0 origin-left lg:rounded-2xl"
                initial={{ transform: "scaleX(1)" }}
                animate={{ transform: "scaleX(0)" }}
                transition={{ duration: 0.5, delay: del }}
            ></motion.div>
        </div>
    )
}

export default PartidoCalendario

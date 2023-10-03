import { motion } from "framer-motion"
import Partido from "./Partido.jsx"

const ProximoPartido = ({
    local,
    visitante,
    campo,
    data,
    hora,
    logoLocal,
    logoVisitante,
    index,
}) => {
    const del = index * 0.3
    return (
        <motion.div
            className="relative h-1/4 px-2 py-6 flex flex-col justify-center items-center bg-big-stone-900 border border-fountain-blue-300 font-display font-black text-5xl md:py-2 lg:border-l-2"
            initial={{ x: 700 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: del }}
        >
            <Partido
                local={local}
                visitante={visitante}
                campo={campo}
                data={data}
                hora={hora}
                logoLocal={logoLocal}
                logoVisitante={logoVisitante}
                index={index}
            />
            <motion.div
                className="absolute w-full h-full bg-gradient-to-r from-fountain-blue-500 via-fountain-blue-400 to-fountain-blue-300 top-0 left-0 origin-left"
                initial={{ transform: "scaleX(1)" }}
                animate={{ transform: "scaleX(0)" }}
                transition={{ duration: 0.5, delay: del + 0.5 }}
            ></motion.div>
        </motion.div>
    )
}

export default ProximoPartido

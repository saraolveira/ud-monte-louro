import { motion } from "framer-motion"
import ProximoPartido from "./ProximoPartido.jsx"
const ProximosPartidos = ({ partidos }) => {
    const sinXogar = partidos.filter(
        (partido) => partido.estado === "sin empezar"
    )

    const proximos4 = sinXogar.slice(0, 4)

    return (
        <div className="relative flex flex-col items-center lg:w-4/12 lg:mt-24 bg-big-stone-900">
            <h2 className="w-full p-6 font-body font-semibold uppercase  text-2xl bg-fountain-blue-300 text-big-stone-950 lg:hidden">
                Próximos partidos
            </h2>

            <motion.div
                className="w-full h-full lg:divide-y-2 lg:divide-fountain-blue-300"
                animate="visible"
                variants="variants"
            >
                {proximos4.map((partido, i) => (
                    <ProximoPartido
                        key={i}
                        local={partido.local}
                        visitante={partido.visitante}
                        campo={partido.campo}
                        data={partido.dataFormato}
                        hora={partido.hora}
                        logoLocal={partido.logoLocal}
                        logoVisitante={partido.logoVisitante}
                        index={i}
                    />
                ))}
            </motion.div>
            <a
                href="#"
                className="w-fit group mt-4 mb-4 py-2 px-6 flex gap-3 bg-monarch-900 rounded-full font-semibold uppercase transition-all duration-500 hover:bg-fountain-blue-300 hover:text-big-stone-950 lg:absolute lg:-top-2 lg:left-2 lg:px-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 fill-big-stone-50 group-hover:fill-big-stone-950 group-hover:rotate-12 transition-all duration-500 "
                >
                    <path
                        fillRule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clipRule="evenodd"
                    />
                </svg>
                <p className="lg:hidden">Ver calendario completo</p>
            </a>
        </div>
    )
}

export default ProximosPartidos

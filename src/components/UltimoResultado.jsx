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
    return (
        <div className="px-2 py-6 flex flex-col justify-center items-center bg-big-stone-900 font-display font-black text-5xl md:py-10 lg:w-1/2 ">
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
    )
}

export default UltimoResultado

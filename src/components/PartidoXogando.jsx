import Partido from "./Partido.jsx"
const PartidoXogando = ({
    local,
    visitante,
    logoLocal,
    logoVisitante,
    golesLocal,
    golesVisitante,
    resultado,
}) => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-48 overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_#1e3c5c_inset] transition-colors duration-200">
                <span>
                    <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(#88d3d8,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#88d3d8_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                </span>
                <span className="backdrop absolute inset-1 rounded-full bg-big-stone-950" />
            </div>
            <div className="relative w-full h-48 flex flex-col justify-center items-center font-display font-black text-5xl rounded-full">
                <Partido
                    local={local}
                    visitante={visitante}
                    logoLocal={logoLocal}
                    logoVisitante={logoVisitante}
                    golesLocal={golesLocal}
                    golesVisitante={golesVisitante}
                    resultado={resultado}
                />
                <div className="absolute top-6 font-body text-base font-normal uppercase px-4  rounded-full bg-monarch-900">
                    En vivo
                </div>
            </div>
        </div>
    )
}

export default PartidoXogando

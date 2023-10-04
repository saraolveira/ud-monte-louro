import Partido from "./Partido.jsx"
import UltimoResultado from "./UltimoResultado.jsx"
const UltimosResultados = ({ partidos }) => {
    const resultados = partidos.filter(
        (partido) => partido.estado === "acabado"
    )

    const reversed = resultados.slice().reverse()
    const ultimos = reversed.slice(0, 4)

    return (
        <div className="w-full bg-big-stone-950">
            <h2 className="font-body font-semibold uppercase p-6 bg-fountain-blue-300 text-2xl text-big-stone-950 lg:pl-20 lg:py-8 lg:text-3xl">
                Últimos resultados
            </h2>
            <div className="w-full h-full lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8 2xl:flex">
                {ultimos.map((partido, i) => (
                    <UltimoResultado
                        key={i}
                        local={partido.local}
                        visitante={partido.visitante}
                        logoLocal={partido.logoLocal}
                        logoVisitante={partido.logoVisitante}
                        golesLocal={partido.golesLocal}
                        golesVisitante={partido.golesVisitante}
                        resultado={partido.resultado}
                    />
                ))}
            </div>
        </div>
    )
}

export default UltimosResultados

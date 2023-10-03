import Partido from "./Partido.jsx"
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
            {ultimos.map((partido, i) => (
                <Partido
                    key={i}
                    local={partido.local}
                    visitante={partido.visitante}
                    logoLocal={partido.logoLocal}
                    logoVisitante={partido.logoVisitante}
                    golesLocal={partido.golesLocal}
                    golesVisitante={partido.golesVisitante}
                    resultado={partido.resultado}
                    index={i}
                />
            ))}
        </div>
    )
}

export default UltimosResultados

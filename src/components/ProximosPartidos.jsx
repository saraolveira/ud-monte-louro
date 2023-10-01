import ProximoPartido from "./ProximoPartido.jsx"
const ProximosPartidos = ({ partidos }) => {
    const sinXogar = partidos.filter(
        (partido) => partido.estado === "sin empezar"
    )

    const proximos4 = sinXogar.slice(0, 4)

    console.log(proximos4)

    return (
        <div className="lg:w-4/12 lg:mt-24 bg-big-stone-950">
            <h2 className="font-display font-semibold uppercase  pt-64 pb-4 text-3xl text-center lg:hidden">
                Próximos partidos
            </h2>
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
                />
            ))}
        </div>
    )
}

export default ProximosPartidos

import ProximoPartido from "./ProximoPartido.jsx"
const ProximosPartidos = ({ partidos }) => {
    const sinXogar = partidos.filter(
        (partido) => partido.estado === "sin empezar"
    )

    const proximos4 = sinXogar.slice(0, 4)

    console.log(proximos4)

    return (
        <div className="w-4/12 mt-24 bg-big-stone-950">
            {proximos4.map((partido, i) => (
                <ProximoPartido
                    key={i}
                    local={partido.local}
                    visitante={partido.visitante}
                    campo={partido.campo}
                    data={partido.data}
                    hora={partido.hora}
                    logoLocal={partido.logoLocal}
                    logoVisitante={partido.logoVisitante}
                />
            ))}
        </div>
    )
}

export default ProximosPartidos

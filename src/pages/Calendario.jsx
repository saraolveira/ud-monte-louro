import PartidoCalendario from "../components/PartidoCalendario.jsx"
import PageTransition from "../components/PageTransition.jsx"
const Calendario = ({ partidos }) => {
    const calendario = partidos.filter(
        (partido) => partido.estado === "sin empezar"
    )
    return (
        <>
            <div className="w-full min-h-screen bg-big-stone-950 text-big-stone-100 lg:grid lg:grid-cols-3 lg:gap-12 lg:p-10  2xl:grid-cols-4">
                {calendario.map((partido, i) => (
                    <PartidoCalendario
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
            </div>
            <PageTransition />
        </>
    )
}

export default Calendario

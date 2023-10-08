import PartidoResultado from "../components/PartidoResultado.jsx"
import PageTransition from "../components/PageTransition.jsx"
const Resultados = ({ partidos }) => {
    const resultado = partidos.filter((partido) => partido.estado === "acabado")
    return (
        <>
            <div className="w-full min-h-screen bg-big-stone-950 text-big-stone-100 lg:grid lg:grid-cols-3 lg:gap-12 lg:p-10  2xl:grid-cols-4 ">
                {resultado.map((partido, i) => (
                    <PartidoResultado
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
            <PageTransition />
        </>
    )
}

export default Resultados

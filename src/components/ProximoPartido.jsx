const ProximoPartido = ({
    local,
    visitante,
    camnpo,
    data,
    hora,
    logoLocal,
    logoVisitante,
}) => {
    return (
        <div className="h-1/4 p-2 flex flex-col justify-center items-center gap-0.5 bg-big-stone-900 border border-fountain-blue-300">
            <div className="font-body text-2xl">{data}</div>
            <div className="w-3/4 flex justify-evenly items-center font-display font-black text-6xl ">
                <img
                    className="w-20"
                    src={"equipos/" + logoLocal + ".png"}
                    alt={"logo " + local}
                />
                <div>{hora}</div>
                <img
                    className="w-20"
                    src={"equipos/" + logoVisitante + ".png"}
                    alt={"logo " + visitante}
                />
            </div>
        </div>
    )
}

export default ProximoPartido

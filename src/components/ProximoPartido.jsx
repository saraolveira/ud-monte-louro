const ProximoPartido = ({
    local,
    visitante,
    campo,
    data,
    hora,
    logoLocal,
    logoVisitante,
}) => {
    return (
        <div className="h-1/4  px-2 py-6 flex flex-col justify-evenly items-center bg-big-stone-900 border  border-fountain-blue-300 font-display font-black text-5xl md:py-2 md:text-6xl">
            <div className=" w-full flex justify-evenly items-center md:w-3/4">
                <img
                    className="w-20 md:w-24"
                    src={"equipos/" + logoLocal + ".png"}
                    alt={"logo " + local}
                />
                <div className="flex flex-col items-center">
                    <div className="font-body text-2xl uppercase font-semibold">
                        {data}
                    </div>
                    <div>{hora}</div>
                </div>
                <img
                    className="w-20 md:w-24"
                    src={"equipos/" + logoVisitante + ".png"}
                    alt={"logo " + visitante}
                />
            </div>
            <div className="font-body font-medium text-base text-right">
                {campo}
            </div>
        </div>
    )
}

export default ProximoPartido

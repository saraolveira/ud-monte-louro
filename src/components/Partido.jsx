const Partido = ({
    local,
    visitante,
    campo,
    data,
    hora,
    logoLocal,
    logoVisitante,
    golesLocal,
    golesVisitante,
    resultado,
    className,
}) => {
    return (
        <>
            <div
                className={`w-full flex justify-evenly items-center gap-4 md:w-3/4 ${className}`}
            >
                <img
                    className="w-20 md:w-[5.5rem]"
                    src={"equipos/" + logoLocal + ".png"}
                    alt={"logo " + local}
                />
                <div className="flex flex-col items-center">
                    <div className="font-body text-2xl uppercase font-semibold">
                        {data}
                    </div>
                    {resultado && (
                        <div>
                            {golesLocal} - {golesVisitante}
                        </div>
                    )}
                    <div>{hora}</div>
                </div>
                <img
                    className="w-20 md:w-[5.5rem]"
                    src={"equipos/" + logoVisitante + ".png"}
                    alt={"logo " + visitante}
                />
            </div>
            {campo && (
                <div className="mt-8 font-body font-medium text-base text-right">
                    {campo}
                </div>
            )}
        </>
    )
}

export default Partido

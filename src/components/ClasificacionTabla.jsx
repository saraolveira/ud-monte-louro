import { motion } from "framer-motion"

const ClasificacionTabla = ({ clasificacion }) => {
    return (
        <div className="w-full min-h-screen bg-big-stone-950 text-big-stone-100 pb-4 lg:pb-12">
            <table className="w-full table-auto text-center text-sm lg:text-xl">
                <thead className="bg-fountain-blue-300 text-big-stone-950">
                    <tr>
                        <th className="px-0.5 py-3 lg:p-4">Pos.</th>
                        <th className="text-left px-0.5 py-3 lg:p-4">Equipo</th>
                        <th className="px-0.5 py-3 lg:p-4">PX</th>
                        <th className="px-0.5 py-3 lg:p-4">PG</th>
                        <th className="px-0.5 py-3 lg:p-4">PE</th>
                        <th className="px-0.5 py-3 lg:p-4">PP</th>
                        <th className="px-0.5 py-3 lg:p-4">GF</th>
                        <th className="px-0.5 py-3 lg:p-4">GC</th>
                        <th className="px-0.5 py-3 lg:p-4">PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {clasificacion.map((equipo) => (
                        <motion.tr
                            className={`${
                                equipo.equipo === "U.D. Monte Louro"
                                    ? "bg-big-stone-900 font-bold text-fountain-blue-300"
                                    : ""
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.3 * equipo.numero,
                            }}
                            key={equipo.numero}
                        >
                            <td className="px-0.5 py-3 lg:p-4">
                                {equipo.numero}
                            </td>
                            <td className="text-left px-0.5 py-3 lg:p-4">
                                {equipo.equipo}
                            </td>
                            <td className="px-0.5 py-3 lg:p-4">
                                {equipo.xogados}
                            </td>
                            <td className="px-0.5 py-3 lg:p-4">
                                {equipo.ganados}
                            </td>
                            <td className="px-0.5 py-3 lg:p-4">
                                {equipo.empatados}
                            </td>
                            <td className="px-0.5 py-3 lg:p-4">
                                {equipo.perdidos}
                            </td>
                            <td className="px-0.5 py-3 lg:p-4">
                                {equipo.favor}
                            </td>
                            <td className="px-0.5 py-3 lg:p-4">
                                {equipo.contra}
                            </td>
                            <td className="px-0.5 py-3 lg:p-4">
                                {equipo.puntos}
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClasificacionTabla

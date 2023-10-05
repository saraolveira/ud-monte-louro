import { useState, useEffect } from "react"
import Papa from "papaparse"

const Clasificacion = () => {
    const clasificacionUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIOAMkYx6XyqObShL_kNEQu6vjkWWBd_cXKFEkKLwRCCuc2IU8wamillJ97Fu7YeslBGnDvCeeUz5F/pub?output=csv"
    const [data, setData] = useState({})

    useEffect(() => {
        getClasificacion()
    }, [])

    const getClasificacion = async () => {
        Papa.parse(clasificacionUrl, {
            download: true,
            header: true,
            complete: (results) => {
                setData(results.data)
            },
        })
    }
    const clasificacion = Array.from(data)
    return (
        <div className="w-full p-6 lg:pl-20 lg:py-8">
            <table className="w-full table-auto text-center">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-left">Equipo</th>
                        <th>PX</th>
                        <th>PG</th>
                        <th>PE</th>
                        <th>PP</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {clasificacion.map((equipo) => (
                        <tr>
                            <td>{equipo.numero}</td>
                            <td className="text-left">{equipo.equipo}</td>
                            <td>{equipo.xogados}</td>
                            <td>{equipo.ganados}</td>
                            <td>{equipo.empatados}</td>
                            <td>{equipo.perdidos}</td>
                            <td>{equipo.favor}</td>
                            <td>{equipo.contra}</td>
                            <td>{equipo.puntos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Clasificacion

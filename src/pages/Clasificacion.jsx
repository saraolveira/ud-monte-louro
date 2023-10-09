import ClasificacionTabla from "../components/ClasificacionTabla"
import PageTransition from "../components/PageTransition.jsx"

const Clasificacion = ({ clasificacion }) => {
    return (
        <>
            <ClasificacionTabla clasificacion={clasificacion} />
            <PageTransition />
        </>
    )
}

export default Clasificacion

import Partido from "./Partido.jsx"
const Partidos = ({partidos}) => {
    return (
        <div id="partidos">
            {partidos.map((partido, i) => <Partido key={i} local={partido.Local}/>)}
        </div>
        
    )
}

export default Partidos
import Hero from "../components/Hero.jsx"
import UltimosResultados from "../components/UltimosResultados.jsx"
import PageTransition from "../components/PageTransition.jsx"

const Home = ({ partidos }) => {
    return (
        <>
            <Hero partidos={partidos} />
            <UltimosResultados partidos={partidos} />
            <PageTransition />
        </>
    )
}

export default Home

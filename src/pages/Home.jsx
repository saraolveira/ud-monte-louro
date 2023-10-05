import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import UltimosResultados from "../components/UltimosResultados.jsx"
import Footer from "../components/Footer.jsx"
const Home = ({ partidos }) => {
    return (
        <>
            <Navbar />
            <Hero partidos={partidos} />
            <UltimosResultados partidos={partidos} />
            <Footer />
        </>
    )
}

export default Home

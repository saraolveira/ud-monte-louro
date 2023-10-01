import ProximosPartidos from "./ProximosPartidos.jsx"

const Hero = ({ partidos }) => {
    return (
        <div
            id="hero"
            className="w-full h-screen -mt-24 flex font-body text-big-stone-50 "
        >
            <div className="w-8/12 mt-24 flex flex-col pt-28 pl-36 bg-big-stone-950">
                <h1 className="w-3/4 font-display font-black text-9xl text-fountain-blue-300">
                    U.D. Monte Louro
                </h1>
            </div>
            <ProximosPartidos partidos={partidos} />
        </div>
    )
}

export default Hero

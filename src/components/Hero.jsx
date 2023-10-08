import PartidoXogando from "./PartidoXogando.jsx"
import ProximosPartidos from "./ProximosPartidos.jsx"

const Hero = ({ partidos }) => {
    const live = partidos.filter((partido) => partido.estado === "xogando")
    return (
        <div
            id="hero"
            className="w-full font-body text-big-stone-50 lg:h-screen lg:-mt-24 lg:flex bg-big-stone-950"
        >
            <div className="flex flex-col pt-8 pl-2 pb-64 gap-2 items-center bg-big-stone-950 lg:w-8/12 lg:items-start lg:mt-24 lg:pt-28 lg:pl-20 lg:gap-4">
                <h1 className="w-11/12 font-display font-black text-6xl lg:text-8xl xl:text-9xl 2xl:w-10/12 text-fountain-blue-300">
                    U.D. Monte Louro
                </h1>
                <a
                    href="#"
                    className="group py-2 px-6 mt-8 flex gap-3 bg-monarch-900 rounded-full font-semibold uppercase transition-all duration-500 hover:bg-fountain-blue-300 hover:text-big-stone-950 lg:mt-0"
                >
                    <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-5 h-5 fill-big-stone-50 group-hover:fill-big-stone-950 transition-all duration-500 "
                    >
                        <path d="M256 96c33.08 0 60.71-25.78 64-58 .3-3-3-6-6-6a13 13 0 00-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.21 16.21 0 00-5.3-.9h-.06a5.69 5.69 0 00-5.38 6c3.35 32.16 31 58 64 58z" />
                        <path d="M485.29 89.9L356 44.64a4 4 0 00-5.27 3.16 96 96 0 01-189.38 0 4 4 0 00-5.35-3.16L26.71 89.9A16 16 0 0016.28 108l16.63 88a16 16 0 0013.92 12.9l48.88 5.52a8 8 0 017.1 8.19l-7.33 240.9a16 16 0 009.1 14.94A17.49 17.49 0 00112 480h288a17.49 17.49 0 007.42-1.55 16 16 0 009.1-14.94l-7.33-240.9a8 8 0 017.1-8.19l48.88-5.52a16 16 0 0013.92-12.9l16.63-88a16 16 0 00-10.43-18.1z" />
                    </svg>
                    Encargar camisetas{" "}
                </a>
                <div className="w-11/12 bg-big-stone-950 mt-16 lg:w-6/12">
                    {live.map((partido, i) => (
                        <PartidoXogando
                            key={i}
                            local={partido.local}
                            visitante={partido.visitante}
                            logoLocal={partido.logoLocal}
                            logoVisitante={partido.logoVisitante}
                            golesLocal={partido.golesLocal}
                            golesVisitante={partido.golesVisitante}
                            resultado={partido.estado}
                        />
                    ))}
                </div>
            </div>
            <ProximosPartidos partidos={partidos} />
        </div>
    )
}

export default Hero

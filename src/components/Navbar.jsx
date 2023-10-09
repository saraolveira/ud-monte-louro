import { motion, useCycle } from "framer-motion"
import { MenuToggle } from "./MenuToggle.jsx"
import { Link } from "react-router-dom"
import MenuItem from "./MenuItem.jsx"

const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at calc(100% - 35px) 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: "circle(25px at calc(100% - 35px) 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    }

    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    }
    const dark = {
        open: { opacity: 0 },
        closed: { opacity: 1 },
    }
    const light = {
        open: { opacity: 1 },
        closed: { opacity: 0, transition: { delay: 0.5 } },
    }

    return (
        <header>
            <nav className="relative z-20 h-20 p-3.5 lg:p-8 xl:p-12 flex justify-between items-center bg-big-stone-100 text-big-stone-900 text-l xl:text-xl font-bold font-body">
                <div className="flex gap-3 md:gap-4 lg:gap-6">
                    <Link to="/">
                        <motion.div
                            className="relative"
                            animate={isOpen ? "open" : "closed"}
                        >
                            <motion.img
                                src="/logo.svg"
                                alt="Logo U.D. Monte Louro"
                                className="h-16 z-40"
                                initial={false}
                                variants={dark}
                            />
                            <motion.img
                                src="/logo-white.svg"
                                alt="Logo U.D. Monte Louro negativo"
                                className="absolute top-0 left-0 h-16 z-40"
                                initial={false}
                                variants={light}
                            />
                        </motion.div>
                    </Link>
                    <motion.div
                        className="relative"
                        animate={isOpen ? "open" : "closed"}
                    >
                        <motion.img
                            src="/rfgf.png"
                            alt="Logo Real Federación Galega de Futbol"
                            className="h-16 z-40"
                            initial={false}
                            variants={dark}
                        />
                        <motion.img
                            src="/rfgf-negativo.png"
                            alt="Logo Real Federación Galega de Futbol Negativo"
                            className="absolute top-0 left-0 h-16 z-40"
                            initial={false}
                            variants={light}
                        />
                    </motion.div>
                </div>

                <div className="hidden lg:flex space-x-6">
                    <Link
                        to="/"
                        className="hover:text-fountain-blue-400 transition-colors duration-300"
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/calendario"
                        className="hover:text-fountain-blue-400 transition-colors duration-300"
                    >
                        Calendario
                    </Link>
                    <Link
                        to="/resultados"
                        className="hover:text-fountain-blue-400 transition-colors duration-300"
                    >
                        Resultados
                    </Link>
                    <Link
                        to="/clasificacion"
                        className="hover:text-fountain-blue-400 transition-colors duration-300"
                    >
                        Clasificación
                    </Link>
                    <Link
                        to="/historia"
                        className="hover:text-fountain-blue-400 transition-colors duration-300"
                    >
                        Historia
                    </Link>
                    <Link
                        to="/galeria"
                        className="hover:text-fountain-blue-400 transition-colors duration-300"
                    >
                        Galeria
                    </Link>
                </div>
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className="lg:hidden"
                >
                    <motion.div
                        className={`top-0 right-0 w-full h-screen bg-big-stone-900 ${
                            isOpen ? "fixed" : "absolute"
                        }`}
                        variants={sidebar}
                    />
                    <motion.div
                        variants={variants}
                        className="fixed top-0 right-0 w-full h-screen pt-24 pr-6 flex flex-col items-end gap-4 text-big-stone-100 text-3xl"
                    >
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/"
                            text="Inicio"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/calendario"
                            text="Calendario"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/resultados"
                            text="Resultados"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/clasificacion"
                            text="Clasificación"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/historia"
                            text="Historia"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/galeria"
                            text="Galeria"
                        />
                    </motion.div>
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.div>
            </nav>
        </header>
    )
}

export default Navbar

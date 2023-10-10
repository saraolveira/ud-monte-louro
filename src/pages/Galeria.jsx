import { useState } from "react"
const Galeria = () => {
    const [slide, setSlide] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const images = [
        { img: "/partidos/louro-cabana-1.jpg", alt: "" },
        { img: "/partidos/louro-cabana-2.jpg", alt: "" },
        { img: "/partidos/volantes-louro-1.jpg", alt: "" },
        { img: "/partidos/volantes-louro-2.jpg", alt: "" },
        { img: "/partidos/volantes-louro-3.jpg", alt: "" },
        { img: "/partidos/louro-muros-1.jpg", alt: "" },
        { img: "/partidos/louro-muros-2.jpg", alt: "" },
        { img: "/partidos/louro-muros-3.jpg", alt: "" },
    ]

    const handleOpenModal = (i) => {
        setSlide(i)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handlePrevious = () => {
        if (slide === 0) {
            setSlide(images.length - 1)
        } else {
            setSlide(slide - 1)
        }
    }

    const handleNext = () => {
        if (images.length - 1 === slide) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }

    return (
        <div
            className={`w-full min-h-[calc(100vh-5rem)] bg-big-stone-950  ${
                openModal ? "pt-6 lg:p-4" : "p-6 lg:p-20 "
            }`}
        >
            {openModal && (
                <div className="text-fountain-blue-300 flex justify-evenly items-center gap-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-14 h-14 cursor-pointer transition-colors duration-300 hover:text-monarch-900"
                        onClick={handlePrevious}
                    >
                        <path
                            fillRule="evenodd"
                            d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <div className="flex items-center justify-center">
                        <img
                            src={images[slide].img}
                            alt=""
                            className="lg:h-[calc(100vh-8rem)] select-none"
                        />
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-14 h-14 cursor-pointer transition-colors duration-300 hover:text-monarch-900"
                        onClick={handleNext}
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            )}
            <div
                className={`grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 ${
                    openModal ? "hidden" : "grid"
                }`}
            >
                {images.map((image, i) => (
                    <div
                        key={i}
                        className="cursor-pointer w-full"
                        onClick={() => handleOpenModal(i)}
                    >
                        <img
                            className="max-w-full select-none transition-all duration-300 hover:scale-105"
                            src={image.img}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Galeria

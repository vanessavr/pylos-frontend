'use client'

import './index.css'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Logo } from '../../components/Logo'
import Link from 'next/link'
import { Isotipo } from '@/app/components/Isotipo'
import { MAPA_ROUTE } from '@/utils/routes'
import { reproducirParte } from '@/lib/actions'

function App() {
    const [activePhoto, setActivePhoto] = useState<number>(0) // Índice de la foto activa
    const [disabledLeftButton, setDisabledLeftButton] = useState<boolean>(false)
    const [disabledRightButton, setDisabledRightButton] = useState<boolean>(false)
    const [showOverlay, setShowOverlay] = useState(true)
    const [hoverClass, setHoverClass] = useState<string>('lg:peer-hover/previous:card--to-left lg:peer-hover/next:card--to-right') // Estado para almacenar temporalmente las clases de hover

    const photosData = [
        {
            id: 'first',
            title: 'First Photo',
            img: '/_e351e41b-efe7-4e59-8ce8-91fbbbd0db45.jpeg',
            date: '4 de abril de 2250',
            text: 'En la actualidad, los viajes espaciales permiten a las personas explorar planetas lejanos.  Imagina a un valiente astronauta al que llamaremos Pylonauta, quien está muy emocionado por descubrir un nuevo mundo llamado Ánfora. <br /> Él parte en su nave espacial, <strong>"NEBULÓN"</strong>, listo para la aventura.',
        },
        {
            id: 'second',
            title: 'Second Photo',
            img: '/_08026eb5-f13f-44f9-8a54-96e796383a0e.jpeg',
            date: '5 de abril de 2250',
            text: 'El viaje de Pylonauta está lleno de emoción, pero justo cuando se acerca a Ánfora, una tormenta espacial inesperada aparece. La nave es sacudida violentamente y Pylonauta pierde el control.',
        },
        {
            id: 'third',
            title: 'Third Photo',
            img: '/_56f5d894-b46b-4294-81d6-17e64e549f11.jpeg',
            date: '5 de abril de 2250',
            text: 'Con un estruendo ensordecedor, "NEBULÓN" se estrella contra la superficie del planeta desconocido. Afortunadamente, Pylonauta sale ileso, pero su nave está seriamente dañada y él se encuentra varado en un mundo extraño.',
        },
        {
            id: 'fourth',
            title: 'Fourth Photo',
            img: '/_2cb2a853-5270-4b83-a92d-9c804ad40b48.jpeg',
            date: '5 de abril de 2250',
            text: 'Decidido a encontrar una solución, Pylonauta comienza a explorar Ánfora y pronto descubre que no está solo. Encuentra unas misteriosas pistas que indican que puede reparar su nave, pero primero debe superar una prueba en el antiguo Templo Alameda del Conocimiento.',
        },
        {
            id: 'fifth',
            title: 'Fifth Photo',
            img: '/_7ff3ae87-8440-4e2e-9599-8262eb0edf5b.jpeg',
            date: '5 de abril de 2250',
            text: 'Este templo legendario guarda las herramientas necesarias para reparar la nave, pero solo los más valientes y astutos podrán obtenerlas. El Templo Alameda del Conocimiento está lleno de desafíos y enigmas que desafían la mente de Pylonauta.',
        },
        {
            id: 'sixth',
            title: 'Sixth Photo',
            img: '/_eb17826d-286f-4c61-9250-a88dcdea07a8.jpeg',
            date: '5 de abril de 2250',
            text: 'Sin embargo, con determinación y coraje, él se enfrenta a cada obstáculo con valentía. Está decidido a reparar su nave y regresar a casa, sin importar cuán difíciles sean las pruebas que enfrenta.',
        },
    ]

    const audioHistoriaEpica = '/historia_epica.mp3'
    const audioBienvenida = '/bienvenida.mp3'

    // Función para avanzar/retroceder la foto
    const nextPhoto = () => {
        handleHoverChange('')
        setDisabledRightButton(true)
        setDisabledLeftButton(true)

        setActivePhoto((prev) => {
            // Obtener los párrafos de la foto activa
            const nuevoIndice = (prev + 1 + photosData.length) % photosData.length

            // Calcular el nuevo índice de la foto activa
            return nuevoIndice
        })

        if (activePhoto == 0) {
            reproducirParte(21, 36, audioHistoriaEpica)
        } else if (activePhoto == 1) {
            reproducirParte(35, 51, audioHistoriaEpica)
        } else if (activePhoto == 2) {
            reproducirParte(51, 67.5, audioHistoriaEpica)
        } else if (activePhoto == 3) {
            reproducirParte(67.5, 82, audioHistoriaEpica)
        } else if (activePhoto == 4) {
            reproducirParte(82, 99, audioHistoriaEpica)
        }
    }

    const previousPhoto = () => {
        handleHoverChange('')
        setDisabledRightButton(true)
        setDisabledLeftButton(true)

        setActivePhoto((prev) => {
            const nuevoIndice = (prev - 1 + photosData.length) % photosData.length

            // Calcular el nuevo índice de la foto activa
            return nuevoIndice
        })
    }

    // Función para manejar el cambio de clases de hover
    const handleHoverChange = (newClass: string) => {
        setHoverClass(newClass)
        setTimeout(() => {
            setHoverClass('lg:peer-hover/previous:card--to-left lg:peer-hover/next:card--to-right')
            setDisabledRightButton(false)
            setDisabledLeftButton(false)
        }, 15000) // Duración de la eliminación temporal de las clases de hover
    }

    const init = () => {
        reproducirParte(0, 2, audioBienvenida)

        setTimeout(() => {
            setShowOverlay(false)
            reproducirParte(0, 21.3, audioHistoriaEpica)
        }, 3000)
    }

    useEffect(() => {
        if (activePhoto == 0) {
            setDisabledLeftButton(true)
        }
    }, [])

    return (
        <div className="grid">
            {showOverlay && (
                <div className="overlay flex flex-col items-center justify-center">
                    <div className="flex gap-2 items-center justify-center mx-10">
                        <Isotipo className="w-56" />
                        <Logo className="w-80 md:w-full text-white" />
                    </div>
                    <button
                        onClick={init}
                        className="py-4 px-16 mt-20 font-bold rounded-full text-3xl border-8 border-sky-200 transition-colors text-sky-200 hover:border-sky-200/50 hover:text-sky-200/50">
                        Empezar
                    </button>
                </div>
            )}

            <div className="lg:grid lg:grid-cols-2 place-items-center flex items-center justify-center h-screen overflow-hidden bg-[url('/fondo-introduccion.webp')] bg-cover bg-center [perspective:500px]">
                <div className="peer/previous blob-left group relative bottom-[40vh] right-[6rem] lg:bottom-0 lg:right-0 lg:flex lg:h-full lg:w-full md:items-center md:pb-0 lg:mr-[22rem]">
                    <ActionButton
                        direction="left"
                        text="Foto anterior"
                        onClick={previousPhoto}
                        disabled={disabledLeftButton}
                    />
                </div>
                <div className="peer/next blob-right group relative bottom-[40vh] -right-[6rem] lg:bottom-0 lg:right-0 lg:flex lg:h-full lg:w-full md:items-center md:pb-0 lg:ml-[22rem]">
                    {activePhoto != 4 ? (
                        <ActionButton
                            direction="right"
                            text="Siguiente foto"
                            onClick={nextPhoto}
                            disabled={disabledRightButton}
                        />
                    ) : (
                        <Link
                            href={MAPA_ROUTE}
                            className={twMerge(
                                'button-underline relative flex w-full items-center justify-center font-bold text-[rgba(0,0,0,.6)] transition-[transform,color] duration-500 focus-visible:text-white group-hover:text-white lg:text-2xl xl:text-4xl',
                            )}>
                            Continuar
                        </Link>
                    )}
                </div>

                <Photo
                    img={photosData[activePhoto].img}
                    date={photosData[activePhoto].date}
                    text={photosData[activePhoto].text}
                    className={twMerge(
                        'z-10', // La foto activa tiene una elevación z-10 para estar por encima de las demás
                        hoverClass,
                    )}
                    title={photosData[activePhoto].title}
                />

                <p className="absolute text-2xl z-[9999] bottom-20 px-10">
                    <mark
                        className="bg-pylos-200"
                        dangerouslySetInnerHTML={{ __html: photosData[activePhoto].text }}></mark>
                </p>
            </div>
        </div>
    )
}

const Photo = ({ className, title, date, img, text, zIndex }: { className?: string; title?: string; date: string; img: string; text?: string; zIndex?: number }) => {
    return (
        <div
            style={{ zIndex: zIndex }}
            className={twMerge(
                'pointer-events-none absolute grid aspect-[3/4] w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[45vw] 2xl:w-[25vw] transition-transform duration-1000 [transform-style:preserve-3d]',
                className,
            )}>
            <div className="pointer-events-none rounded-3xl bg-gray-300 [grid-area:1/1] [transform-style:preserve-3d] [backface-visibility:hidden] [transform:translateZ(-5px)] md:-mb-[5px] md:-mt-[5px] md:[transform:translateZ(-10px)]" />
            <div className="pointer-events-none absolute flex h-full w-full flex-col items-start rounded-3xl bg-gray-100 p-8 shadow-2xl [grid-area:1/1]">
                <p className="mb-2 rounded-full bg-blue-400 px-5 py-1 text-xs text-white md:text-sm">{date}</p>

                <picture>
                    <img
                        src={img}
                        alt=""
                        className="rounded-md"
                    />
                </picture>
            </div>
            <div className="pointer-events-none rounded-3xl bg-white [grid-area:1/1] [backface-visibility:hidden] [transform:rotateY(180deg)]" />
        </div>
    )
}

const ActionButton = ({ onClick, direction, text, disabled }: { onClick?: () => void; direction: 'left' | 'right'; text: string; disabled: boolean }) => (
    <button
        disabled={disabled ? true : undefined}
        onClick={onClick}
        className={twMerge(
            'relative flex w-full items-center justify-center font-bold text-white transition-[transform,color] duration-500 focus-visible:text-white group-hover:text-white lg:text-2xl xl:text-4xl',
            direction === 'right' && 'focus-visible:translate-x-8 lg:group-hover:translate-x-8',
            direction === 'left' && 'focus-visible:-translate-x-8 lg:group-hover:-translate-x-8',
            disabled ? 'opacity-20' : 'opacity-100',
        )}>
        <span className={twMerge('button-underline relative block', direction === 'right' && '[--from:-30px] [--to:0px]', direction === 'left' && '[--from:0] [--to:-30px]')}>{text}</span>
    </button>
)

export default App

import Image from 'next/image'
import Link from 'next/link'
import { LOGIN_ROUTE, REGISTER_ROUTE } from '@/utils/routes'

export default function EmpezarAventuraPage() {
    return (
        <>
            <div className="lg:max-w-5xl w-full mx-auto text-left mt-20 lg:mt-0 grow flex flex-col items-center justify-center gap-y-10 relative mb-20">
                <div>
                    <h1 className="text-8xl text-center font-bold uppercase text-white">Empezar la aventura</h1>
                </div>

                <div className="flex flex-col gap-y-4 items-center justify-center lg:justify-start my-10 lg:my-0">
                    <Link
                        href={REGISTER_ROUTE}
                        className="py-4 px-16 font-bold uppercase rounded-full bg-primary hover:bg-primary/90 text-white">
                        Registro
                    </Link>

                    <Link
                        href={LOGIN_ROUTE}
                        className="py-4 px-16 font-bold uppercase rounded-full bg-secondary hover:bg-secondary/90 text-white">
                        Ingreso
                    </Link>
                </div>
            </div>

            <div>
                <Image
                    src="/anfora.webp"
                    alt="Planeta Ánfora"
                    width={240}
                    height={40}
                    className="object-contain absolute md:bottom-52 md:left-[14%] 2xl:bottom-40 2xl:left-[30%] -z-[1]"
                />
                <Image
                    src="/planeta2.webp"
                    alt=""
                    width={240}
                    height={40}
                    className="object-contain absolute md:top-16 md:right-[15%] 2xl:top-32 2xl:right-[38%] -z-[1]"
                />
                <Image
                    src="/planeta3.webp"
                    alt=""
                    width={240}
                    height={40}
                    className="object-contain absolute md:bottom-60 md:right-[14%] 2xl:bottom-60 2xl:right-[30%] -z-[1]"
                />
                <Image
                    src="/planeta4.webp"
                    alt=""
                    width={240}
                    height={40}
                    className="object-contain absolute md:bottom-10 md:left-[41%] 2xl:bottom-10 2xl:left-[45%] -z-[1]"
                />
                <Image
                    src="/planeta5.webp"
                    alt=""
                    width={240}
                    height={40}
                    className="object-contain absolute md:top-14 md:left-[22%] 2xl:top-40 2xl:left-[30%] -z-[1]"
                />
            </div>
        </>
    )
}

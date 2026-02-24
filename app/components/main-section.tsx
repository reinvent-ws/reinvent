import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HeaderMain } from "./header-main"
import { faArrowUpRightDots, faBezierCurve, faCode } from "@fortawesome/free-solid-svg-icons"
import { faLightbulb } from "@fortawesome/free-regular-svg-icons"
// import photo_garage from './../../public/photo-garage-back.jpeg'

import { Kanit, Playfair_Display } from 'next/font/google'
const fontStyle = Kanit( {weight: '400', subsets: ['latin']} )
const fontStyle2 = Playfair_Display( {weight: '400', subsets: ['latin']} )

export const MainSection = (() => {
    return (
        // <section className={`relative flex bg-no-repeat bg-cover bg-left min-h-screen flex-col items-center bg-linear-to-tl from-gray-500 to-[#1a1a1a]`}>
        <section className={`relative flex bg-no-repeat min-h-screen flex-col items-center bg-[url(https://images.unsplash.com/photo-1771533680002-5210c217a16f?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-local bg-cover bg-center`}>
            <div className={`relative flex-col flex-1 gap-24 max-sm:px-[20px] max-lg:px-[60px] px-[200px] py-10 w-full text-sm lg:flex overflow-hidden backdrop-blur-3xl text-white bg-no-repeat bg-center-top bg-auto`}>
            <HeaderMain />
            <div className={`${fontStyle.className} flex-1 flex flex-col gap-8 flex-wrap justify-center items-center`}>
                <p className={`text-[30px] pb-20 border border-transparent border-b-white/50 font-black`}>Criamos produtos digitais.</p>
                <p className={`w-[800px] h-fit text-[30px] text-center pt-20 font-extralight`}>Sua marca, seu produto, sua grande ideia... vale a pena investir. Acreditamos em criar oportunidades para marcas de elite, startups ousadas e inovadores apaixonados mudarem o mundo.</p>
                <div className="flex w-full justify-between pt-60">
                    <section className='flex flex-col justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faLightbulb} size='2xl'/>
                        <p className="font-extralight">IDÉIA</p>
                    </section>
                    <section className='flex flex-col justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faBezierCurve} size='2xl'/>
                        <p className="font-extralight">DESIGN</p>
                    </section>
                    <section className='flex flex-col justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faCode} size='2xl'/>
                        <p className="font-extralight">DESENVOLVIMENTO</p>
                    </section>
                    <section className='flex flex-col justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faArrowUpRightDots} size='2xl'/>
                        <p className="font-extralight">SUCESSO</p>
                    </section>
                </div>
            </div>
            </div>
        </section>
    )
})
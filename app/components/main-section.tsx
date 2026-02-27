import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HeaderMain } from "./header-main"
import { faArrowTrendUp, faBezierCurve, faCode } from "@fortawesome/free-solid-svg-icons"
import { faLightbulb } from "@fortawesome/free-regular-svg-icons"
import Image from "next/image"

import { Kanit, Michroma } from 'next/font/google'
const kanit = Kanit( {weight: '400', subsets: ['latin']} )
const michroma = Michroma( {weight: '400', subsets: ['latin']} )

export const MainSection = (() => {
    const sections = [
        {icon: faLightbulb, text: 'IDÉIA'},
        {icon: faBezierCurve, text: 'DESIGN'},
        {icon: faCode, text: 'DESENVOLVIMENTO'},
        {icon: faArrowTrendUp, text: 'SUCESSO'},
    ]

    return (
        <section className={`relative flex bg-no-repeat min-h-screen flex-col items-center bg-[url(https://basicappleguy.com/s/F03_Mac.png)] bg-cover bg-center`}>
            <div className={`relative flex-col flex-1 gap-24 max-sm:px-[20px] max-lg:px-[60px] px-[200px] py-10 w-full text-sm lg:flex overflow-hidden backdrop-blur-xl text-white bg-no-repeat bg-center-top bg-auto`}>
            <HeaderMain />
            <div className='flex-1 flex flex-col gap-8 flex-wrap justify-center items-center text-[#ddd]'>
                <p className={`${kanit.className} text-[30px]`}>Criamos produtos digitais.</p>
                <Image
                    src='https://static.thenounproject.com/png/924527-200.png'
                    width={80}
                    height={80}
                    alt=''
                    className="invert"
                />
                <p className={`w-[800px] h-fit text-[30px] text-center font-extralight`}>Sua marca, seu produto, sua grande idéia... vale a pena investir. Acreditamos em criar oportunidades para marcas de elite, startups ousadas e inovadores apaixonados mudarem o mundo.</p>
                <div className="flex w-full justify-between pt-60">
                    {
                        sections.map((section, idx) => (
                            <section key={idx} className='flex flex-col justify-center items-center gap-4'>
                                <FontAwesomeIcon icon={section.icon} size='2xl' className="border border-transparent border-b-white pb-4"/>
                                <p className={`${michroma.className}`}>{section.text}</p>
                            </section>
                        ))
                    }
                </div>
            </div>
            </div>
        </section>
    )
})
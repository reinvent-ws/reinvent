import { sectorsCard } from "../lists/all-lists"
import { HeaderMain } from "./header-main"
import { SectorCard } from "./sector-card"

import { Kanit } from 'next/font/google'
const kanit = Kanit( {weight: '400', subsets: ['latin']} )

export const ServicesSection = (() => {

    const img: any = 'https://basicappleguy.com/s/F01_Mac.png'

    return (
        <section className={`relative flex bg-no-repeat min-h-screen flex-col items-center bg-[url(${img})] bg-cover bg-center rotate-180`}>
            <div className={`relative flex-col flex-1 gap-24 max-sm:px-[20px] max-lg:px-[60px] px-[200px] py-10 w-full text-sm backdrop-blur-xl lg:flex items-center overflow-hidden text-white bg-no-repeat bg-center-top bg-auto rotate-180`}>
                <HeaderMain />
                <section className="w-full flex flex-col gap-8">
                    <div className={`${kanit.className} text-[20px] flex gap-10`}>
                        <p>SERVIÇOS</p>
                        <p>|</p>
                        <p>Criamos experiências digitais incríveis.</p>
                    </div>
                    <p className={`w-full h-fit text-[20px] text-justify font-extralight`}>
                        Ajudamos organizações a aprimorarem radicalmente seus websites e a criarem novos e empolgantes produtos digitais. Combinamos uma abordagem enxuta exclusiva com nosso conhecimento do comportamento humano e os princípios do design centrado no usuário.
                    </p>
                </section>
                <section className="flex-1 flex items-center justify-center gap-8 flex-wrap">
                    {sectorsCard.map((str) => (
                    <SectorCard 
                        role={str.role}
                        job_img={str.job_img}
                        domains={str.domain}
                        open_menu={str.open_menu}
                    />
                    ))}
                </section>
            </div>
        </section>
    )
})
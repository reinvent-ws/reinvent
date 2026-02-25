import { sectorsCard } from "../lists/all-lists"
import { HeaderMain } from "./header-main"
import { SectorCard } from "./sector-card"

export const ServicesSection = (() => {

    const img: any = ''

    return (
        // <section className={`relative flex bg-no-repeat bg-cover bg-left min-h-screen flex-col items-center bg-linear-to-tl from-gray-500 to-[#1a1a1a]`}>
        <section className={`relative flex bg-no-repeat min-h-screen flex-col items-center bg-[url(https://images.unsplash.com/photo-1768286812234-4040b7c12cc6?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center`}>
            <div className={`relative flex-col flex-1 gap-24 max-sm:px-[20px] max-lg:px-[60px] px-[200px] py-10 w-full text-sm lg:flex overflow-hidden backdrop-blur-3xl text-white bg-no-repeat bg-center-top bg-auto`}>
            <HeaderMain />
            <div className="flex-1 flex items-center justify-between gap-8 flex-wrap">
                {sectorsCard.map((str) => (
                <SectorCard 
                    role={str.role}
                    job_img={str.job_img}
                    domains={str.domain}
                    open_menu={str.open_menu}
                />
                ))}
            </div>
            </div>
        </section>
    )
})
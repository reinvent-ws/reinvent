import { useEffect, useState } from "react"
import { HeaderMain } from "./header-main"
import { SectorCard } from "./sector-card"
import { SixThreeNineSection } from "./six-three-nine-section"
import axios from 'axios'
import "../../app/globals.css";

import { Kanit } from 'next/font/google'
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const kanit = Kanit( {weight: '400', subsets: ['latin']} )

export const ServicesSection = (() => {
    const [data, setData] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState(null)


    useEffect (() =>{
        const fetchData = async () => {
            try {
                const response: any = await axios.get('http://localhost:3333/sectors-card')
                setData(response.data)
                setLoading(false)
            } catch(err: any) {    
                setError(err.message)
                setData([])
            } finally {
                setLoading(false)
            }
        };
        setLoading(true)
        fetchData()
    }, [])

    // if (loading) return <div>Loading...</div>
    // if (error) return <div>Error: {error}</div>
    // if (!data) return <div>No data found</div>

    return (
        <section className={`relative flex bg-no-repeat min-h-screen flex-col items-center bg-[url(https://images.unsplash.com/photo-1543946602-a0fce8117697?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center`}>
            <div className={`relative flex-col flex-1 gap-24 max-sm:px-[20px] max-lg:px-[60px] px-[200px] py-10 w-full text-sm lg:flex items-center overflow-hidden text-white bg-no-repeat bg-center-top bg-auto`}>
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
                <section
                    className="floating-scrollbar flex overflow-auto w-full snap-x snap-proximity items-center gap-8"
                >
                    {data.map((str: any) => (
                        <SixThreeNineSection
                            role={str.role}
                            job_img={str.job_img}
                            open_menu={str.open_menu}
                        />
                    ))}
                </section>
                <section className="flex justify-end w-full bg-orange-400">
                    <FontAwesomeIcon icon={faAnglesRight} size="xl" bounce/>
                </section>
            </div>
        </section>
    )
})
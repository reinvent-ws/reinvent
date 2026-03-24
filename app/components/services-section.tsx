import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { HeaderMain } from "./header-main"
import { SectorCard } from "./sector-card"
import { SixThreeNineSection } from "./six-three-nine-section"
import axios from 'axios'
import "../../app/globals.css";

import { Kanit } from 'next/font/google'
const kanit = Kanit( {weight: '400', subsets: ['latin']} )

export const ServicesSection = (() => {
    const [data, setData] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState(null)
    const horizontalScrollRef = useRef<HTMLElement>(null)

    // #region agent log
    useLayoutEffect(() => {
        const el = horizontalScrollRef.current
        if (!el) return
        const parent = el.parentElement
        const cs = getComputedStyle(el)
        const pcs = parent ? getComputedStyle(parent) : null
        fetch("http://127.0.0.1:7242/ingest/47163c33-151b-4c54-ba21-b91ac1d81639", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                location: "services-section.tsx:useLayoutEffect",
                message: "horizontal scroll container metrics",
                data: {
                    hypothesisId: "multi",
                    H1_itemsCenterShrinkWrap:
                        pcs?.alignItems === "center" && el.clientWidth >= el.scrollWidth - 1,
                    H2_parentColBasisFullHeight:
                        pcs?.flexDirection?.includes("column") === true &&
                        cs.flexBasis === "100%",
                    scrollClientW: el.clientWidth,
                    scrollScrollW: el.scrollWidth,
                    hasHorizontalOverflow: el.scrollWidth > el.clientWidth,
                    parentClientW: parent?.clientWidth ?? null,
                    parentAlignItems: pcs?.alignItems ?? null,
                    selfWidthCss: cs.width,
                    selfFlexBasis: cs.flexBasis,
                    selfAlignSelf: cs.alignSelf,
                    dataLength: Array.isArray(data) ? data.length : -1,
                },
                timestamp: Date.now(),
            }),
        }).catch(() => {})
    }, [data, loading])
    // #endregion

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
        <section className={`relative flex bg-no-repeat min-h-screen flex-col items-center bg-[url(https://images.unsplash.com/photo-1585481254322-616faaab4d2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center rotate-180`}>
            <div className={`relative flex-col flex-1 gap-24 max-sm:px-[20px] max-lg:px-[60px] px-[200px] py-10 w-full text-sm backdrop-blur-3xl lg:flex items-center overflow-hidden text-white bg-no-repeat bg-center-top bg-auto rotate-180`}>
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
                    ref={horizontalScrollRef}
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
            </div>
        </section>
    )
})
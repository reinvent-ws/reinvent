import { ElementType, ReactNode } from "react"

interface GeneralSectionProps {
    section: ElementType
    idx: number
}

export const GeneralSection = (({section: Section, idx}: GeneralSectionProps) => {
    return (
        <section key={idx} className='section'>
            <Section />
        </section>
    )
})
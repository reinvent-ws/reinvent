import { ElementType } from "react"

export interface PropDomains {
    domain: string,
    icon: string,
    description: string
}

export type PropSectorCard = {
    role: string,
    job_img: any,
    gradFrom: ElementType | any,
    gradTo: ElementType | any,
    domains: PropDomains[]
}
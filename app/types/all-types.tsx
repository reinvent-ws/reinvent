export interface DomainsProp {
    domain: string,
    icon: any,
    color?: string,
    description: string
}

export type SectorCardProp = {
    role: string,
    job_img: any,
    domains?: DomainsProp[]
    open_menu: boolean
}
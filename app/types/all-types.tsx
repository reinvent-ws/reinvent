export interface PropDomains {
    domain: string,
    icon: any,
    description: string
}

export type PropSectorCard = {
    role: string,
    job_img?: any,
    domains: PropDomains[]
    open_menu: boolean
}
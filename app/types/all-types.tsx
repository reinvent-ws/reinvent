export interface PropDomains {
    domain: string,
    icon: string,
    description: string
}

export type PropSectorCard = {
    role: string,
    job_img: string,
    gradFrom: string,
    gradTo: string,
    domains: PropDomains[]
}
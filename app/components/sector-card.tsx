import Image from 'next/image'
import { SectorCardProp } from '../types/all-types'

import { Wire_One } from 'next/font/google'
const wireone = Wire_One( {weight: '400', subsets: ['latin']} )

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react'
import { MiniMenu } from './mini-menu'
import axios from 'axios'
import { ServiceProps } from '../backend/types'

export const SectorCard = (({role, job_img, domains, open_menu}: SectorCardProp) => {
    const [domain, setDomain] = useState<[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3333/services')
                setDomain(response.data)
            } catch(err: any) {
                console.log(err)
            }

        }
        fetchData()

    }, [])

    const [openMiniMenu, setOpenMiniMenu] = useState<boolean>(open_menu)

    const styleIconsAside = 'w-[37.5px] h-[37.5px] flex border border-transparent flex items-center justify-center bg-[#ffffff20] cursor-pointer hover:text-white duration-300 ease-in-out'
    const styleIcons = 'w-[37.5px] h-[37.5px] flex border border-transparent flex items-center justify-center bg-[#ffffff20] cursor-pointer'

    return (
        <section className='flex w-fit h-[400px] border border-white/5 overflow-hidden shadow-xl rounded-tl-xl rounded-bl-xl'>
            <div className="relative w-[145px] bg-[#00000025] backdrop-blur-3xl z-9">
                <p className={`${wireone.className} absolute -right-[30px] top-4 text-right text-[40px] text-[#ffffff] text-shadow-lg leading-14 font-black`}>{role}</p>
            </div>
            <div className={`relative flex w-[495px] bg-[#00000050] z-0`}>
                <div className="relative p-4 flex-1">
                    <Image
                        src={job_img}
                        alt=''
                        width={260}
                        height={260}
                        className='absolute bottom-4 left-10 grayscale opacity-15'
                    />
                    <div className="absolute -bottom-[29%] left-0 h-[175px] border-transparent flex gap-[20px] w-full cursor-pointer z-9">
                        {domain.map((domain: ServiceProps, idx) => (
                            (domain.domain == role) && 
                            <section key={idx} className={`group/item relative h-[300px] text-[10px] -top-5 -left-12 hover:-top-25 hover:left-[32px] duration-300 ease-in-out rotate-45 rounded-t-full overflow-hidden border border-white/25 bg-[#ffffff25] backdrop-blur-3xl`}>
                                <Image
                                    src={domain.url}
                                    alt=''
                                    width={32}
                                    height={32}
                                    className={`relative ${(domain.name_service == 'Express' || domain.name_service == 'Figma'|| domain.name_service == 'Corel Draw') && 'top-[6px] p-[2px]'} grayscale group-hover/item:grayscale-0 group-hover/item:-rotate-90 duration-300 ease-in-out`}
                                />
                                <p className='absolute top-[30%] left-[50%] -translate-[50%] text-white/75 -rotate-90 tracking-widest'>{domain.name_service.toUpperCase()}</p>
                            </section>
                        ))}
                    </div>
                </div>
                <div className='border border-transparent border-l-[#ffffff25] flex flex-col justify-between text-white/50 z-0'>
                    <div
                        className={`relative ${styleIcons} border-b-[#ffffff25] cursor-pointer`}
                        onClick={() => setOpenMiniMenu(!openMiniMenu)}
                    >
                        {openMiniMenu ?
                        <FontAwesomeIcon icon={faAngleDown} size='sm' className='hover:text-white duration-300 easy-in-out'/>
                        :
                        <>
                            <FontAwesomeIcon
                                icon={faAngleUp}
                                size='sm'
                                className='hover:text-white duration-300 easy-in-out'
                            />
                            <MiniMenu />
                        </>
                        }
                    </div>
                    <div>
                        <div className={`${styleIconsAside} border-t-[#ffffff25] text-white/15`}>
                            <FontAwesomeIcon icon={faAngleLeft} size='sm'/>
                        </div>
                        <div className={`${styleIconsAside} border-t-[#ffffff25]`}>
                            <FontAwesomeIcon icon={faAngleRight} size='sm'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
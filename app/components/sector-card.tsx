import Image from 'next/image'
import { SectorCardProp } from '../types/all-types'

import { Wire_One } from 'next/font/google'
const wireone = Wire_One( {weight: '400', subsets: ['latin']} )

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
import { MiniMenu } from './mini-menu'

export const SectorCard = (({role, job_img, domains, open_menu}: SectorCardProp) => {

    const [openMiniMenu, setOpenMiniMenu] = useState<boolean>(open_menu)

    const styleIconsAside = 'w-[37.5px] h-[37.5px] flex border border-transparent flex items-center justify-center bg-[#ffffff20] cursor-pointer hover:text-white duration-300 ease-in-out'
    const styleIcons = 'w-[37.5px] h-[37.5px] flex border border-transparent flex items-center justify-center bg-[#ffffff20] cursor-pointer'

    return (
        <section className='flex w-fit h-[400px] border-white/2.5 overflow-hidden shadow-xl rounded-tl-xl rounded-bl-xl'>
            <div className="relative w-[145px] bg-[#00000060]">
                <p className={`${wireone.className} absolute -right-[30px] top-4 text-right text-[40px] text-[#ffffff] text-shadow-lg leading-14 font-black`}>{role}</p>
            </div>
            <div className={`flex w-[495px] bg-[#2f2f2f]`}>
                <div className="relative p-4 flex-1 overflow-hidden">
                    <Image
                        src={job_img}
                        alt=''
                        width={260}
                        height={260}
                        className='absolute bottom-4 left-10 grayscale opacity-15'
                    />
                    {/* <div className="absolute bottom-0 left-0 w-full h-[75.6px] border-transparent border-[1px] border-t-white/25 backdrop-blur flex p-4 gap-2">
                        {domains.map((domain, idx) => (
                            <section key={idx} className='w-fit h-full flex flex-1 gap-1 flex-col justify-center text-[9px]'>
                                <div className='flex gap-1 items-center'>
                                    <Image
                                        src={domain.icon}
                                        alt=''
                                        width={20}
                                        height={20}
                                        className='rounded hover:grayscale-none ease-in transition-[0.2s]'
                                    />
                                    <p className='text-shadow-sm'>{domain.domain}</p>
                                </div>
                                <p className='font-extralight'>{domain.description}</p>
                            </section>
                        ))}
                    </div> */}
                    <div className="absolute -bottom-[29%] left-0 h-[175px] border-transparent flex gap-[20px] w-full cursor-pointer">
                        {domains.map((domain, idx) => (
                            <section key={idx} className={`group/item relative h-[300px] text-[10px] -top-5 -left-12 hover:-top-25 hover:left-[32px] duration-300 ease-in-out rotate-45 rounded-t-full overflow-hidden border border-white/25 bg-white/10 backdrop-blur-lg`}>
                                <Image
                                    src={domain.icon}
                                    alt=''
                                    width={32}
                                    height={32}
                                    className={`relative ${(domain.domain == 'Express' || domain.domain == 'Figma'|| domain.domain == 'Corel Draw') && 'top-[6px] p-[2px]'} grayscale group-hover/item:grayscale-0 group-hover/item:-rotate-90 duration-300 ease-in-out`}
                                />
                                <p className='absolute top-[30%] left-[50%] -translate-[50%] text-white/75 -rotate-90 tracking-widest'>{domain.domain.toUpperCase()}</p>
                            </section>
                        ))}
                    </div>
                </div>
                <div className='border border-transparent border-l-[#ffffff25] flex flex-col justify-between text-white/50'>
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
import Image from 'next/image'
import { PropSectorCard } from '../types/all-types'

import { Wire_One } from 'next/font/google'
const fontStyle = Wire_One( {weight: '400', subsets: ['latin']} )

export const SectorCard = (({role, job_img, gradFrom, gradTo, domains}: PropSectorCard) => {

    return (
        <section className='flex w-fit h-[277.5px] border-[1px] border-white/2.5 overflow-hidden shadow-xl'>
            <div className="relative w-[140px] bg-[#00000060]">
                <p className={`${fontStyle.className} absolute -right-[30px] top-10 text-right text-[55px] text-[#ffffff] text-shadow-lg leading-14 font-black`}>{role}</p>
            </div>
            <div className={`flex w-[500px] bg-[#00000020]`}>
                <div className="relative p-4 flex-1">
                    <Image
                        src={job_img}
                        alt=''
                        width={260}
                        height={260}
                        className='absolute bottom-4 left-10 grayscale opacity-50'
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[75px] bg-[#00000035] backdrop-blur flex p-4 gap-2">
                        {domains.map((domain, idx) => (
                            <section key={idx} className='w-fit h-full flex flex-1 gap-1 flex-col justify-center text-[9px]'>
                                <div className='flex gap-1 items-center'>
                                    <Image
                                        src={domain.icon}
                                        alt=''
                                        width={20}
                                        height={20}
                                        className='rounded'
                                    />
                                    <p className='text-shadow-sm'>{domain.domain}</p>
                                </div>
                                <p className='font-extralight'>{domain.description}</p>
                            </section>
                        ))}
                    </div>
                </div>
                <div className='border border-transparent border-l-[#ffffff25] flex flex-col justify-between'>
                    <div className='w-[37.5px] h-[37.5px] flex border border-transparent border-b-[#ffffff25] flex items-center justify-center bg-[#ffffff20]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </div>
                    <div>
                        <div className='w-[37.5px] h-[37.5px] flex border border-transparent border-t-[#ffffff25] flex items-center justify-center bg-[#ffffff20]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className='w-[37.5px] h-[37.5px] flex border border-transparent border-t-[#ffffff25] flex items-center justify-center bg-[#ffffff20]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
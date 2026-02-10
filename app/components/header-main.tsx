import Image from "next/image"

import { Michroma } from "next/font/google";
const fontStyle = Michroma( {weight: '400', subsets: ['latin-ext']});

export const HeaderMain = (() => {
    var alt: any = 'Reinvent Web Studio'

    return (
        <div className="flex w-full h-[50px] justify-between items-center">
            <div className='flex items-center gap-3 text-black invert'>
                <Image
                    src='/rjr-logo-invert.png'
                    alt={alt}
                    width={50}
                    height={50}
                />
                <div>
                <p className={`${fontStyle.className} tracking-[9.4px]`}>REINVENT</p>
                <p className='tracking-[10.5px]'>web studio</p>
                </div>
            </div>
            <div className="flex gap-6 pr-4 text-black">
                <div className={`flex items-center gap-10 pr-2 tracking-widest`}>
                    <p>Home</p>
                    <p>Serviços</p>
                    <p>Sobre Nós</p>
                    <p>Contato</p>
                </div>
                <div className='flex gap-6 pl-8 border-l-[1px] border-black text-black/50'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                </div>
            </div>
        </div>
    )
})
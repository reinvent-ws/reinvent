import Image from "next/image";
import logo from './../../public/logo-reinvent.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";

import { Michroma } from "next/font/google";
import { M_PLUS_Code_Latin } from "next/font/google";

const fontStyle = Michroma( {weight: '400', subsets: ['latin-ext']});
const fontStyle1 = M_PLUS_Code_Latin( {weight: '400', subsets: ['latin-ext']});
const urlBackground = ''

export const RepresentationSection = (()=> {
    return (
      <section className={`relative w-full h-screen bg-[url(https://images.unsplash.com/photo-1610028505604-e621f1573fbd?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center flex flex-col items-center justify-center z-0`}>
        <div className='absolute w-full h-full bg-[#00000050] grayscale backdrop-invert-0 z-1'/>
        <FontAwesomeIcon icon={faChevronDown} beat size="2xl" className="absolute bottom-10 z-1" />
        <div className="relative -left-3 flex items-center z-2">
            <Image 
                src={logo}
                width={200}
                height={200}
                alt='logo Reinvent'
            />
            <div>
                <p className={`${fontStyle.className} text-[40px] tracking-[15px]`}>REINVENT</p>
                <p className='relative left-1 text-[24px] tracking-[29px]'>web studio</p>
            </div>
        </div>
        <div className='flex items-center gap-10 z-2'>
            <FontAwesomeIcon icon={faTerminal} /> 
            <p className={`${fontStyle1.className} tracking-[9.2px]`}> criar | desenvolver | evoluir</p>
        </div>
        <div className="flex items-center mt-30 z-2">
            <FontAwesomeIcon icon={faRegistered} size="xs" />
            <p className="mx-4 text-">2026</p>
        </div>
      </section>
    )
})
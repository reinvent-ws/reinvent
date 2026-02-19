import Image from "next/image"
import { useState } from "react";
import { ButtonHover } from "./button-hover";
import { menuList } from "../lists/all-lists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Michroma } from "next/font/google";
const fontStyle = Michroma( {weight: '400', subsets: ['latin-ext']});

export const HeaderMain = (() => {
    var alt: any = 'Reinvent Web Studio'
    const [darkMode, setDarkMode] = useState<boolean>(true)
    const menus: any = menuList

    const elementButton = darkMode ?
        (
            <div title="Dark">
                <FontAwesomeIcon icon={faMoon} size="lg" />
            </div>
        )
        :
        (
            <div title="Light">  
                <FontAwesomeIcon icon={faSun} size="lg"/>
            </div>
        )

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
                    <p className='tracking-[10.5px] max-[859px]:hidden'>web studio</p>
                </div>
            </div>
            <div className="flex items-center gap-6 pr-4 text-white/75">
                <div className={`flex items-center gap-10 pr-2 tracking-widest max-lg:hidden`}>
                    {menus.map((menu: any, idx: number)=>(<p key={idx}>{menu}</p>))}
                </div>
                <FontAwesomeIcon icon={faBars} className="min-[1024px]:invisible"/>
                <div className='flex items-center gap-6 pl-8 border-l-[1px] border-white/75'>
                    <ButtonHover
                        sendDM={darkMode}
                        getDM={(dark: boolean) => setDarkMode(dark)}
                        children={elementButton}
                    />
                    <ButtonHover
                        children={
                            <div title='User'>
                                <FontAwesomeIcon icon={faCircleUser} size="lg" />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
})
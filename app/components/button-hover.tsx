import { ReactNode, useState } from "react"

type ButtonProps = {
    sendDM?: boolean,
    getDM?: any,
    children: ReactNode
}

export const ButtonHover = (({sendDM, getDM, children}: ButtonProps) => {
    
    return (
        <button
            onClick={() =>  getDM(!sendDM) }
            className="w-fit h-fit p-1 rounded-lg bg-transparent hover:bg-[#ffffff10] hover:text-white/50 transition ease-linear cursor-pointer"
        >
            {children}
        </button>
    )
})
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCircleInfo, faPencil, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MiniMenu = (()=>{
    
    const styleIconsAside = 'w-[37.5px] h-[37.5px] flex border border-transparent flex items-center justify-center bg-[#ffffff20] cursor-pointer hover:text-white duration-300 ease-in-out'

    return (
        <div className='absolute top-[100%] -left-[1px] h-fit flex flex-col items-center'>
            <FontAwesomeIcon icon={faCircleInfo} size='sm' className={`${styleIconsAside} border-b-[#ffffff25] p-[10px]`}/>
            <FontAwesomeIcon icon={faPencil} size='sm' className={`${styleIconsAside} border-b-[#ffffff25] p-[10px]`}/>
            <FontAwesomeIcon icon={faWhatsapp} size='sm' className={`${styleIconsAside} border-b-[#ffffff25] p-[10px]`}/>
            <FontAwesomeIcon icon={faShareNodes} size='sm' className={`${styleIconsAside} p-[10px]`}/>
        </div>
    )
})
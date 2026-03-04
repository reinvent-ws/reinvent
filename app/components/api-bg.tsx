import Image from 'next/image'
import { backgroundsTheme } from './../backgroundsTheme'
import { useCallback } from 'react';

export const ApiBG = (() => {
    
    let bgTheme = backgroundsTheme
    let preLink = 'bg-[url("'
    let posLink = '")]'
    let nInterval:any 

    let timeBG = useCallback(function() {
        // return preLink+bgTheme[1].linkBG+posLink
        nInterval = setTimeout(() => {
          clearInterval(nInterval)
          return preLink + bgTheme[0].linkBG + posLink;
       }, 1000);
      }, []);
    
    return (
        <div className="relative flex justify-between items-center gap-2 w-full h-screen bg-[url(https://images.unsplash.com/photo-1670057046254-3b5095eb4b66?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover bg-no-repeat">
            {/* {backgroundsTheme.map((bg, key: number) => (
                <Image
                key={key}
                src={bg.linkBG}
                width={100}
                height={100}
                alt={bg.nameTheme}
                className="w-[200px] h-[200px] object-cover rounded-lg"
                />
            ))} */}
        </div>
    )
})
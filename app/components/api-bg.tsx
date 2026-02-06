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
        <div className="flex justify-between gap-2 w-full">
            {backgroundsTheme.map((bg, key: number) => (
                <Image
                key={key}
                src={bg.linkBG}
                width={100}
                height={100}
                alt={bg.nameTheme}
                className="object-cover rounded-lg"
                />
            ))}
        </div>
    )
})
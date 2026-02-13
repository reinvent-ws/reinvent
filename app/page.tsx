'use client'

import { HeaderMain } from "./components/header-main";
import { ApiBG } from "./components/api-bg";
import { SectorCard } from "./components/sector-card";
import { sectorsCard } from "./lists/all-lists";


export default function Home() {

  return (
    <main className={`relative flex bg-no-repeat bg-cover bg-left min-h-screen flex-col items-center bg-[url('https://basicappleguy.com/s/Forage_Mac.png')]`}>
      <div className={`relative flex-col flex-1 gap-24 px-[200px] py-10 w-full text-sm lg:flex bg-linear-to-l from-[#3a5a8950] to-[#ac445d50] overflow-hidden backdrop-blur-3xl text-white bg-no-repeat bg-center-top bg-auto`}>
        <HeaderMain />
        <div className="flex gap-8 flex-wrap justify-center">
          {sectorsCard.map((str) => (
            <SectorCard 
              role={str.role}
              job_img={str.job_img}
              domains={str.domain}
              gradFrom={str.gradFrom}
              gradTo={str.gradTo}
            />
          ))}
        </div>
        <ApiBG />
      </div>
    </main>
  );
}
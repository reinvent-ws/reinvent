'use client'

import { HeaderMain } from "./components/header-main";
import { ApiBG } from "./components/api-bg";
import { SectorCard } from "./components/sector-card";
import { sectorsCard } from "./lists/all-lists";
import { RepresentationSection } from "./components/representation-section";

export default function Home() {

  return (
    <main>
      <RepresentationSection />
      <section className={`relative flex bg-no-repeat bg-cover bg-left min-h-screen flex-col items-center bg-linear-to-tl from-gray-500 to-[#1a1a1a]`}>
        <div className={`relative flex-col flex-1 gap-24 max-sm:px-[20px] max-lg:px-[60px] px-[200px] py-10 w-full text-sm lg:flex overflow-hidden backdrop-blur-3xl text-white bg-no-repeat bg-center-top bg-auto`}>
          <HeaderMain />
          <div className="flex gap-8 flex-wrap justify-center">
            {sectorsCard.map((str) => (
              <SectorCard 
                role={str.role}
                job_img={str.job_img}
                domains={str.domain}
                open_menu={str.open_menu}
              />
            ))}
          </div>
          <ApiBG />
        </div>
      </section>
    </main>
  );
}
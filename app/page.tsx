'use client'

import Image from "next/image";
import job1 from './../public/react-programmer.png'
import job2 from './../public/web-development.png'
import job3 from './../public/graphic-design.png'
import { HeaderMain } from "./components/header-main";
import { ApiBG } from "./components/api-bg";
import { SectorCard } from "./components/sector-card";
import { domains1, domains2, domains3 } from "./lists/all-lists";


export default function Home() {

  var bgThemes = 'bg-[url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2460.jpg")]'  

  return (
    <main className={`relative flex bg-no-repeat bg-cover bg-left min-h-screen flex-col items-center bg-[url('https://basicappleguy.com/s/Forage_Mac.png')]`}>
      <div className={`relative flex-col flex-1 gap-24 px-[200px] py-10 w-full text-sm lg:flex bg-linear-to-r from-[#3a5a89] to-[#ac445d] overflow-hidden backdrop-blur-3xl text-white bg-no-repeat bg-center-top bg-auto`}>
        <HeaderMain />
        <div className="flex gap-8 flex-wrap">
          <SectorCard 
            role='WEB DEVELOP' 
            job_img={job1}
            gradFrom='#e4a346'
            gradTo='#2d6f73'
            domains={domains1}
          />
          <SectorCard
            role='WEB DESIGN'
            job_img={job2}
            gradFrom='#3f5a87'
            gradTo='#ac445d'
            domains={domains2}
          />
          <SectorCard
            role='GRAPHIC DESIGN'
            job_img={job3}
            gradFrom='#942b3a'
            gradTo='#662a46'
            domains={domains3}
          />
        </div>
        <ApiBG />
      </div>
    </main>
  );
}

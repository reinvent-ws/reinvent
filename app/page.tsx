'use client'

import Image from "next/image";
// import img from './../public/world-line.png';
import img from './../public/tech-bg.png';
import { HeaderMain } from "./components/header-main";
import { ApiBG } from "./components/api-bg";
import { SectorCard } from "./components/sector-card";


export default function Home() {

  var bgThemes = 'bg-[url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2460.jpg")]'  

  return (
    <main className={`relative flex bg-no-repeat bg-cover bg-left min-h-screen flex-col items-center bg-[url('https://basicappleguy.com/s/Forage_Mac.png')]`}>
      <div className={`relative flex-col flex-1 gap-24 px-[200px] py-10 w-full text-sm lg:flex bg-[#00000010] overflow-hidden backdrop-blur-3xl text-white bg-no-repeat bg-center-top bg-auto`}>
        <Image
          className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 rotate-180 opacity-50 invert"
          alt=''
          src={img}
        />
        <HeaderMain />
        <SectorCard />
        <ApiBG />
      </div>
    </main>
  );
}

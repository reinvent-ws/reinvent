'use client'

import { HeaderMain } from "./components/header-main";
import { ApiBG } from "./components/api-bg";
import { SectorCard } from "./components/sector-card";
import { sectorsCard } from "./lists/all-lists";
import Image from "next/image";
import logo from './../public/logo-reinvent.png'

import { Michroma } from "next/font/google";
const fontStyle = Michroma( {weight: '400', subsets: ['latin-ext']});

export default function Home() {

  return (
    <main>
      <section className='relative w-full h-screen bg-[url(https://images.unsplash.com/photo-1610028505604-e621f1573fbd?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover grayscale opacity-75 bg-center flex flex-col items-center justify-center'>
        <p className={`${fontStyle.className} text-[40px] tracking-[15px]`}>REINVENT</p>
        <Image
          src={logo}
          width={200}
          height={200}
          alt='logo Reinvent'
        />
      </section>
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
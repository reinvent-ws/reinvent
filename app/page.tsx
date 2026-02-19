"use client"

import logo from './../public/logo-reinvent.png'
import Fullpage from '@fullpage/react-fullpage'
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faRegistered, faTerminal } from "@fortawesome/free-solid-svg-icons";

import { Michroma } from "next/font/google";
import { M_PLUS_Code_Latin } from "next/font/google";
import { HeaderMain } from "./components/header-main";
import { sectorsCard } from "./lists/all-lists";
import { SectorCard } from "./components/sector-card";
import { ApiBG } from './components/api-bg';

const fontStyle = Michroma( {weight: '400', subsets: ['latin-ext']});
const fontStyle1 = M_PLUS_Code_Latin( {weight: '400', subsets: ['latin-ext']});

export default function Home() {

  const anchors = ['Representation Page', 'Main Page', 'About Us Page']

  return (
    <Fullpage
      
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      credits={{ enabled: false }}
      render={({state, fullpageApi}) => {
        return (
          <>
            <section className='section relative w-full h-screen bg-[url(https://images.unsplash.com/photo-1610028505604-e621f1573fbd?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center flex flex-col items-center justify-center z-0'>
              {/* <div className='absolute w-full h-full bg-[#00000050] grayscale backdrop-invert-0 z-1'/> */}
              <FontAwesomeIcon icon={faChevronDown} beat size="2xl" className="absolute bottom-10 z-1" />
              <div className="relative -left-3 flex items-center z-2">
                  <Image
                      src={logo}
                      width={200}
                      height={200}
                      alt='logo Reinvent'
                  />
                  <div>
                      <p className={`${fontStyle.className} text-[40px] tracking-[15px]`}>REINVENT</p>
                      <p className='relative left-1 text-[24px] tracking-[29px]'>web studio</p>
                  </div>
              </div>
              <div className='flex items-center gap-10 z-2'>
                  <FontAwesomeIcon icon={faTerminal} /> 
                  <p className={`${fontStyle1.className} tracking-[9.2px]`}> criar | desenvolver | evoluir</p>
              </div>
              <div className="flex items-center mt-30 z-2">
                  <FontAwesomeIcon icon={faRegistered} size="xs" />
                  <p className="mx-4 text-">2026</p>
              </div>
            </section>
            <section className={`section relative flex bg-no-repeat bg-cover bg-left min-h-screen flex-col items-center bg-linear-to-tl from-gray-500 to-[#1a1a1a]`}>
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
              </div>
          </section>
          <section className='section'>
            <ApiBG />
          </section>
          </>
        );
      }}
    />
  );
}
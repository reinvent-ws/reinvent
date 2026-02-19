"use client"

import Fullpage from '@fullpage/react-fullpage'

import { RepresentationSection } from './components/representation-section';
import { ApiBG } from './components/api-bg';
import { MainSection } from './components/main-section';


export default function Home() {

  const anchors = ['Representation Page', 'Main Page', 'About Us Page']

  return (
    <Fullpage
      anchors={anchors}
      navigation
      credits={{ enabled: false }}
      render={_ => {
        return (
          <>
            <section className='section'>
              <RepresentationSection />
            </section>
            <section className='section'>
              <MainSection />
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
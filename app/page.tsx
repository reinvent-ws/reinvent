"use client"

import Fullpage from '@fullpage/react-fullpage'

import { RepresentationSection } from './../app/components/representation-section';
import { MainSection } from './../app/components/main-section';
import { ServicesSection } from './../app/components/services-section';
import { ApiBG } from './../app/components/api-bg';
import { GeneralSection } from './components/general-sections';


export default function Home() {

  const anchors = ['Representation Page', 'Main', 'About Us', 'Contat Us']
  const sections = [RepresentationSection, MainSection, ServicesSection, ApiBG]

  return (
    <Fullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      credits={{ enabled: false }}
      render={_ => (
        <>
          {sections.map((section, idx) => <GeneralSection key={idx} section={section} idx={idx} />)}
        </>
      )}
    />
  );
}
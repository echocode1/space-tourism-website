import React, {useState} from 'react';
import DestinationUpdater from './destinations/DestinationUpdater';
import Crew from './crew/Crew';
import Technologies from './technology/Technologies';
import HeaderSection from './header/HeaderSection';
import Hero from './maincontent/MainHero';

export default function Home() {

  const [activeSection, setActiveSection] = useState('Home');
  const handleSectionChange = (section) => {
    setActiveSection(section)
  }
  return (
    <>
      <HeaderSection onSectionChange = {handleSectionChange}/>  

      {activeSection === 'Home' && <Hero onExploreClick={() => handleSectionChange("Destination") }/>}
      {activeSection === 'Crew' && <Crew/>}
      {activeSection === 'Destination' && <DestinationUpdater/>}
      {activeSection === 'Technology' && <Technologies/>}
      
    </>
  )
}
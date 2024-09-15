import React, {useState, useEffect } from 'react';
import logo from '../../../assets/shared/logo.svg';

export default function HeaderSection( {onSectionChange} ) {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // function to toggle navBr
  function displayNavMenu() {
    setShowNav((prevNav) => !prevNav);
  }

  //function to undisplay nav list when active section is clicked
  function handleActiveNav(section){
    onSectionChange(section);
    setShowNav(false);
  }

  const nav = (
    <ul>
      <li onClick={() => handleActiveNav("Home")}>
        <span className='section-btn'>HOME</span>
      </li>
      <li onClick={() => handleActiveNav("Destination") }>
        <span  className='section-btn'>DESTINATION</span>
      </li>
      <li onClick={() => handleActiveNav("Crew") }>
        <span className='section-btn'>CREW</span>
      </li>
      <li onClick={() => handleActiveNav("Technology") }>
        <span className='section-btn'>TECHNOLOGY</span>
      </li>
    </ul>
  );
  const navMenu=(
    <nav className='header-nav'>
      { isMobile ? showNav && 
        <div className={`overlay ${showNav ? 'show':''}`}> {nav} </div> : 
        (nav)
      }
    </nav>
  ) 

  return (
    <header className='header'>
      <div className='header-left'>
        <img src={logo} alt="logo" />
        {navMenu} {/*displayed my navMenu with the nav here */}
      </div>
      <div className="nav--toggler">
        <button onClick={displayNavMenu} className={`hamburger ${showNav ? 'rotate' : ''}`}>
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-base'></span>
        </button>
      </div>
    </header>
  );
}
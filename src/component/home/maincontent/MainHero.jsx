
import React from 'react'

export default function Hero({onExploreClick}) {
  return (
    <main className='hero'>
      <div className='hero-flex-left'>
        <p className="hero-light"> SO YOU WANT TO TRAVEL TO </p>
        <h1 className="hero-heavy">SPACE</h1>
        <p className="hero-description">
          Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it. 
          Well sit back, and relax because we’ll give you a truly out of this world 
          experience!
        </p>
      </div>
      <button id="hero-explore-btn"
        onClick={onExploreClick}
      >EXPLORE</button>
    </main>
  )
}
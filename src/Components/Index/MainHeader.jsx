import React from 'react'
import CompassSVG from './SVGs/CompassSVG'

const MainHeader = () => {
   return (
      <header className='main-header'>
         <div className='hero-background'>
            <img
               src={require('../../img/homepage/optimized/homepage-hero-bg.jpg')}
               alt='background'
            />
         </div>
         <div className='line1 line'></div>
         <div className='line2 line'></div>
         <div className='line3 line'></div>
         <div className='line4 line'></div>
         <div className='line5 line'></div>
         <h1 className='main-logo'>WestCrap</h1>
         <p className='font-caption contact-us'>contact us</p>
         <p className='font-caption investor-login'>investor login</p>
         <h4 className='hero-subtitle'>
            We build companies that become <em>great</em> investments.
         </h4>
         <CompassSVG />
         <p className='coordinates'>
            SAN FRANCISCO
            <br />
            37° 47' 50.0" N<br />
            122° 24' 18.2" W<br />
            <br />
            <br />
            NEW YORK
            <br />
            40° 43' 50.1960" N<br />
            73° 56' 6.8712" W<br />
         </p>
      </header>
   )
}

export default MainHeader

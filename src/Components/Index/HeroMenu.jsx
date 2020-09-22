import React from 'react'
import WcArrowSVG from './SVGs/WcArrowSVG'

const HeroMenu = () => {
   return (
      <div className='hero-menu'>
         <div className='left-hero-menu'>
            <h4>WestCrap</h4>
            <div className='address-flex'>
               <div className='address-coords'>
                  <p className='font-subtitle-bold'>
                     SAN FRANCISCO
                     <br />
                     <br />
                  </p>
                  <address>
                     590 PACIFIC AVE
                     <br />
                     SAN FRANCISCO, CA 94113 <br />
                     <br />
                     37° 47' 50.0" N<br />
                     122° 24' 18.2" W
                  </address>
               </div>
               <div>
                  <p className='font-subtitle-bold'>
                     NEW YORK
                     <br />
                     <br />
                  </p>
                  <address>
                     809 BROADWAY
                     <br />
                     NEW YORK, NY 10003
                     <br />
                     <br />
                     40° 43' 50.1960" N<br />
                     73° 56' 6.8712" W
                  </address>
               </div>
            </div>
         </div>
         <menu className='right-hero-menu'>
            <ul>
               <li>
                  Home
                  <WcArrowSVG />
               </li>
               <li>
                  Team
                  <WcArrowSVG />
               </li>
               <li>
                  Portfolio
                  <WcArrowSVG />
               </li>
               <li>
                  Press
                  <WcArrowSVG />
               </li>
               <li className='green-text'>
                  Investor Login
                  <WcArrowSVG />
               </li>
               <li>
                  Contact
                  <WcArrowSVG />
               </li>
            </ul>
         </menu>
      </div>
   )
}

export default HeroMenu

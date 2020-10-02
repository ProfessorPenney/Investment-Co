import React, { useEffect } from 'react'
import WcArrowSVG from '../../SVGs/WcArrowSVG'

const HeroMenu = ({ showMenu }) => {
   useEffect(() => {
      if (showMenu) {
         document.querySelector('.burger-menu').classList.remove('burger-menu-disappear')
         document.querySelector('.burger-menu').classList.add('burger-menu-appear')
      } else {
         document.querySelector('.burger-menu').classList.add('burger-menu-disappear')
         document.querySelector('.burger-menu').classList.remove('burger-menu-appear')
         setTimeout(() => {
            document.querySelector('.burger-menu').classList.remove('burger-menu-disappear')
         }, 400)
      }
   }, [showMenu])

   return (
      <nav className='burger-menu'>
         <div className='background'></div>
         <div className='menu-flexbox'>
            <div className='left-menu'>
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
            <menu className='right-menu'>
               <ul>
                  <li className='item1 items'>
                     Home
                     <WcArrowSVG />
                  </li>
                  <div className='border1 borders'></div>
                  <li className='item2 items'>
                     Team
                     <WcArrowSVG />
                  </li>
                  <div className='border2 borders'></div>
                  <li className='item3 items'>
                     Portfolio
                     <WcArrowSVG />
                  </li>
                  <div className='border3 borders'></div>
                  <li className='item4 items'>
                     Press
                     <WcArrowSVG />
                  </li>
                  <div className='border4 borders'></div>
                  <li className='item5 items'>
                     Investor Login
                     <WcArrowSVG />
                  </li>
                  <div className='border5 borders'></div>
                  <li className='item6 items'>
                     Contact
                     <WcArrowSVG />
                  </li>
               </ul>
            </menu>
         </div>
      </nav>
   )
}

export default HeroMenu

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import WcArrowSVG from '../../SVGs/WcArrowSVG'
import SmallLogo from './SmallLogo'

const HeroMenu = ({ showMenu, setshowMenu }) => {
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
      <div className='burger-menu'>
         <div className='background' />
         <SmallLogo />
         <div className='menu-flexbox'>
            <div className='left-menu'>
               <h4>Investment Co</h4>
            </div>
            <div className='address-flex'>
               <div className='address-coords'>
                  <p className='font-subtitle-bold'>
                     SAN FRANCISCO
                     <br />
                     <br />
                  </p>
                  <address>
                     950 PACIFIC AVE
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
                     908 BROADWAY
                     <br />
                     NEW YORK, NY 10003
                     <br />
                     <br />
                     40° 43' 50.1960" N<br />
                     73° 56' 6.8712" W
                  </address>
               </div>
            </div>
            <nav className='right-menu'>
               <ul>
                  <li className='item1 items'>
                     <Link to='/' onClick={() => setshowMenu(false)}>
                        Home
                     </Link>
                     <WcArrowSVG />
                  </li>
                  <hr className='border1 borders' />
                  <li className='item2 items'>
                     <Link to='/portfolio' onClick={() => setshowMenu(false)}>
                        Investments
                     </Link>
                     <WcArrowSVG />
                  </li>
                  <hr className='border2 borders' />
                  <li className='item3 items'>
                     Investor Login
                     <WcArrowSVG />
                  </li>
                  <hr className='border3 borders' />
                  <li className='item4 items'>
                     <Link to='/contact' onClick={() => setshowMenu(false)}>
                        Contact
                     </Link>
                     <WcArrowSVG />
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default HeroMenu

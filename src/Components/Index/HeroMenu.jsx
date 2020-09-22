import React from 'react'
import { CSSTransition } from 'react-transition-group'
import WcArrowSVG from './SVGs/WcArrowSVG'

const HeroMenu = () => {
   return (
      <div className='hero-menu-wrapper'>
         <CSSTransition classNames='hero-menu-background' timeout={1000} in={true} appear>
            <div className='hero-menu-background'></div>
         </CSSTransition>
         <div className='hero-menu-flexbox'>
            <CSSTransition classNames='hero-menu-center-line' timeout={1000} in={true} appear>
               <div className='left-hero-menu'>
                  <CSSTransition classNames='hero-menu-logo' timeout={1000} in={true} appear>
                     <h4>WestCrap</h4>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-address' timeout={1000} in={true} appear>
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
                  </CSSTransition>
               </div>
            </CSSTransition>
            <menu className='right-hero-menu'>
               <ul>
                  <CSSTransition classNames='hero-menu-list' timeout={1000} in={true} appear>
                     <li className='item1'>
                        Home
                        <WcArrowSVG />
                     </li>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-border' timeout={1000} in={true} appear>
                     <div className='border1 borders'></div>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-list' timeout={1000} in={true} appear>
                     <li className='item2'>
                        Team
                        <WcArrowSVG />
                     </li>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-border' timeout={1000} in={true} appear>
                     <div className='border2 borders'></div>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-list' timeout={1000} in={true} appear>
                     <li className='item3'>
                        Portfolio
                        <WcArrowSVG />
                     </li>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-border' timeout={1000} in={true} appear>
                     <div className='border3 borders'></div>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-list' timeout={1000} in={true} appear>
                     <li className='item4'>
                        Press
                        <WcArrowSVG />
                     </li>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-border' timeout={1000} in={true} appear>
                     <div className='border4 borders'></div>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-list' timeout={1000} in={true} appear>
                     <li className='item5'>
                        Investor Login
                        <WcArrowSVG />
                     </li>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-border' timeout={1000} in={true} appear>
                     <div className='border5 borders'></div>
                  </CSSTransition>
                  <CSSTransition classNames='hero-menu-list' timeout={1000} in={true} appear>
                     <li className='item6'>
                        Contact
                        <WcArrowSVG />
                     </li>
                  </CSSTransition>
               </ul>
            </menu>
         </div>
      </div>
   )
}

export default HeroMenu

import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import CompassSVG from './SVGs/CompassSVG'
import Hamburger from './Hamburger'
import HeroMenu from './HeroMenu'

const MainHeader = () => {
   const [isLoading, setisLoading] = useState(true)
   const [showMenu, setshowMenu] = useState(false)

   useEffect(() => {
      window.addEventListener('load', handleLoad)
      return () => {
         window.removeEventListener('load', handleLoad)
      }
   }, [])

   const handleLoad = () => {
      setisLoading(false)
   }

   return isLoading ? (
      <div className='empty-black-loading-div'></div>
   ) : (
      <header className='main-header'>
         <div className='hero-background'>
            <CSSTransition classNames='hero-background' timeout={5000} in={true} appear>
               <img
                  src={require('../../img/homepage/optimized/homepage-hero-bg.jpg')}
                  alt='background'
               />
            </CSSTransition>
         </div>
         <CSSTransition classNames='line-up' timeout={2500} in={true} appear>
            <div className='line1'></div>
         </CSSTransition>
         <CSSTransition classNames='line-down' timeout={2500} in={true} appear>
            <div className='line2'></div>
         </CSSTransition>
         <CSSTransition classNames='line-up' timeout={2500} in={true} appear>
            <div className='line3'></div>
         </CSSTransition>
         <CSSTransition classNames='line-down' timeout={2500} in={true} appear>
            <div className='line4'></div>
         </CSSTransition>
         <CSSTransition classNames='line-up' timeout={2500} in={true} appear>
            <div className='line5'></div>
         </CSSTransition>
         <CSSTransition classNames='hero-logo' timeout={2500} in={true} appear>
            <h1 className='main-logo'>WestCrap</h1>
         </CSSTransition>
         <CSSTransition classNames='hero-tidbits' timeout={3500} in={true} appear>
            <p className='font-caption contact-us'>contact us</p>
         </CSSTransition>
         <CSSTransition classNames='hero-tidbits' timeout={3500} in={true} appear>
            <p className='font-caption investor-login'>investor login</p>
         </CSSTransition>
         <CSSTransition classNames='hero-tidbits' timeout={3500} in={true} appear>
            <Hamburger showMenu={showMenu} setshowMenu={setshowMenu} />
         </CSSTransition>
         <CSSTransition classNames='hero-tidbits' timeout={3500} in={true} appear>
            <h4 className='hero-subtitle'>
               We build companies that become <em>great</em> investments.
            </h4>
         </CSSTransition>
         <CompassSVG />
         <CSSTransition classNames='hero-tidbits' timeout={3500} in={true} appear>
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
         </CSSTransition>
         {showMenu && <HeroMenu />}
      </header>
   )
}

export default MainHeader

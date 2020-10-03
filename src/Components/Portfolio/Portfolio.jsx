import React, { useEffect } from 'react'
import SmallLogo from '../UI/SmallLogo'
import HeaderLinks from '../UI/HeaderLinks'
import Footer from '../UI/Footer'
import FintechSVG from '../../SVGs/FintechSVG'
import RetechSVG from '../../SVGs/RetechSVG'
import ExtechSVG from '../../SVGs/ExtechSVG'
import LifetechSVG from '../../SVGs/LifetechSVG'

const Portfolio = () => {
   useEffect(() => {
      document.querySelector('.burger').style.opacity = 1
   }, [])

   return (
      <div className='portfolio'>
         <SmallLogo />
         <HeaderLinks />
         <h1 className='our-investments'>Our investments</h1>
         <p className='investment-p font-body'>
            WestCap is fueling the success of the world’s most disruptive asset-light, tech enabled
            marketplace solutions.
         </p>
         <section className='investment-grid'>
            <div className='addepar-grid grid-item'>
               <div className='top'>
                  <img
                     className='portfolio-hero'
                     src={require('../../img/portfolio company pages/optimized hero images/addepar-2.jpg')}
                     alt=''
                  />
               </div>
               <div className='bottom'>
                  <h2>Addepar</h2>
                  <p className='font-body'>
                     Helping investors make better, more informed decisions
                  </p>
                  <div className='icon-flex'>
                     <img
                        src={require('../../img/portfolio company pages/company logos/addepar.png')}
                        alt='Addepar'
                     />
                     <FintechSVG />
                  </div>
               </div>
            </div>
            <div className='bolt-grid grid-item hover-green'>
               <h2>Bolt</h2>
               <p className='font-body'>The world's first checkout experience platform</p>
               <div className='icon-flex'>
                  <img
                     src={require('../../img/portfolio company pages/company logos/bolt.png')}
                     alt='Bolt'
                  />
                  <FintechSVG />
               </div>
            </div>
            <div className='blueground-grid grid-item hover-salmon'>
               <h2>Blueground</h2>
               <p className='font-body'>Fully furnished apartments for monthly stays</p>
               <div className='icon-flex'>
                  <img
                     src={require('../../img/portfolio company pages/company logos/blueground.png')}
                     alt='Blueground'
                  />
                  <RetechSVG />
               </div>
            </div>
            <div className='cerebral-grid grid-item hover-blue'>
               <h2>Cerebral</h2>
               <p className='font-body'>Online service for mental health</p>
               <div className='icon-flex'>
                  <img
                     src={require('../../img/portfolio company pages/company logos/cerebral.png')}
                     alt='Cerebral'
                  />
                  <LifetechSVG />
               </div>
            </div>
            <div className='skillz-grid grid-item hover-orange'>
               <div className='top'>
                  <img
                     className='portfolio-hero'
                     src={require('../../img/portfolio company pages/optimized hero images/skillz.jpg')}
                     alt=''
                  />
               </div>
               <div className='bottom'>
                  <h2>Skillz</h2>
                  <p className='font-body'>Platform for competitive mobile games</p>
                  <div className='icon-flex'>
                     <img
                        src={require('../../img/portfolio company pages/company logos/skillz.png')}
                        alt='Skillz'
                     />
                     <ExtechSVG />
                  </div>
               </div>
            </div>
            <div className='icapital-grid grid-item hover-green'>
               <h2>iCapital</h2>
               <p className='font-body'>Powering the world’s alternative investment marketplace</p>
               <div className='icon-flex'>
                  <img
                     src={require('../../img/portfolio company pages/company logos/icapitalnetwork.png')}
                     alt='iCapital'
                  />
                  <FintechSVG />
               </div>
            </div>
            <div className='hopper-grid grid-item hover-orange'>
               <h2>Hopper</h2>
               <p className='font-body'>Revolutionizing how millions of people book their travel</p>
               <div className='icon-flex'>
                  <img
                     src={require('../../img/portfolio company pages/company logos/hopper.png')}
                     alt='Hopper'
                  />
                  <ExtechSVG />
               </div>
            </div>
            <div className='stubhub-grid grid-item hover-orange'>
               <h2>StubHub/ Viagogo</h2>
               <p className='font-body'>Helping investors make better, more informed decisions</p>
               <div className='icon-flex'>
                  <img
                     src={require('../../img/portfolio company pages/company logos/addepar.png')}
                     alt='StubHub'
                  />
                  <ExtechSVG />
               </div>
            </div>
            <div className='sonder-grid grid-item hover-salmon'>
               <h2>Sonder</h2>
               <p className='font-body'>Building the future of hospitality</p>
               <div className='icon-flex'>
                  <img
                     src={require('../../img/portfolio company pages/company logos/sonder.png')}
                     alt='Sonder'
                  />
                  <RetechSVG />
               </div>
            </div>
            <div className='zupee-grid grid-item hover-orange'>
               <h2>Zupee</h2>
               <p className='font-body'>Real money gaming platform in India</p>
               <div className='icon-flex'>
                  <img
                     src={require('../../img/portfolio company pages/company logos/zupee.png')}
                     alt='Zupee'
                  />
                  <ExtechSVG />
               </div>
            </div>
         </section>
         <Footer />
      </div>
   )
}

export default Portfolio

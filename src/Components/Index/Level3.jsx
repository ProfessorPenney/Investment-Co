import React, { Suspense, lazy } from 'react'
import FintechSVG from '../../SVGs/FintechSVG'
import RetechSVG from '../../SVGs/RetechSVG'
import ExtechSVG from '../../SVGs/ExtechSVG'
import LifetechSVG from '../../SVGs/LifetechSVG'

const Level3 = () => {
   return (
      <section className='level3'>
         <menu className='sticky-menu'>
            <div className='vertical-line'></div>
            <div className='menu-flexbox font-subtitle'>
               <div className='menu1 menu-item'>
                  <Suspense fallback={<div></div>}>
                     <FintechSVG />
                  </Suspense>
                  <p>
                     FIN<span className='tech'>TECH</span>
                  </p>
               </div>
               <div className='line1 h-line'></div>
               <div className='menu2 menu-item'>
                  <Suspense fallback={<div></div>}>
                     <RetechSVG />
                  </Suspense>
                  <p>
                     RE<span className='tech'>TECH</span>
                  </p>
               </div>
               <div className='line2 h-line'></div>
               <div className='menu3 menu-item'>
                  <Suspense fallback={<div></div>}>
                     <ExtechSVG />
                  </Suspense>
                  <p>
                     EX<span className='tech'>TECH</span>
                  </p>
               </div>
               <div className='line3 h-line'></div>
               <div className='menu4 menu-item'>
                  <Suspense fallback={<div></div>}>
                     <LifetechSVG />
                  </Suspense>
                  <p>
                     LIFE<span className='tech'>TECH</span>
                  </p>
               </div>
            </div>
         </menu>
         <div className='content section1'>
            <h2>Growth equity is an operators game.</h2>
            <p className='font-body'>
               Our experience, expertise and history of outperformance are why founders pursue deep
               partnerships with WestCap. We were entrepreneurs first, and we continue to
               collaborate with world class leadership teams to create value and realize
               opportunities across the very industries we helped shape.
            </p>
         </div>
         <div className='content section2'>
            <div className='tech1 menu-item'>
               <Suspense fallback={<div></div>}>
                  <FintechSVG />
               </Suspense>
               <p>
                  FIN<span className='tech-white'>TECH</span>
               </p>
            </div>
            <h3>FINANCIAL TECHNOLOGY</h3>
            <p className='font-body'>
               Developing emerging technologies to address the inefficiencies and fragmentation of
               e-commerce, mobile payments and private markets that drive economic inequalities
            </p>
         </div>
         <div className='content section3'>
            <div className='tech2 menu-item'>
               <Suspense fallback={<div></div>}>
                  <RetechSVG />
               </Suspense>
               <p>
                  RE<span className='tech-white'>TECH</span>
               </p>
            </div>
            <h3>REAL ESTATE TECHNOLOGY</h3>
            <p className='font-body'>
               Leveraging disruptive technology in real estate to make travel and accommodations
               more accessible to a wider audience on a more equitable basis
            </p>
         </div>
         <div className='content section4'>
            <div className='tech3 menu-item'>
               <Suspense fallback={<div></div>}>
                  <ExtechSVG />
               </Suspense>
               <p>
                  EX<span className='tech-white'>TECH</span>
               </p>
            </div>
            <h3>EXPERIENCE TECHNOLOGY</h3>
            <p className='font-body'>
               Capitalizing on the shift from ownership to open access as consumer spending moves
               from accumulating material assets to creating meaningful life experiences
            </p>
         </div>
         <div className='content section5'>
            <div className='tech4 menu-item'>
               <Suspense fallback={<div></div>}>
                  <LifetechSVG />
               </Suspense>
               <p>
                  LIFE<span className='tech-white'>TECH</span>
               </p>
            </div>
            <h3>LIFE SCIENCE TECHNOLOGY</h3>
            <p className='font-body'>
               Supporting innovation to revolutionize healthcare by creating equitable access to the
               necessary care that will drive wider inclusion in a healthier world
            </p>
         </div>
         <div className='preload' style={{ display: 'none' }}>
            <img src={require('../../img/homepage/optimized/fintech-bg.jpg')} alt='' />
            <img src={require('../../img/homepage/optimized/retech-bg.jpg')} alt='' />
            <img src={require('../../img/homepage/optimized/extech-bg.jpg')} alt='' />
            <img src={require('../../img/homepage/optimized/lifetech-bg.jpg')} alt='' />
         </div>
      </section>
   )
}

export default Level3

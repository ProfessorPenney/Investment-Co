import React, { useEffect } from 'react'
import FintechSVG from './SVGs/FintechSVG'
import RetechSVG from './SVGs/RetechSVG'
import ExtechSVG from './SVGs/ExtechSVG'
import LifetechSVG from './SVGs/LifetechSVG'

const Level3 = () => {
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   })

   function handleScroll() {
      // console.log('s2', document.querySelector('.section2').getBoundingClientRect().top)
      // console.log('s1', document.querySelector('.section1').getBoundingClientRect().top)
      if (
         document.querySelector('.section5').getBoundingClientRect().top <=
         window.innerHeight * (2 / 3)
      ) {
         document.querySelector('.rotating-background').classList.add('background5')
      } else if (
         document.querySelector('.section4').getBoundingClientRect().top <=
         window.innerHeight * (2 / 3)
      ) {
         document.querySelector('.rotating-background').classList.add('background4')
         document.querySelector('.rotating-background').classList.remove('background5')
      } else if (
         document.querySelector('.section3').getBoundingClientRect().top <=
         window.innerHeight * (2 / 3)
      ) {
         document.querySelector('.rotating-background').classList.add('background3')
         document.querySelector('.rotating-background').classList.remove('background4')
      } else if (
         document.querySelector('.section2').getBoundingClientRect().top <=
         window.innerHeight * (2 / 3)
      ) {
         document.querySelector('.rotating-background').classList.add('background2')
         document.querySelector('.rotating-background').classList.remove('background3')
      } else if (
         document.querySelector('.section1').getBoundingClientRect().top <=
         window.innerHeight * (2 / 3)
      ) {
         document.querySelector('.rotating-background').classList.add('background1')
         document.querySelector('.background-color').classList.add('fade-out-white')
         document.querySelector('.rotating-background').classList.remove('background2')
         document.querySelector('.sticky-menu').classList.add('menu-appear')
      } else {
         document.querySelector('.background-color').classList.remove('fade-out-white')
         // document.querySelector('.rotating-background').classList.remove('background1')
      }
   }

   return (
      <section className='level3'>
         <div className='section1 section'></div>
         <div className='content'>
            <h2>Growth equity is an operators game.</h2>
            <p className='font-body'>
               Our experience, expertise and history of outperformance are why founders pursue deep
               partnerships with WestCap. We were entrepreneurs first, and we continue to
               collaborate with world class leadership teams to create value and realize
               opportunities across the very industries we helped shape.
            </p>
         </div>
         <menu className='sticky-menu'>
            <div className='vertical-line'></div>
            <div className='menu-flexbox font-subtitle'>
               <div className='menu1 menu-item'>
                  <FintechSVG />
                  <p>FINTECH</p>
               </div>
               <div className='line1 h-line'></div>
               <div className='menu2 menu-item'>
                  <RetechSVG />
                  <p>RETECH</p>
               </div>
               <div className='line2 h-line'></div>
               <div className='menu3 menu-item'>
                  <ExtechSVG />
                  <p>EXTECH</p>
               </div>
               <div className='line3 h-line'></div>
               <div className='menu4 menu-item'>
                  <LifetechSVG />
                  <p>LIFETECH</p>
               </div>
            </div>
         </menu>
         <div className='section2'>
            <div className='content'>
               <h3>FINANCIAL TECHNOLOGY</h3>
               <p className='font-body'>
                  Developing emerging technologies to address the inefficiencies and fragmentation
                  of e-commerce, mobile payments and private markets that drive economic
                  inequalities
               </p>
            </div>
         </div>
         <div className='section3'>
            <div className='content'>
               <h3>REAL ESTATE TECHNOLOGY</h3>
               <p className='font-body'>
                  Leveraging disruptive technology in real estate to make travel and accommodations
                  more accessible to a wider audience on a more equitable basis
               </p>
            </div>
         </div>
         <div className='section4'>
            <div className='content'>
               <h3>EXPERIENCE TECHNOLOGY</h3>
               <p className='font-body'>
                  Capitalizing on the shift from ownership to open access as consumer spending moves
                  from accumulating material assets to creating meaningful life experiences
               </p>
            </div>
         </div>
         <div className='section5'>
            <div className='content'>
               <h3>LIFE SCIENCE TECHNOLOGY</h3>
               <p className='font-body'>
                  Supporting innovation to revolutionize healthcare by creating equitable access to
                  the necessary care that will drive wider inclusion in a healthier world
               </p>
            </div>
         </div>
      </section>
   )
}

export default Level3

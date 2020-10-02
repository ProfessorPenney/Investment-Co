import React from 'react'
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
                  <FintechSVG />
                  <p>
                     FIN<span className='tech'>TECH</span>
                  </p>
               </div>
               <div className='line1 h-line'></div>
               <div className='menu2 menu-item'>
                  <RetechSVG />
                  <p>
                     RE<span className='tech'>TECH</span>
                  </p>
               </div>
               <div className='line2 h-line'></div>
               <div className='menu3 menu-item'>
                  <ExtechSVG />
                  <p>
                     EX<span className='tech'>TECH</span>
                  </p>
               </div>
               <div className='line3 h-line'></div>
               <div className='menu4 menu-item'>
                  <LifetechSVG />
                  <p>
                     LIFE<span className='tech'>TECH</span>
                  </p>
               </div>
            </div>
         </menu>
         <div className='section1 section'>
            <div className='content content1'>
               <h2>Growth equity is an operators game.</h2>
               <p className='font-body'>
                  Our experience, expertise and history of outperformance are why founders pursue
                  deep partnerships with WestCap. We were entrepreneurs first, and we continue to
                  collaborate with world class leadership teams to create value and realize
                  opportunities across the very industries we helped shape.
               </p>
            </div>
         </div>
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

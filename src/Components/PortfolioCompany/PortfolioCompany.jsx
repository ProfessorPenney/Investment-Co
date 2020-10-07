import React from 'react'

const PortfolioCompany = ({ company }) => {
   return (
      <div className='portfolio-co'>
         <section className='company'>
            <header className='hero'>
               <div className='title'>
                  <header>
                     <img
                        src='../../img/portfolio company pages/company logos/sonder.png'
                        alt='SONDER'
                     />
                  </header>
                  <h1>Building the future of hospitality</h1>
               </div>
               <img
                  src={require('../../img/portfolio company pages/optimized hero images/sonder-2.jpg')}
                  alt=''
               />
            </header>
            <div className='body-flex'>
               <p className='font-body'>
                  Based in San Francisco, CA, Sonder is the #1 global platform for short-term leases
                  and has established itself as the 2.0 hospitality brand. The company blends the
                  home-sharing economy with the service, safety and predictability of a hotel-like
                  experience.
               </p>
               <div className='founder'>
                  <h3>FOUNDER</h3>

                  <h2>Francis Davidson</h2>
               </div>
               <div className='founded'>
                  <h3>FOUNDED</h3>
                  <h2>2014</h2>
               </div>
               <div className='category'>
                  <h3>CATEGORY</h3>
                  <h2>Real estate tech</h2>
               </div>
               <div className='website'>
                  <h3>WEBSITE</h3>
                  <button className='button-oval'></button>
               </div>
            </div>
         </section>
         <section className='other-investments'></section>
      </div>
   )
}

export default PortfolioCompany
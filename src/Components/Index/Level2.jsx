import React from 'react'
import Years20SVG from '../../SVGs/Years20SVG'
import TogetherCircleSVG from '../../SVGs/TogetherCircleSVG'

const Level2 = () => {
   return (
      <section className='level2'>
         <div className='svg-container'>
            <Years20SVG />
            <TogetherCircleSVG />
            <div className='line1 vert-line'></div>
            <div className='line2 vert-line'></div>
            <div className='estd wings'>ESTD.</div>
            <div className='year-est wings'>1997</div>
         </div>
         <div className='caption-20years'>
            <p className='meet-team-caption'>
               WestCap is a growth equity firm led by a team that has founded, capitalized and
               operated tech-enabled, asset light marketplaces for over 20 years.
            </p>
            <button className='meet-team-button button-oval'>Meet Our Team</button>
         </div>
         <div className='investment-container'>
            <div className='block1 block'>
               <div className='top'>
                  <h2>$3.5B</h2>
                  <p className='font-caption'>founder/operator</p>
               </div>
               <div className='bottom'>
                  <div>
                     <img
                        className='ipreo'
                        src={require('../../img/stat logos/ipreo.png')}
                        alt='ipreo'
                     />
                  </div>
                  <div>
                     <img
                        className='tmcbonds'
                        src={require('../../img/stat logos/tmcbonds.png')}
                        alt='tmcbonds'
                     />
                  </div>
                  <div>
                     <img
                        className='ilevel'
                        src={require('../../img/stat logos/ilevel.png')}
                        alt='ilevel'
                     />
                  </div>
               </div>
            </div>
            <div className='block2 block'>
               <div className='top'>
                  <h2>$90B</h2>
                  <p className='font-caption'>operator/investor</p>
               </div>
               <div className='bottom'>
                  <div>
                     <img className='gso' src={require('../../img/stat logos/GSO.png')} alt='gso' />
                  </div>
                  <div>
                     <img
                        className='airbnb'
                        src={require('../../img/stat logos/airbnb.png')}
                        alt='airbnb'
                     />
                  </div>
                  <div>
                     <img
                        className='blackstone'
                        src={require('../../img/stat logos/blackstone.png')}
                        alt='blackstone'
                     />
                  </div>
               </div>
            </div>
            <div className='block3 block'>
               <div className='top'>
                  <h2>$34B</h2>
                  <p className='font-caption'>early investor</p>
               </div>
               <div className='bottom'>
                  <div>
                     <img
                        className='cyclance'
                        src={require('../../img/stat logos/cylance.png')}
                        alt='cyclance'
                     />
                  </div>
                  <div>
                     <img
                        className='tradeweb'
                        src={require('../../img/stat logos/tradeweb.png')}
                        alt='tradeweb'
                     />
                  </div>
                  <div>
                     <img
                        className='skillz'
                        src={require('../../img/stat logos/skillz.png')}
                        alt='skillz'
                     />
                  </div>
                  <div>
                     <img
                        className='sonder'
                        src={require('../../img/stat logos/sonder.png')}
                        alt='sonder'
                     />
                  </div>
                  <div>
                     <img
                        className='carbon'
                        src={require('../../img/stat logos/carbon-black.png')}
                        alt='carbon black'
                     />
                  </div>
                  <div>
                     <img
                        className='archipelago'
                        src={require('../../img/stat logos/archipelago.png')}
                        alt='archipelago'
                     />
                  </div>
               </div>
            </div>
            <div className='block4 block'>
               <h2>$128B</h2>
               <p className='font-caption'>total value</p>
            </div>
         </div>
      </section>
   )
}

export default Level2

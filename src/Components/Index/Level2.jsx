import React from 'react'
import { CSSTransition } from 'react-transition-group'
import Years20SVG from './SVGs/Years20SVG'
import TogetherCircleSVG from './SVGs/TogetherCircleSVG'

const Level2 = () => {
   return (
      <CSSTransition classNames='level2' timeout={3500} in={true} appear>
         <div className='level2'>
            <div className='svg-container'>
               <Years20SVG />
               <TogetherCircleSVG />
               <div className='line1 vert-line'></div>
               <div className='line2 vert-line'></div>
               <div className='estd wings'>ESTD.</div>
               <div className='year-est wings'>1997</div>
            </div>
            <p className='meet-team-caption'>
               WestCap is a growth equity firm led by a team that has founded, capitalized and
               operated tech-enabled, asset light marketplaces for over 20 years.
            </p>
            <button className='meet-team-button'>Meet Our Team</button>
            <div className='investment-container'>
               <div className='block1 block'>
                  <div className='top'>
                     <h2>$3.5B</h2>
                     <p className='font-caption'>founder/operator</p>
                  </div>
                  <div className='bottom'>
                     <img
                        className='ipreo'
                        src={require('../../img/stat logos/ipreo.png')}
                        alt='ipreo'
                     />
                     <img
                        className='tmcbonds'
                        src={require('../../img/stat logos/tmcbonds.png')}
                        alt='tmcbonds'
                     />
                     <img
                        className='ilevel'
                        src={require('../../img/stat logos/ilevel.png')}
                        alt='ilevel'
                     />
                  </div>
               </div>
               <div className='block2 block'>
                  <div className='top'>
                     <h2>$90B</h2>
                     <p className='font-caption'>operator/investor</p>
                  </div>
                  <div className='bottom'>
                     <img
                        className='ipreo'
                        src={require('../../img/stat logos/GSO.png')}
                        alt='ipreo'
                     />
                     <img
                        className='tmcbonds'
                        src={require('../../img/stat logos/airbnb.png')}
                        alt='tmcbonds'
                     />
                     <img
                        className='ilevel'
                        src={require('../../img/stat logos/blackstone.png')}
                        alt='ilevel'
                     />
                  </div>
               </div>
               <div className='block3 block'>
                  <div className='top'>
                     <h2>$34B</h2>
                     <p className='font-caption'>early investor</p>
                  </div>
                  <div className='bottom'>
                     <img
                        className='ipreo'
                        src={require('../../img/stat logos/ipreo.png')}
                        alt='ipreo'
                     />
                     <img
                        className='tmcbonds'
                        src={require('../../img/stat logos/tmcbonds.png')}
                        alt='tmcbonds'
                     />
                     <img
                        className='ilevel'
                        src={require('../../img/stat logos/ilevel.png')}
                        alt='ilevel'
                     />
                  </div>
               </div>
               <div className='block4 block'></div>
            </div>
         </div>
      </CSSTransition>
   )
}

export default Level2

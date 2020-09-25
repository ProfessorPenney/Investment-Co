import React from 'react'
import Criteria1SVG from '../../img/icons/Investment criteria/1-opportunisticleadership.svg'
import Criteria2SVG from '../../img/icons/Investment criteria/2-innovativeproducts.svg'
import Criteria3SVG from '../../img/icons/Investment criteria/3-passionatecustomer.svg'
import Criteria4SVG from '../../img/icons/Investment criteria/4-uniteconomics.svg'
import Criteria5SVG from '../../img/icons/Investment criteria/5-scalablemarkets.svg'
import Approach1SVG from '../../img/icons/Investment approach/1-secureproprietarydeals.svg'
import Approach2SVG from '../../img/icons/Investment approach/2-defineoperating.svg'
import Approach3SVG from '../../img/icons/Investment approach/3-confirmentry.svg'
import Approach4SVG from '../../img/icons/Investment approach/4-structuredownside.svg'
import Approach5SVG from '../../img/icons/Investment approach/5-tiecapital.svg'
import Risk1SVG from '../../img/icons/risk management/1-focus.svg'
import Risk2SVG from '../../img/icons/risk management/2-entrypointvaluation.svg'
import Risk3SVG from '../../img/icons/risk management/3-structure.svg'
import Risk4SVG from '../../img/icons/risk management/4-governance.svg'

const Level4 = () => {
   return (
      <section className='level4 font-body'>
         <div className='sticky-left'>
            <h2>OKRs before IRRs</h2>
            <p>
               WestCap invests in founder-led, product-centric, market leading businesses. Our
               companies leverage technology in disruptive, sustainably advantaged ways, challenging
               vulnerable incumbents in the pursuit of large addressable markets.
            </p>
         </div>
         <div className='scrolling-right'>
            <div>
               <header>
                  <p className='font-subtitle-bold'>investment criteria</p>
               </header>
               <div className='body'>
                  <div>
                     <div>
                        <img src={Criteria1SVG} alt=''></img>
                     </div>
                     <p>Opportunistic leadership teams</p>
                  </div>
                  <div>
                     <div>
                        <img src={Criteria2SVG} alt=''></img>
                     </div>
                     <p>Innovative products powered by best-in-class technology</p>
                  </div>
                  <div>
                     <div>
                        <img src={Criteria3SVG} alt=''></img>
                     </div>
                     <p>Passionate, growing customer base</p>
                  </div>
                  <div>
                     <div>
                        <img src={Criteria4SVG} alt=''></img>
                     </div>
                     <p>Positive unit economics</p>
                  </div>
                  <div>
                     <div>
                        <img src={Criteria5SVG} alt=''></img>
                     </div>
                     <p>Scalable markets</p>
                  </div>
               </div>
            </div>
            <div>
               <header>
                  <p className='font-subtitle-bold'>investment approach</p>
               </header>
               <div className='body'>
                  <div>
                     <div>
                        <img src={Approach1SVG} alt=''></img>
                     </div>
                     <p>Secure proprietary deal(s)</p>
                  </div>
                  <div>
                     <div>
                        <img src={Approach2SVG} alt=''></img>
                     </div>
                     <p>Define operating plan before investing and scaling</p>
                  </div>
                  <div>
                     <div>
                        <img src={Approach3SVG} alt=''></img>
                     </div>
                     <p>Confirm entry valuations reflective of WestCap operating expertise</p>
                  </div>
                  <div>
                     <div>
                        <img src={Approach4SVG} alt=''></img>
                     </div>
                     <p>Structure downside protections</p>
                  </div>
                  <div>
                     <div>
                        <img src={Approach5SVG} alt=''></img>
                     </div>
                     <p>Tie capital to ROI and performance metrics</p>
                  </div>
               </div>
            </div>
            <div>
               <header>
                  <p className='font-subtitle-bold'>investment criteria</p>
               </header>
               <div className='body last-body'>
                  <div>
                     <div>
                        <img src={Risk1SVG} alt=''></img>
                     </div>
                     <p>Small team, few investments, limited sector focus, deliberate fund cap</p>
                  </div>
                  <div>
                     <div>
                        <img src={Risk2SVG} alt=''></img>
                     </div>
                     <p>Deals sourced at a discount to fair market value</p>
                  </div>
                  <div>
                     <div>
                        <img src={Risk3SVG} alt=''></img>
                     </div>
                     <p>Advantageous liquidation preferences that protect principal</p>
                  </div>
                  <div>
                     <div>
                        <img src={Risk4SVG} alt=''></img>
                     </div>
                     <p>
                        Control-like provisions such as blocking rights, board seats and pro rata /
                        pre-emptive rights
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Level4

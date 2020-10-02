import React from 'react'
import ArrowSVG from './SVGs/ArrowSVG'

const Slider = ({ content, setslideLeft, setslideRight }) => {
   function slideRight() {
      setslideRight(true)
   }
   function slideLeft() {
      setslideLeft(true)
   }

   return (
      <div className='slider' style={{ backgroundColor: `${content.backgroundColor}` }}>
         <h2>Our Investments</h2>
         <p className='font-body investment-p'>
            WestCap is fueling the success of the world’s most disruptive asset-light, tech enabled
            marketplace solutions.
         </p>
         <button className='see-portfolio button-oval'>see portfolio</button>
         <button className='square-button'>
            <div className='left'>
               <img src={content.buttonPic} alt='company' />
               <p className='font-caption-alt'>{content.buttonText}</p>
            </div>
            <div className='border'></div>
            <div className='right'>
               <ArrowSVG />
            </div>
         </button>
         <img src={content.heroImage} alt='' className='hero-img' />
         <hr />
         <div className='bottom-flexbox'>
            <button
               className='left-button circle-button'
               onClick={slideLeft}
               disabled={content.index === 0}>
               <ArrowSVG />
            </button>
            <div className='dots'>
               <div className={`dot1 ${content.index === 0 ? 'white-dot' : 'none'}`}></div>
               <div className={`dot2 ${content.index === 1 ? 'white-dot' : 'none'}`}></div>
               <div className={`dot3 ${content.index === 2 ? 'white-dot' : 'none'}`}></div>
               <div className={`dot4 ${content.index === 3 ? 'white-dot' : 'none'}`}></div>
               <div className={`dot5 ${content.index === 4 ? 'white-dot' : 'none'}`}></div>
            </div>
            <button
               className='right-button circle-button'
               onClick={slideRight}
               disabled={content.index === 4}>
               <ArrowSVG />
            </button>
         </div>
      </div>
   )
}

export default Slider

import React from 'react'
import ArrowSVG from '../../SVGs/ArrowSVG'
import { Link } from 'react-router-dom'

const Slider = ({ content, setslideLeft, setslideRight, goToSlide }) => {
   return (
      <div className='slider' style={{ backgroundColor: `${content.backgroundColor}` }}>
         <h2>Our Investments</h2>
         <p className='font-body investment-p'>
            WestCap is fueling the success of the world’s most disruptive asset-light, tech enabled
            marketplace solutions.
         </p>
         <Link to='/portfolio' className='see-portfolio button-oval'>
            see portfolio
         </Link>
         <img src={content.heroImage} alt='' className='hero-img' />
         <Link to={`/portfolio/${content.name}`}>
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
         </Link>
         <hr />
         <div className='bottom-flexbox'>
            <button className='left-button circle-button' onClick={() => setslideLeft(true)}>
               <ArrowSVG />
            </button>
            <div className='dots'>
               <div
                  className={`dot1 ${content.index === 0 ? 'white-dot' : 'none'}`}
                  onClick={() => goToSlide(0)}></div>
               <div
                  className={`dot2 ${content.index === 1 ? 'white-dot' : 'none'}`}
                  onClick={() => goToSlide(1)}></div>
               <div
                  className={`dot3 ${content.index === 2 ? 'white-dot' : 'none'}`}
                  onClick={() => goToSlide(2)}></div>
               <div
                  className={`dot4 ${content.index === 3 ? 'white-dot' : 'none'}`}
                  onClick={() => goToSlide(3)}></div>
               <div
                  className={`dot5 ${content.index === 4 ? 'white-dot' : 'none'}`}
                  onClick={() => goToSlide(4)}></div>
            </div>
            <button className='right-button circle-button' onClick={() => setslideRight(true)}>
               <ArrowSVG />
            </button>
         </div>
      </div>
   )
}

export default Slider

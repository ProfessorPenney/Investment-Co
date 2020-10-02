import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import Footer from '../UI/Footer'
import slideContent from './slideData'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Level6 = () => {
   const [slide, setslide] = useState(slideContent[0])
   const [slideRight, setslideRight] = useState(false)
   const [slideLeft, setslideLeft] = useState(false)

   useEffect(() => {
      if (slideRight === true) {
         setslideRight(false)
         setslide(slideContent[slide.index + 1])
      }
   }, [slideRight])
   useEffect(() => {
      if (slideLeft === true) {
         setslideLeft(false)
         setslide(slideContent[slide.index - 1])
      }
   }, [slideLeft])

   return (
      <section className='level6'>
         <div className='level6-begin'></div>
         <div className='slider-placeholder'>
            <TransitionGroup>
               <CSSTransition timeout={350} key={slide.index} classNames='slide'>
                  <Slider
                     content={slide}
                     setslideLeft={setslideLeft}
                     setslideRight={setslideRight}
                  />
               </CSSTransition>
            </TransitionGroup>
         </div>
         <Footer />
      </section>
   )
}

export default Level6

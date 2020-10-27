import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Swipe from 'react-easy-swipe'
import Slider from './Slider'
import Footer from '../UI/Footer'
import slideContent from './slideData'

const Level6 = () => {
   const [slide, setslide] = useState(slideContent[0])
   const [slideRight, setslideRight] = useState(false)
   const [slideLeft, setslideLeft] = useState(false)

   useEffect(() => {
      if (slideRight === true) {
         setslideRight(false)
         if (slide.index === slideContent.length - 1) {
            setslide(slideContent[0])
         } else {
            setslide(slideContent[slide.index + 1])
         }
      }
   }, [slideRight, slide])

   useEffect(() => {
      if (slideLeft === true) {
         setslideLeft(false)
         if (slide.index === 0) {
            setslide(slideContent[slideContent.length - 1])
         } else {
            setslide(slideContent[slide.index - 1])
         }
      }
   }, [slideLeft, slide])

   return (
      <section className='level6'>
         <div className='level6-begin'></div>
         <div className='slider-placeholder'>
            <TransitionGroup>
               <CSSTransition timeout={350} key={slide.index} classNames='slide'>
                  <Swipe
                     onSwipeLeft={() => setslideRight(true)}
                     onSwipeRight={() => setslideLeft(true)}
                     tolerance={50}>
                     <Slider
                        content={slide}
                        setslideLeft={setslideLeft}
                        setslideRight={setslideRight}
                        goToSlide={index => setslide(slideContent[index])}
                     />
                  </Swipe>
               </CSSTransition>
            </TransitionGroup>
         </div>
         <Footer />
      </section>
   )
}

export default Level6

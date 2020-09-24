import React, { useEffect } from 'react'

const Level3 = () => {
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   })

   function handleScroll() {
      // console.log(document.querySelector('.section1').getBoundingClientRect())
      if (
         // document.body.scrollTop >
         document.querySelector('.section1').getBoundingClientRect().top <= 600
      ) {
         document.querySelector('.rotating-background').classList.add('background1')
      }
   }

   return (
      <section className='level3'>
         <div className='section1'></div>
         <div className='section2'></div>
         <div className='section3'></div>
         <div className='section4'></div>
         <div className='section5'></div>
      </section>
   )
}

export default Level3

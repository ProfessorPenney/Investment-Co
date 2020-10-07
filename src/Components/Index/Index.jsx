import React, { useEffect } from 'react'
import MainHeader from './MainHeader'
import Level2 from './Level2'
import Level3 from './Level3'
import Level4 from './Level4'
import Level5 from './Level5'
import Level6 from './Level6'
import handleScroll from './scroll'

const Index = () => {
   useEffect(() => {
      window.onunload = () => {
         window.scrollTo(0, 0)
      }
      window.addEventListener('load', animateHero)
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('load', animateHero)
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   function animateHero() {
      document.querySelector('.App').classList.add('app-appear')
   }

   return (
      <React.Fragment>
         <div className='background-color'></div>
         <div className='background1 bg'></div>
         <div className='background2 bg'></div>
         <div className='background3 bg'></div>
         <div className='background4 bg'></div>
         <div className='background5 bg'></div>
         <MainHeader />
         <Level2 />
         <Level3 />
         <Level4 />
         <Level5 />
         <Level6 />
      </React.Fragment>
   )
}

export default Index
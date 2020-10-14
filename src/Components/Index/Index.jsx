import React, { useEffect } from 'react'
import MainHeader from './MainHeader'
import handleScroll from './scroll'
import Level2 from './Level2'
import Level3 from './Level3'
import Level4 from './Level4'
import Level5 from './Level5'
import Level6 from './Level6'

const Index = () => {
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   function animateHero() {
      document.querySelector('.App').classList.add('app-appear')
   }

   return (
      <React.Fragment>
         <div className='background-color'></div>
         <div className='background1'></div>
         <MainHeader />
         <Level2 />
         <Level3 />
         <Level4 />
         <Level5 />
         <Level6 />
         <div className='preload' style={{ display: 'none' }}>
            <img src={require('../../img/homepage/optimized/fintech-bg.jpg')} alt='' />
            <img src={require('../../img/homepage/optimized/retech-bg.jpg')} alt='' />
            <img src={require('../../img/homepage/optimized/extech-bg.jpg')} alt='' />
            <img src={require('../../img/homepage/optimized/lifetech-bg.jpg')} alt='' />
         </div>
      </React.Fragment>
   )
}

export default Index

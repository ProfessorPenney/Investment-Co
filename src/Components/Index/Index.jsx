import React, { useEffect, lazy, Suspense } from 'react'
import MainHeader from './MainHeader'
import handleScroll from './scroll'
const Level2 = lazy(() => import('./Level2'))
const Level3 = lazy(() => import('./Level3'))
const Level4 = lazy(() => import('./Level4'))
const Level5 = lazy(() => import('./Level5'))
const Level6 = lazy(() => import('./Level6'))
// import Level2 from './Level2'
// import Level3 from './Level3'
// import Level4 from './Level4'
// import Level5 from './Level5'
// import Level6 from './Level6'

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
         <Suspense fallback={<h1> Still Loading...</h1>}>
            <Level2 />
            <Level3 />
            <Level4 />
            <Level5 />
            <Level6 />
         </Suspense>
      </React.Fragment>
   )
}

export default Index

import React, { useEffect, useState } from 'react'
import './App.css'
import Hamburger from './Components/Index/Hamburger'
import HeroMenu from './Components/Index/HeroMenu'
import Level2 from './Components/Index/Level2'
import Level3 from './Components/Index/Level3'
import Level4 from './Components/Index/Level4'
import Level5 from './Components/Index/Level5'
import Level6 from './Components/Index/Level6'
import MainHeader from './Components/Index/MainHeader'
import handleScroll from './Components/Index/scroll'

function App() {
   const [showMenu, setshowMenu] = useState(false)

   useEffect(() => {
      window.addEventListener('load', animateHero)
      window.addEventListener('scroll', handleScroll)
      window.onunload = () => {
         window.scrollTo(0, 0)
      }
      return () => {
         window.removeEventListener('load', animateHero)
         return () => window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   function animateHero() {
      document.querySelector('.App').classList.add('app-appear')
   }

   return (
      <div className='App'>
         <div className='background-color'></div>
         <div className='background1 bg'></div>
         <div className='background2 bg'></div>
         <div className='background3 bg'></div>
         <div className='background4 bg'></div>
         <div className='background5 bg'></div>
         <MainHeader />
         <Hamburger showMenu={showMenu} setshowMenu={setshowMenu} />
         <HeroMenu showMenu={showMenu} />
         <Level2 />
         <Level3 />
         <Level4 />
         <Level5 />
         <Level6 />
      </div>
   )
}

export default App

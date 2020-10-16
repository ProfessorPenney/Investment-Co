import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import handleScroll from './scroll'
import Hamburger from '../UI/Hamburger'
import MainHeader from './MainHeader'
import Level2 from './Level2'
import Level3 from './Level3'
import Level4 from './Level4'
import Level5 from './Level5'
import Level6 from './Level6'

const Index = ({ showMenu, setshowMenu }) => {
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <CSSTransition timeout={5300} in classNames='index' appear>
         <div className='index'>
            <div className='background-color'></div>
            <div className='background1'></div>
            <Hamburger showMenu={showMenu} setshowMenu={setshowMenu} />
            <MainHeader />
            <Level2 />
            <Level3 />
            <Level4 />
            <Level5 />
            <Level6 />
         </div>
      </CSSTransition>
   )
}

export default Index

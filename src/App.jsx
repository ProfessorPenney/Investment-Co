import React, { useEffect, useState } from 'react'
import './App.css'
import Level2 from './Components/Index/Level2'
import MainHeader from './Components/Index/MainHeader'

function App() {
   const [level2Transition, setlevel2Transition] = useState(false)

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   function handleScroll() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
         setlevel2Transition(true)
      }
   }

   return (
      <div className='App'>
         <MainHeader />
         {level2Transition && <Level2 />}
      </div>
   )
}

export default App

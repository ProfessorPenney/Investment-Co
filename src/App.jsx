import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Hamburger from './Components/Universal/Hamburger'
import HeroMenu from './Components/Universal/HeroMenu'

import Index from './Components/Index/Index'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
   const [showMenu, setshowMenu] = useState(false)

   useEffect(() => {
      window.onunload = () => {
         window.scrollTo(0, 0)
      }
   }, [])

   return (
      <Router>
         <div className='App'>
            <Hamburger showMenu={showMenu} setshowMenu={setshowMenu} />
            <HeroMenu showMenu={showMenu} />
            <Route exact path='/' component={Index} />
            <Route path='/portfolio' component={Portfolio} />
         </div>
      </Router>
   )
}

export default App
